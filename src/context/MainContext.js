import { createContext , useState } from "react";
import React from 'react'
import api from "../api";
export const ContextProvider = createContext()

function MainContext({children}) {
    const [linguages , setLinguages] = useState()
    async function getInApi() {
        try{
            const { data } = await api.get('/linguagens');
            setLinguages(data);
        }catch(error){
            console.log(error);
        }
    }

    async function postInApi(values) {
        try{
            const { data } = await api.post('/linguagens' , values);
            console.log(data);
        }catch(error){
            console.log(error);
        }
    }
    const teste = 'Aprovou Aprovou'
  return (
    <ContextProvider.Provider value={{
        teste,
        getInApi,
        linguages,
        postInApi
        }}>
        {children}
    </ContextProvider.Provider>
  )
}

export default MainContext