import React from 'react';

export default (props) => {
    return (
        <tr>
            <td><h4>{props.digimon.name}</h4></td>
            <td><img className='img img-responsive' src={props.digimon.picture} /></td>
        </tr>
    );
};