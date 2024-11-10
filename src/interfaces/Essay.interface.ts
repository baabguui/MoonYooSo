import { PaintingId, ExhibitionId, TextId } from '.';

export default interface Essay {
  id: number;
  title: string;
  content: string;
  paintings: PaintingId[];
  exhibitions: ExhibitionId[];
  texts: TextId[];
}

export type EssayId = Pick<Essay, 'id'>;
