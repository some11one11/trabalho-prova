import { useNavigate } from 'react-router-dom'

function Menu() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Escolha uma atividade</h1>

      <button onClick={() => navigate('/atividade1')}>
        Atividade 1
      </button>

      <button onClick={() => navigate('/atividade2')}>
        Atividade 2
      </button>

      <button onClick={() => navigate('/atividade3')}>
        Atividade 3
      </button>
    </div>
  )
}

export default Menu