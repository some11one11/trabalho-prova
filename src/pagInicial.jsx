import { useNavigate } from 'react-router-dom'
import './PagInicial.css'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
function PagInicial() {
  const navigate = useNavigate()


  const botaoEstilo = {
    height: "50px",
    width: "150px",
    backgroundColor: "#1976d2",
    color: "white",
    transition: "all 0.3s ease",
    boxShadow: "0 0 5px #1976d2",
    borderRadius: "18px 18px 18px 18px",
    margin: "5px",

    "&:hover": {
      backgroundColor: "#1565c0",
      transform: "scale(1.08)",
      boxShadow: "0 0 20px #1976d2, 0 0 40px #1976d2",
    },
  }

  return (
    <div className='container'>
      <div>
        <h1 className='texto'>Selecione uma atividade</h1>

        <Box display="flex" gap={2}>
          <Button sx={botaoEstilo} onClick={() => navigate('/Atv1')}>
            Atividade 1
          </Button>

          <Button sx={botaoEstilo} onClick={() => navigate('/Atv2')}>
            Atividade 2
          </Button>

          <Button sx={botaoEstilo} onClick={() => navigate('/Atv3')}>
            Atividade 3
          </Button>
        </Box>
      </div>

    </div>
  )
}

export default PagInicial

