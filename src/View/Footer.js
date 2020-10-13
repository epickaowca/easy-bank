import React from 'react'
import styled from 'styled-components'
import Button from '../components/elements/Button'
import {ReactComponent as Logo} from '../asset/logo.svg'

const FooterElem = styled.footer`
    background: #2D314D;
    width: 100%;
    min-height: 200px;
    &  p {
        color: #F3F4F6;
    }
    & > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div{
            text-align: center;
            &:nth-child(1){
                & > div{
                    & p{
                        margin: 15px 0;
                        cursor: pointer;
                        &:hover{
                            opacity:.5;
                        }
                    }
                    &:nth-child(1){
                        margin-top: 30px;
                        & > svg {
                            & > g {
                                & > #textSVG{
                                    fill: white !important;
                                }
                            }
                        }
                        & > div{
                            margin: 30px 0;
                            & > img{
                                margin: 0 10px;
                                cursor: pointer;
                                &:hover{
                                    opacity:.5;
                                }
                            }
                        }
                    }
                    &:nth-child(3){
                        margin-bottom: 30px;
                    }
                    
                }
            }
            &:nth-child(2){
                & > button{
                    margin-bottom: 30px;
                }
                & > p {
                    margin-bottom: 30px;
                    opacity: .8
                }
            }
        }
    }


    ${p=>p.theme.media.desktop1}{
        & > div{
            height: 200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
            padding: 0 15px;
            max-width: 850px;
            margin: auto;
            & > div{
                &:nth-child(1){
                    display: flex;
                    & > div{
                        margin: unset !important;
                        &:nth-child(1){
                            padding: 15px 0;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            & > svg {
                                margin-left: 10px;
                            }
                            & > div{
                                margin: unset;
                            }
                        }
                        &:nth-child(2){
                            margin: 0 50px !important;
                        }
                    }
                }
                &:nth-child(2){
                    text-align: right;
                }
            }
        }
    }
    
    ${p=>p.theme.media.desktop2}{
        & > div{
            padding: 0 30px;
            max-width: 1250px;
            }
        }
    }

`

const socials = [ 'facebook', 'youtube', 'twitter', 'pinterest', 'instagram']

const social = socials.map(item=><img key={item} alt={item} src={require(`../asset/icon-${item}.svg`)} />)
export default function Footer() {
    return (
        <FooterElem>
            <div>
                <div>
                    <div>
                        <Logo />
                        <div>
                            {social}
                        </div>
                    </div>
                    <div>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div>
                    <Button />
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </FooterElem>
    )
}
