import usePersonajes from '../hooks/usePersonajes'
import useToggle from '../hooks/useToggle'
import Toggle from './Toggle'

export default function Personajes () {
  const { personajes, siguientePagina, anteriorPagina } = usePersonajes()
  const [esVisible, cambiarVisibilidad] = useToggle(false)

  return (
    <div>
      <h1>Personajes de Rick y Morty</h1>
      <button onClick={anteriorPagina}> Pagina Anterior </button>
      <button onClick={siguientePagina}> Pagina Siguiente </button>
      <Toggle handleClick={cambiarVisibilidad} on='Ocultar Personajes' off='Ver Personajes' />

      {esVisible &&
        <ul>
          {personajes.map(personaje => (
            <li key={personaje.id}>
              <h2>{personaje.name}</h2>
              <img src={personaje.image} alt={'imagen de ' + personaje.name} />
            </li>
          )
          )}
        </ul>}
    </div>
  )
}
