import React, { Component } from "react";

class Tables extends Component {
  constructor(props) {
    super();
    this.state = {
      requestFailed: false
    };
  }

  fetchDataTables(leagueId) {
    if (leagueId !== "") {
      fetch(
        `http://api.football-data.org/v1/competitions/${leagueId}/leagueTable`,
        {
          headers: {
            "X-Auth-Token": "9f79c11a524e449d977ff7042c3cd842"
          }
        }
      )
        .then(function(response) {
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
          });
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.fetchDataTables(nextProps.selectedLeague);
  }

  componentDidMount() {
    this.fetchDataTables(this.props.selectedLeague);
  }

  render() {
    if (this.props.selectedLeague === "") return <p>Please select a league ^</p>;
    if (!this.state.data) return <p>Loading...</p>;
    return (
      <div>
        <h2>{this.state.data.leagueCaption}</h2>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Pl</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>Pts</th>
            </tr>
            {this.state.data.standing.map(item => (
              <tr key={item.position}>
                <td>{item.position}</td>
                <td>{item.teamName}</td>
                <td>{item.playedGames}</td>
                <td>{item.wins}</td>
                <td>{item.draws}</td>
                <td>{item.losses}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tables;
