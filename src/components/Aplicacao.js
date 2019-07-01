import React from 'react';

import { connect } from 'react-redux'
import * as actions from '../store/actions'

class Aplicacao extends React.Component {
    render() {
        const { valor, adicionarUm } = this.props;
        return(
            <div className="Aplicacao">
                <p>{valor}</p>
                <br />
                <button onClick={() => adicionarUm()}>
                    +
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    valor: state.valores.valor
})

export default connect(mapStateToProps, actions)(Aplicacao);