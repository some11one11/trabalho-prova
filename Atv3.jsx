// 3. Cálculo de preço com frete e desconto combinados 

// Descrição: 
// Desenvolva uma função que calcule o valor final de uma compra considerando tanto o frete 
// quanto descontos progressivos aplicados ao subtotal de produtos. 

// A função deve contemplar: 
// ● Recebimento do valor total da compra; 
// ● Recebimento do valor do frete; 

// ● Aplicação de desconto progressivo: 
// ○ Até R$200 → sem desconto 
// ○ Entre R$ 200 e R$ 500 → 5% de desconto 
// ○ Acima de R$ 500 → 15% de desconto 
// ● Adição do valor do frete após aplicar o desconto; 
// ● Retorno do valor final com duas casas decimais; 
// ● Tratamento de entradas inválidas (negativas ou não numéricas). 

// Importações
import React, { useState } from "react";
import './Atv3css.css';

// Função que define, guarda e modifica os valores
function Atv3() {
  const [valorTotal, setValorTotal] = useState("");
  const [valorFrete, setValorFrete] = useState("");
  const [resultado, setResultado] = useState("");

  // Função de calcular que será usado ao clicar no botão
  function calcular() {

    // Constantes que guardam o valor total e o frete
    const total = parseFloat(valorTotal);
    const frete = parseFloat(valorFrete);

    // Validação para ver se os numeros postos são validos
    if ((isNaN(total) || total < 0) && (isNaN(frete) || frete < 0)){
      setResultado("Ta tudo errado");
      return;
    }

    if (isNaN(total) || total < 0) {
      setResultado("Total da compra inválido");
      return;
    }

    if (isNaN(frete) || frete < 0) {
      setResultado("Frete inválido");
      return;
    }

    // Let do desconto, inicial 0 que se muta dependendo do valor posto
    let desconto = 0;

    // Se o valor for menor ou igual a 200 reais, o desconto será de 0 porcento
    if (total <= 200) {
      desconto = 0;
    } 
    
    // Se o valor for menor ou igual a 500 reais, o desconto será de 5 porcento
    else if (total <= 500) {
      desconto = total * 0.05;
    }
    
    // Se o valor for superior a 500 reais, o desconto será de 15 porcento
    else {
      desconto = total * 0.15;
    }

    // Constante que determina o Valor final
    const valorFinal = (total - desconto + frete);

    // Arruma o valor final e só permite dois numeros após a virgula
    setResultado(valorFinal.toFixed(2));
  }

  // O que mostra na página
  return (
    <div className="App">
      
      {/* Título impresso na página */}
      <h1>Atividade 3</h1>

      {/* Input onde se deve adicionar o valor da compra */}
      <input
        type="number"
        placeholder="Valor total da compra"
        value={valorTotal}
        onChange={(e) => setValorTotal(e.target.value)}
      />

      {/* Input onde se deve adicionar o valor frete */}
      <input
        type="number"
        placeholder="Valor do frete"
        value={valorFrete}
        onChange={(e) => setValorFrete(e.target.value)}
      />

      {/* Botão com função de calcular */}
      <button onClick={calcular}>Calcular</button>

      {/* Texto com o resultado */}
      <p>Resultado: {resultado}</p>
    </div>
  );
}

export default Atv3;