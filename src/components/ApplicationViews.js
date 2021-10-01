import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationCard } from "./Locations/Location"
import { QuoteList } from "./quote/QuoteList"
import { AnimalDetail } from "./animal/AnimalDetail"


export const ApplicationViews = ({ isAdmin, myUser }) => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <QuoteList />
        <Home isAdmin={isAdmin} myUser={myUser} />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}

      <Route exact path="/animals">
        <AnimalList />
      </Route>
      <Route path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>
      <Route path="/customers">
        <CustomerList />
      </Route>

      <Route path="/locations">
        <LocationCard />
      </Route>

      <Route path="/employees">
        <EmployeeList />
      </Route>
    </>
  )
}
