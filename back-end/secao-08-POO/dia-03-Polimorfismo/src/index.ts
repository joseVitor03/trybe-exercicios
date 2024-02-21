import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";

const trybeClub = new Clube();

const trybeQuadra = new QuadraFutebol();

trybeClub.adicionarQuadra(trybeQuadra);

console.log(
trybeQuadra.reservar(new Date('01/02/2024')));