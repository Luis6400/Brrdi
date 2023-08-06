import React from "react";
import {
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";

const Adspace = () => {
    return <div className="sticky top-0">
    <Card className=" bg-red-200 absolute left-0 h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5  ">
        <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
                Adspace
            </Typography>
        </CardBody>
    </Card>
    </div>
}

export default Adspace;