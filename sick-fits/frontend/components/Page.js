import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: orange;
  color: blue;
  .weird {
    font-size: ${props => props.smalldawg ? props.smalldawg : '50px'};
    color: red;
  }
`

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton smalldawg='30px'>yo <span className="weird">dawg</span></MyButton>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
