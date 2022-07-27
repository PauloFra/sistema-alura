import React from 'react'
import * as Component from './Login.styles'
import {Link} from 'react-router-dom'
import { useFormik } from 'formik'
function Login() {
 
  const formik = useFormik({
    initialValues:{
      name:'',
      password:'',
      rememberMe:false
    },
    onSubmit: values => {
      alert(JSON.stringify(values,null,2))
    }
  });

  return (
    <Component.DivFather>
      <Component.TitleLoginPage>Login</Component.TitleLoginPage>
      <Component.DivCenter>
        <Component.SubTitle>sign here lorem in</Component.SubTitle>
          <Component.FormLogin onSubmit={formik.handleSubmit}>
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
           <Component.DivForCheckbox>
            <label htmlFor="rememberMe">Remember Me</label>
            <Component.LoginInput 
            name='rememberMe'
            id='rememberMe'
            type='checkbox'
            onChange={formik.handleChange}
            value={formik.values.rememberMe}
            />
           </Component.DivForCheckbox>
            <Component.ButtonLogin type='submit'>Submit</Component.ButtonLogin>
          </Component.FormLogin>
          <div>
            <p>Nao possui conta? <Link to="/createaccount">criar aqui</Link></p>
          </div>    
        </Component.DivCenter>
    </Component.DivFather>
  )
}

export default Login