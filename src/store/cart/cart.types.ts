export enum CART_ACTION_TYPES {
    UPDATE_CART_ITEMS = "cart/UPDATE_CART_ITEMS",
    SET_VISIBILITY = "cart/SET_VISIBILITY"
  }

export type Product = {
  id: number
  imageUrl: string
  name: string
  price: number
}

export type CartItem = Product & { quantity: number }