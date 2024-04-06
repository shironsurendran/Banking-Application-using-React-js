import "./App.css"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from "react";
import userContext from "./context.js";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import { Toast } from "bootstrap";

// import user from "./use.png"
export default function Create(){
 
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [pass,setPass]=useState()

  const [val,setVal]=useState("none")
  // const [vale,setVale]=useState("block")
  const [fom,setFom]=useState('block')

  // const [userdet,setUserdet]=useState()
  const Username=useContext(userContext);


  function handle(e){
    e.preventDefault(); 
    // document.getElementById('btm').value="create account"
//  alert("login successfully")
 alert("login successfully And your ID is :")
 
 Username.users=[...Username.users,{Name:name,Email:email,balance:0}]
 
document.getElementById('name').value="";

document.getElementById('email').value="";
document.getElementById('pass').value="";
// document.getElementById('btm').value="add aunther account"
setVal("block")
// setVale("none")
setFom("none")
  }
   
    return(<>
    <center>
    <Card style={{ width: '50%',marginTop:'4%',boxShadow:'0px 0px 10px 0px black'}}><br></br>
      <h1>Create Account</h1>
    {/* <Card.Img variant="top" src={user} style={{width:'40%',marginLeft:'25%'}}/> */}
    <Card.Body>
    <Form className='for' style={{display:`${fom}`}} onSubmit={(e)=>handle(e)}>
    
      <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="text" id="name" placeholder="Name" onChange={e=>setName(e.target.value)} required />
      </FloatingLabel><br></br>
    <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" id="email" placeholder="name@example.com"  onChange={e=>setEmail(e.target.value)} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" >
        <Form.Control type="password" id="pass" placeholder="Password" onChange={e=>setPass(e.target.value)} maxlength="8"  required minLength="8"  />
      </FloatingLabel><br></br>
      <Button type="submit" id="btm" disabled={!(name,email,pass)}  value="Create account">Create account</Button>
      
    </Form>
    <Button variant="primary" id="ad"style={{display:`${val}`}} onClick={()=>{setFom("block");setVal("none")}}  type="button">Add account</Button>
    </Card.Body>
    </Card>
    </center>
    </>)
}