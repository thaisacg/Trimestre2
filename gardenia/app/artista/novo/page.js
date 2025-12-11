import { Artista } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function insereArtista(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'),
        pais: formData.get('pais'),
        gravadora: formData.get('gravadora'),

    };
    await Artista.create(dados);
    redirect('/artista');
}

function TelaNovoArtista(){
    return (
        //v
    <div> 
        <form action={insereArtista}>


            <label htmlFor="nome">Nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="pais">País</label><br/>
            <input type="text" name="pais"/> <br/>

            <label htmlFor="gravadora">Gravadora</label><br/>
            <input type="text" name="gravadora"/> <br/>

            <button className='bt-classico'>Cadastrar</button>

        </form>
        </div>
    );
}

export default TelaNovoArtista;