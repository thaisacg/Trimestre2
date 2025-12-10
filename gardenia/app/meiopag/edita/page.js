import { MeioPagamento } from '../../../database/tables'
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function editaMeioPagamento(formData){
    'use server';

    const id = formData.get('id');
    const dataPag = formData.get('dataPag');
    const valor = formData.get('valor');
    const statusPag = formData.get('statusPag');
    const descMeioPag = formData.get('descMeioPag');

    const meiopag = await MeioPagamento.findByPk(id);
    meiopag.dataPag = dataPag;
    meiopag.valor = valor;
    meiopag.statusPag = statusPag;
    meiopag.descMeioPag = descMeioPag;

    await meiopag.save();
    redirect('/meiopag');
}

async function telaEditaMeioPagamento({ searchParams}){
    const id = searchParams.id;
    const meiopag = await MeioPagamento.findByPk(id);
    return (
        <div>
        <h1>Editando o meio de pagamento</h1>

        <form action={editaMeioPagamento}>

        <input type="hidden" name="id" defaultValue={meiopag.id} />

            <label htmlFor="dataPag">Data Pagamento</label><br/>
            <input type="date" name="dataPag" defaultValue={meiopag.nome}/> <br/>

            <label htmlFor="valor">E-mail</label><br/>
            <input type="text" name="valor" defaultValue={meiopag.valor} /> <br/>

            <label htmlFor="statusPag">Status de Pagamento</label><br/>
            <input type="text" name="statusPag" defaultValue={meiopag.statusPag} /> <br/>

            <label htmlFor="descMeioPag">descMeioPag</label><br/>
            <input type="text" name="descMeioPag" defaultValue={meiopag.descMeioPag} /> <br/>

            <button className='bt-classico'>Salvar</button>

        </form>

        </div>
    )

}

export default telaEditaMeioPagamento;