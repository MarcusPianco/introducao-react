import React, { Component } from "react";
class TechList extends Component {
  state = {
    techs: ["node Js", "react Js", "react Native"],
    newTech: ""
  };

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  render() {
    const { techs } = this.state;

    return (
      <>
        <h1>{this.state.newTech}</h1>
        <ul>
          {techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
      </>
    );
  }
}
export default TechList;
