import "../app/css/menu.css";

function Menu() {
    return (
        <nav>
            <div>
                <h1>Gardenia</h1>
            </div>
            <div>
                <a href="/">Home </a> 
                <a href="/produtos">Produtos </a> 
                <a href="/entrega">Entrega </a> 
                <a href="/cliente">Cliente </a> 
                <a href="/meiopag">Meio de pagamento </a>
                <a href="/artista">Artista </a>
                <a href="/genero">Genero </a>

            </div>
        </nav>
    );
}

export default Menu;