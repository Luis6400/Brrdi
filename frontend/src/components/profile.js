import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";

import Feed from "./feed";

import {

    PlusIcon,


} from "@heroicons/react/24/solid";


const Profile = () => {
    return (
        <div>
        <div className="flex justify-center">
            <Card className=" w-full ">
                <div className="w-full flex justify-center">

                <CardHeader floated={false} className="w-80 h-80">
                    <img className="object-fill w-80 h-80"  src="https://pbs.twimg.com/profile_images/1567683362365800448/sPsU6QWt_400x400.jpg" alt="profile-picture" />
                </CardHeader>
                </div>
                <CardBody className="text-center">
                    <Typography variant="h4" color="pink" className="mb-2">
                        Louis V
                    </Typography>
                    <Typography color="blue-gray" className="font-bold" textGradient>
                        The man with a plan of action and a plan of attack for this website, follow for more crack cocaine updates!
                    </Typography>
                    <hr className="my-2  border-red-200" />

                    <Typography color="blue-gray" className="font-bold" textGradient>
                        Followers: 100M
                    </Typography>
                    <Typography color="blue-gray" className="font-bold" textGradient>
                        Following: 1
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <IconButton color="white" className="bg-transparent shadow-none">
                        <PlusIcon className=" h-6 w-6" />
                    </IconButton>
                </CardFooter>
            </Card>
            </div>

            <Feed/>

        </div>
    )

}

export default Profile;