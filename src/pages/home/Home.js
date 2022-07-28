import React, { useEffect } from 'react'
import { useContext } from 'react'
import { ContextProvider } from '../../context/MainContext'
import Header from '../../components/header/Header'
import api from '../../api'
import * as Component from './Home.styles'
import gif from '../../imagem/1488.gif'
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
        <Component.DivLoading>
          <img src={gif} />
        </Component.DivLoading>
      </>
    )
  }
  console.log(linguages);

  async function removeFromApi(item){
    try{
      const { data } = api.delete(`linguagens/${item.id}`) 
    }catch(error){
      console.log(error);
    }
    alert(`a tecnologia ${item.title} foi excluida`)
    getInApi()
  }

  return (
    <>
      <Header />
      <Component.DivFatherHome>
        <Component.TitleHome>Linguagens</Component.TitleHome>
        <Component.DivContent>
          <Component.TableHome>
            <Component.THeadTableHome>
                <Component.TrheadTableHome>
                  <Component.ThTableHome paddingLeft="10px">Icon</Component.ThTableHome>
                  <Component.ThTableHome>Nome</Component.ThTableHome>
                  <Component.ThTableHome>Ranking</Component.ThTableHome>
                  <Component.ThTableHome>Actions</Component.ThTableHome>
                </Component.TrheadTableHome>
            </Component.THeadTableHome>
            <tbody>
          {
            linguages.length > 0  && linguages.map((item => (

            <Component.TrTableHome key={item.id}>
                <Component.TdTableHome paddingLeft="50px">
                      <Component.DivImg src={item.image} width='70px' alt="" />   
                </Component.TdTableHome>
                <Component.TdTableHome><strong>{item.title}</strong></Component.TdTableHome>
                <Component.TdTableHome>{item.ranking}</Component.TdTableHome>
                <Component.TdTableHome>
                    <Component.ButtonDelete onClick={() => removeFromApi(item)}>Remove</Component.ButtonDelete>
                </Component.TdTableHome>
            </Component.TrTableHome>
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