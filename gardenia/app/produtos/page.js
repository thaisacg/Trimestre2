import { Produto } from "../../database/tables";
import { redirect } from "next/navigation";

import "../css/listagem.css";


async function deletarProduto(formData) {
    'use server';
    const id = formData.get('id');
    const produtos = await Produto.findByPk(id);
    await produtos.destroy();
    redirect('/produtos');
}

async function Tela_Produto() {
    const produtos = await Produto.findAll();
    return (
        <div>
            <h1>Listar produtos</h1>
            <a href="/produtos/novo">Criar produto</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITULO</th>
                        <th>PRECO</th>
                        <th>ESTOQUE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        produtos.map(function (fil) {
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.id}</td>
                                    <td>{fil.nome}</td>
                                    <td>{fil.preco}</td>
                                    <td>{fil.estoque}</td>
                                    <td>
                                        <form action={'/produtos/edita'}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={deletarProduto}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Exluir</button>
                                        </form>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Tela_Produto;