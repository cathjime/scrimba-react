import React from "react";

class Forms extends React.Component {
  state = {
    firstName: "",
  };

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };
  render() {
    return (
      <>
        <h1>This is Form Practice</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <h2>{this.state.firstName}</h2>
          <input type="submit" label="Submit" />
        </form>
      </>
    );
  }
}

export default Forms;
