import { useState } from 'react';
import { ADD_CHRRP } from '../utils/mutations';
import {
    Card,
    CardBody,
    Typography,
    IconButton,

} from "@material-tailwind/react";
import {
    UserCircleIcon,
    HeartIcon,
    ArrowPathIcon,
    TrashIcon,
    EllipsisHorizontalIcon
} from "@heroicons/react/24/solid";
import auth from '../utils/auth';

import { useMutation, useApolloClient } from '@apollo/client';
import { DELETE_CHRRP } from '../utils/mutations';



const ChrrpCard = ({ chrrp, onDelete }) => {
    

    const user = (auth.getProfile()).data._id;
    console.log(user);
    const [deleteChrrp] = useMutation(DELETE_CHRRP);
    const handleDelete = async () => {
        try {
          await deleteChrrp({
            variables: { chrrpId: chrrp._id }
          });
          onDelete(chrrp._id); // Notify parent component about the deleted chrrp
        } catch (error) {
          console.error(error);
        }
      };
    return (
        <Card key={chrrp._id} className="mt-6 p-2 drop-shadow-lg ">
            <CardBody>
                <Card boxShadow="none" className="m-2 h-5 bg-transparent shadow-none flex-row">
                    <UserCircleIcon className="absolute bottom-0 h-11 w-11 flex-row" />
                    <Typography color="pink" variant="h5" className=" pl-12 absolute bottom-1">
                        {chrrp.chrrpAuthor.userName || 'Anonymous'}
                    </Typography>
                </Card>
                <hr className="my-2 border-gray-600" />
                <Typography color="black" className=" ">
                    {chrrp.chrrpText}
                </Typography>
                <hr className="my-2 border-gray-600" />
                <div className="m-2 flex gap-4">
                    <IconButton color="white" className=" shadow-none">
                        <HeartIcon className=" h-6 w-6" />
                    </IconButton>
                    <IconButton color="white" className=" shadow-none">
                        <ArrowPathIcon className="h-6 w-6" />
                    </IconButton>
                    {(chrrp.chrrpAuthor._id === user)?(
                    <IconButton onClick={handleDelete} color="white" className=" shadow-none">
                        <TrashIcon className="h-6 w-6" />
                    </IconButton>):(<></>)}
                    

                </div>
                <Typography color="black" className="fixed bottom-0">
                    {chrrp.chrrpDate} {chrrp.deleted ? '(deleted)' : ''}
                </Typography>

            </CardBody>
        </Card>
    );
};

export default ChrrpCard;