import React, { useState } from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import auth from "../utils/auth";






const DefaultSidebar = () => {
    const [selected, setSelected] = useState();
    const setSelectedItem = (e) => {
        setSelected(e.target.value)
        localStorage.setItem("selected", selected);
        const data = e.target.data;
        window.location.assign({data})
    
    };
    const handleSignOut = () => {
        auth.logout();
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.assign("/login");
    };
  
    return (
        <div className="sticky top-0 ">
            <Card className="bg-red-200 absolute right-0 h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5  ">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        BRRDI
                    </Typography>
                </div>
                <List>
                    
                        <ListItem value = '1' data = "/feed" className="outline-red-200" selected={selected === 1} onClick={window.assign("/feed")}>

                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-10 w-10" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>


                   
                        <ListItem value = '2' data = "/profile" className="outline-red-200" selected={selected === 2} onClick={window.assign("/profile")}>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-10 w-10" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>


                    
                        <ListItem value = '3' data = "/search" className="outline-red-200" selected={selected === 3} onClick={window.assign("/profile")}>
                            <ListItemPrefix>
                                <MagnifyingGlassIcon className="h-10 w-10" />
                            </ListItemPrefix>
                            Search
                        </ListItem>
                </List>


                <List className="absolute bottom-0">


                    <hr className="my-2  border-gray-800" />

                    {selected === 4 ? (
                        <ListItem value = '4' className="outline-red-200" selected={selected === 4} onClick={() => setSelectedItem(4)}>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-10 w-10" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>) : (
                        <ListItem value = '4' selected={selected === 4} onClick={() => setSelectedItem(4)} className="text-lg">
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-10 w-10" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                    )}
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-10 w-10" />
                        </ListItemPrefix>
                        <span onClick={handleSignOut}>Logout</span>
                    </ListItem>

                </List>
                
            </Card>
        </div>
    );
}

export default DefaultSidebar;