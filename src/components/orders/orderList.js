import React from 'react';

const OrderList = (props) => {
  return (

        <section className="ordersSection">

            {props.children}
        </section>
  );
};

export { OrderList };
