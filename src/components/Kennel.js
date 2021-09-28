import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./Employees/Employee"
import { LocationCard } from "./Locations/Location"
import { CustomerCard } from "./Customers/Customer"
import { PropsAndState } from "./PropsAndState"

export const Kennel = () => {
    return (
        <>
            <h2>Nashville Kennels</h2>
            <small>Loving care when you're not there.</small>
            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>
            <PropsAndState yourName="Colby" day="Monday"/>  
            <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
        <article className="locations">
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
        </>
    )
}
