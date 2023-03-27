import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap';
import './../assets/css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, LOGIN } from '../constants';


const Login = () => {
    const history = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState("")
    const [load, setLoad] = useState(false)
    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        try {
            const { data } = await axios.post(BASE_URL + LOGIN, inputs);

            if (data && data?.code === 200) {
                setLoad(false)
                localStorage.setItem('user', JSON.stringify(data?.data));
                setInputs({ email: "", password: "" })
                history('/newsfeed')
            } else {
                setLoad(false)
                setMessage(data?.message);
            }

        } catch (error) {
            setLoad(false)
            setErrors(error?.response?.data.Error);
        }
    }

    return (
        <>
            <div className="box-form">
                <div className="left">
                    <div className="overlay">
                        <h1>Innoscriptia.co</h1>
                    </div>
                </div>


                <div className="right">
                    <h5>Login</h5>
                    <div className='inputs'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="info@email.com" name="email" value={inputs?.email} onChange={(e) => handleChange(e)} />
                                <Form.Text className="text-danger">{errors?.email}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={inputs?.password} onChange={(e) => handleChange(e)} />
                                <Form.Text className="text-danger">{errors?.password}</Form.Text>
                                <Form.Text className="text-danger">{message}</Form.Text>
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Link to="/signup">Create Account</Link>
                            </Form.Group>
                            {load ? <button><Spinner animation="border" /></button> : <button>Login</button>}

                        </Form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login