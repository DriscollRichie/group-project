import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'


export default class AllPeople extends Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }
  componentDidMount = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/popular?api_key=${
        process.env.REACT_APP_API_KEY
        }&language=en-US&page=1`
      );
      console.log(res.data)
      this.setState({ people: res.data.results });
    } catch (err) {
      console.error("componentDidMount failed in AllPeople.js:", err);
    }
  };

  render() {
    const people = this.state.people.map((e, i) => {
      return (
        <div key={e.id}>
          <Link to={`/people/${e.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
              width="185px"
              height="278px"
              alt=''
            />
          </Link>
          <h3>{e.name}</h3>

        </div>)

    });

    return (
      <div>
        {people}
      </div>
    )
  }
}
