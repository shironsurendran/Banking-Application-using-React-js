
import { useContext } from "react";
import userContext from "./context.js";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Alldata() {
  let user = useContext(userContext);
  console.log("hi", user);
  // function handle(key,item) {
  //   //  user.users[item].ky=[{ky:key}]
  //   console.log(user.users[item]);
  // }
  return (
    <>
      <h1>Alldata</h1>
      {user.users.map((item, key) => (<>
        
        <Card id="all"
                  className="mb-2"
                >
                  <Card.Header>User-{key+1}</Card.Header>
                  <Card.Body>
                    <Card.Title>{item.Name}</Card.Title>
                    <Card.Text>
                      Balance: {item.balance}<br></br>
                      Email: {item.Email}
                    </Card.Text>
                  </Card.Body>
                </Card>
                
        {/* <li>
          {item.Name}:{item.balance}
        </li> */}
     </> ))}

    </>
  );
}