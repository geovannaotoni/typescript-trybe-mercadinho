import { CartItem } from './types/CartItem';
import { Drink } from './types/Drink';
import { Food } from './types/Food';

export function first<T>(array: T[]): T {
  return array[0];
}

export function updateItem<T>(array: T[], index: number, object: T): T[] {
  if (index >= 0 && index < array.length) {
    array.splice(index, 1, object);
  }
  return array;
}

export function buildCartItem(item: Food | Drink, quantity: number): CartItem {
  return ({
    name: item.name,
    price: item.price,
    quantity,
  });
}