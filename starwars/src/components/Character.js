import React from 'react'

const Character = props => {
    return (
        <div className='character'>
            <p>
            <strong>Name:</strong>{props.character.name}
            </p>

            <p>
                <strong>Height:</strong> {props.character.height}
            </p>
            <p>
                <strong>Weight:</strong> {props.character.mass}
            </p>
            <p>
                <strong>Birth Year:</strong>{props.character.birth_year}
            </p>

        </div>
    )
}

export default Character;




//Luke