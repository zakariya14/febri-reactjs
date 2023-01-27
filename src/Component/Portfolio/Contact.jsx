import React from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";

const Contact = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Lengkap</Form.Label>
        <Form.Control type="email" placeholder="Nama" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>
      <Form.Label>Alamat</Form.Label>
      <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
      </FloatingLabel>
      <Button className="btn btn-success my-4" type="submit">
        Kirim
      </Button>
    </Form>
  );
};

export default Contact;
