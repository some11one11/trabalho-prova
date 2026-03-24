import './ATV1.css'
import { useState } from 'react'

function Atv1() {
  const [nome, setNome] = useState('');
  const ICMS = 0.17;
  const [valor, setValor] = useState(0);

  const calculateTax = () => {
    if (valor < 0) {
      return 0;
    }
    if (!isNaN(valor) && !isNaN(ICMS)) {
      const imposto = valor * ICMS;
      return imposto;
    } else {
      return 0;
    }
  };

  return (
    <div class="container">
      <div class="content">
        <h1>Atividade 1</h1>
        <p>Calcular imposto sobre o valor de um produto</p>

      </div>
      <div class="menu">
        <input type="text" maxLength={30} placeholder="Nome do produto" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="number" placeholder="Valor do produto" value={valor} onChange={(e) => setValor(parseFloat(e.target.value))} />

      </div>
      <p>O imposto sobre o produto {nome} é: R$ {calculateTax().toFixed(2)}</p>
      {valor > 0 ? (
        <p>O valor total do produto {nome} é: R$ {(valor + calculateTax()).toFixed(2)}</p>
      ) : (
        <p>Digite um valor válido maior que zero.</p>
      )}
      <h1>Nota Fiscal</h1>
      <div class="nota-fiscal">
        {(!nome || nome.length == 0) ? (
          <p>Produto: Nome inválido</p>
        ) : (
          <p>Produto: {nome}</p>
        )}
        {isNaN(valor) || valor <= 0 ? (
          <p>Valor do Produto: R$0.00</p>
        ) : (
          <p>Valor do Produto: R$ {valor.toFixed(2)}</p>
        )}
        <p>Imposto (ICMS): R$ {calculateTax().toFixed(2)}</p>
        {isNaN(valor) || valor <= 0 ? (
          <p>Valor Total: R$0.00</p>
        ) : (
          <p>Valor Total: R$ {(valor + calculateTax()).toFixed(2)}</p>
        )}

        <h2 className='barcode'>${nome} + ${valor}</h2>
      </div>
    </div>
  )
}

export default Atv1
