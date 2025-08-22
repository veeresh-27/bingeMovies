import { Avatar } from "@mui/material";
import React from "react";
import "./styles.css";

function Card({ data }) {
  return (
    <div className="card">
      <div className="cardImage">
        <Avatar className="userImage">V</Avatar>
      </div>
      <div className="cardContent">
        <div className="name">Name: {data.employee_name}</div>
        <div className="salary">Salary: ${data.employee_salary}</div>
        <div className="age">Age: {data.employee_age}</div>
      </div>
    </div>
  );
}

export default Card;
