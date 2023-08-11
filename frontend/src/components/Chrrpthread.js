import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHRRP } from '../utils/queries';
import Chrrp from './chrrp';
import ChrrpCard from "./ChrrpCard";
import {
    Card,
    Input
} from "@material-tailwind/react";

const Chrrpthread = () => {
    const chrrpid = useParams();
    const chid = chrrpid.chrrpid;

    const { loading, error, data } = useQuery(GET_CHRRP, {
        variables: { chrrpId: chid }
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const finchrrp = data.chrrp.chrrpAuthor._id;
    const check = () => {
        console.log(chid);
        console.log(finchrrp);
    }
    const handleChrrpDelete = (deletedChrrpId) => {
        window.location.reload();
    };
    return (
        <div>
            <ChrrpCard key={finchrrp} onDelete={handleChrrpDelete} chrrp={data.chrrp}/>
            <Chrrp/>
        </div>

    );
}

export default Chrrpthread;