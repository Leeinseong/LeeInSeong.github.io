import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import styled from 'styled-components';

import Main from './pages/Main/Main';
import Blog from './pages/Blog/Blog';

const App = () => {
  return (
    <Layout id="Container">
      <Content>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/Blog" component={Blog} />
            <Redirect to="/"/>
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

export default App;