import React, { Component } from 'react';
import Movi from "./Movi";

class Movies extends Component {
    render() {
        return (
            <div>
                {this.props.moviesData.map((element, idx) => {
            return (
                <Movi key={idx} poster_path = {element.poster_path}title={element.title} overview= {element.overview} vote_average= {element.vote_average} popularity= {element.popularity}release_date= {element.release_date}/>
             
            );
          })}

            </div>
        );
    }
}

export default Movies;