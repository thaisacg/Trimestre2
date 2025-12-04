import "../css/listagem.css";
import { Entrega } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletarEntrega(formData) {
    'use server';
    const id = formData.get('id');
    const entrega = await Entrega.findByPk(id);
    await entrega.destroy();
    redirect('/entrega');
}

async function Tela_Entrega(){
const entrega = await Entrega.findAll();
    return(
        <div>
            <h1>Listar as entregas</h1>
            <a href="/entrega/novo">Criar nova entrega</a>
            <table border="1">
              <thead>
                    <tr>
                        <th>STATUS</th>
                        <th>ENTREGA PREVISTA</th>
                        <th>DATA ENVIO</th>
                        <th>COD RASTREAMENTO</th>
                    </tr>
                </thead>  
                <tbody>
                {
                    entrega.map(function(fil){
                        return (
                            <tr key={fil.id}>
                                <td>{fil.statusEntrega}</td>
                                <td>{new Date(fil.dataEntregaPrevista).toLocaleDateString()}</td>
                                <td>{new Date(fil.dataEnvio).toLocaleDateString()}</td>
                                <td>{fil.codRastreamento}</td>
                                <td>

                                        <form action={'/entrega/edita'}>
                                            <input type="hidden" name="id" defaultValue={fil.id} />
                                            <button>Editar</button>
                                        </form>

                                        <form action={deletarEntrega}>
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

export default Tela_Entrega;