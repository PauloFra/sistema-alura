import styled from "styled-components";
import { Theme } from "../../Theme";

export const DivFather = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.colors.primary};
`
export const DivCenter = styled.div`
   border-radius: 3px;
   background-color: white;
   width: 450px;
   /* height: 500px; */
   padding: 20px;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
`
export const DivDisplayFlex = styled.div`
     display:flex;
    flex-direction: column;
`
export const FormLogin = styled.form`
   display: grid;
   grid-template-columns: auto;
   gap: 30px;
   width: 75%;
`

export const TitleLoginPage = styled.h2`
    margin-bottom: 20px;
    color: white;
`
export const SubTitle = styled.h3`
   font-weight: normal;
   margin: 30px 0;
`
export const LoginInput = styled.input`
    border: 0;
    outline: 0;
    border-bottom: 1px solid gray;
    font-size: 15px;
    padding: 7px 10px;
`
export const ButtonLogin = styled.button`
    border: 0;
    color: white;
    background-color: pink;
    padding: 13px;
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 30px;
    :hover{
        background-color: #f78498;
    }
`
export const DivForCheckbox = styled.div`
    align-items: center;
    display: flex;
    gap: 10px;
`