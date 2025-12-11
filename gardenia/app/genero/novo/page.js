import { Genero } from '../../../database/tables';
import { redirect } from 'next/navigation';

import "../../css/cadastro.css";
import "../../css/base.css";

async function insereGenero(formData){
    'use server';
    const dados = {
        nome: formData.get('nome'),
        paisOrigem: formData.get('paisOrigem'),
        anoOrigem: formData.get('anoOrigem')
    };

    await Genero.create(dados);
    redirect('/genero');
}

function TelaNovoGenero(){
    return (
        <div> 
            <form action={insereGenero}>

                <label htmlFor="nome">Nome</label><br/>
                <input type="text" name="nome"/> <br/>

                <label htmlFor="paisOrigem">País de origem</label><br/>
                <input type="text" name="paisOrigem"/> <br/>

                <label htmlFor="anoOrigem">Ano de origem</label><br/>
                <input type="text" name="anoOrigem"/> <br/>

                <button className='bt-classico'>Cadastrar</button>

            </form>
        </div>
    );
}

export default TelaNovoGenero;
