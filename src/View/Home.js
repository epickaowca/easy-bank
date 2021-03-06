import React from 'react'
import styled from 'styled-components'
import mockupsImg from '../asset/image-mockups.png'
import Button from '../components/elements/Button'
import mobileIntro from '../asset/bg-intro-mobile.svg'
import desktopIntro from '../asset/bg-intro-desktop.svg'

const HomeWrapper = styled.div`
    background: #FAFAFA;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
    align-content: flex-end;
    width: 100%;
        & > div {
            &:nth-child(1){
                position: relative;
                & > div {
                    width: 100%;
                    position: absolute;
                    right: 0;
                    background-image: url(${props=>props.bgMobile});
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;
                    height: 100%;
                }
                & > img{
                        min-width: 500px;
                        transform: translateY(-200px);
                        z-index: 1;
                        position: relative;
                        max-width: 100%;
                }
            }
        
            &:nth-child(2){
                padding: 0px 20px;
                text-align: center;
                max-width: 390px;
                margin: auto;
                margin-top: -100px;
                & > h1 {
                    color: #2D314D;
                }
                & > p {
                    opacity: .6;
                    margin: 35px 0px;
                }
            }
        }
    

    ${props=>props.theme.media.desktop1}{
        flex-direction: row-reverse;
        align-items: center;
        min-height: 625px;
        & > div{
            width: 50% !important;
            max-width: unset !important;
            &:nth-child(1){
                text-align: right;
                & > div {
                    background-image: url(${props=>props.bgDesktop});
                    width: 700px;
                    transform: translate(150px, -150px);
                }
                & > img{
                    width: 450px !important;
                    max-width: unset;
                    transform: translateY(-50px);
                }
            }
            &:nth-child(2){
                margin: unset;
                text-align: left;
                & > h1{
                    max-width: 300px;
                }
                & > p{
                    max-width: 310px;
                }
            }
        }   
    }
    ${props=>props.theme.media.desktop2}{
        padding: 0px 50px;
        & > div {
            &:nth-child(1){
                max-width: 550px !important;
                & > div {
                    width: 180%;
                    transform: translate(250px, -150px);
                }
                & > img{
                        width: 100% !important;
                        transform: translateY(-50px);
                }
            }
            &:nth-child(2){
                & > h1{
                    max-width: 300px;
                    font-size: 2rem;
                }
                & > p {
                    max-width: 300px;
                    font-size: 1rem;
                }
            }
        }
    }
    ${props=>props.theme.media.desktop3}{
        justify-content: space-between;
        & > div {
            &:nth-child(1){
                width: 550px;
                height: 677px;
            }
            &:nth-child(2){
                & > h1{
                    max-width: 400px;
                    font-size: 3rem;
                }
                & > p {
                    max-width: 420px;
                    font-size: 1.5rem;
                }
            }
        }
    }
    ${props=>props.theme.media.desktop4}{
        padding: 0px 150px;
        & > div {
            &:nth-child(1){
                width: 550px;
                height: 677px;
                & > img{
                    left: 0;
                    position: absolute;
                    width: 700px !important;
                }
            }
        }
    }
`

const Home = ()=>{
    console.log(mobileIntro)
    return(
        <HomeWrapper bgMobile={mobileIntro} bgDesktop={desktopIntro}>
                <div>
                    <div></div>
                    <img alt="mocksUp" src={mockupsImg}></img>
                </div>
                <div>
                    <h1>Next generation digital banking</h1>
                    <p> Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button />
                </div>
        </HomeWrapper>
    )
}

export default Home