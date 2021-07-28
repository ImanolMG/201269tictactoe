import React from 'react'
import TicTacToe from "./TicTacToe";

import NotFound from "./NotFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TicTacToe}/>
                    <Route exact path='/tictactoe' component={TicTacToe}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default  App;