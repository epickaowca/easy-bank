import React, { useState } from 'react';
import Nav from '../components/structures/Nav'
import styled from 'styled-components'
import logo from '../asset/logo.svg'
import Button from '../components/elements/Button'

const HeaderElem = styled.header`
    position: relative;
    z-index: 3;
    padding: 0px 25px;
    height: 70px;
    width: 100%;
    background: white;
    
    & > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        & > button{
            cursor: pointer;
            border: none;
            background: inherit;
            outline: none;
            &:nth-child(3){
                display: none;
            }
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > div{
            & > button{
                &:nth-child(3){
                    display: block;
                }
                &:nth-child(4){
                    display: none;
                }
            }
        }
    }
`

const Header = ()=>{
    const [navEject, setNavEject] = useState(false)

    return(
        <HeaderElem>
            <div>
                <div> <img alt="logo" src={logo} /> </div>
                <Nav setNavEject={setNavEject} navEject={navEject} />
                <Button />
                <button onClick={()=>setNavEject(prev=>!prev)}> <img alt="navButton" src={require(`../asset/${navEject ? 'icon-close' : 'icon-hamburger'}.svg`)} /></button>
            </div>
        </HeaderElem>
    )
}

export default(Header);