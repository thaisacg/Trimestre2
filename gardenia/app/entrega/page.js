import { Entrega } from "../../database/tables";

async function Tela_Entrega(){
const entrega = await Entrega.findAll();
    return(
        <>
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
                            </tr>
                        );
                    })
                }
            </tbody>
            </table>
            
        </>
    );
}

export default Tela_Entrega;