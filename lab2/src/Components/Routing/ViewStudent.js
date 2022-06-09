import React, { Component } from "react";
import { useParams } from "react-router-dom";

import StudentsList from '../components/students.json';

let ViewStudent = () => {
  
    let arr = StudentsList.students
    
    let {id} = useParams();

    let student = { name: "Aaser", email:"saafdafafd", motherName:"Mahitab"}
    let {motherName} = student
    console.log(motherName);
    
    
    console.log(id);

    const std = arr.filter(s => s.id== id)
  return (
    <div className="container">
         <h2>Name: {std[0].id}</h2>
      <h2>Name: {std[0].name}</h2>
      <h2>Age: {std[0].age}</h2>
      <h2>Email: {std[0].email}</h2>
    </div>
  );
};

export default ViewStudent;
