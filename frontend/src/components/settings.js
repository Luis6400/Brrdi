import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import AuthService from '../utils/auth';

import {
    Card,
    Typography,
    Input,
    IconButton,
} from "@material-tailwind/react";

const Settings = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [successMessage, setSuccessMessage] = useState('');  // For displaying the success message

    const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);

    const currentUser = AuthService.getProfile();
    const currentUserId = currentUser.data._id;

    const handleUpdate = async () => {
        try {
            await updateUser({ 
                variables: { 
                    userId: currentUserId, 
                    userName: userName, 
                    password: password, 
                    bio: bio 
                } 
            });

            // Resetting the fields
            setUserName('');
            setPassword('');
            setBio('');

            // Displaying the success message
            setSuccessMessage('Updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);  // Remove the message after 3 seconds

        } catch (err) {
            console.error(err);
            setSuccessMessage('Failed to update. Please try again.');
            setTimeout(() => setSuccessMessage(''), 3000);  // Remove the error message after 3 seconds
        }
    }

    return (
        <div className="flex justify-center">
            <Card className="w-full h-full m-2">
                <Input 
                    color="pink" 
                    className="w-full" 
                    type="text" 
                    placeholder="Change Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)} 
                />
                <Input 
                    color="pink" 
                    className="w-full" 
                    type="password" 
                    placeholder="Change Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <Input 
                    color="pink" 
                    className="w-full" 
                    type="text" 
                    placeholder="Change Bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)} 
                />
                <button onClick={handleUpdate} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                    Update
                </button>
                {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
            </Card>
        </div>
    );
}

export default Settings;
