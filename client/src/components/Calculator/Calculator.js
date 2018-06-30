import React, { Component } from "react";

import VarExp from "./VarExp";
import VarInc from "./VarInc";

class Calculator extends Component {
  state = {
    netIncome: "",
    payFrequency: "",
    monthlyHousing: "",
    monthlyInsurance: "",
    monthlyUtilities: "",
    retainedEarnings: "",
    variableIncome: [],
    variableExpenses: []
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change.
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  submitNewVarInc = value => {
    var updateVarInc = this.state.variableIncome.slice();
    updateVarInc.push(value);
    this.setState({ variableIncome: updateVarInc });
  };

  submitNewVarExp = value => {
    var updateVarExp = this.state.variableExpenses.slice();
    updateVarExp.push(value);
    this.setState({ variableExpenses: updateVarExp });
  };

  handleSubmit = event => {
    event.preventDefault();
    let annualIncome = this.state.netIncome * this.state.payFrequency;
    console.log(annualIncome);
    let annualExpenses =
      this.state.monthlyHousing * 12 +
      this.state.monthlyInsurance * 12 +
      this.state.monthlyUtilities * 12;
    console.log(annualExpenses);

    let retainedEarnings =
      annualIncome - annualExpenses; /*add other vars here*/
    console.log(retainedEarnings);

    this.setState({
      retainedEarnings
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h1> Fill in the info below. </h1>
          <h2> Income </h2>
          <form>
            <label>
              Net income on latest paycheck
              <input
                type="text"
                name="netIncome"
                value={this.state.netIncome}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Pay Frequency
              <input
                type="radio"
                name="payFrequency"
                value={52}
                onChange={this.handleInputChange}
              />
              Weekly
            </label>
            <label>
              <input
                type="radio"
                name="payFrequency"
                value={26}
                onChange={this.handleInputChange}
              />
              Biweekly
            </label>
            <label>
              <input
                type="radio"
                name="payFrequency"
                value={24}
                onChange={this.handleInputChange}
              />
              Semi-Monthly
            </label>
            <label>
              <input
                type="radio"
                name="payFrequency"
                value={12}
                onChange={this.handleInputChange}
              />
              Monthly
            </label>
            <h2> Expenses </h2>
            <p>
              Enter how much you pay each month for each of the following bills.
            </p>
            <label>
              Mortgage or Rent
              <input
                type="text"
                name="monthlyHousing"
                value={this.state.monthlyHousing}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Insurance Payments
              <input
                type="text"
                name="monthlyInsurance"
                value={this.state.monthlyInsurance}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <br />
            <label>
              Phone and Utilities
              <input
                type="text"
                name="monthlyUtilities"
                value={this.state.monthlyUtilities}
                onChange={this.handleInputChange}
              />
            </label>
            <br />
            <br />
            {/* <input type="submit" value="Submit" onChange={this.handleInputChange}/> */}

            <input
              type="button"
              placeholder="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />
          </form>

          <br />
          <br />

          <div>{this.state.retainedEarnings}</div>
        </div>
        <div className="col-md-6">
          <VarInc callbackFromParent={this.submitNewVarInc} />
          <VarExp callbackFromParent={this.submitNewVarExp} />
        </div>
      </div>
    );
  }
}

export default Calculator;
