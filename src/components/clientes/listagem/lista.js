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

    ordenacao = (a, b) => {
        const { ordenacao } = this.props
        if( ordenacao === 'a-z') return a.nome.localeCompare(b.nome)
        else if( ordenacao === 'z-a' ) return -1 * a.nome.localeCompare(b.nome)
        else if( ordenacao === 'criacao' ) return new Date(a.criadoEm) - new Date(b.criadoEm)
    }

    Pesquisa = ({ nome, endereco, email, cpf }) => {
        const { pesquisa } = this.props
        const item = [nome,enderco,email,cpf].join(';');
        return item.includes(pesquisa)
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
                            data
                            .filter(this.pesquisa)
                            .sort(this.ordenacao)
                            .map((cliente, index) => (
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
    clientes: state.clientes.clientes,
    ordenacao: state.clientes.ordenacao,
    pesquisa: state.clientes.pesquisa
})

export default connect(mapStateToProps, actions)(ListaClientes)