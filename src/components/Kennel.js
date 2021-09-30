import React from "react"
import "./Kennel.css"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

const isAdmin = true;

const myUser = {
    name:"Colby",
    pet:"Buddy"
}

export const Kennel = () => {
    return (
        <>
            <NavBar />
            <ApplicationViews isAdmin={isAdmin} myUser={myUser} />
        </>
    )
}
