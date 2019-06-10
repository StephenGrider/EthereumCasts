pragma solidity ^0.5.1;

contract Lottery{
  address payable public manager;
  address payable[] public players;
    constructor() public{
    manager = msg.sender;
 }
 modifier playersLength(){
 require(players.length>0,"No players enlisted");
 _;
 }
  function getRandomPlayerIndex() private view returns(uint){
    uint length = players.length;
    return  uint(keccak256(abi.encodePacked(block.difficulty,now,players))) % length;
 }
  function addPlayer() public payable{
    require(msg.value>0.01 ether,"Insuficient wei to participate");
    players.push(msg.sender);
  }
 function  pickWinner() public playersLength returns(string memory){
    require(msg.sender == manager,"Sender not authorized");
    players[getRandomPlayerIndex()].transfer(address(this).balance);
    players.length = 0;
 }
 function getPlayers() public view playersLength returns(address payable[] memory){
   return players;
 }
}