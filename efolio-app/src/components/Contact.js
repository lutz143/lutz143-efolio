import React from 'react';
import { Button, Form } from "react-bootstrap";

function Contact() {

  return (
    <div className="main-section" id="resume">
      <h2>Contact Me<br></br></h2>
      <div>

        <Form>
          <Form.Group className="mx-auto mb-3 form-group" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control required type="text" placeholder="Your name" />
            <Form.Control.Feedback type="invalid">
              <h5>Name must be at least one character.</h5>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mx-auto mb-3 form-group" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
              placeholder="youremail@domain.com"
            />
            <Form.Control.Feedback type="invalid">
              <h5>Please enter a valid email.</h5>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mx-auto mb-3 form-group" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control required as="textarea" placeholder="Your message..." />
            <Form.Control.Feedback type="invalid">
              <h5>Please provide a valid message.</h5>
            </Form.Control.Feedback>
          </Form.Group>   
          <Form.Group className="mx-auto text-center form-group">
            <Button
              size="lg"          
              type="submit"          
              className="my-3"
            >
              Submit
            </Button>
          </Form.Group>   
        </Form>

      </div>
    </div>
  );
}

export default Contact;
