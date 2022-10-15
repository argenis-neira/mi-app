import React from 'react';
import { useEffect } from 'react';

export default function Saludar(props) {
    console.log(props);
    useEffect(() => {
        console.log('SAL1');

        return () => {
            console.log('SAL2');
        }
    }, [])

    return (
        <div>
            <h2>
                {props.name}
            </h2>
        </div>
    )
}