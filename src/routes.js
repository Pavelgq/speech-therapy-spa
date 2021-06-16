import React from 'react'
import { Switch, Route } from 'react-router'

import Landing from '@pages/landing/index'
import Authentication from '@pages/authentication/index'
import TeacherRoom from '@pages/personRoom/teacherRoom/index'
import StudentRoom from '@pages/personRoom/studentRoom/index'

const Router = () => {
    return (
        <Switch>
            <Route path="/" component={Landing} exact/>
            <Route path="/student/:slug" component={StudentRoom} />
            <Route path="/teacher" component={TeacherRoom} />
            <Route path='/login' component={Authentication} />
        </Switch>
    )
}

export default Router