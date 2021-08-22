import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class movi extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Img
            src={`https://image.tmdb.org/t/p/w500/${this.props.poster_path}`}
          />

          <ListGroup>
            <ListGroupItem> {this.props.title}</ListGroupItem>
            <ListGroupItem> {this.props.overview}</ListGroupItem>
            <ListGroupItem> {this.props.vote_average}</ListGroupItem>
            <ListGroupItem> {this.props.popularity}</ListGroupItem>
            <ListGroupItem> {this.props.release_date}</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default movi;
