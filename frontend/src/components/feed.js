import { useQuery } from '@apollo/client';
import { GET_FEED } from '../utils/queries';
import Chrrp from './chrrp';
import ChrrpCard from "./ChrrpCard";

function Feed() {
    const { data, loading, error } = useQuery(GET_FEED);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {/*Chrrp creation component */}
            <Chrrp />

            {/*Displaying all chrrps */}
            {data.chrrps.map(chrrp => (
                <ChrrpCard key={chrrp._id} chrrp={chrrp} />
            ))}
        </div>
    );
}

export default Feed;
