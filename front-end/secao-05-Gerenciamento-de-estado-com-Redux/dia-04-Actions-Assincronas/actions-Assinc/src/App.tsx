import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from './types';
import { fetchDogImage } from './redux/actions';
import './App.css'

function App() {
  const dispatch: Dispatch = useDispatch();
const image = useSelector((state: ReduxState) => state.dogReducer);
  function handleClick() {
    dispatch(fetchDogImage());
    console.log(image);
    
  }

  if (image.isFetching) {
    <h1>carregando...</h1>
  }
  console.log(image.imageUrl);
  
  return (
    <>
     <h1>Imagens de Cachorros</h1>
     <button onClick={ handleClick }>click</button>
     { image.imageUrl && (<>
      <img src={ image.imageUrl } alt="foto-cachorro" />
     </>)}
    </>
  )
}

export default App
