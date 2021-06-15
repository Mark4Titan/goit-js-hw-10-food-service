import './css/styles.css';
import markupElement from './menu.json';
import foodCards from './templates/food-cards.hbs';
import theme from './theme.js';


const foodMenu = document.querySelector('.js-menu');

function createFoodCardsMarKup(cards) {
  return cards.map(
    e => foodCards(e)
  ).join('');
}
const caMark = createFoodCardsMarKup(markupElement);

foodMenu.insertAdjacentHTML('beforeend', caMark);

