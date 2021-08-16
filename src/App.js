import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';
 import axios from 'axios';
import Card from 'react-bootstrap/Card';




class App extends React.Component {
  
  constructor(props) {
    super(props);
    

    this.state = {
      // arr:[],
      cityData: {},
      show: false,
      city:'',
      
    };
  }
 
   getData =async (e)=>{
    
    e.preventDefault();
    await this.setState({

city: e.target.citty.value,
    });
    const response = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
    console.log('aaaaaaaaaa',response);
console.loge(this.state.citty);
    this.setState({
cityData: response.data[0],

    });
    console.log(this.state.cityData);
  
  }

render() {
    return 
    <>
  <>
    

    
    <Form onSubmit={this.getLocation}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="City Name" name="citty" />
      </Form.Group>

 
          <Button variant="primary" type="submit">
              Submit
           </Button>
    </Form>
 </>

 <>
  <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title>{this.state.city}</Card.Title>
    <Card.Text>lat: {this.state.cityData.lat} ion: {this.state.cityData.lon}</Card.Text>

  </Card.Body>
</Card>
</>
</>


}}
export default App;
