import "../css/listagem.css";

import { Cliente } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletarCliente(formData) {
    'use server';
    const id = formData.get(';id');
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
    redirect('/cliente');
}

async function Tela_Cliente() {
    const cliente = await Cliente.findAll();
    return (
        <div>
            <h1>Listar clientes</h1>
            <a href="/cliente/novo">Criar novo cliente</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>EMAIL</th>
                        <th>TELEFONE</th>
                        <th>CEP</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cliente.map(function (fil) {
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.nome}</td>
                                    <td>{fil.email}</td>
                                    <td>{fil.telefone}</td>
                                    <td>{fil.cep}</td>
                                    <td>

                                        <form action={'/cliente/edita'}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={deletarCliente}>
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


export default Tela_Cliente;