import React from "react";

class Forms extends React.Component {
  state = {
    firstName: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <h1>This is Form Practice</h1>
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
          <input type="submit" label="Submit" />
        </form>
      </>
    );
  }
}

export default Forms;
