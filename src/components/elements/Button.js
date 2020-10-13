import styled from 'styled-components';

const Button = styled.button`
border: none;
outline: none;
width: 150px;
height: 40px;
background: linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%) !important;
border-radius: 25px;
cursor: pointer;
&:before {
    color: white;
    content: "Request Invite";
}
`

export default Button