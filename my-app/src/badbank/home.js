 import "./App.css"
import bank from "./bank.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Create from "./create.js"
export default function HomePage(){

    return(<>
    
    <center>
    
        {/* <img src={bank}></img>
    <h2>Welcome to Bad Bank</h2><br></br> <h3>where we strive to make banking convenient, secure and personalized for you. Our mission is to provide you with the best possible banking experience, whether you're looking to open an account, manage your finances, or grow your wealth.</h3>
     */}
    <Card style={{ width: '80%',marginTop:'4%',boxShadow:'0px 0px 10px 0px black'}}>
    <h1>Bad Bank</h1>
        <center><Card.Img className="img" variant="top" src={bank} /></center>
      
      <Card.Body>
        <Card.Title>Welcome to Bad Bank</Card.Title>
        <Card.Text>
        where we strive to make banking convenient, secure and personalized for you. Our mission is to provide you with the best possible banking experience, whether you're looking to open an account, manage your finances, or grow your wealth.
        </Card.Text><br></br><br></br>
      </Card.Body>
    </Card></center></>)
}