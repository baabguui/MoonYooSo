import { PaintingId, TextId, EssayId } from '.';

export default interface Exhibition {
  id: number;
  title: string;
  place: string;
  period: string;
  year: number;
  paintings: PaintingId[];
  texts: TextId[];
  essays: EssayId[];
}

export type ExhibitionId = Pick<Exhibition, 'id'>;
