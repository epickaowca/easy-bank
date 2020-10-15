import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {ReactComponent as LogoBookMark} from '../asset/logo-bookmark.svg'
import Nav from '../components/structures/Nav'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../redux/actions'

const HeaderElem = styled.header`
    & > div{
        max-width: 1440px;
        margin: auto;
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        padding-top: 25px;
        & > div{
            z-index: 2;
            & > svg{
                & > g{
                    & > path{
                        fill: ${p=>p.eject ? 'white' : 'black' };
                    }
                }
            }
        }
        & > nav {
            padding-top: 100px;
            left: 50%;
            transform: translateX(-50%);
            top: 0px;
            position: absolute;
        }
    }
    ${p=>p.theme.media.desktop1}{
        & > div{
        padding-top: 25px;
            & > div{
                &:nth-child(2){
                    display: none;
                }
            }
        }
    }
`
export default function Header() {
    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    return (
        <HeaderElem eject={state.navEject}>
            <div>
                <div>
                    <LogoBookMark />
                </div>
                <div>
                    <img onClick={()=>dispatch(toggleNav())} src={require(`../asset/icon-${state.navEject ? 'close' : 'hamburger' }.svg`)} alt="navButton"/>
                </div>
                <Nav />
            </div>
        </HeaderElem>
    )
}
