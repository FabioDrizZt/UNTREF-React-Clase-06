import { useState, useEffect } from 'react'
import axios from 'axios'

export default function usePersonajes () {
  const [personajes, setPersonajes] = useState([])
  const [pagina, setPagina] = useState(1)
  const [cantidadPaginas, setCantidadPaginas] = useState(0)

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character?page=${pagina}`)
      .then(response => {
        setCantidadPaginas(response.data.info.pages)
        setPersonajes(response.data.results)
      })
      .catch(error => console.error({ error }))
  }, [pagina])

  const siguientePagina = () => { setPagina(pagina % cantidadPaginas + 1) }
  const anteriorPagina = () => { setPagina((pagina - 2 + cantidadPaginas) % cantidadPaginas + 1) }

  return { personajes, siguientePagina, anteriorPagina }
}
