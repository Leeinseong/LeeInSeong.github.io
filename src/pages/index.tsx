import React from 'react';
import styled from 'styled-components';

import Main from './Main/Main';
// import Blog from './Blog/Blog';

const Layout = styled.div`
  margin: 0 0;
  width: 100%;
`
const Content = styled.div`
margin: 0 auto;
width : 100%;
`

const Home = () => {
    return (
        <Layout id="Container">
          <Content>
              <Main/>
            {/* <Router>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/Blog" component={Blog} />
                <Redirect to="/"/>
              </Switch>
            </Router> */}
          </Content>
        </Layout>
    )
}

export default Home;