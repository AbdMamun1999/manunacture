import React, { useEffect, useState } from 'react';
import Tool from '../Tool.js/Tool';


const Tools = () => {
    const [tools,setTools] = useState([])



    useEffect(()=>{
        fetch('tools.json')
        .then(res=>res.json())
        .then(data=>{
            setTools(data)
        })
    },[])

    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10 '>
                Our Tools
            </h1>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;