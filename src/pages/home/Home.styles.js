import styled from "styled-components";

export const DivFatherHome = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 300px;
    min-height: 94vh;
    text-align: center;
    /* background-color: #7b7b7b; */
`
export const TitleHome = styled.h1`
    margin: 60px 0 60px 0;
`
export const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
export const TableHome = styled.table`
    text-align: left;
    font-size: 20px;;
    border-bottom: 1px solid gray;
    border-collapse: collapse;
    
`
export const TdTableHome = styled.td`
   padding: 10px 0;
   padding-left: ${props => props.paddingLeft };
   border-top:1px solid gray;
   
`
export const TrheadTableHome = styled.tr`
  border-left:1px solid #6E85B7;
`
export const TrTableHome = styled.tr`
  border-left:1px solid gray;
  border-right: 1px solid gray;
  :nth-child(even) {
  background-color: #f8f8f8;
  }
`
export const THeadTableHome = styled.thead`
  border: 0;
`

export const ThTableHome = styled.th`
   padding: 20px 0;
   color: white;
   padding-left: ${props => props.paddingLeft };
   /* border-top:1px solid gray; */
   background-color:#6E85B7 ;
`
export const DivImg = styled.img`
   /* border:1px solid gray; */
   border-radius: 34px;
   background-color: #efefef;
`
export const ButtonDelete = styled.button`
    background-color: #FF6961;
    color:white;
    padding: 6px;
    border:0;
    cursor: pointer;
`
export const DivLoading = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`