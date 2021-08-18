import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      searchCity: "",
      showData: false,
      map: "",
      weatherData:[],
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    await this.setState({
      searchCity: e.target.city.value,
    });

    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.searchCity}&format=json`;
    let resultData = await axios.get(locURL);
    let wData = await axios.get( `${process.env.REACT_APP_SERVER_LINK}/getweather?cityName=${this.state.searchCity}`);
    console.log(wData.data);
    

    await this.setState({
      cityData: resultData.data[0],
      showData: true,
      weatherData:wData.data,
    });
  };

  render() {
    return (
      <div>
        <>
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
              <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=18`}/>
              <Card.Body>
                <Card.Title>{this.state.searchCity}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{" "}{this.state.showData && <p>Lat:{this.state.cityData.lat} </p>}</ListGroupItem>
                <ListGroupItem>{" "}{this.state.showData && (<p>Lon:{this.state.cityData.lon}{" "}</p>)}</ListGroupItem>
              </ListGroup>
            </Card>
          )}
        </>
        <>
        {this.state.showList && this.state.weatherData.data.map((element, idx) => {
            return (
        <Card key={idx}>
        <ListGroup>
        <ListGroupItem>{" "}{this.state.showData && (<p>Lon: {element.datetime}{" "}</p>)}</ListGroupItem>
        <ListGroupItem>{" "}{this.state.showData && (<p>Lon: {element.weather.description}{" "}</p>)}</ListGroupItem>
        <ListGroupItem>{" "}{this.state.showData && (<p>Lon: {element.app_max_temp}{" "}</p>)}</ListGroupItem>
        <ListGroupItem>{" "}{this.state.showData && (<p>Lon: {element.app_min_temp}{" "}</p>)}</ListGroupItem>
        </ListGroup>
        </Card>
        );})}
        </>
      </div>
    );
  }
}

export default App;
