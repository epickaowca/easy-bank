import styled from 'styled-components'

const Button = styled.button`
    display: block;
    position: relative;
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 15px 35px;
    font-weight: 500;
    background: ${p=>p.color === 'red' ? p.theme.redColor : p.color === 'blue' ? p.theme.blueColor : '#F5F5F5'};
    color: ${p=> (p.color === 'red' || p.color === 'blue') ? 'white' : 'black'};
    box-shadow: 2px 5px 7px ${p=>p.color === 'red' ? 'rgba(145, 148, 161, .2)' : p.color === 'rgba(83, 104, 223, .2)' ? 'blue' : 'rgba(145, 148, 161, .2)'};
    cursor: pointer;
    &:hover{
        color: ${p=>p.color === 'red' ? p.theme.redColor : p.color === 'blue' ? p.theme.blueColor : p.theme.grayColor};
        background: white;
        border: 2px solid ${p=>p.color === 'red' ? p.theme.redColor : p.color === 'blue' ? p.theme.blueColor : p.theme.grayColor};
        padding: 13px 33px;
    }
`

export default Button