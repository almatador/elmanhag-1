import React, { useContext } from 'react';
import { ContextUser } from '../../Context/UserContext';

const Curricula = () => {
    const data = useContext(ContextUser);

    return (
        <>
            <div>Curricula</div>
            <div>{data}</div>
        </>
    );
}

export default Curricula;
