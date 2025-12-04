import { Cliente } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function insereCliente(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        cep: formData.get('cep')

    };
    await Cliente.create(dados);
    redirect('/cliente');
}

function TelaNovoCliente(){
    return (
    <div>
        <form action={insereCliente}>


            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="email">E-mail</label><br/>
            <input type="text" name="email"/> <br/>

            <label htmlFor="telefone">Telefone</label><br/>
            <input type="text" name="telefone"/> <br/>

            <label htmlFor="cep">Cep</label><br/>
            <input type="text" name="cep"/> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>
        </div>
    );
}

export default TelaNovoCliente;