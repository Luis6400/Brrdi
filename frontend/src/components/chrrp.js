import React from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
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

const ADD_CHRRP = gql`
    mutation addChrrp($chrrpText: String!, $parentChrrpId: ID) {
        addChrrp(chrrpText: $chrrpText, parentChrrpId: $parentChrrpId) {
            _id
            chrrpText
            chrrpAuthor
            chrrpDate
            chrrpLikes
            chrrpRechrrps
            parentChrrp {
                _id
                chrrpText
                chrrpAuthor
                chrrpDate
                chrrpLikes
                chrrpRechrrps
            }
            deleted
        }
    }
`;

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
                    <Card key={chrrp._id} className="mt-6 p-2 drop-shadow-lg ">
                        <CardBody>
                            <Card boxShadow="none" className="m-2 h-5 bg-transparent shadow-none flex-row">
                                <UserCircleIcon className="absolute bottom-0 h-11 w-11 flex-row" />
                                <Typography color="pink" variant="h5" className=" pl-12 absolute bottom-1">
                                    {chrrp.chrrpAuthor}
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
                                <IconButton color="white" className=" shadow-none">
                                    <EllipsisHorizontalIcon className="h-6 w-6" />
                                </IconButton>
                            </div>
                            <Typography color="black" className="fixed bottom-0">
                                {chrrp.chrrpDate}
                            </Typography>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Chrrp;