import { useNavigate } from 'react-router-dom'

function PagInicial() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>oi</h1>

      <button onClick={() => navigate('/Atv1')}>
        Atividade 1
      </button>

      <button onClick={() => navigate('/Atv2')}>
        Atividade 2
      </button>

      <button onClick={() => navigate('/Atv3')}>
        Atividade 3
      </button>
    </div>
  )
}

export default PagInicial