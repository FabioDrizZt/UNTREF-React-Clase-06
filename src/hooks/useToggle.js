import { useState } from 'react'

export default function useToggle (inistialState = false) {
  const [state, setState] = useState(inistialState)
  const setToggle = () => setState(!state)

  return [state, setToggle]
}
