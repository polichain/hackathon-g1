// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationPlatform {
    enum Status { Pending, Verified, Donated, WaitingForPickup, InTransit, Delivered }

    struct Need {
        uint256 id;
        string beneficiary;
        string description;
        Status status;
        bool requiresTransport;
    }

    struct Donation {
        uint256 needId;
        string donor;
        bool delivered;
        string carrier;
        uint256 transitStartTime;
    }

    Need[] public needs;
    Donation[] public donations;

    mapping(uint256 => uint256) public needToDonation;

    event NeedRegistered(uint256 id, string beneficiary, string description, bool requiresTransport);
    event NeedVerified(uint256 id);
    event DonationReceived(uint256 needId, string donor);
    event DonationInTransit(uint256 needId, string carrier, uint256 transitStartTime);
    event NeedDelivered(uint256 needId, uint256 donationId);
    event WaitingForPickup(uint256 needId);

    address public admin;

    constructor(address owner) {
		admin = owner;
	}

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function registerNeed(string memory _beneficiary, string memory _description, bool _requiresTransport) public onlyAdmin {
        needs.push(Need({
            id: needs.length,
            beneficiary: _beneficiary,
            description: _description,
            status: Status.Pending,
            requiresTransport: _requiresTransport
        }));
        emit NeedRegistered(needs.length - 1, _beneficiary, _description, _requiresTransport);
    }

    function verifyNeed(uint256 _id) public onlyAdmin {
        require(needs[_id].status == Status.Pending, "Need must be pending verification");
        needs[_id].status = Status.Verified;
        emit NeedVerified(_id);
    }

    function donate(uint256 _needId, string memory _donor) public onlyAdmin {
        require(needs[_needId].status == Status.Verified, "Need must be verified to donate");
        donations.push(Donation({
            needId: _needId,
            donor: _donor,
            delivered: false,
            carrier: "",
            transitStartTime: 0
        }));
        needToDonation[_needId] = donations.length - 1;
        needs[_needId].status = Status.Donated;
        emit DonationReceived(_needId, _donor);
        
        // Se a necessidade não requer transporte, muda para WaitingForPickup
        if (!needs[_needId].requiresTransport) {
            needs[_needId].status = Status.WaitingForPickup;
            emit WaitingForPickup(_needId);
        }
    }

    function startTransport(uint256 _needId, string memory _carrier) public onlyAdmin {
        uint256 donationId = needToDonation[_needId];
        require(needs[_needId].status == Status.Donated, "Donation must be in Donated status to start transport");

        donations[donationId].carrier = _carrier;
        donations[donationId].transitStartTime = block.timestamp;
        needs[_needId].status = Status.InTransit;

        emit DonationInTransit(_needId, _carrier, block.timestamp);
    }

    function confirmDelivery(uint256 _needId) public onlyAdmin {
        uint256 donationId = needToDonation[_needId];
        require(needs[_needId].status == Status.InTransit || needs[_needId].status == Status.WaitingForPickup, 
                "Donation must be in transit or waiting for pickup to confirm delivery");

        donations[donationId].delivered = true;
        needs[_needId].status = Status.Delivered;
        emit NeedDelivered(_needId, donationId);
    }

    function getNeed(uint256 _id) public view returns (Need memory) {
        return needs[_id];
    }

    function getDonation(uint256 _id) public view returns (Donation memory) {
        return donations[_id];
    }

    function getDonationStatus(uint256 _id) public view returns (string memory) {
        uint256 needId = donations[_id].needId;
        Status status = needs[needId].status;
        
        if (status == Status.Pending) {
            return "Pending";
        } else if (status == Status.Verified) {
            return "Verified";
        } else if (status == Status.Donated) {
            return "Donated";
        } else if (status == Status.WaitingForPickup) {
            return "WaitingForPickup";
        } else if (status == Status.InTransit) {
            return "InTransit";
        } else if (status == Status.Delivered) {
            return "Delivered";
        } else {
            return "Unknown";
        }
    }
}
