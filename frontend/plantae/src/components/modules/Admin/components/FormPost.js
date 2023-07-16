import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const FormPost = ({ imgURL }) => {

    const [formData, setFormData] = useState({
        nama_produk: "",
        harga: 0,
        kondisi: "",
        kemasan: "",
        spesies: "",
        kingdom: "",
        family: "",
        genus: "",
        berat_satuan: 0,
        img_url: imgURL
    });
    
    const [isProductUploaded, setIsProductUploaded] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        setShowAlert(true)
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const isFormEmpty = Object.values(formData).some((value) => value === "");

        if (isFormEmpty) {
            console.log("data form kosong");
            setShowAlert(true);
            return;
        }
        // Kirim nilai form ke komponen
        console.log(formData);
        if(formData !== "") {
            try {
                const response = await fetch('http://localhost:3001/product', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
                const jsonData = await response.json();
                console.log(jsonData);
                setIsProductUploaded(true);
                setTimeout(() => {
                    window.location.href = "/home"
                  }, 1500);
                } catch (error) {
                    console.log(error);
                }
            };
        }

    return (
        <Form className="mt-5" onSubmit={handleSubmit}>
            {isProductUploaded && ( // Menampilkan pesan jika akun berhasil dibuat
                <div className="mb-3 alert alert-success">
                Produk telah berhasil ditambahkan!
                </div>
            )}
            <Row className="mb-3">
                    <Col lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama Produk</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Bunga Camelia"
                            name="nama_produk"
                            value={formData.nama_produk}
                            onChange={handleChange}
                        />
                        </Form.Group>
                    </Col>
                    <Col lg={4}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Harga</Form.Label>
                        <Form.Control 
                            type="number"
                            name="harga"
                            placeholder="Rp.200.000"
                            value={formData.harga}
                            onChange={handleChange}
                         />
                        </Form.Group>
                    </Col>
                    <Col lg={2}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Kondisi</Form.Label>
                        <Form.Control 
                            type="text"
                            name="kondisi" 
                            placeholder="Baru"
                            value={formData.kondisi}
                            onChange={handleChange}
                         />
                        </Form.Group>
                    </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kemasan</Form.Label>
                    <Form.Control 
                        type="text"
                        name="kemasan"
                        placeholder="Bucket"
                        value={formData.kemasan}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
                <Col lg={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Kingdom</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="kingdom"
                        placeholder="plantae"  
                        value={formData.kingdom}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Berat Satuan</Form.Label>
                    <Form.Control 
                        type="text"
                        name="berat_satuan"
                        placeholder="1 kg"
                        value={formData.berat_satuan}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Spesies</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="spesies" 
                        placeholder="nyphera" 
                        value={formData.spesies}
                        onChange={handleChange}    
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Family</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="family" 
                        placeholder="escelacia" 
                        value={formData.family}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Genus</Form.Label>
                    <Form.Control 
                        type="text"
                        name="genus" 
                        placeholder="geneseae" 
                        value={formData.genus}
                        onChange={handleChange}
                    />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={{ span: 3, offset: 9 }}>
                <Button
                    type="submit"
                    variant="success"
                    className="w-100 bg-button-green form-input-green"
                    disabled={Object.values(formData).some((value) => value === "")}
                >
                    Tambah Produk
                </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default FormPost;