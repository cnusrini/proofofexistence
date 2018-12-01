import React , { Component } from 'react';
import web3 from '../proofOFExistenceSC/web3'
import contract from '../proofOFExistenceSC/contract';
import { Button } from 'semantic-ui-react';

class chkuserID extends Component{

  componentDidMount(){
    const web3version = web3.version;
    const accounts = web3.eth.getAccounts();
    console.log(accounts[1]);
    console.log(web3version);
  }


  getDOC = async() => {
    const accounts = web3.eth.getAccounts();
    //const chkDOC = await contract.methods.checkDocument().call();
    console.log('in getdoc')

  }

render(){

  return(
    <div>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
      <Button primary>primary</Button>
      <Button secondary>secondary</Button>
    </div>

  );
}
}

export default chkuserID;
