pragma solidity ^0.5.1;

contract Lottery{
  address payable public manager;
  address payable[] public players;
    constructor() public{
    manager = msg.sender;
 }
  function getRandomPlayerIndex() private view returns(uint){
    uint length = players.length;
    return  uint(keccak256(abi.encodePacked(block.difficulty,now,players))) % length;
 }
  function addPlayer() public payable{
    require(msg.value>0.01 ether,"Insuficient wei to participate");
    players.push(msg.sender);
  }
 function  pickWinner() public returns(string memory){
    require(msg.sender == manager,"Sender not authorized");
    require(players.length>0,"No players enlisted");
    players[getRandomPlayerIndex()].transfer(address(this).balance);
    players.length = 0;
 }
}