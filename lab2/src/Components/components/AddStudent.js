import React, { Component } from 'react';

export default class AddStudent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      formData:{
        name:'',
        age:0,
      }
    }
    setTimeout(  ()=>{ this.setState({
      formData: {
        name:"9999999999",
        age:"55555555555555"
      }}) }  ,3000)
  }

  render() {

  
    
    const onAddStudentClick=()=>{
      this.props.parentCallBack(this.state.formData) 
    };

    const updateName = (inputValue) => {
        this.setState({
          formData: {
            name:inputValue,
            age:this.state.formData.age
          }
        })
    };

    const updateAge = (inputValue) => {
        this.setState({
          formData: {
            name:this.state.formData.name,
            age:inputValue,
          }
        })
    };

    
    return (
      <div>
          <input name={"name"} placeholder={"Name"} value={this.state.formData.name}
          onChange={e => updateName( e.target.value)}/>
      <div>{this.state.age}
          <input name={"age"} placeholder={"Age"} value={this.state.formData.age}
          onChange={e => updateAge( e.target.value)}/>
      </div>
        <input type="button" className="btn btn-primary" value="Add" onClick={onAddStudentClick}/>
      </div>
    )
  }
}
