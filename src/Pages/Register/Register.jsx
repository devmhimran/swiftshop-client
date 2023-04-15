import React from 'react';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PageTitle from '../../Components/PageTitle/PageTitle';

const Register = () => {
    return (
        <div className='container max-w-screen-xl lg:mx-auto lg:px-0 px-3 pb-20'>
            <PageTitle title='Register' />
            <Card color="transparent" shadow={false} className='w-[40%] mx-auto'>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" />
                        <Input size="lg" label="Email" />
                        <Input type="password" size="lg" label="Password" />
                    </div>
                    <Button className="mt-6" fullWidth>
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