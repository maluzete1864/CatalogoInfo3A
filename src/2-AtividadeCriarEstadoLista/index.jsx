// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.


import {useState} from "react";

export default function Home() {

const [listaProdutos, setProdutos] = useState([
    {id: 1, titulo: 'As Vantagens de Ser Invisível', preco: 'R$ 30,00'},
    {id: 2, titulo: 'Six of Crows', preco: 'R$ 40,00'},
    {id: 3, titulo: 'Crooked Kingdom', preco: 'R$ 45,00'}

]);
    return (
        <div>
            <h1>Meus Livros Favoritos:</h1>
        </div>
    );


}
