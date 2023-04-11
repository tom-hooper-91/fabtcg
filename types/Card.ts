import Pitch from "@/types/Pitch";

class Card {
  id: string;
  name: string;
  cost: number;
  pitch: Pitch;
  power: number;
  defense: number;
  text: string;

  constructor(
    id: string,
    name: string,
    cost: number,
    pitch: Pitch,
    power: number,
    defense: number,
    text: string
  ) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.pitch = pitch;
    this.power = power;
    this.defense = defense;
    this.text = text;
  }
}

export default Card;