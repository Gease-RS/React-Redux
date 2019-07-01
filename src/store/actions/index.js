import { 
    GET_CLIENTES,
    ADD_CLIENTE,
    UPDATE_CLIENTE,
    REMOVE_CLIENTE,
    SET_ORDENACAO
} from './types';

const getDate = () => new Date().getTime();

const generateId = () => Math.floor(Math.random() * 100000 + 100000)

const prepararCliente = (cliente => {
    const id = generateId();
    const criadoEm = getDate();
    const atualizadoEm = getDate();
    return { ...cliente, id, criadoEm, atualizadoEm };
})

const data = [
    {
        id: 1,
        nome: "João",
        cpf: "999.333.444-78",
        telefone: "3333-4444",
        email: "bento@bento.com.br",
        criadoEm: getDate(),
        atualizadoEm: getDate()
    }
];

export const getClientes = () => ({ type: GET_CLIENTES, data });

export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: prepararCliente(cliente) });

export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: { id, ...cliente, atualizadoEm} });

export const removeCliente = (id) => ({type: REMOVE_CLIENTE, id });

export const setOrdenacao = (ev) => ({ type: SET_ORDENACAO, ordenacao: ev.target.value })