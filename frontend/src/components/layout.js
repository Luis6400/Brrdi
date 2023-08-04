import react from 'react';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import DefaultSidebar from '../components/nav';
import Feed from '../components/feed';
import Adspace from '../components/adspace';

const Layout = (PropsWithChildren) => {
    return (
        <div class="grid grid-cols-10 gap-4">
            <div class="col-span-3 relative"><DefaultSidebar/></div>
            <div class="col-span-4"><Feed/></div>
            <div class="col-span-3 relative"><Adspace/></div>
        </div>
    );
};

export default Layout;