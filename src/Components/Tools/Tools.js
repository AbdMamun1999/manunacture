import React from 'react';
import Tool from '../Tool.js/Tool';

const tools = [
    { _id: 1, name: 'Pria' },
    { _id: 2, name: 'Pria' },
    { _id: 3, name: 'Pria' },
    { _id: 4, name: 'Pria' },
    { _id: 5, name: 'Pria' },
    { _id: 6, name: 'Pria' }
]

const Tools = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10 '>
                Our Tools
            </h1>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;