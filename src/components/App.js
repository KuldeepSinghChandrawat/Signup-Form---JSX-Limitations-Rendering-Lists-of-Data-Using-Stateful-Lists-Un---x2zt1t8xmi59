import React, {Component, useEffect, useState} from "react";
import '../styles/App.css';
import {validationState,initialForm} from '../helper';
const App = () => {

  const [getForm,setForm]=useState(initialForm);

  const [getFormValidation,setFormValidation]=useState(validationState);

  const [getUserName,setUserName] = useState('');

  const [getSubmit,setSubmit] = useState(false);

  useEffect(()=>{
    console.log(getForm);
    let flag = true;
    for(let obj in getFormValidation){
         if(getFormValidation[obj]['status']!='complete'){
            flag = false;
         }
    }
    if(flag){
      let email = getForm.email.split('@')[0];
      setUserName(`Hello ${email}`)
    }   
  },[getFormValidation]);


  const onChangeHandler=(event)=>{
        setForm({
          ...getForm,
          [event.target.name]:event.target.value
        })
  }



  const onSubmitHandler =()=>{
    setUserName('');
    let getFormValidationDetails = getFormValidation;

      for(let obj in getFormValidationDetails){
       
        if(getFormValidationDetails[obj]['required'] && getForm[obj]==''){
          getFormValidationDetails[obj]['status'] = "required";
        }
        else if(getFormValidationDetails[obj]['pattern'] &&  !getFormValidationDetails[obj]['pattern'].test(getForm[obj])){
          getFormValidationDetails[obj]['status'] = "pattern";
        }
        else{
          getFormValidationDetails[obj]['status'] = "complete";
        }

    }
    setFormValidation({...getFormValidationDetails});
    setSubmit(true);
  }
  return (
    <div id="main">
      <div className="container">
        Name:<input type="text" onChange={onChangeHandler} name="name" data-testid="name"/>
         {getSubmit && getFormValidation['name']['status'] && getFormValidation['name']['status']!='complete' && <div className="danger">
           { getFormValidation['name']['status']=="required"? getFormValidation['name']['requiredError']:getFormValidation['name']['patternMessage']}
          </div> } 
        Email Address:<input type="text" onChange={onChangeHandler} name="email"  data-testid ="email"/>
        {getSubmit && getFormValidation['email']['status'] &&  getFormValidation['email']['status']!='complete' && <div className="danger">
           { getFormValidation['email']['status']=="required"? getFormValidation['email']['requiredError']:getFormValidation['email']['patternMessage']}
          </div> } 
        Gender:<select data-testid ="gender" onChange={onChangeHandler}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">others</option>
        </select>
        Phone Number:<input type="number" onChange={onChangeHandler} name="phoneNumber" data-testid ="phoneNumber"/>
        {getSubmit && getFormValidation['phoneNumber']['status'] && getFormValidation['phoneNumber']['status']!='complete' &&  <div className="danger">
           { getFormValidation['phoneNumber']['status']=="required"? getFormValidation['phoneNumber']['requiredError']:getFormValidation['phoneNumber']['patternMessage']}
          </div> } 
        Password:<input type="password" onChange={onChangeHandler} name="password" data-testid ="password"/>
        {getSubmit && getFormValidation['password']['status'] && getFormValidation['password']['status']!='complete' && <div className="danger">
           { getFormValidation['password']['status']=="required"? getFormValidation['password']['requiredError']:getFormValidation['password']['patternMessage']}
          </div> } 
        <button onClick={onSubmitHandler} data-testid ="submit">Submit</button> 
      </div>
      <div className="container">
      <h1>{getUserName}</h1>
      </div>
   
    </div>
  )
}


export default App;
