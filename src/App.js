import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Layout/Header';
import Router from './Route/Router';


class App extends Component {
  render() {
    return (
      <Layout>
        <GlobalStyle/>
        <Header />
        <Content>
          <Router />
        </Content>
      </Layout>
    );
  }
}

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

const Layout = styled.div`
  margin: 0 0;
  width: 100%;
  display: flex;
`
const Content = styled.div`
margin: 0 auto;
width : 100%
`

export default App;