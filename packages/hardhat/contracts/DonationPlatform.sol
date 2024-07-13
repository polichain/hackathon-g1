// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationPlatform {
    enum Status { Pending, Verified, Donated, WaitingForPickup, InTransit, Delivered }

    struct Request {
        uint256 id;
        string beneficiary;
        string description;
        Status status;
        bool requiresTransport;
        string donor;
        bool delivered;
        string carrier;
        uint256 transitStartTime;
    }

    Request[] public requests;

    mapping(uint256 => uint256) public requestToIndex;

    event RequestRegistered(uint256 id, string beneficiary, string description, bool requiresTransport);
    event RequestVerified(uint256 id);
    event DonationReceived(uint256 id, string donor);
    event DonationInTransit(uint256 id, string carrier, uint256 transitStartTime);
    event RequestDelivered(uint256 id);

    address public admin;

    constructor(address owner) {
        admin = owner;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function registerRequest(string memory _beneficiary, string memory _description, bool _requiresTransport) public onlyAdmin {
        requests.push(Request({
            id: requests.length,
            beneficiary: _beneficiary,
            description: _description,
            status: Status.Pending,
            requiresTransport: _requiresTransport,
            donor: "",
            delivered: false,
            carrier: "",
            transitStartTime: 0
        }));
        emit RequestRegistered(requests.length - 1, _beneficiary, _description, _requiresTransport);
    }

    function verifyRequest(uint256 _id) public onlyAdmin {
        require(requests[_id].status == Status.Pending, "Request must be pending verification");
        requests[_id].status = Status.Verified;
        emit RequestVerified(_id);
    }

    function donate(uint256 _id, string memory _donor) public onlyAdmin {
        require(requests[_id].status == Status.Verified, "Request must be verified to donate");
        requests[_id].donor = _donor;
        requests[_id].status = Status.Donated;
        emit DonationReceived(_id, _donor);
        
        if (!requests[_id].requiresTransport) {
            requests[_id].status = Status.WaitingForPickup;
        }
    }

    function startTransport(uint256 _id, string memory _carrier) public onlyAdmin {
        require(requests[_id].status == Status.Donated, "Donation must be in Donated status to start transport");

        requests[_id].carrier = _carrier;
        requests[_id].transitStartTime = block.timestamp;
        requests[_id].status = Status.InTransit;

        emit DonationInTransit(_id, _carrier, block.timestamp);
    }

    function confirmDelivery(uint256 _id) public onlyAdmin {
        require(requests[_id].status == Status.InTransit || requests[_id].status == Status.WaitingForPickup, 
                "Donation must be in transit or waiting for pickup to confirm delivery");

        requests[_id].delivered = true;
        requests[_id].status = Status.Delivered;
        emit RequestDelivered(_id);
    }

    function getRequest(uint256 _id) public view returns (string memory) {
        Request memory request = requests[_id];
        
        string memory result = string(
            abi.encodePacked(
                uint2str(request.id), ",",
                request.beneficiary, ",",
                request.description, ",",
                uint2str(uint(request.status)), ",",
                request.requiresTransport ? "true" : "false", ",",
                request.donor, ",",
                request.delivered ? "true" : "false", ",",
                request.carrier, ",",
                uint2str(request.transitStartTime)
            )
        );

        return result;
    }

    function getRequestCount() public view returns (uint256) {
        return requests.length;
    }

    function uint2str(uint256 _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k-1;
            uint256 temp = _i % 10;
            _i /= 10;
            bstr[k] = bytes1(uint8(48 + temp));
        }
        return string(bstr);
    }

    function getDonationStatus(uint256 _id) public view returns (string memory) {
        Status status = requests[_id].status;
        
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
