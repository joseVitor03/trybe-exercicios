import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { actionCreator, actionDecrement } from './redux/action'

function App() {
  type PropState = {
    count: number
  }
  const dispatch = useDispatch();

  function handleDecrement() {
    dispatch(actionDecrement())
  }

  function handle5Click() {
    dispatch(actionCreator(5));
  }
  function handleClick() {
    dispatch(actionCreator());
  }
  const { count } = useSelector((state: PropState) => state)
  return (
    <>
      <div>
        <h2>Contador</h2>
        <p>{count}</p>
        <button onClick={ handleClick }>Incrementa</button>
        <button onClick={ handle5Click }>Incrementa + 5</button>
        <button onClick={ handleDecrement }>Decrementa</button>
      </div>
    </>
  )
}

export default App
