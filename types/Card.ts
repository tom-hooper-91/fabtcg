import Pitch from "@/types/Pitch";

interface Card {
  id: string;
  name: string;
  cost: number;
  pitch: Pitch;
  power: number;
  defense: number;
  text: string;
}

export default Card;