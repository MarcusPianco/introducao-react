import React, { Component } from "react";
import TechItem from "./TechItem";
class TechList extends Component {
  // static defaultProps = {};
  state = {
    techs: ["node Js", "react Js", "react Native"],
    newTech: ""
  };

  handleInputChange = e => {
    this.setState({
      newTech: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      //cria um novo estado para o array,
      //sempre copiar o content e adicionar
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };
  //as funções que modificam o state,
  // devem sempre estar dentro da classe
  //  que implementa o state
  handleDelete = tech => {
    this.setState({
      techs: this.state.techs.filter(t => t !== tech)
    });
  };

  render() {
    const { techs } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {techs.map(tech => (
            <TechItem
              tech={tech}
              key={tech}
              //biding para a funçção handleDelete
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Submeter</button>
      </form>
    );
  }
}
export default TechList;
