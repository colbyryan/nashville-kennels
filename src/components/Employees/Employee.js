import React from "react";
import "./Employee.css"

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <p className="employee_location">{employee.positon}</p>
            <button onClick={() => handleDeleteEmployee(employee.id)}>Terminate</button>
        </section>
    )
}