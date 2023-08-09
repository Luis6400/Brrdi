import { useState } from 'react';
import React from 'react';
import DefaultSidebar from '../components/nav';
import Feed from '../components/feed';
import Adspace from '../components/adspace';
import Profile from './profile';
import SearchBar from './searchbar';
import { useLocation } from 'react-router-dom';
const Layout = (PropsWithChildren) => {
    const {pathname} = useLocation();
    const handleSelected = () => {
        const selected = localStorage.getItem("selected");
        // if (!localStorage.getItem("selected")) {
        //      const selected = 1;
        //  }

        switch (selected) {
            case 1:
                return <Feed/>;
            case 2:
                return <Profile/>;
            case 3:
                return <SearchBar/>;
            default:
                return <Feed/>;
        }
    };
    return (
        <div class="grid grid-cols-10 gap-4">
            <div class="col-span-3 relative"><DefaultSidebar/></div>
            <div class="col-span-4">
            {/* <div class="col-span-4">{handleSelected()}</div> */}
            {pathname.includes("/profile") && <Profile/>}
            {pathname.includes("/search") && <SearchBar/>}
            {pathname.includes("/feed") && <Feed/>}
            </div>
            <div class="col-span-3 relative"><Adspace/></div>
        </div>
    );
};

export default Layout;