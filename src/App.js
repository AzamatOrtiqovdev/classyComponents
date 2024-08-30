import React from "react";

class ClassyWeather extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: "Lisbon" };
    this.fetchWeater = this.fetchWeater.bind(this)
  }

  fetchWeater() {
    console.log("Data Loading....")
    console.log(this)
  }

  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <input
          type="text"
          placeholder="Search From Location"
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value})}
        />

        <button onClick={this.fetchWeater}>Get Weather</button>
      </div>
    );
  }
}

export default ClassyWeather;
