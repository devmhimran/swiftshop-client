import React, { useState } from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from '../../Components/PageTitle/PageTitle';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Components/firebase.init';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, userUpdateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, emailError] = useSendEmailVerification(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();
    const location = useLocation();
    const [phoneError, setPhoneError] = useState('');
    const handleRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value
        const password = e.target.password.value;

        console.log(name, email, phone, password)

        if (phone.includes('+880')) {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            await sendEmailVerification();
        } else {
            setPhoneError('Please Add +880 before')
            // phoneError = <><small className='text-red-400'>Please Add +880 before</small></>
        }



    }
    let from = location.state?.from?.pathname || "/dashboard";
    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container max-w-screen-xl lg:mx-auto lg:px-0 px-3 pb-20 pt-12'>
            <PageTitle title='Register' />
            <Card color="transparent" shadow={false} className='w-[80%] lg:w-[40%] mx-auto'>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleRegister}>
                    <div className="mb-4 flex flex-col gap-3">
                        <Input size="lg" label="Name" type='text' name='name' required />
                        <Input size="lg" label="Phone" type='text' name='phone' required />
                        {
                            phoneError ?
                            <small className='text-red-400'>{phoneError}</small> : ''
                        }
                        <Input size="lg" label="Email" type='email' name='email' required />
                        <Input type="password" size="lg" label="Password" name='password' required />
                        {
                            error ?
                                <small className='text-red-400'>{error.message}</small> : ''
                        }
                        
                        
                    </div>
                    <Button type='submit' className="mt-6" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to='/login' className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                            Login
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Register;