//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

contract FundMe {
    uint private immutable targetAmtWei;
    address private immutable rootAddr;

    constructor() {
        rootAddr = msg.sender;
        targetAmtWei = 2 * 10 ** 16; //0.02 eth
    }

    function fund() public payable {
        //make sure each payment is above a dollar
    }

    function withdraw() public {
        //proceed if bal >= target

        if (address(this).balance >= targetAmtWei) {
            (bool sent, ) = payable(rootAddr).call{
                value: address(this).balance
            }("");

            if (!sent) revert("failed to widthraw funds!");
        } else {
            revert("balance did not reach target");
        }
    }

    function getRaisedAmount() public view returns (uint) {
        return address(this).balance;
    }

    receive() external payable {
        fund();
    }

    fallback() external payable {
        fund();
    }
    //fund
    //withdraw
}
