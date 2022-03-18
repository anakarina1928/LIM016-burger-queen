import React from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";
import { OrderButton } from "./buttonOrder";

const KitchenMain = () => {
  return (
    <section className="pendingOrders">
      <User />
      <NavKitchen />
      <OrderButton/>
    </section>
  );
};

export { KitchenMain };
