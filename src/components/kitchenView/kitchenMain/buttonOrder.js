import { React } from "react";
import { onDataDocument } from "../../../firebase/firestore";

const OrderButton = () => {

  const orderData = () => {
    onDataDocument((querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      console.log(documents,"a ver")
      return documents;
    });
  };

  console.log(orderData(), "document 755557");

  return (
    <button className="product">
      <span>
        hola<br></br>
      </span>
      hola<br></br>
    </button>
  );
};

export { OrderButton };
