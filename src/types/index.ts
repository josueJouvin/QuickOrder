export type MenuItem = {
    id: number | string
    name: string
    price: number
}

export type OrderItem = MenuItem & {
    quantity: number
}