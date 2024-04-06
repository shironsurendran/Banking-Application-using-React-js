import { useContext } from "react";
import userContext from "./context.js";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function Withdaraw(){
  let user = useContext(userContext);
  let len=Number(user.users.length)
  console.log(len-1);
  let [currbalance, setCurrbalance] = useState(user.users[len-1].balance);
  let [Withdrawa, setWithdrawa] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(currbalance,Withdrawa);
    if(currbalance>=Number(Withdrawa)){
    // console.log("Withdraw", Withdraw);
    setCurrbalance(Number(currbalance) - Number(Withdrawa));
    alert("successfully Withdraw")
    document.getElementById('pass').value=""
    // console.log(user.users.length);
    }else{
      alert("not enough balance")
    }
  }
  user.users[len-1].balance = currbalance;
  
    return(<>
    
    
    <center>
    <Card style={{ width: '40%',marginTop:'4%',boxShadow:'0px 0px 10px 0px black',color:"black"}}>
    <h1>Withdraw</h1> <br></br>
    <Card.Text><h2>{user.users[len-1].Name} Balance {currbalance} </h2>
        </Card.Text>  
      <Card.Body>
      <form onSubmit={handleSubmit}>
   {/* <input type="number" onChange={(e) => setWithdrawa(e.target.value)}/><input type="submit" value="Withdraw"/> */}
   <FloatingLabel controlId="floatingPassword" label="Enter Amount" style={{width:"70%"}}>
        <Form.Control type="number" id="pass" placeholder="Password" onChange={e=>setWithdrawa(e.target.value)}  required  />
      </FloatingLabel><br></br>
        <Button type="submit" disabled={!(Withdrawa)} >Withdraw</Button>
    </form>
        <br></br><br></br>
      </Card.Body>
    </Card></center>
    </>)
}