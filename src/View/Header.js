import React, { useState, useEffect } from 'react';
import Nav from '../components/structures/Nav'
import styled from 'styled-components'
import logo from '../asset/logo.svg'
import { useWindowSize } from '../helpers/hooks'
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
        }
    }
`

const Header = ()=>{
    const [navEject, setNavEject] = useState(false)
    const size = useWindowSize();

    return(
        <HeaderElem>
            <div>
                <div> <img alt="logo" src={logo} /> </div>
                <Nav setNavEject={setNavEject} navEject={navEject} />
                {size.width >= 800 ? <Button /> : <button onClick={()=>setNavEject(prev=>!prev)}> <img alt="navButton" src={require(`../asset/${navEject ? 'icon-close' : 'icon-hamburger'}.svg`)} /> </button> }
            </div>
        </HeaderElem>
    )
}

export default(Header);