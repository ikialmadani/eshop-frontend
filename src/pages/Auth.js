import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Navigate} from 'react-router-dom'

function Auth({login, register, isLogedIn, setIsLogedIn}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }
    
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if(login) {
            axios.post('https://eshop.reskimulud.my.id/login', {
                email, password 
            }).then((res) => {
                //ketika berhasil login
                alert('Berhasil Login');
                setIsLogedIn(true); //mengubah state isLogedIn menjadi true (sudah login)
                //menyimpang token ke dalam local storage
                localStorage.setItem('eshop_jwt', res.data.data.token);
                //alihkan user ke halaman home
                navigate('/');
            }).catch((error) => alert(error.response.data.message))
        }
        if (register) {
            axios.post('https://eshop.reskimulud.my.id/register', {
                name, email, password 
            }).then((res) => {
                //ketika berhasil login
                alert('Berhasil Login');
                //alihkan user ke halaman home
                navigate('/auth/login');
            }).catch((error) => alert(error.response.data.message))
        }
    }
    
    if(isLogedIn) {
        return <Navigate to='/' replace />
    }

    if(login) {
        return(
            <Container>
                <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={onEmailChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={onPasswordChange}type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
            </Container>
        );
    }
    
    if (register) {
        return (
            <Container>
            <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control value={name} onChange={onNameChange}type="text" placeholder="Enter name" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={onEmailChange} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={onPasswordChange} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Login
        </Button>
        </Form>
        </Container> 
        );
    }
}

export default Auth;