import React from 'react'
import Button from './components/Button'
import { NavLink } from 'react-router-dom'

const Login = () => (
    <div>Hola Bienvendio al login
        <br />
        <NavLink to={"/"}>
            <Button />
        </NavLink>
    </div>
)

export default Login