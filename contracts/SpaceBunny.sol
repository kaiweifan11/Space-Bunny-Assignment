// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Token.sol";

contract SpaceBunny is Token{
    uint validStartDate = 1673049600;
    uint validEndDate = 1673654400;
    mapping(address => bool) private mintedForWallet;
    uint8 maxMints = 5;

    function setValidStartDate(uint256 _validStartdate) public {
        validStartDate = _validStartdate;
    }

    function getValidStartDate() public view returns (uint _validStartDate) {
        return validStartDate;
    }

    function setValidEndDate(uint256 _validEndDate) public {
        validEndDate = _validEndDate;
    }

    function getValidEndDate() public view returns (uint _validEndDate) {
        return validEndDate;
    }

    function mint(address to, string memory uri) public {
        uint timestampNow = block.timestamp;
        require(timestampNow >= validStartDate, "Sale has not started" );
        require(timestampNow <= validEndDate, "Sale is over" );
        require(!mintedForWallet[to], "Can only mint once per wallet");
        require(getTokenIdCounter() <= maxMints, "Can only mint 5 times");
        safeMint(to, uri);
        mintedForWallet[to] = true;
    }
}

