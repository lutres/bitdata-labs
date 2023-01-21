// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.1;

contract DemoPro { 


    struct Project {
        
    uint256 priceOfProject;
    uint256 profitOfProject;
    uint256 salesOfProject;

    }


    struct investor {
        uint256 Share;
        address wallet;
        uint256 profit;
    }

    address owner;

    modifier OnlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
    }
    mapping(uint256 => Project) ProjectsPoint;

    function  SetProject(uint256 _id, uint256 _price ) public OnlyOwner returns (bool) {

        ProjectsPoint[_id].priceOfProject = _price;

    }





}