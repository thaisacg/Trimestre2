import { Cliente } from '../../../database/tables'
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function editaCliente(formData){
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const cep = formData.get('cep');

    const cliente = await Cliente.findByPk(id);
    cliente.nome = nome;
    cliente.email = email;
    cliente.telefone = telefone;
    cliente.cep = cep;

    await cliente.save();
    redirect('/cliente');
}

async function telaEditaCliente({ searchParams}){
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return (
        <div>
        <h1>Editando o cliente</h1>

        <form action={editaCliente}>

        <input type="hidden" name="id" defaultValue={cliente.id} />

            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={cliente.nome}/> <br/>

            <label htmlFor="email">E-mail</label><br/>
            <input type="text" name="email" defaultValue={cliente.email} /> <br/>

            <label htmlFor="telefone">Telefone</label><br/>
            <input type="text" name="telefone" defaultValue={cliente.telefone} /> <br/>

            <label htmlFor="cep">Cep</label><br/>
            <input type="text" name="cep" defaultValue={cliente.cep} /> <br/>

            <button className='bt-classico'>Salvar</button>

        </form>

        </div>
    )

}

export default telaEditaCliente;