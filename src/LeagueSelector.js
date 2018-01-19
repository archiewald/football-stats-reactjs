import React, { Component } from "react";

class LeagueSelector extends Component {
  constructor() {
    super();
    this.state = {
      requestFailed: false,
      
    };
  }

  componentDidMount() {
    fetch('http://api.football-data.org/v1/competitions', {
      headers: {
        'X-Auth-Token': '9f79c11a524e449d977ff7042c3cd842'
      }
    })
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(d => d.json())
      .then(json => {
        console.log("parsed json", json);
        this.setState({
          data: json
        })
      })
  }

  render() {
    if (!this.state.data) return <p>Loading...</p>
    return (
      <div>
        <h3>Competitions</h3>
          {
            this.state.data.map((item) =>
              <button key={item.id}>{item.caption}</button>
            )
          }
      </div>
    )
  }
}

export default LeagueSelector;