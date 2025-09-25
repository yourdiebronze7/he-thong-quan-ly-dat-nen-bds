// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleRealEstate {
    struct Property {
        uint id;
        string name;
        address owner;
    }

    mapping(uint => Property) public properties;
    uint public propertyCount;

    function createProperty(string memory _name) public {
        propertyCount++;
        properties[propertyCount] = Property(propertyCount, _name, msg.sender);
    }

    function transferProperty(uint _id, address _newOwner) public {
        require(msg.sender == properties[_id].owner, "Only owner can transfer property.");
        properties[_id].owner = _newOwner;
    }
}