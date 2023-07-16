import React from "react";
import { Image } from "react-bootstrap";

import Img1 from "../../../assets/calyx/peony.jpg";

const ImageDetailProduct = () => {
  return (
    <>
      <div
        className="bg-white p-2"
        style={{
          borderRadius: "10px",
          height: "22rem",
          width: "22rem",
        }}
      >
        <Image
          src={Img1}
          style={{ borderRadius: "10px", height: "100%" }}
          fluid
        />
      </div>
      <div
        style={{ height: "5.3rem", width: "5.3rem" }}
        className="d-flex gap-1 mt-3"
      >
        <Image src={Img1} style={{ borderRadius: "5px" }} fluid />
        <Image src={Img1} style={{ borderRadius: "5px" }} fluid />
        <Image src={Img1} style={{ borderRadius: "5px" }} fluid />
        <Image src={Img1} style={{ borderRadius: "5px" }} fluid />
      </div>
    </>
  );
};

export default ImageDetailProduct;