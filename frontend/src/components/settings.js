import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Input,
    IconButton,
} from "@material-tailwind/react";

const Settings = () => {
    return <div className="flex justify-center">
        <Card className="w-full h-full m-2 shadow-blue-gray-900/5">
            <Input color="pink" className="w-full " type="text" placeholder="Change Username" />
            <Input color="pink" className="w-full " type="text" placeholder="Change Password" />
            <Input color="pink" className="w-full " type="text" placeholder="Change Email" />


            </Card>

    </div>


}

export default Settings;