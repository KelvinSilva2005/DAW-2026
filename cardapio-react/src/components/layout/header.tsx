export function Header() {

    return (

        <header>
            <div className="container">
                <div className="brand">
                    <img src="assets/img/logo_lanchonete.svg" alt="Logo do Cardápio Digital" />
                    <div>
                        <h1>Cardápio Digital</h1>
                        <p>Faça o seu pedido pelo nosso cardápio digital</p>
                    </div>
                </div>
                <div className="cart-button">
                    <img src="assets/img/cart.svg" alt="Logo do Carrinho de Compras" />
                </div>
            </div>
        </header>

    )
}