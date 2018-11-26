pragma solidity ^0.4.18;

contract ProofOfExistence2 {
  bytes32[] private proofs;

  function storeProof(bytes32 proof) public{
    proofs.push(proof);
  }
  function notarize(string document) public {
    bytes32 proof = proofFor(document);
    storeProof(proof);
  }
  function proofFor(string document) public pure returns(bytes32 proof){
    return sha256(document);
  }
  function ProofOfExistence2() public {
    // constructor
  }
}
