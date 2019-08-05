import React, { Component } from "react";
import TechItem from "./TechItem";
class TechList extends Component {
  // static defaultProps = {};
  state = {
    techs: [],
    newTech: ""
  };
  // Executa assim que o componente é montado
  componentDidMount() {
    const techs = localStorage.getItem("techs");

    techs && this.setState({ techs: JSON.parse(techs) });
  }

  //Executa sempre que houver alteraçnoes nas props ou state
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }

  // Executado quando o componente deixa ed existir
  componentWillUnmount() {
    //exemplo: limpar sujeira em components
  }

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
