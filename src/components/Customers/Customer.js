import React from "react";
import "./Customer.css"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer_address">Address: {customer.address}</div>
            <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Remove</button>
        </section >
    )
}