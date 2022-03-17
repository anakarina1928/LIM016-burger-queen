import React from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";

const KitchenPending = () => {
    return (
        <section className="pendingOrders">
            <User/>
            <NavKitchen/>
        </section>
    )
}

export { KitchenPending }