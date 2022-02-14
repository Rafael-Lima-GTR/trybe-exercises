import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      city: '',
      fullName: '',
      email: '',
      resume: '',
    };
  }


  handleChange({ target }) {
    const { name, value } = target

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Estados e React - Componentes Controlados</h1>
        <form className="form">

          <label htmlFor="city">
            Choose the city:
            <select id="city" name="city"
              defaultValue=""
              value={name}
              onChange={this.handleChange}>
              <option value="fortaleza">Fortaleza</option>
              <option value="rioDeJaneiro">Rio de Janeiro</option>
              <option value="saoPaulo">São Paulo</option>
              <option value="florianopolis">Florianópolis</option>
            </select>
          </label>

          <label htmlFor="fullName">
            Full Name:
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={name}
              onChange={this.handleChange} />
          </label>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              name="email"
              type="email"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Fale um pouco mais sobre você.
            <textarea name="resume"
              value={name}
              onChange={this.handleChange} />
          </label>




        </form>
      </div>
    );
  }
}

export default Form;