import { ITechnology } from './Technology';

export interface IWork {
  company: string;
  titles: string[];
  dateStart: string[];
  dateEnd: string[];
  description: string[][];
  technologies: ITechnology[];
}
