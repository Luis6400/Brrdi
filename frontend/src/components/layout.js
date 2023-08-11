import { useState } from 'react';
import React from 'react';
import DefaultSidebar from '../components/nav';
import Feed from '../components/feed';
import Adspace from '../components/adspace';
import Profile from './profile';
import SearchBar from './searchbar';
import Settings from './settings';
import { useLocation } from 'react-router-dom';
import Chrrpthread from './Chrrpthread';
const Layout = (PropsWithChildren) => {
    const {pathname} = useLocation();
    return (
        <div class="grid grid-cols-10 gap-4 bg-gray-800">
            
            <div class="col-span-3 relative"><DefaultSidebar/></div>
            <div class="col-span-4">
            {/* <div class="col-span-4">{handleSelected()}</div> */}
            {pathname.includes("/profile") && <Profile/>}
            {pathname.includes("/search") && <SearchBar/>}
            {pathname.includes("/feed") && <Feed/>}
            {pathname.includes("/settings") && <Settings/>}
            {pathname.includes("/chrrp") && <Chrrpthread/>}
            
            </div>
            <div class="col-span-3 relative"><Adspace/></div>
        </div>
    );
};

export default Layout;