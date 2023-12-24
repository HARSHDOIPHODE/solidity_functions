// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.3;

contract func {
    uint256 public course;

    function inputCource(uint256 inputCourceVal) public {
        course = inputCourceVal;
    }
    
    function CourceValue() external view returns (uint256) {
        return course;
    }
}