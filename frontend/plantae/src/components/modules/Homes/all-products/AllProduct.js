import React, {useEffect, useState} from "react";
import { Card, Container, Col, InputGroup, Row } from "react-bootstrap";

const AllProduct = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/product');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(data);

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Container>
            <Row className='box-all-product'>
                {data.map((v, index) => (
                    <Col sm={6} md={4} lg={3} xl={2} className="mb-4 box-card-product p-1" key={index}>
                    <Card
                        style={{
                            padding: ".6rem",
                            borderRadius: "10px",
                            border: "none",
                        }}
                        className="best-product"
                    >
                        <Card.Img
                            variant="top" 
                            src={v.img_url}
                            style={{
                                backgroundSize: "cover",
                                borderRadius: "10px",
                                height: '8rem'
                            }}
                            key={index}
                        />
                        <Card.Body className="px-0">
                            <Card.Title className="custom-fs-2 text-gray">
                                {v.nama_produk}
                            </Card.Title>
                            <Card.Text className="custom-fs-5 fw-600 text-green-primary">
                                Rp.{v.harga}
                            </Card.Text>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#FFD700"
                                        class="bi bi-star-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className="ms-2">4.8</p>
                                </InputGroup>
                                <p className="w-50 text-end custom-fs-1">Terjual 2.1rb</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
}

export default AllProduct;