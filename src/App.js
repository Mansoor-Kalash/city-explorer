import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import  Movies from "./component/Movies";
import  Weathers from "./component/Weathers";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: "",
      showData: false,
      map: "",
      weatherData: [],
      weather5days:[],
      moviesData :[],
      errorMsg: false,
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchCity: e.target.city.value,
    });
    try {
      //lab 06
    let resultData =await axios.get( `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`);
    // lab 07
    let wData = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/getweather?cityName=${this.state.searchCity}`);

    // lab 08

    let lab8weather = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/weather?cityName=${this.state.searchCity}`);

    let lab8movies = await axios.get(`${process.env.REACT_APP_SERVER_LINK}/movies?moviName=${this.state.searchCity}`);

    await this.setState({
      cityData: resultData.data[0],
      showData: true,
      weatherData: wData.data.data,
      weather5days: lab8weather.data,
      moviesData : lab8movies.data,
      errorMsg : false,
    });

    } catch (error) {
      await this.setState({
        cityData: {},
        showData: false,
        weatherData: [],
        weather5days: [],
        moviesData : [],
        errorMsg : true,
      });
    }
    
  };

  render() {
    return (
      <div>
        
          <Form onSubmit={this.getLocation}>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="city name" name="city" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          {this.state.showData && (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=18`} />
              <Card.Body>
                <Card.Title>{this.state.searchCity}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{" "}{this.state.showData && <p>Lat:{this.state.cityData.lat} </p>}</ListGroupItem>
                <ListGroupItem>{" "}{this.state.showData && (<p>Lon:{this.state.cityData.lon}{" "}</p>)}</ListGroupItem>
              </ListGroup>
            </Card>
          )}
        
        
        {this.state.showData && <Weathers show= {this.state.showData} weatherData={this.state.weatherData}/>}
        

       
         
              {this.state.showData && <Movies show= {this.state.showData} moviesData={this.state.moviesData}/>}
           
         
        
        {
            this.state.errorMsg &&


            <div role="alert">
              <strong>Error!something doesn't work out </strong>
              
            </div>

          }
      </div>
    );
  }
}

export default App;
