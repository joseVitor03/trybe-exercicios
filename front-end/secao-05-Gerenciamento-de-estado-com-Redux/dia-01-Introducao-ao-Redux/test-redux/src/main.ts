import './style.css'
import { store } from './redux/reducer/store';
import { Increment, Decrement } from './redux/action';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Contador</h1>
    <p></p>
    <button id="btn-inc">Incrementa</button>
    <button id="btn-dec">Decrementa</button>
  </div>
`
const buttonInc = document.querySelector('#btn-inc') as HTMLButtonElement;
const buttonDec = document.querySelector('#btn-dec') as HTMLButtonElement;

buttonInc.addEventListener('click', () => {
  store.dispatch(Increment());
});

buttonDec.addEventListener('click', () => {
  store.dispatch(Decrement());
})

store.subscribe(() => {
  const { count } = store.getState();
  const countText = document.querySelector('p') as HTMLElement;
  countText.innerHTML = count.toString();
})