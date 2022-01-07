import { useEffect, useState } from 'react';
import styled from 'styled-components';

import PCHeader from './PC/Layout/Header';
import PCRouter from './PC/Route/Router';

import MobileHeader from './MOBILE/Layout/Header';
import MobileRouter from './MOBILE/Route/Router';

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => { // cleanup 
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  if(screenWidth >= 780){
    return (
      <Layout id="Container">
        <PCHeader/>
        <Content>
          <PCRouter/>
        </Content>
      </Layout>
    );
  }else{
    return (
      <>
      <MobileLayout>
      </MobileLayout>
      </>
    );
  }
}


const Layout = styled.div`
  margin: 0 0;
  width: 100%;
  display: flex;
`
const Content = styled.div`
margin: 0 auto;
width : 100%;
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