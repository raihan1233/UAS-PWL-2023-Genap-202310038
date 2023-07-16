import React from "react";
import { Card } from "react-bootstrap";

const MaintenanceProduct = () => {
  return (
    <Card
      className="p-4 bg-none shadow"
      style={{ borderRadius: "20px", border: "none" }}
    >
      <h4 className="fw-600 text-gray">Cara Perawatan</h4>
      <ol className="py-2">
        <li className="fw-400 custom-fs-2">
          Letakkan tanaman hias peperomia watermelon di tempat dengan intensitas
          cahaya matahari rendah ke sedang. Jangan taruh tanaman hias ini di
          bawah sinar matahari terlalu lama, sebab daun tanaman ini mudah
          menguning. Cukup letakkan sesekali di bawah sinar matahari selama 3-5
          menit untuk menghindari pertumbuhan daun yang kecil.
        </li>
        <li className="fw-400 custom-fs-2">
          Peperomia tumbuh dengan baik di tanah dengan tekstur lembab. Hindari
          menanam peperomia di tanah yang dipergunakan khusus untuk menanam
          kaktus dan succulent karena tekstur tanahnya berbeda. Anda juga bisa
          mencampurkan media tanam peat moss atau gambut mutiara dan perlit
          dengan perbandingan 1:1 untuk menanam peperomia watermelon.
        </li>
        <li className="fw-400 custom-fs-2">
          Peperomia watermelon merupakan tanaman hias yang sensitif jika terlalu
          basah atau terlalu kering. Tanaman ini lebih menyukai kelembapan. Anda
          juga tidak boleh membiarkan tanaman hias peperomia mengering atau
          terendam di air untuk waktu yang lama.
        </li>
      </ol>
    </Card>
  );
};

export default MaintenanceProduct;
