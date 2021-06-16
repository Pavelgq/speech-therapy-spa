import React from 'react'
import { Link, Redirect } from 'react-router-dom';

import VisitCalendar from '@components/VisitCalendar/VisitCalendar'

const Landing = () => {
    return (
        <div>
            Landing Page
            <div className="container">
                <Link to="/login">Войти</Link> 
            </div>
            
        </div>
    )
}

export default Landing