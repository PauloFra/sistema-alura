import React from 'react'
import * as Component from './Login.styles'
import {Link} from 'react-router-dom'
import { useFormik } from 'formik'
function CreateAccount() {
 
  const formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
    },
    onSubmit: values => {
      alert(JSON.stringify(values,null,2))
    }
  });

  return (
    <Component.DivFather>
      <Component.TitleLoginPage>Create Account</Component.TitleLoginPage>
      <Component.DivCenter>
        <Component.SubTitle>Create Account here lorem in</Component.SubTitle>
          <Component.FormLogin onSubmit={formik.handleSubmit}>
            <Component.DivDisplayFlex>
                <Component.LoginInput 
                placeholder='email'
                id='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            </Component.DivDisplayFlex>
            <Component.DivDisplayFlex>
                <Component.LoginInput 
                placeholder='Name'
                id='name'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                />
            </Component.DivDisplayFlex>

            <Component.DivDisplayFlex>
                <Component.LoginInput 
                placeholder='Password'
                id='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                />
           </Component.DivDisplayFlex>

            <Component.ButtonLogin type='submit'>Submit</Component.ButtonLogin>
          </Component.FormLogin>
          <div>
            <p>Ja possui Conta <Link to="/login">Logar</Link></p>
          </div>    
        </Component.DivCenter>
    </Component.DivFather>
  )
}

export default CreateAccount