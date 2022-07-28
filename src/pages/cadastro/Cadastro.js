import React from 'react'
import Header from '../../components/header/Header'
import { Formik ,Field ,Form } from 'formik'
import * as Component from './Cadastro.styles'
import api from '../../api'
import { useNavigate } from 'react-router-dom'

function Cadastro() {  
  const handleSubmit = async (values) => {
    try{
      const {data} = api.post('/linguagens' , values)
      console.log('Dados Enviados' , data);
      navigate('/')
    }catch(error){
      console.log(error);
    }
  }
  const navigate = useNavigate()
  return (
    <>
        <Header />
        <Component.DivFather>
            <Component.DivContent>
              <Component.TitleCadastroPage>Registre no sistema alguma tecnologia</Component.TitleCadastroPage>
             <Component.DivForm>
              <Component.SubTitle>Cadastre aqui</Component.SubTitle>
             <Formik
              initialValues={{
                title:'',
                image:'',
                ranking:''
              }}
              onSubmit={(values) => {
                handleSubmit(values)
              }}
              >
                <Form>
                <Field
                  id="title"
                  name="title"
                  placeholder="Nome Da Tecnologia"
                  />
                  <Field
                  id="image"
                  name="image"
                  placeholder="Url da Image"
                  />
                  <Field
                  id="ranking"
                  name="ranking"
                  placeholder="Ranking Da Tecnologia"
                  />
                  <button type="submit">Submit</button>
                </Form>
              </Formik>
             </Component.DivForm>
            </Component.DivContent>
        </Component.DivFather>
    </>
  )
}

export default Cadastro