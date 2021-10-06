import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./Customers/CustomerList"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationCard } from "./Locations/Location"
import { QuoteList } from "./quote/QuoteList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalForm } from './animal/AnimalForm'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"


export const ApplicationViews = ({ isAdmin, myUser, setAuthUser, isAuthenticated }) => {


  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <QuoteList />
        <Home isAdmin={isAdmin} myUser={myUser} />
      </Route>


      {/* Render the animal list when http://localhost:3000/animals */}
      <Route path="/animals/create">
        <AnimalForm />
      </Route>
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
      </Route>

      <Route path="/animals/:animalId(\d+)/edit">
        {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
      </Route>


      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
      </Route>

      <Route exactpath="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>
      <Route path="/customers">
        <CustomerList />
      </Route>

      <Route path="/locations">
        <LocationCard />
      </Route>


      <Route exact path="/employees">
        <EmployeeList />
      </Route>

    </>
  )
}
