import React from "react";
import Forms from "../Components/Forms";

class FormContainer extends React.Component {
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
        <h2>This is the Form Container component</h2>;
        <Forms handleChange={this.handleChange} data={this.state} />
      </>
    );
  }
}

export default FormContainer;
