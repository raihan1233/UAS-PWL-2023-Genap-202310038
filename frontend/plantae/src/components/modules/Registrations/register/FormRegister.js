import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const FormRegister = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value,
    }));
  };

const handleSubmit = async (event) => {
    event.preventDefault();

    // Kirim nilai form ke komponen
    console.log(formData);
    if (formData.username !== "" && formData.password !== "") {
      try {
        const response = await fetch('http://localhost:3001/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
          const jsonData = await response.json();
          console.log(jsonData);
          setIsAccountCreated(true);
          setTimeout(() => {
            window.location.href = "/signin"
          }, 1500);
        } catch (error) {
            console.log(error);
        }
      };
    }

  return (
    <Form onSubmit={handleSubmit}>
      {isAccountCreated && ( // Menampilkan pesan jika akun berhasil dibuat
        <div className="mb-3 alert alert-success">
          Selamat Anda telah berhasil membuat akun!
        </div>
      )}
      <Form.Group className="mb-3" controlId="exampleForm.Username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          className="form-input-green bg-none"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          className="form-input-green bg-none"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button
        variant="success"
        className="w-100 mt-3 bg-button-green border-0 py-2"
        type="submit"
        disabled={Object.values(formData).some((value) => value === "")}
      >
        Daftar
      </Button>
    </Form>
  );
}

export default FormRegister;