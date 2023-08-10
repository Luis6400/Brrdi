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
    Input,
    Button
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
            setChrrpText(''); //Clear the input
            setChrrps([data.addChrrp, ...chrrps]); //Add the new chrrp to the state
            window.location.reload();
        } catch (error) {
            console.error("Error adding chrrp:", error);
        }
    };

    return (
        <div className="">
            <Card className="m-6 bg-gray-800">
                <Input 
                    type="text"
                    className="bg-white"
                    color="pink" 
                    value={chrrpText} 
                    onChange={e => setChrrpText(e.target.value)} 
                    placeholder="What's on your mind?" 
                />
                <Button className="bg-red-200" onClick={handleSubmit}>Chrrp!</Button>
            </Card>
            <div>
    {chrrps.map(chrrp => {
        console.log(chrrp);
        return <ChrrpCard key={chrrp._id} chrrp={chrrp} />;
    })}
</div>

        </div>
    );
}

export default Chrrp;