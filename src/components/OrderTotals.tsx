import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subtotal = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0),[order])
    const tipAmount = useMemo(() => subtotal * tip, [tip, subtotal])
    const total = useMemo(() => subtotal + tipAmount, [subtotal, tipAmount]);

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>Subtotal a pagar: {""} <span className="font-bold">{formatCurrency(subtotal)}</span></p>
                <p>Propina: {""} <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
                <p>Total a Pagar: {""} <span className="font-bold">{formatCurrency(total)}</span></p>
            </div>
            <button onClick={placeOrder} disabled={tipAmount === 0} className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10">Guardar Orden</button>
        </>
    )
}
