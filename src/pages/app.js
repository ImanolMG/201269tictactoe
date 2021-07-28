import React from 'react'
import TicTacToe from "./TicTacToe";
import Inicio from "../components/Inicio";
import NotFound from "./NotFound";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
class App extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TicTacToe}/>
                    <Route exact path='/tictactoe' component={TicTacToe}/>
                    <Route exact path='/nohaylugar' component={NotFound}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default  App;