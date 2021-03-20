import { Seller } from './seller'

export class Item{
    id: string;
    title: string;
    thumbnail: string;
    seller: Seller;
    price: string;
}