import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class ClassComponentExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      username: '',
      password: ''
    };

    this.fnameRef = React.createRef();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', this.state.firstName, this.state.email, this.state.username, this.state.password);
    alert(`Name: ${this.state.firstName}  Email: ${this.state.email}  Username: ${this.state.username}  Password: ${this.state.password}`);
  };

  componentDidMount() {
    this.fnameRef.current.focus();
  }

  render() {
    return (
      <Container style={{ maxWidth: '50%' }}>
        <h2>Login Form</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="fname">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={this.state.firstName}
              ref={this.fnameRef}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="uname">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ClassComponentExample;
