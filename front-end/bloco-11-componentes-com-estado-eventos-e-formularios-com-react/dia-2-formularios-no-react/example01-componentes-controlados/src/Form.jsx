import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef

    this.state = {
      city: 'fortaleza',
      fullName: '',
      email: '',
      resume: '',
      comparecer: false
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { city, fullName, email, resume, comparecer } = this.state;

    return (
      <div>
        <h1>Estados e React - Componentes Controlados</h1>
        <form className="form">

          <fieldset>
            <legend>Dados Pessoais</legend>
            <label htmlFor="city">
              Choose the city:
              <select id="city" name="city"
                defaultValue="" value={city}
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
                id="fullName" type="text"
                name="fullName" value={fullName}
                onChange={this.handleChange} />
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email" name="email"
                type="email" value={email}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Texto e Arquivos</legend>

            <label>
              Fale um pouco mais sobre você.
              <textarea name="resume" value={resume}
                onChange={this.handleChange} />
            </label>

            <label>
              Upload file:
              <input type="file" ref={this.fileInput} />
            </label>
            <br />
            <button type="submit">Submit</button>
          </fieldset>

          <label>
            Deseja participar do evento?
            <input
              id="comparecer" name="comparecer"
              type="checkbox" value={comparecer}
              onChange={this.handleChange}
            />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;