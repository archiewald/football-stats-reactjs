import React, { Component } from "react";
import './LeagueSelector.css';

class LeagueSelector extends Component {
  constructor() {
    super();
    this.state = {
      requestFailed: false,
    };
  }

  componentDidMount() {
    fetch('https://api.football-data.org/v1/competitions', {
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
          <div className="dropdown-selector">
            <button className="dropdown-button">Select a League</button>
            <div className="dropdown-content">
            {
              this.state.data.map((item) =>
                <a key={item.id} href='#'
                   onClick={() => this.props.update(item.id)}>
                   {item.caption}
                </a>
              )
            }
            </div>
          </div>
      </div>
    )
  }
}

export default LeagueSelector;