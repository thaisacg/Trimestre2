import { Artista } from '../../../database/tables'
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function editaArtista(formData){
    'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const pais = formData.get('pais');
    const gravadora = formData.get('gravadora');

    const cliente = await Artista.findByPk(id);
    cliente.nome = nome;
    cliente.pais = pais;
    cliente.gravadora = gravadora;
 

    await artista.save();
    redirect('/artista');
}

async function telaEditaArtista({ searchParams}){
    const id = searchParams.id;
    const artista = await Artista.findByPk(id);
    return (
        <div>
        <h1>Editando o artista</h1>

        <form action={editaArtista}>

        <input type="hidden" name="id" defaultValue={artista.id} />

            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome" defaultValue={artista.nome}/> <br/>

            <label htmlFor="pais">pais</label><br/>
            <input type="text" name="pais" defaultValue={artista.pais} /> <br/>

            <label htmlFor="gravadora">Telefone</label><br/>
            <input type="text" name="gravadora" defaultValue={artista.gravadora} /> <br/>


            <button className='bt-classico'>Salvar</button>

        </form>

        </div>
    )

}

export default telaEditaArtista;