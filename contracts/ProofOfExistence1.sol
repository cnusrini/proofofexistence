pragma solidity ^0.4.18;

contract ProofOfExistence1 {
  bytes32 public proof;

  function notarize(string document) public{
    proof = proofFor(document);
  }

  function proofFor(string document) public pure returns (bytes32) {
    return sha256(document);

  }


  function ProofOfExistence1() public{
    // constructor
  }
}
