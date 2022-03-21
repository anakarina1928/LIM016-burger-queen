import React from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";
import { OrderList } from "../../orders/orderList";
import { OrderButtons } from "../../orders/orderButtons";
import { Ticket } from "../../ticket/ticket";

const KitchenMain = () => {

  const colorTab = "/kitchenMain"

  return (
    <section className="pendingOrders">
      <User />
      <NavKitchen colorTab={colorTab} />
      <OrderList>
        <OrderButtons/>
      </OrderList>
      <Ticket/>
    </section>
  );
};

export { KitchenMain };
