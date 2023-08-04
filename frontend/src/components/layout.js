import react from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
    return (
      <div className="grid min-h-screen grid-rows-header bg-zinc-100">
        <div>Navbar</div>
        <div className="grid md:grid-cols-sidebar">
          <div>Sidebar</div>
        </div>
      </div>
    );
  };
  
  export default Layout;