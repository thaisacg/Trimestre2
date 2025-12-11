import { Genero } from '../../../database/tables'
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function editaGenero(formData){
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const paisOrigem = formData.get('paisOrigem');
    const anoOrigem = formData.get('anoOrigem');

    const genero = await Genero.findByPk(id);
    genero.nome = nome;
    genero.paisOrigem = paisOrigem;
    genero.anoOrigem = anoOrigem;

    await genero.save();
    redirect('/genero');
}

async function telaEditaGenero({ searchParams }){
    const id = searchParams.id;
    const genero = await Genero.findByPk(id);
    return (
        <div>
        <h1>Editando o gênero</h1>

        <form action={editaGenero}>

            <input type="hidden" name="id" defaultValue={genero.id} />

            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={genero.nome}/> <br/>

            <label htmlFor="paisOrigem">País de origem</label><br/>
            <input type="text" name="paisOrigem" defaultValue={genero.paisOrigem} /> <br/>

            <label htmlFor="anoOrigem">Ano de origem</label><br/>
            <input type="text" name="anoOrigem" defaultValue={genero.anoOrigem} /> <br/>

            <button className='bt-classico'>Salvar</button>

        </form>

        </div>
    )

}

export default telaEditaGenero;
