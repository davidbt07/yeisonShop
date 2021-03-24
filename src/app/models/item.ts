import { Seller } from './seller';
import { Description } from './description';

export class Item{
    id: string;
    title: string;
    thumbnail: string;
    seller: Seller;
    price: string;
    description: Description;
}