import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from "gsap";


const NavElem = styled.nav`
    z-index: -1;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    width: 90%;
    border-radius: 5px;
    top: 100px;
    opacity: 0;
    & > ul{
        & > li{
            list-style: none;
            margin: 20px 0;
            & > a{
                padding: 15px;
                transition: all ease .1s;
                color: black;
                text-decoration: none;
                &:hover {
                    opacity: 1 !important;
                } 
                &:hover ~ span{
                    opacity: 1;
                }
            }
            & > span{
                transition: all ease .1s;
                opacity: 0;
                background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%);
                width: 60px;
                height: 5px;
                display: block;
                margin: auto;
            }
        }
    }

    ${props=>props.theme.media.desktop1}{
        opacity: 1 !important;
        top: 0px !important;
        position: relative;
        width: unset;
        z-index: unset;
        left: unset;
        transform: unset !important;
        & > ul{
            display: flex;
        }
    }
`



const navTab = [ 'Home', 'About', 'Contact', 'Blog', 'Careers' ]


const Nav = ({navEject, setNavEject})=>{
    const link = useRef();
    const nav = useRef();

    
    useEffect(()=>{

        link.current.addEventListener('mouseover', (e)=>{
            if(e.target.nodeName==="A"){
                Array.from(link.current.children).forEach(item=>{
                   item.children[0].style.opacity = '0.4';
                })
            }
        })
      
        link.current.addEventListener('mouseout', (e)=>{
            if(e.target.nodeName==="A"){
                Array.from(link.current.children).forEach(item=>{
                   item.children[0].style.opacity = '1';
                })
            }
        })

    }, [])

    useEffect(()=>{
        let tlNav = gsap.timeline();    
        if(navEject){
            tlNav.to(nav.current, {opacity: 1, duration: .5})
        }else{
            tlNav.to(nav.current, {opacity: 0, duration: .8})
        }
    }, [navEject])
    
    return(
        <NavElem ref={nav} navEject={navEject}>
            <ul ref={link}>
                {navTab.map(item=><li key={item}><a onClick={()=>setNavEject(prev=>!prev)} href='#' rel="nofollow">{item}</a><span></span></li>)}
            </ul>
        </NavElem>
    )
}

export default Nav;