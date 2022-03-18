import React from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";
import { onDataDocument } from "../../../firebase/firestore";

const KitchenMain = () => {
    onDataDocument((querySnapshot)=> {
        const documents = [];
         querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        console.log(documents,"document 777")
        return documents;
      });
       return (
        <section className="pendingOrders">
            <User/>
            <NavKitchen/>
        </section>
    )
}

export { KitchenMain }