import React from "react";

function Forms(props) {
  return (
    <>
      <h1>This is Form Practice</h1>
      <form>
        <input
          type="text"
          name="firstName"
          value={props.data.firstName}
          placeholder="First Name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={props.data.lastName}
          placeholder="Last Name"
          onChange={props.handleChange}
        />

        <textarea value={"A random value"} onChange={props.handleChange} />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={props.data.isFriendly}
            onChange={props.handleChange}
          />{" "}
          Is Friendly?
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>Favorite Color</label>
        <select
          value={props.data.faveColor}
          onChange={props.handleChange}
          name="faveColor"
        >
          <option value="dusty rose">Dusty Rose</option>
          <option value="powder blue">Powder Blue</option>
          <option value="sea green">Sea Green</option>
        </select>

        <h2>
          {props.data.firstName} {props.data.lastName}
        </h2>
        <h3>You are a : {props.data.gender}</h3>
        <h3>Your favorite color is: {props.data.faveColor}</h3>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Forms;
