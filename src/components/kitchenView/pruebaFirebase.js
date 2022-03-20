import {onDataDocument} from "../../firebase/firestore"

onDataDocument((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        const dataOrders = doc.data()
        console.log(dataOrders, "para ver")
    })
})