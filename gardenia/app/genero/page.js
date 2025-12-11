import { Genero } from "../../database/tables";
import { redirect } from "next/navigation";
// v
import "../css/listagem.css";

// v^
async function deletarGenero(formData) {
    'use server';
    const id = formData.get(';id');
    const genero = await Genero.findByPk(id);
    await genero.destroy();
    redirect('/genero');
}
// ^

async function Tela_Genero() {
    const genero = await Genero.findAll();
    return (
        <div>
            <h1>Listar generos</h1>
            <a href="/genero/novo">Criar novo genero</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>PAÍS DE ORIGEM</th>
                        <th>ANO DE ORIGEM</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        genero.map(function (fil) {
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.nome}</td>
                                    <td>{fil.paisOrigem}</td>
                                    <td>{fil.anoOrigem}</td>
                                    <td>

                                        <form action={'/genero/edita'}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={deletarGenero}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Excluir</button>
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

export default Tela_Genero;
