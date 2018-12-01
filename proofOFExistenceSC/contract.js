import web3 from './web3';
import poeContract from './build/contracts/ProofOfExistence.json';

const address = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
const instance = new web3.eth.Contract(JSON.parse(poeContract.abi), address);

export default instance;
