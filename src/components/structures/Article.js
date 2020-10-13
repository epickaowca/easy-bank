import React from 'react'
import styled from 'styled-components'

const ArticleWrapper = styled.div`
    width: 250px;
    margin-left: 150px;
    & > div{
        position: relative;
        &:nth-child(1){
            background-image: url(${props=>props.img});
            width: 100%;
            height: 200px;
        }
        &:nth-child(2){
            cursor: pointer;
            background: white;
            width: 100%;
            padding: 20px;
            &:hover{
                opacity: .7
            }
            & > span{
                opacity: .7;
            }
            & > p{
                opacity: .7;
            }
            & > h3{
                margin: 15px 0;
                font-weight: normal;
            }
        }
    }
`

const Article = (props)=>{
    console.log(props);
    return(
        <ArticleWrapper img={require(`../../asset/image-${props.item.img}.jpg`)}>
            <div></div>
            <div>
                <span>{props.item.author}</span>
                <h3>{props.item.title}</h3>
                <p>{props.item.content}</p>
            </div>
        </ArticleWrapper>
    )
}



export default Article