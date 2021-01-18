import React from "react";

class Forms extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    isFriendly: false,
    gender: "",
    faveColor: "sea green",
  };

  handleChange = (e) => {
    e.target.type === "checkbox"
      ? this.setState({
          [e.target.name]: e.target.checked,
        })
      : this.setState({
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

          <textarea value={"A random value"} onChange={this.handleChange} />
          <br />
          <label>
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />{" "}
            Is Friendly?
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>Favorite Color</label>
          <select
            value={this.state.faveColor}
            onChange={this.handleChange}
            name="faveColor"
          >
            <option value="dusty rose">Dusty Rose</option>
            <option value="powder blue">Powder Blue</option>
            <option value="sea green">Sea Green</option>
          </select>

          <h2>
            {this.state.firstName} {this.state.lastName}
          </h2>
          <h3>You are a : {this.state.gender}</h3>
          <h3>Your favorite color is: {this.state.faveColor}</h3>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default Forms;
