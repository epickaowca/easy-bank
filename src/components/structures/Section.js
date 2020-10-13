import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0;
    background: ${props=>props.background};
    & > div{
        & > div{
            margin: 30px auto;
            padding: 0 25px;
            text-align: center;
            max-width: 400px;
            &:nth-child(1){
                & > h1{
                    color: #2D314D;
                    margin-bottom: 25px;
                }
                & p {
                    opacity: .6;
                }
            }
            &:nth-child(2){
                display: flex;
                flex-direction: column;
                align-items: center;
                & > div{
                    margin: 70px 0;
                }
            }
        }
    }

    ${props=>props.theme.media.desktop1}{
        & > div {
            padding: 0 50px;
            margin: auto;
            max-width: 1000px;
            & > div{
                text-align: left;
                &:nth-child(1){
                    margin: 0;
                    margin-bottom: 50px;
                    padding: 0
                }
                &:nth-child(2){
                    flex-direction: row;
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 100%;
                    padding: 0;
                    justify-content: space-between;
                    & > div{
                        max-width: 340px;
                        margin: 25px 0;
                        padding: 0;
                        width: 40%;
                    }
                }
            }
        }
    }
  
    ${props=>props.theme.media.desktop3}{
        & > div {
            max-width: unset;
            & > div{
                &:nth-child(1){
                    max-width: 650px;
                    margin-top: 50px;
                    margin-bottom: 100px;
                    & > h1 {
                        font-size: 2.5rem;
                    }
                    & > p {
                        font-size: 1.1rem;
                    }
                }
                &:nth-child(2){
                    display: flex;
                    max-width: unset;
                    & > div{
                        width: 25%;
                        max-width: 250px;
                        margin: 0 25px;
                        &:nth-child(1){
                            margin-left: 0;
                        }
                        &:nth-child(4){
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }

    ${props=>props.theme.media.desktop4}{
        & > div{
            width: 90%;
            max-width: 1500px;
        }
    }

    ${props=>props.theme.media.desktop5}{
        & > div {
            & > div {
                &:nth-child(2){
                    & > div{
                        max-width: 300px;
                    }
                }
            }
        }
    }
`



const About = ({title, blocks, content, background})=>{
    return(
        <AboutWrapper background={background}>
            <div>
                <div>
                    <h1>{title}</h1>
                    {content && <p>{content}</p>}
                </div>
                <div>
                    {blocks}
                </div>
            </div>
        </AboutWrapper>
    )
}

export default About