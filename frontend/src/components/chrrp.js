import React from "react";

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
    return (
        <div>
            <Card className="mt-6 p-2 drop-shadow-lg ">

                <CardBody>

                    <Card boxShadow="none" className="m-2 h-5 bg-transparent shadow-none flex-row">
                            
                  
                            

                            <UserCircleIcon  className="absolute bottom-0 h-11 w-11 flex-row" />
                                <Typography color="pink" variant="h5"  className=" pl-12  absolute bottom-1">
                                    UserName
                                </Typography>
                         
                                
                       
                        
                    </Card>

                    <hr className="my-2 border-gray-600" />


                    <Typography color="black" className=" ">
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
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
                            03/03/2021
                        </Typography>
                </CardBody>
               
            </Card>

        </div>
    )

}

export default Chrrp;