import { useContext } from "react";
import userContext from "./context.js";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
export default function Deposit() {
  let user = useContext(userContext);
  let len=Number(user.users.length)
  console.log(len-1);
  let [currbalance, setCurrbalance] = useState(user.users[len-1].balance);
  let [deposit, setDeposit] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("deposit", deposit);
    setCurrbalance(Number(currbalance) + Number(deposit));
    // console.log(user.users.length);
    alert("successfully Deposit")
    document.getElementById('pass').value=""
  }
  user.users[len-1].balance = currbalance;
  
  return (
    <>
    <center>
    <Card style={{ width: '40%',marginTop:'4%',boxShadow:'0px 0px 10px 0px black' ,color:"black"}}>
    <h1>Deposit</h1><br></br>
    <Card.Text><h2>{user.users[len-1].Name} Balance {currbalance} </h2>
        </Card.Text>  
      <Card.Body>
      <form onSubmit={handleSubmit}>
        {/* <input type="number" onChange={(e) => setDeposit(e.target.value)} /> */}
        <FloatingLabel controlId="floatingPassword" label="Enter Amount" style={{width:"70%"}}>
        <Form.Control type="number" id="pass" placeholder="Password" onChange={e=>setDeposit(e.target.value)}  required  />
      </FloatingLabel><br></br>
        <Button type="submit" disabled={!(deposit)}  >Deposit</Button>
      </form>
        <br></br><br></br>
      </Card.Body>
    </Card></center>
      {/* <form onSubmit={handleSubmit}>
        <h1>Deposit </h1>
        <input type="number" onChange={(e) => setDeposit(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
      <h2>{user.users[len-1].Name} Balance {currbalance} </h2> */}
    </>
  );
}