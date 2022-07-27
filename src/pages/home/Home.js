import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ContextProvider } from '../../context/MainContext'
import Header from '../../components/header/Header'
import api from '../../api'
import * as Component from './Home.styles'
function Home() {
  const { teste , getInApi , linguages , postInApi} = useContext(ContextProvider)
  useEffect(()=>{
    getInApi()
  },[])

  const datas = {
    title: 'TESTE TESTE', image: 'https://raw.githubusercontent.com/abrahamcalf/prog…ogos/master/src/typescript/typescript_256x256.png', ranking: 4
  }
  if(!linguages){
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }
  console.log(linguages);

  async function removeFromApi(id){
    try{
      const { data } = api.delete(`linguagens/${id}`) 
    }catch(error){
      console.log(error);
    }
    alert('id linguagem removida')
    getInApi()
  }

  return (
    <>
      <Header />
      <Component.DivFatherHome>
        <Component.TitleHome>Welcome Here</Component.TitleHome>
        <Component.DivContent>
          <Component.TableHome>
            <thead>
                <tr>
                  <Component.ThTableHome>Icon</Component.ThTableHome>
                  <Component.ThTableHome>Nome</Component.ThTableHome>
                  <Component.ThTableHome>Ranking</Component.ThTableHome>
                  <Component.ThTableHome>Actions</Component.ThTableHome>
                </tr>
            </thead>
            <tbody>
          {
            linguages.length > 0  && linguages.map((item => (

            <tr key={item.id}>
                <Component.TdTableHome>
                      <Component.DivImg src={item.image} width='60px' alt="" />   
                </Component.TdTableHome>
                <Component.TdTableHome><strong>{item.title}</strong></Component.TdTableHome>
                <Component.TdTableHome>{item.ranking}</Component.TdTableHome>
                <Component.TdTableHome>
                    <button onClick={() => removeFromApi(item.id)}>Remove</button>
                </Component.TdTableHome>
            </tr>
            )
            ))
          }
          </tbody>
          </Component.TableHome>
        </Component.DivContent>
      </Component.DivFatherHome>
    </>
  )
}

export default Home