import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
class Weather extends Component {
    render() {
        return (
            <div>
                  <Card >
                <ListGroup>
                  <ListGroupItem> {this.props.datetime}</ListGroupItem>
                  <ListGroupItem> {this.props.description}</ListGroupItem>
                  <ListGroupItem> {this.props.app_max_temp}</ListGroupItem>
                  <ListGroupItem> {this.props.app_min_temp}</ListGroupItem>
                </ListGroup>
              </Card>
            </div>
        );
    }
}

export default Weather;