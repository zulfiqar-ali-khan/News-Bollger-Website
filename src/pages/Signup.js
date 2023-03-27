import React, { useState } from 'react'
import { Form, Spinner } from 'react-bootstrap';
import './../assets/css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, REGISTER } from '../constants';

const Signup = () => {

    const [inputs, setInputs] = useState({ name: "", email: '', password: "", password_confirmation: "" });
    const [errors, setErrors] = useState([]);
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState()


    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        try {
            const { data } = await axios.post(BASE_URL + REGISTER, inputs);

            if (data && data?.code === 200) {
                setLoad(false)
                setMessage(data?.message);
                setInputs({ name: "", email: '', password: "", password_confirmation: "" })
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
                    <h5>SignUp</h5>
                    <div className='inputs'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Text className="text-success">{message}</Form.Text>
                            <Form.Group className="mb-3" controlId="formBasicname">
                                <Form.Label>UserName</Form.Label>
                                <Form.Control type="text" placeholder="John Deo" name="name" value={inputs?.name} onChange={e => handleChange(e)} />
                                <Form.Text className="text-danger">{errors?.name}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicemail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="info@gmail.com" name="email" value={inputs?.email} onChange={e => handleChange(e)} />
                                <Form.Text className="text-danger">{errors?.email}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={inputs?.password} onChange={e => handleChange(e)} />
                                <Form.Text className="text-danger">{errors?.password}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPasswords">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" placeholder="Password Confirmation" name="password_confirmation" value={inputs?.password_confirmation} onChange={e => handleChange(e)} />
                                <Form.Text className="text-danger">{errors?.password_confirmation}</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Link to="/">I have Already Account</Link>
                            </Form.Group>

                            {load ? <button><Spinner animation="border" /></button> : <button>SignUp</button>}

                        </Form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup