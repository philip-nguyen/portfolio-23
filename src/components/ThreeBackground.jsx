import React, { useEffect, useRef } from 'react';
import threeEntryPoint from './threejs/threeEntryPoint';

export default function ThreeBackground () {
    const background = useRef();
    useEffect(() => {
        //console.log('componentDidMount equivalent');
        console.log(background);
        threeEntryPoint(background);
    }, []);

    return (
        <div ref={background} />
    );
}