import { Entrega } from '../../../database/tables'
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function editaEntrega(formData){
    'use server';

    const id = formData.get('id');
    const statusEntrega = formData.get('statusEntrega');
    const dataEntregaPrevista = formData.get('dataEntregaPrevista');
    const dataEnvio = formData.get('dataEnvio');
    const codRastreamento = formData.get('codRastreamento');

    const entrega = await Entrega.findByPk(id);
    entrega.statusEntrega = statusEntrega;
    entrega.dataEntregaPrevista = dataEntregaPrevista;
    entrega.dataEnvio = dataEnvio;
    entrega.codRastreamento = codRastreamento;

    await entrega.save();
    redirect('/entrega');
}

async function telaEditaEntrega({ searchParams}){
    const id = searchParams.id;
    const entrega = await Entrega.findByPk(id);
    return (
        <div>
        <h1>Editando a entrega</h1>

        <form action={editaEntrega}>

        <input type="hidden" name="id" defaultValue={entrega.id} />

            <label htmlFor="statusEntrega">Status</label><br/>
            <input type="text" name="statusEntrega" defaultValue={entrega.statusEntrega}/> <br/>

            <label htmlFor="dataEntregaPrevista">Data prevista</label><br/>
            <input type="text" name="dataEntregaPrevista" defaultValue={entrega.dataEntregaPrevista} /> <br/>

            <label htmlFor="dataEnvio">Data de envio</label><br/>
            <input type="text" name="dataEnvio" defaultValue={entrega.dataEnvio} /> <br/>

            <label htmlFor="codRastreamentoep">Código de rastreio</label><br/>
            <input type="text" name="codRastreamentoep" defaultValue={entrega.codRastreamentoep} /> <br/>

            <button className='bt-classico'>Salvar</button>

        </form>

        </div>
    )

}

export default telaEditaEntrega;