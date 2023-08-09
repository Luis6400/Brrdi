import React from "react";

import {
    Card,
    Input,
} from "@material-tailwind/react";

import Feed from "./feed";

const SearchBar = () => {
return <div className="">

        <Card className="flex justify-center m-2 p-1 items-center">

            <Input color="pink" className="w-full " type="text" placeholder="Search" />
        </Card>
        <Feed/>
    

    </div>;
}

export default SearchBar;