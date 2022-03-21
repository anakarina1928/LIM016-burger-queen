import React from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";

const KitchenMain = () => {
  return (
    <section className="pendingOrders">
      <User />
      <NavKitchen />
    </section>
  );
};

export { KitchenMain };
