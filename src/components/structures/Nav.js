import React from 'react'
import Button from '../elements/Button'
import styled from 'styled-components'
import fb from '../../asset/icon-facebook.svg'
import twitter from '../../asset/icon-twitter.svg'
import { useSelector } from 'react-redux'

const NavElem = styled.nav`
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: ${p=>p.theme.darkBlueColor};
    width: 100vw;
    height: 100vh;
    display: ${p=>p.eject ? 'flex' : 'none'};
    & > p{
        width: 80%;
        color: white;
        padding: 25px 0;
        &:nth-child(1){
            border-top: 1px solid #4C526C;
        }
        &:nth-child(2){
            border-top: 1px solid #4C526C;
            border-bottom: 1px solid #4C526C;
        }
        &:nth-child(3){
            border-bottom: 1px solid #4C526C;
            margin-bottom: 20px;
        }
    }
    & > button{
        width: 80%;
    }
    & > div {
        position: absolute;
        bottom: 100px;
        & > img{
            margin: 0 20px;
        }
    }

    ${p=>p.theme.media.desktop1}{
        display: flex;
        position: relative !important;
        width: unset;
        height: unset;
        flex-direction: row;
        transform: unset !important;
        left: unset !important;
        top: unset !important;
        padding: 0 !important;
        background: white;
        & > div {
            display: none;
        }
        & > p {
            color: black;
            padding: 0;
            margin: 0 30px !important;
            border: none !important;
        }
    }
`

export default function Nav() {
    const state = useSelector(state=>state)
    return (
        <NavElem eject={state.navEject}>
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact</p>
            <Button color='red'>Login</Button>
            <div>
                <img src={fb} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
            </div>
        </NavElem>
    )
}
