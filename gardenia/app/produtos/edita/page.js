import { Produto } from '../../../database/tables'
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function editaProduto(formData) {
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const preco = formData.get('preco');
    const estoque = formData.get('estoque');

    const produtos = await Produto.findByPk(id);
    produtos.nome = nome;
    produtos.preco = preco;
    produtos.estoque = estoque;

    await produtos.save();
    redirect('/produtos');
}

async function telaEditaProduto({ searchParams }) {
    const id = searchParams.id;
    const produtos = await Produto.findByPk(id);
    return (
        <div>
            <h1>Editando o produto</h1>

            <form action={editaProduto}>

                <input type="hidden" name="id" defaultValue={produtos.id} />

                <label htmlFor="nome">Nome</label><br />
                <input type="text" name="nome" defaultValue={produtos.nome} /> <br />

                <label htmlFor="preco">Preco</label><br />
                <input type="text" name="preco" defaultValue={produtos.preco} /> <br />

                <label htmlFor="estoque">Estoque</label><br />
                <input type="text" name="estoque" defaultValue={produtos.estoque} /> <br />

                <button className='bt-classico'>Salvar</button>

            </form>

        </div>
    )

}

export default telaEditaProduto;