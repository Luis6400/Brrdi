import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_CHRRP } from "../utils/mutations";
import ChrrpCard from "./ChrrpCard";

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    HeartIcon,
    ArrowPathIcon,
    EllipsisHorizontalIcon
} from "@heroicons/react/24/solid";



const Chrrp = () => {
    const [chrrpText, setChrrpText] = React.useState('');
    const [chrrps, setChrrps] = React.useState([]);
    const [addChrrp] = useMutation(ADD_CHRRP);

    const handleSubmit = async () => {
        try {
            const { data } = await addChrrp({ variables: { chrrpText } });
            setChrrpText(''); // Clear the input
            setChrrps([data.addChrrp, ...chrrps]); // Add the new chrrp to the state
        } catch (error) {
            console.error("Error adding chrrp:", error);
        }
    };

    return (
        <div>
            <div className="mb-6">
                <input 
                    type="text" 
                    value={chrrpText} 
                    onChange={e => setChrrpText(e.target.value)} 
                    placeholder="What's on your mind?" 
                />
                <button onClick={handleSubmit}>Chrrp!</button>
            </div>
            <div>
            {chrrps.map(chrrp => (
            <ChrrpCard key={chrrp._id} chrrp={chrrp} />
            ))}

            </div>
        </div>
    );
}

export default Chrrp;