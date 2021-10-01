import React, { useState, useEffect } from "react";
import { CustomerCard } from "./Customer";
import { getAllCustomers, removeCustomer } from '../../modules/CustomerManager'


export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    const handleDelteCustomer = id => {
        removeCustomer(id)
            .then(() => getAllCustomers().then(setCustomers))
    }
    useEffect(() => {
        getCustomers();
    }, []);

    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleDelteCustomer={handleDelteCustomer} />)}
        </div>
    );
};