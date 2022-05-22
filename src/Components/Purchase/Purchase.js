import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {toolId} = useParams()
    console.log(toolId)
    return (
        <div>
            purchaser
        </div>
    );
};

export default Purchase;