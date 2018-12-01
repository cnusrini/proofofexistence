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

  function checkDocument(string document) constant returns(bool){
    bytes32 proof = proofFor(document);
    return hasProof(proof);
  }
  function hasProof(bytes32 proof) constant returns(bool){
    for (uint256 i = 0; i < proofs.length; i++){
      if(proofs[i] == proof){
        return true;
      }

    }
    return false;
  }
  function ProofOfExistence2() public {
    // constructor
  }
}
