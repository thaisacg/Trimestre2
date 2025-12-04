import { Produto } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereProduto(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'),
        preco: formData.get('preco'),
        estoque: formData.get('estoque')

    };
    await Produto.create(dados);
    redirect('/produtos');
}

function TelaNovoProduto(){
    return (
        <form action={insereProduto}>

            <label htmlFor="nome">Titulo</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="preco">Preco</label><br/>
            <input type="text" name="preco"/> <br/>

            <label htmlFor="estoque">Estoque</label><br/>
            <input type="text" name="estoque"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovoProduto;