import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import {AnimalCard} from "./animal/AnimalCard"
import { CustomerCard } from "./Customers/Customer"
import { EmployeeCard } from "./Employees/Employee"
import { LocationCard } from "./Locations/Location"

export const ApplicationViews = ( {isAdmin, myUser} ) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser}/>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
              <AnimalCard />
              <AnimalCard />
              <AnimalCard />
            </Route>

            <Route path="/customers">
              <CustomerCard />
              <CustomerCard />
              <CustomerCard />
            </Route>

            <Route path="/locations">
              <LocationCard />
              <LocationCard />
              <LocationCard />
            </Route>

            <Route path="/employees">
              <EmployeeCard />
              <EmployeeCard />
              <EmployeeCard />
            </Route>
        </>
    )
}
