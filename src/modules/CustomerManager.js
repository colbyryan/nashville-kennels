const remoteURL = "http://localhost:5002"

const getCustomerById = (customerId) => {
    return fetch(`${remoteURL}/customers/${customerId}?expand=location&_expand=customer`
        .then(res => res.json())
    );
}

export default getCustomerById;

export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
        .then(res => res.json())
}

export const removeCustomer = (id) => {
    return fetch(`${remoteURL}/customers/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}
