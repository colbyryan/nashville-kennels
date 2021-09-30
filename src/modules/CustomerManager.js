const remoteURL = "http://localhost:5002"

const getCustomerById = (customerId) => {
    return fetch (`${remoteURL}/customers/${customerId}?expand=location&_expand=customer`
    .then(res => res.json())
    );
}
 
export default getCustomerById;

const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers`)
    .then(res => res.json())
}
 
export default getAllCustomers;