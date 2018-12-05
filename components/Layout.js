import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from './Header';

export default props => {
  return (
    <Container>
      <Header/>
      {props.children}
      <h3>This is Footer</h3>
    </Container>
  );
};
