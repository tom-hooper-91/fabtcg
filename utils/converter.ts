import axios from 'axios';
import Card from '@/types/Card';

const fetchCards = async () => {
  const rawCards = await axios.get('https://the-fab-cube.github.io/flesh-and-blood-cards/json/english/card.json')

  return rawCards.data; 
}

const hydrateCards = async ()  => {
  const cards = await fetchCards();
  console.log('raw cards \n', cards)

  return cards.map((card: any) => {
    let convertedCard: Card = {
      id: card.unique_id,
      name: card.name,
      cost: card.cost,
      pitch: card.pitch,
      power: card.power,
      defense: card.defense,
      text: card.functional_text_plain
    }

    return convertedCard;
  });
}

export default hydrateCards;