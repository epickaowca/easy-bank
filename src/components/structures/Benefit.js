import React from 'react'
import styled from 'styled-components'

const BeneContainer = styled.div`
    & > h3{
        margin: 20px 0;
    }
    & > p {
        opacity: .6;
    }
`

const Benefit = (props)=>{
    const { img, title, content } = props.item;
    return(
        <BeneContainer>
            <img alt="onlineIco" src={require(`../../asset/icon-${img}.svg`)} />
            <h3>{title}</h3>
            <p>{content}</p>
        </BeneContainer>
    )
}


export default Benefit