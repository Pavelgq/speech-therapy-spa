import React, { useState } from 'react'


const VisitCalendar = () => {
    const [value, onChange] = useState([new Date()]);

    return (
        <div>   
           {value}
        </div>
    )
}

export default VisitCalendar