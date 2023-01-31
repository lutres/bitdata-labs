// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;


// Contract Only for Testnet //
// This Contract are not Production Implementation //
// BitDataLabs // 

contract DemoPro { 

    struct Project {
    uint256 priceOfProject;
    uint256 salesOfProject;
    uint256 tokenstoSell;
    mapping(address => investor) infoInvestor;
    }

    struct investor {
        Tokens tokens;
        address payable wallet;
    }
    struct Tokens {
        uint256 balance;
        uint256 profit;
        uint256 claimed;
        uint256 invested; //Polygon's Invested 
    }

   
    address payable owner;

    modifier OnlyOwner {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = payable(msg.sender); 
    }

    mapping(uint256 => Project) ProjectsPoint;

    function  SetProject(uint256 _id,
    uint256 _price,
    uint256 _tokensToSell) 
    public OnlyOwner returns (bool) {

        ProjectsPoint[_id].priceOfProject = _price;
        ProjectsPoint[_id].tokenstoSell = _tokensToSell;
        return(true);

    }


    //Off Chain Solution for Prices And Values in MATIC
    function BuyProject(uint256 _id) public payable returns (bool) {
        require( msg.value * 10**18 > ProjectsPoint[_id].priceOfProject && ProjectsPoint[_id].tokenstoSell > 0, "Error 1");
        ProjectsPoint[_id].infoInvestor[msg.sender].tokens.invested += msg.value;
        ProjectsPoint[_id].infoInvestor[msg.sender].tokens.balance += msg.value * 10**18  /ProjectsPoint[_id].priceOfProject;
        ProjectsPoint[_id].tokenstoSell -= msg.value* 10**18 /ProjectsPoint[_id].priceOfProject ;
        ProjectsPoint[_id].infoInvestor[msg.sender].wallet = payable(msg.sender);
        ProjectsPoint[_id].salesOfProject += msg.value;
        return true;
    }

    function getProject(uint256 _id) view public returns(uint256,uint256,uint256) {
        return(ProjectsPoint[_id].tokenstoSell,
        ProjectsPoint[_id].priceOfProject,
        ProjectsPoint[_id].salesOfProject);
    }

    function infoInvestor(uint256 _id,address _user) view public returns(address,uint256,uint256,uint256,uint256) {
        return(ProjectsPoint[_id].infoInvestor[_user].wallet,
        ProjectsPoint[_id].infoInvestor[_user].tokens.invested,
        ProjectsPoint[_id].infoInvestor[_user].tokens.balance,
        ProjectsPoint[_id].infoInvestor[_user].tokens.profit,
        ProjectsPoint[_id].infoInvestor[_user].tokens.claimed);
    }



        //Non Reentrant

        function Withdraw(uint256 _id) public payable returns (bool) {
        require(ProjectsPoint[_id].salesOfProject > 0, "Error not funds in contract");
        owner.transfer(ProjectsPoint[_id].salesOfProject);
        return(true);
}

}