import React, { useContext } from 'react';
import { ContextStudent } from '../../Context/StudentContext';

const Curricula = () => {
    const data = useContext(ContextStudent);

    return (
        <>
            <div>Curricula</div>
            <div>{data}</div>
        </>
    );
}

export default Curricula;
