import { Artista } from "../../database/tables";
import { redirect } from "next/navigation";
// v
import "../css/listagem.css";

// v^
async function deletarArtista(formData) {
    'use server';
    const id = formData.get(';id');
    const artista = await Artista.findByPk(id);
    await artista.destroy();
    redirect('/artista');
}
// ^

async function Tela_Artista() {
    const artista = await Artista.findAll();
    return (
        <div>
            <h1>Listar artista</h1>
            <a href="/artista/novo">Criar novo artista</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>PAÍS</th>
                        <th>GRAVADORA</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        artista.map(function (fil) {
                            return (
                                <tr key={fil.id}>
                                    <td>{fil.nome}</td>
                                    <td>{fil.pais}</td>
                                    <td>{fil.gravadora}</td>
                                    
                                    <td>

                                        <form action={'/artista/edita'}>
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


export default Tela_Artista;