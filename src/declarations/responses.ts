import { IPeople } from 'swapi-ts';

export interface PeopleData {
  count: number;
  next?: string;
  previous?: string;
  results: IPeople[];
}
