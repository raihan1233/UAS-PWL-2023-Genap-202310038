import React from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

const AddCart = () => {
    return (
        <Card
        style={{
            width: "18rem",
            padding: ".7rem 0",
            background: "none",
            borderColor: "#364A4A",
            borderWidth: 1,
            borderRadius: "10px",
        }}
        >
        <Card.Body>
            <Card.Title className="text-green-primary">
            Tambah ke keranjang
            </Card.Title>
            <ButtonGroup
            aria-label="Basic example"
            className="my-3 border border-1 border-black"
            >
            <Button variant="white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-dash"
                viewBox="0 0 16 16"
                >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
            </Button>
            <Button variant="white">1</Button>
            <Button variant="white">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
                >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </Button>
            </ButtonGroup>
            <Card.Text>Stock : 92</Card.Text>
            <div className="d-flex justify-content-between">
            <Card.Text>SubTotal : 92</Card.Text>
            <span className="custom-fs-4 fw-600">Rp. 150.000</span>
            </div>
            <Button variant="success" className="w-100 bg-button-green">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
            >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Keranjang
            </Button>
        </Card.Body>
        </Card>
    );
};

export default AddCart;
