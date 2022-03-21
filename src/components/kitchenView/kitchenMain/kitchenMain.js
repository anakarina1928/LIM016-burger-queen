import React from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";
import { OrderList } from "../../orders/orderList";
import { OrderButtons } from "../../orders/orderButtons";
import { Ticket } from "../../ticket/ticket";

const KitchenMain = () => {
  return (
    <section className="pendingOrders">
      <User />
      <NavKitchen />
      <OrderList>
        <OrderButtons/>
      </OrderList>
      <Ticket/>
    </section>
  );
};

export { KitchenMain };
