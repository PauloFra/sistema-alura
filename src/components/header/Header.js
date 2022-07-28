import React from 'react'
import {
    HeaderS,
    Ul,
    Li
}from './Header.styles.js'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <HeaderS>
        <div>
            <p>Logo</p>
        </div>
        <nav>
            <Ul>
                <Li><Link to={'/'}>Linguagens</Link></Li>
                <Li><Link to={'/cadastro'}>Cadastro</Link></Li>
                {/* <Li>Logout</Li> */}
            </Ul>
        </nav>
    </HeaderS>
  )
}

export default Header