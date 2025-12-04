import { MeioPagamento } from "../../database/tables";

async function Tela_MeioPagamento(){
const meiopag = await MeioPagamento.findAll();
    return(
        <>
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
                    meiopag.map(function(fil){
                        return (
                            <tr key={fil.id}>
                                <td>{new Date(fil.dataPag).toLocaleDateString()}</td>
                                <td>{fil.valor}</td>
                                <td>{fil.statusPag}</td>
                                <td>{fil.descMeioPag}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
            </table>
            
        </>
    );
}

export default Tela_MeioPagamento;