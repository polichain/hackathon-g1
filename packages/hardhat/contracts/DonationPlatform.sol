// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./CBCoin.sol";

contract DonationPlatform {
    struct Demand {
        string description;
        address payable requester;
        uint256 amountRequested;
        uint256 amountReceived;
    }

    CBCoin public cbCoin;
    IERC20 public stablecoin;
    Demand[] public demands;

    event DemandCreated(uint256 demandId, string description, address requester, uint256 amountRequested);
    event DonationReceived(uint256 demandId, address donor, uint256 amount, uint256 tokensIssued);

    constructor(address _cbCoin, address _stablecoin) {
        cbCoin = CBCoin(_cbCoin);
        stablecoin = IERC20(_stablecoin);
    }

    function createDemand(string calldata description, uint256 amountRequested) external {
        demands.push(Demand({
            description: description,
            requester: payable(msg.sender),
            amountRequested: amountRequested,
            amountReceived: 0
        }));

        emit DemandCreated(demands.length - 1, description, msg.sender, amountRequested);
    }

    function donate(uint256 demandId, uint256 amount) external {
        require(demandId < demands.length, "Demand does not exist");
        Demand storage demand = demands[demandId];
        require(demand.amountReceived < demand.amountRequested, "Demand already fulfilled");

        stablecoin.transferFrom(msg.sender, demand.requester, amount);
        demand.amountReceived += amount;

        uint256 tokensToMint = amount * 100;
        cbCoin.mint(msg.sender, tokensToMint);

        emit DonationReceived(demandId, msg.sender, amount, tokensToMint);
    }

    function getDemands() external view returns (Demand[] memory) {
        return demands;
    }
}
