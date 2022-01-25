import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import styled from 'styled-components';

import Main from './pages/Main/Main';

import Header from './components/Header';
import HeaderMobile from './components/HeaderMobile';

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })

  return (
    <Layout id="Container">
      {!isMobile ? <Header/> : <HeaderMobile/>}
      <Content>
        <Router>
          <Switch>
              <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </Content>
    </Layout>
  );
}

const Layout = styled.div`
  margin: 0 0;
  width: 100%;
`
const Content = styled.div`
margin: 0 auto;
width : 100%;
`
const MobileLayout = styled.div`
  width: 100%;
`
const MobileContent = styled.div`
  margin: 0 0;
  width: 100%;
`
export default App;