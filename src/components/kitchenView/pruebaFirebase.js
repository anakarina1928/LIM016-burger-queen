import {onDataDocument} from "../../firebase/firestore"

onDataDocument((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const dataOrders = doc.data()
        console.log(dataOrders, "para ver")
    })
})


// import { onDataDocument } from "../../../firebase/firestore";

// const OrderButton = () => {

//     const orderData = () => {
//       onDataDocument((querySnapshot) => {
//         const documents = [];
//         querySnapshot.forEach((doc) => {
//           documents.push({ id: doc.id, ...doc.data() });
//         });
//         console.log(documents,"a ver")
//         return documents;
//       });
//     };
  
//     console.log(orderData(), "document 755557");