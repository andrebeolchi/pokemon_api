import {Switch, Route} from 'react-router-dom'
import React from 'react'
import { Index } from '../../pages'

const Rotas = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Index }/>
        </Switch>
    )
}

export default Rotas