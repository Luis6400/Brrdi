import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_FEED } from '../utils/queries';
import Chrrp from './chrrp';
import ChrrpCard from "./ChrrpCard";

function Feed() {
    const { data, loading, error } = useQuery(GET_FEED);
    const [chrrpList, setChrrpList] = useState("chrrps");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    

    const handleChrrpDelete = (deletedChrrpId) => {
        window.location.reload();
      };
      


    return (
        <div>
            {/*Chrrp creation component */}
            <Chrrp />

            {/*Displaying all chrrps */}
            {(data.chrrps.slice(0).reverse()).map(chrrp => (
                <ChrrpCard key={chrrp._id} onDelete={handleChrrpDelete} chrrp={chrrp} />
            ))}
        </div>
    );
}

export default Feed;
