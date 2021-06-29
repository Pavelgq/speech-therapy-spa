import React from 'react'


const StudentCard = ({info}) => {

    return (
        <li>
            <h4>{info.firstName}{info.lastName}</h4>
        </li>
    )
}

export default StudentCard