// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
  address public minter;

  event MinterChanged(address indexed from, address to);

  constructor() public payable ERC20("Decentralized Bank Currency", "DBC") {
    minter = msg.sender; //initial
  }

  function passMinterRole(address dBank) public returns (bool) {
  	require(msg.sender==minter, 'Error, only owner can change pass minter role');
  	minter = Bank;

    emit MinterChanged(msg.sender, Bank);
    return true;
  }

  function mint(address account, uint256 amount) public {
		require(msg.sender==minter, 'Error, msg.sender does not have minter role'); //Bank
		_mint(account, amount);
	}
}
