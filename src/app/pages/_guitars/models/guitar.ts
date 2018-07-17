import { GuitarParam } from './guitar-param';
import { McRAIImage } from 'mcrai-ui';

export interface Guitar {
  name: string;
  description: string;
  params: GuitarParam[];
  images: McRAIImage[];
}
