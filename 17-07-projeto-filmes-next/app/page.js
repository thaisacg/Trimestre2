function Home(){
    console.log('nome...');
    const nome = 'Roberto';
    return(
        <>
        <h1>Página Inicial</h1>
        <p>Teste de parágrafo.</p>
        <p>Olá, {nome}</p>
        </>
    );
} 

export default Home;