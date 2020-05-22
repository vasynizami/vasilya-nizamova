import React, { Component } from "react";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contact">
        <form>
          <h4>Get in touch!</h4>
          <input
            required
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            required
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <textarea
            required
            rows={12}
            cols={60}
            type="text"
            name="content"
            value={message}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Contact;
