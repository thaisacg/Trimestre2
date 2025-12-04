import { MeioPagamento } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereMeioPag(formData){
    'use server';
    const dados = {
        dataPag: formData.get('data'),
        valor: formData.get('valor'),
        statusPag: formData.get('statusPag'),
        descMeioPag: formData.get('descMeioPag')

    };
    await MeioPagamento.create(dados);
    redirect('/meiopag');
}

function TelaNovoMeioPag(){
    return (
        <form action={insereMeioPag}>

            <label htmlFor="data">Data</label><br/>
            <input type="date" name="data"/> <br/>

            <label htmlFor="valor">Valor</label><br/>
            <input type="text" name="valor"/> <br/>

            <label htmlFor="statusPag">Status</label><br/>
            <input type="text" name="statusPag"/> <br/>
           
            <label htmlFor="descMeioPag">Descrição</label><br/>
            <input type="text" name="descMeioPag"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovoMeioPag;