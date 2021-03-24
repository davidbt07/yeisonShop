import { Item } from './item'

export class Query{
    site_id: string;
    query: string;
    paging: number;
    results: Item[];
}