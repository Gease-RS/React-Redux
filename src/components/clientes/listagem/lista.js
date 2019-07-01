import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Cliente = (cliente) => {
    <tr>
        <td>{cliente.nome}</td>
        <td>{cliente.endereco}</td>
        <td>{cliente.email}</td>
        <td>{cliente.cpf}</td>
    </tr>
}

class ListaClientes extends React.Component {
    
    componentDidMount(){
        this.props.getClientes
    }

    render() {
        const {data} = this.props;
        return(
            <div className="ListaClientes">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((cliente, index) => (
                                <Cliente cliente={cliente} key={index} />
                            ))
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    clientes: state.clientes.clientes
})

export default connect(mapStateToProps, actions)(ListaClientes)