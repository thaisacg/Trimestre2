import { Filme } from '../../../database/tables';
import { redirect } from 'next/navigation';

async function insereFilme(formData){
    'use server';
    const dados = {
        titulo: formData.get('titulo'),
        descricao: formData.get('descricao'),
        ano: formData.get('ano')

    };
    await Filme.create(dados);
    redirect('/filmes');
}

function TelaNovoFilme(){
    return (
        <form action={insereFilme}>
            <label htmlFor="titulo">Titulo</label><br/>
            <input type="text" name="titulo"/> <br/>

            <label htmlFor="descricao">Descrição</label><br/>
            <input type="text" name="descricao"/> <br/>

            <label htmlFor="ano">Ano</label><br/>
            <input type="text" name="ano"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovoFilme;