import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ResultFinal } from './type';
import { searchCharacter } from './redux/actions';

function App() {
  const [character, setCharacter] = useState<string>('');
  const dispatch: Dispatch = useDispatch();
  const { name, gender, titles, isLoading, born } = useSelector((state: ResultFinal) => state.characterReducer)
  console.log(gender);
  
  if (isLoading) {
   return <h1>Carregando...</h1>
  }
  return (
    <>
      <h1>Busca Personagens GOT</h1>
      <input
        type="text"
        placeholder='Nome e Sobrenome'
        onChange={ (e) => setCharacter(e.target.value) }
      />
      <button onClick={ () => dispatch(searchCharacter(character))}>Buscar</button>
      <section>
        <h3>{name}</h3>
        <h5>{born}</h5>
        <h6>{gender}</h6>
        <div>
            { titles && titles.map((title) => (
              <ul key={ title }>
                <li>{title}</li>
              </ul>
            ))}
        </div>
      </section>
    </>
  )
}

export default App
