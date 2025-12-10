import { MeioPagamento } from "../../database/tables";

import "../css/listagem.css";
import { redirect } from "next/navigation";
//v
async function deletarMeioPagamento(formData) {
    'use server';
    const id = formData.get(';id');
    const meiopag = await meiopag.findByPk(id);
    await meiopag.destroy();
    redirect('/meiopag');
}

async function Tela_MeioPagamento() {
    const meiopag = await MeioPagamento.findAll();
    return (
        <div>
            <h1>Listar meios de pagamento</h1>
            <a href="/meiopag/novo">Criar meio de pagamento</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>VALOR</th>
                        <th>STATUS PAG</th>
                        <th>DESCRIÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        meiopag.map(function (fil) {
                            return (
                                <tr key={fil.id}>
                                    <td>{new Date(fil.dataPag).toLocaleDateString()}</td>
                                    <td>{fil.valor}</td>
                                    <td>{fil.statusPag}</td>
                                    <td>{fil.descMeioPag}</td>
                                    <td>
                                        <form action={'/meiopag/edita'}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={deletarMeioPagamento}>
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

export default Tela_MeioPagamento;