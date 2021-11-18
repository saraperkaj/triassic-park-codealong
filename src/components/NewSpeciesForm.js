import { Component } from "react";

class NewSpeciesForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newSpecies = {
      name: this.state.name,
    };
    this.state.clickHandler(newSpecies);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" id="name" name="name" />
        <button>Submit</button>
      </form>
    );
  }
}

export default NewSpeciesForm;
