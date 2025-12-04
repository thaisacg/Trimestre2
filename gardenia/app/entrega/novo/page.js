import { Entrega } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereEntrega(formData){
    'use server';
    const dados = {
        statusEntrega: formData.get('statusEntrega'),
        dataEntregaPrevista: formData.get('dataEntregaPrevista'),
        dataEnvio: formData.get('dataEnvio'),
        codRastreamento: formData.get('codRastreamento')

    };
    await Entrega.create(dados);
    redirect('/entrega');
}

function TelaNovaEntrega(){
    return (
        <form action={insereEntrega}>

            <label htmlFor="statusEntrega">Status</label><br/>
            <input type="text" name="statusEntrega"/> <br/>

            <label htmlFor="dataEntregaPrevista">EntregaPrevista</label><br/>
            <input type="date" name="dataEntregaPrevista"/> <br/>

            <label htmlFor="dataEnvio">DataEnvio</label><br/>
            <input type="date" name="dataEnvio"/> <br/>

            <label htmlFor="codRastreamento">CodigoRastreio</label><br/>
            <input type="text" name="codRastreamento"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovaEntrega;