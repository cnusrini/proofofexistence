import React , { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';

import web3 from '../proofOFExistenceSC/web3'
import contract from '../proofOFExistenceSC/contract';
import Layout from '../components/Layout';


class chkuserID extends Component{
  static async getInitialProps(){
    //async componentDidMount (){
    const accounts = await web3.eth.getAccounts();

    return {accounts};
  }

  renderAddresses(){
    const items = this.props.accounts.map( address =>{
      return {
        header: address,
        description:<a>View Address</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

render(){

  return(
    <Layout>
      <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
        <h3>List of all Ganache accounts</h3>
        <div>{this.renderAddresses()}</div>
        <Button primary content="myBtn" icon="add"/>
      </div>
    </Layout>

  );
}
}

export default chkuserID;
