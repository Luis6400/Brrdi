import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

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
import { PlusIcon } from "@heroicons/react/24/solid";

const Profile = () => {
    const { data } = useQuery(QUERY_ME);
    console.log(data)
    // Check if data is available and extract user details
    const user = data?.me || {};

    

    return (
        <div>
            <div className="flex justify-center">
                <Card className=" w-full ">
                    <div className="w-full flex justify-center">
                        {/* Adjust the src as needed, I'm using a default image for now */}
                        <CardHeader floated={false} className="w-80 h-80">
                            <img className="object-fill w-80 h-80" src={user.profileImage || 'https://via.placeholder.com/400'} alt="profile-picture" />
                        </CardHeader>
                    </div>
                    <CardBody className="text-center">
                        <Typography variant="h4" color="pink" className="mb-2">
                            {user.userName || 'Default Name'}
                        </Typography>
                        <Typography color="blue-gray" className="font-bold" textGradient>
                            {user.bio || 'This user has no bio.'}
                        </Typography>
                        <hr className="my-2  border-red-200" />
                        {/* Assuming you have followers and following data on your user */}
                        <Typography color="blue-gray" className="font-bold" textGradient>
                            Followers: {user.followers?.length || 0}
                        </Typography>
                        <Typography color="blue-gray" className="font-bold" textGradient>
                            Following: {user.following?.length || 0}
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center gap-7 pt-2">
                        <IconButton color="white" className="bg-transparent shadow-none">
                            <PlusIcon className=" h-6 w-6" />
                        </IconButton>
                    </CardFooter>
                </Card>
            </div>

            <Feed />

        </div>
    )
}

export default Profile;
