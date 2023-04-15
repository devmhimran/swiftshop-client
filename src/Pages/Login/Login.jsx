import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Components/firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const [token] = useToken(user)
    const [show, setShow] = useState(false)

    let from = location.state?.from?.pathname || "/dashboard";

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInWithEmailAndPassword(email, password)
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container max-w-screen-xl lg:mx-auto lg:px-0 px-3 pb-20 pt-12'>
            <PageTitle title='Login' />
            <Card color="transparent" shadow={false} className='w-[80%] lg:w-[40%] mx-auto'>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Login.
                </Typography>
                <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <div>
                            <Input size="lg" label="Email" type='email' name='email' />
                        </div>
                        <div className='relative'>
                            <span className={`absolute z-10 text-xl right-2 top-3 cursor-pointer ${show ? 'hidden': ''}`} onClick={()=>setShow(!show)}><AiFillEye /></span>
                            <span className={`absolute z-10 text-xl right-2 top-3 cursor-pointer ${show ? '': 'hidden'}`} onClick={()=>setShow(!show)}><AiFillEyeInvisible /></span>
                            <Input type={`${show ? 'text':  'password' }`} size="lg" label="Password" name='password' />
                        </div>

                        <p className='text-sm text-red-600'>{error ? error.message : ''}</p>
                    </div>
                    <Button type='submit' className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don't have account?{" "}
                        <Link to='/register' className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                            Register
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Login;