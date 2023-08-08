import React from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Input,
} from "@material-tailwind/react";

const LoginCard = () => {
    return <div className="grid items-center justify-center h-screen">

        <Card className="flex-row  bg-red-200 w-[calc(70vh)] h-[calc(45vh)]">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody className="">
                <div className="row-span-1 ">

                    <Typography variant="h6" color="gray" className="row-span-1 mb-4  uppercase">
                        Brrd is the word
                    </Typography>
                </div>
                <div className="row-span-4 pt-8">
                    <div className="m-3 ">

                        <Input variant="standard" label="Username" color="pink" className="" />
                    </div>
                    <div className="m-3 ">

                        <Input variant="standard" label="Password" color="pink" className="" />
                    </div>
                    <a href="#" className="row-span-1 inline-block">
                        <Button variant="text" color="pink" className="m-2 flex items-center gap-2">
                            Log in
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>

                </div>
                <div className="row-span-1">

                    <a href="#" className=" inline-block">
                        <Button variant="text" color="pink" className="flex items-center gap-2">
                            Sign up
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </div>
            </CardBody>
        </Card>

    </div>

}

export default LoginCard;