import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import PCHeader from './PC/Layout/Header';
import PCRouter from './PC/Route/Router';

import MobileHeader from './MOBILE/Layout/Header';
import MobileRouter from './MOBILE/Route/Router';

import Media from 'react-media';

const GOLBAL_MEDIA_QURIES = {
  pc: "(min-width: 768px)",
  mobile: "(max-width: 767px)"
}

class App extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }
  
  render() {
    return (
        <Media queries={GOLBAL_MEDIA_QURIES}>
          {matches => {
            return(
              <>
              {
                matches.pc &&
                <Layout id="Container">
                  <GlobalStyle/>
                  <PCHeader />
                  <Content>
                    <PCRouter />
                  </Content>
                </Layout>
              }
              {
                matches.mobile &&
                <>
                <MobileLayout>
                  <GlobalStyle/>
                  <MobileHeader />
                  <MobileContent>
                    <MobileRouter />
                  </MobileContent>
                </MobileLayout>
                </>
              }
              </>
            )
          }}
        </Media>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior:smooth;
  }
  
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

const MobileLayout = styled.div`
  margin: 0 0;
  width: 100%;
`

const MobileContent = styled.div`
  margin: 0 0;
  width: 100%;
`
export default App;