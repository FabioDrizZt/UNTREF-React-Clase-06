import useToggle from '../hooks/useToggle'

export default function Toggle ({ handleClick = () => { }, on = 'ON', off = 'OFF' }) {
  const [toggle, setToggle] = useToggle()
  const handler = () => {
    setToggle()
    handleClick()
  }
  return <button onClick={handler}>{toggle ? on : off}</button>
}
