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
    return new Card(
      card.unique_id,
      card.name,
      card.cost,
      card.pitch,
      card.power,
      card.defense,
      card.functional_text_plain
    )
  });
}

export default hydrateCards;