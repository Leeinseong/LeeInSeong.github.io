//Header 파일
import React, {Component} from 'react'
import styled from 'styled-components';

class Header extends Component{
    render() {
        return (
            <Container>
                <Element>
                    <ShortCut>로그인/회원가입</ShortCut>
                    <Search><h1>LEEINSEONG</h1></Search>
                </Element>
            </Container>
        )
    }
}

  
export default Header;

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`

const ShortCut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`

const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 80px;
`

const Search = styled.div`
    order: 3;
    width: 880px;
    background-color: #78ffd6;
    text-align: center;
`