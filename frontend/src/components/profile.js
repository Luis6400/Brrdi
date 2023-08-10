import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import ChrrpCard from "./ChrrpCard";
import Chrrp from "./chrrp";

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    IconButton,
} from "@material-tailwind/react";


import { PlusIcon } from "@heroicons/react/24/solid";

const Profile = () => {
    const { data } = useQuery(QUERY_ME);
    

    // Check if data is available and extract user details
    const user = data?.me || {};

    if (!data?.me) {
       
        return <Typography color="blue-gray" className="text-center">Please log in to view your profile.</Typography>;
    }

    return (
        <div>
            <div className="flex justify-center">
                <Card className=" w-full ">
                    <CardBody className="text-center">
                        <Typography variant="h4" color="pink" className="mb-2">
                            {user.userName || 'Default Name'}
                        </Typography>
                        <Typography color="blue-gray" className="font-bold" textGradient>
                            {user.bio || 'This user has no bio.'}
                        </Typography>
                        <hr className="my-2 border-red-200" />
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
            <Chrrp/>
            {/* User's Chrrps Section */}
            <div className="mt-8">
                <Typography variant="h5" color="blue-gray" className="mb-4 text-center">
                    Your Chrrps
                </Typography>

                {user.chrrps && user.chrrps.length > 0 ? (
                user.chrrps.map(chrrp => (
                <ChrrpCard key={chrrp._id} chrrp={chrrp} />
                ))
                ) : (
                    <Typography color="blue-gray" className="text-center">
                        You haven't created any chrrps yet.
                    </Typography>
                )}
            </div>

            
        </div>
    )
}

export default Profile;

