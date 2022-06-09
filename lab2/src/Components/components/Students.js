import { NavLink } from "react-router-dom";

let Students = ({studentsList})=>{

    let renderStudnets = ()=>{

        if(studentsList.length > 0){
            return studentsList.map((student)=>{
                return (
                    <div className="studentItem">
                        <h4>{student.name}</h4>
                        <h4>{student.age}</h4>
                        <NavLink to={'/'+student.id}>View Student</NavLink>
                    </div>
                )
            })
        }else{
            return (<h1>No Students</h1>)
        }
    }

    return (
        <div className="addStudent">
            <h3 className="header">Students Data</h3>
            {renderStudnets()}
        </div>
    )
}

export default Students;