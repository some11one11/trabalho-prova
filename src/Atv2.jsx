import { useState } from 'react'
import TextField from '@mui/material/TextField'
import './Atv2.css'
function Atv2() {
  const [preco, setPreco] = useState(0);
  const [erro, setErro] = useState('');
  function calcularPreco(valor) {


  if (!valor) {
    setPreco( '')
    setErro('')
    return
  }

  const pesoTotal = parseFloat(valor)

  if (pesoTotal <= 0) {
    setPreco('')
    setErro('Peso total deve ser um número positivo')

  } 
 else if (pesoTotal < 5) {
    setPreco(10)
    setErro('')

  } else if (pesoTotal <= 20) {
    setPreco(20)
    setErro('')

  } else {
    setPreco(50)
    setErro('')
  }
}
  const inputEstilo = {
    width: "250px",
    margin: "10px auto",

    "& .MuiOutlinedInput-root": {
      height: "50px",
      borderRadius: "18px",
      color: "white",
      backgroundColor: "#1976d2",
      transition: "all 0.3s ease",
      boxShadow: "0 0 4px #1976d2",

      "& fieldset": {
        border: "none",
      },

      "&:hover": {
        transform: "scale(1.03)",
        boxShadow: "0 0 8px #1976d2",
        backgroundColor: "#1565c0",
      },

      "&.Mui-focused": {
        boxShadow: "0 0 10px #1976d2",
        backgroundColor: "#1565c0",
      },
    },

    "& input": {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    },
  }
  return (
    <div className="container">
      <div className='cont2' >
        <div className="miniContainer">
          {preco && (<h1 className='preco'>
            Preço com Taxa: R${preco}
          </h1>)}
          {erro && (<h1 className='erro'>
            {erro}
          </h1>)}
          <TextField
            placeholder="Insira o Peso Total"
            type="number"
            onChange={(e) => calcularPreco(e.target.value)}
            className='input'
            sx={inputEstilo}
          />
        </div>


      </div>

    </div>
  )

}

export default Atv2
