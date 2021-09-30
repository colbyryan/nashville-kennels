import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerCard } from "./Customers/Customer"
import { EmployeeCard } from "./Employees/Employee"
import { LocationCard } from "./Locations/Location"
import { QuoteList } from "./quote/QuoteList"


export const ApplicationViews = ( {isAdmin, myUser} ) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
              <QuoteList />
                <Home isAdmin={isAdmin} myUser={myUser}/>
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
          
            <Route exact path="/animals">
                <AnimalList />
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
