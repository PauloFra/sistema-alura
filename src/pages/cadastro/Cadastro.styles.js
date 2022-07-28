import styled from "styled-components";

export const DivFather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 93vh;
`
export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const SubTitle = styled.h2`
   margin-bottom: 30px;
`
export const TitleCadastroPage = styled.h1`
   margin: 30px 0;
`
export const DivForm = styled.div`
   text-align: center;
   border: 1px solid gray;
   border-radius: 3px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 600px;
   padding: 45px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   form{
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
   }
   input{
    border: 0;
    outline: 0;
    border-bottom: 1px solid gray;
    font-size: 15px;
    padding: 7px 10px;
   }
   button{
    border: 0;
    color: white;
    background-color: #6E85B7;
    padding: 13px;
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 20px;
    :hover{
        background-color: #2E85B7;
    }
   }
`