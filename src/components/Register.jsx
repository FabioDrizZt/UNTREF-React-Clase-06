import useInput from '../hooks/useInput'

export default function Register () {
  const nombreInput = useInput('')
  const apellidoInput = useInput('')
  const emailInput = useInput('')

  const handleSubmit = (e) => {
    e.preventDefault()
    nombreInput.reset()
    apellidoInput.reset()
    emailInput.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nombre'>Nombre: </label>
        <input type='text' name='nombre' id='nombre' {...nombreInput} />
        <label htmlFor='apellido'>Apellido: </label>
        <input type='text' name='apellido' id='apellido' {...apellidoInput} />
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email' id='email' {...emailInput} />
        <button type='submit'>Enviar</button>
      </form>
      <h2>Vista de valores</h2>
      <p>nombre: {nombreInput.value}</p>
      <p>apellido: {apellidoInput.value}</p>
      <p>Email: {emailInput.value}</p>
    </>
  )
}
