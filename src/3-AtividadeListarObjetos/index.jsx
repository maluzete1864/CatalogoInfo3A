// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {

  const [listaProdutos, setProdutos] = useState([
    { id: 1, titulo: 'As Vantagens de Ser Invisível', preco: 'R$ 30,00' },
    { id: 2, titulo: 'Six of Crows', preco: 'R$ 40,00' },
    { id: 3, titulo: 'Crooked Kingdom', preco: 'R$ 45,00' }

  ])
  return (
    <div>
      <h1>Meus Livros Favoritos:</h1>
      {
        listaProdutos.map((produto) =>
          <div key={produto.id}>
            <p>{produto.titulo}</p>
            <p>{produto.preco}</p>
          </div>
        )
      }
    </div>
  )
}




