pragma solidity ^0.5.0;

contract ProofOfExistence {

  mapping(bytes32 => bool) public proofs;

  function storeProof(bytes32 proof) public{
    proofs[proof] = true;
  }
  function notarize(string memory document) public {
    bytes32 proof = proofFor(document);
    storeProof(proof);
  }
  function proofFor(string memory document) public pure returns(bytes32 proof){
    //return sha256(document);
    return keccak256(abi.encode(document));
    //abi.encodePacked(...) to obtain the pre-0.5.0 behaviour or abi.encode(...) to use ABI encoding.

  }

  function checkDocument(string memory document) public view returns(bool){
    bytes32 proof = proofFor(document);
    return hasProof(proof);
  }
  function hasProof(bytes32 proof) public view returns(bool){

    return proofs[proof];
  }

}
