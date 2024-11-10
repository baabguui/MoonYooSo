import { ExhibitionId, TextId, EssayId } from '.';

export default interface Painting {
  id: number;
  title: string;
  media: string;
  size: string;
  year: string;
  exhibitions: ExhibitionId[];
  texts: TextId[];
  essays: EssayId[];
}

export type PaintingId = Pick<Painting, 'id'>;
