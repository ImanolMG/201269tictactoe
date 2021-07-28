import React from 'react';
import {Link} from 'react-router-dom'

class Inicio extends React.Component{

    render() {
        return(
            <React.Fragment>
                <>
                    <div className="row justify-content-md-center">
                    <div >
                        <h1>Bienvenido Al Juego de gato</h1>
                    </div>

                        <div>
                            <Link to='/tictactoe'>
                                <button type="button" className="btn btn-primary">Iniciar</button>
                            </Link>
                        </div>
                    </div>
                </>
            </React.Fragment>

        )
    }
}
export default Inicio;