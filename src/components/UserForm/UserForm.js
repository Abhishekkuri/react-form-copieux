import React, { Component } from "react";
import "./UserForm.css";
import axios from "axios";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.sendData = this.sendData.bind(this);
  }
  state = {
    user_id: 2,
    user_name: "John",
    personal_details: {
      id: 0,
      title: "",
      first_name: "",
      last_name: "",
      sex: "",
      domain: 0,
      subdomains: []
    }
  };
  domains = [];
  sendData = function(e) {
    console.log(this.state);
    axios
      .post(
        "https://b7j5zirytf.execute-api.ap-south-1.amazonaws.com/prod/candidate-profile",
        this.state
      )
      .then(response => {
        console.log(response);
      })
      .then(error => {
        console.log(error);
      });
    e.preventDefault();
  };
  handleChange = function(e) {
    let name = e.target.name;
    console.log(name, e.target.value[0]);
    switch (name) {
      case "title":
        this.setState({
          personal_details: {
            ...this.state.personal_details,
            title: e.target.value
          }
        });
        break;
      case "first_name":
        this.setState({
          personal_details: {
            ...this.state.personal_details,
            first_name: e.target.value
          }
        });
        break;
      case "last_name":
        this.setState({
          personal_details: {
            ...this.state.personal_details,
            last_name: e.target.value
          }
        });
        break;
      case "domain":
        this.setState({
          personal_details: {
            ...this.state.personal_details,
            domain: e.target.value[0]
          }
        });
        break;
      case "sex":
        this.setState({
          personal_details: {
            ...this.state.personal_details,
            sex: e.target.value
          }
        });
        break;
      default:
        break;
    }
  };
  componentWillMount() {
    axios
      .get(
        "https://mgsw6oni0i.execute-api.ap-south-1.amazonaws.com/prod/master?master=domain"
      )
      .then(response => {
        this.domains = response.data.body;
        console.log(this.domains);
      })
      .then(error => {
        console.log(error);
      });
  }
  handleDomains = () => {
    console.log(this.domains);
  };
  render() {
    return (
      <div className="container">
        <div className="navigation">
          <div className="navigation-item">Personal Details</div>
          <div className="navigation-item">Skils</div>
          <div className="navigation-item">Work Experience</div>
          <div className="navigation-item">Education</div>
          <div className="navigation-item">Awards</div>
        </div>
        <div className="content">
          <form onSubmit={this.sendData} method="post">
            <div className="form-item">
              <span className="span1">Title </span>
              <select name="title" onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="Mr.">Mr</option>
                <option value="Miss.">Miss</option>
                <option value="Mrs.">Mrs</option>
              </select>
            </div>
            <div className="form-item">
              <span className="span1">First Name </span>
              <input
                type="text"
                name="first_name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-item">
              <span className="span1">Last Name </span>
              <input
                type="text"
                name="last_name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-item">
              <span className="span1">Sex </span>
              <select name="sex" onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-item">
              <span className="span1" onClick={this.handleDomains}>
                Domain
              </span>
              <select name="domain" onChange={this.handleChange}>
                <option value="">Select</option>
                <option value={this.domains[0]}>{this.domains[0]}</option>
                <option value={this.domains[1]}>{this.domains[1]}</option>
                <option value={this.domains[2]}>{this.domains[2]}</option>
              </select>
            </div>
            <div className="form-item">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserForm;
