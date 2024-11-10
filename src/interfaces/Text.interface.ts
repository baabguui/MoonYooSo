import { PaintingId, ExhibitionId, EssayId } from '.';

export default interface Text {
  id: number;
  title: string;
  content: string;
  paintings: PaintingId[];
  exhibitions: ExhibitionId[];
  essays: EssayId[];
}

export type TextId = Pick<Text, 'id'>;
