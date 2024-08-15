// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        { id: 1, titulo: 'As Vantagens de Ser Invisível', preco: 'R$ 30,00' },
        { id: 2, titulo: 'Six of Crows', preco: 'R$ 40,00' },
        { id: 3, titulo: 'Crooked Kingdom', preco: 'R$ 45,00' }]);


    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto])
    }

    const removerPedido = (id) => {
        let remover = false;
        let listaAux = listaPedidos.filter((produto) => {
            if (remover == false) {
                if (produto.id !== id) {
                    return produto
                } else {
                    remover = true;
                    return null
                }
            }
        });
        setListaPedidos(listaAux);
    }

    return (
        <div>
            <h1>Meus Livros Favoritos:</h1>
            {
                listaProdutos.map((produto) =>
                    <div key={produto.id}>
                        <p>{produto.titulo}</p>
                        <p>{produto.preco}</p>
                        <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
                    </div>
                )
            }
            {
                listaPedidos.map((produto) =>
                    <div key={produto.id}>
                        <p>{produto.titulo}</p>
                        <p>{produto.preco}</p>

                    </div>

                )
            }
        </div>
    )
}