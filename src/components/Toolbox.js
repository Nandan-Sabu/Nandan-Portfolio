import React from 'react'

const Toolbox = ({ name, icon }) => {
    return (
        <div className='toolbox'>{name} {icon}</div>
    )
}

export default Toolbox;