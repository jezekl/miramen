import { GuitarParam } from './guitar-param';

export interface Guitar {
  name: string;
  description: string;
  params: GuitarParam[]
}
