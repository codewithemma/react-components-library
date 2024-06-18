"use client";
import { FiEdit } from "react-icons/fi";
import styles from "./Orders.module.css";
import AdminLinks from "@/components/adminLinks/AdminLinks";
import { useState } from "react";
import Link from "next/link";

export const repairData = [
  {
    device: "Samsung Galaxy",
    id: "A1B2C3D4E5",
    pickUp: "Payment status",
    status: "Successful",
    date: "30th July, 2023",
  },
  {
    device: "iPhone 13 pro max",
    id: "F6G7H8I9J0",
    pickUp: "Payment status",
    status: "Pending",
    date: "31st December, 2023",
  },
  {
    device: "iPhone 13 pro max",
    id: "K1L2M3N4O5",
    pickUp: "Payment status",
    status: "Pending",
    date: "31st December, 2023",
  },
  {
    device: "iPhone 13 pro max",
    id: "P6Q7R8S9T0",
    pickUp: "Payment status",
    status: "Pending",
    date: "31st December, 2023",
  },
  {
    device: "Google Pixel 6",
    id: "U1V2W3X4Y5",
    pickUp: "Payment status",
    status: "Pending",
    date: "15th January, 2024",
  },
  {
    device: "OnePlus 9",
    id: "Z6A7B8C9D0",
    pickUp: "Payment status",
    status: "Successful",
    date: "20th February, 2024",
  },
  {
    device: "iPhone 12",
    id: "E1F2G3H4I5",
    pickUp: "Payment status",
    status: "Pending",
    date: "5th March, 2024",
  },
  {
    device: "Samsung Galaxy S21",
    id: "J6K7L8M9N0",
    pickUp: "Payment status",
    status: "Successful",
    date: "10th April, 2024",
  },
];

const ItemsPerPage = 5;
const Orders = () => {
  const [filteredData, setFilteredData] = useState(repairData);

  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const totalItems = repairData.length;
  const totalPages = Math.ceil(totalItems / ItemsPerPage);

  const lastIndex = currentPage * ItemsPerPage;
  const firstIndex = lastIndex - ItemsPerPage;

  const currentData = filteredData.slice(firstIndex, lastIndex);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);
    const filtered = repairData.filter((item) =>
      item.id.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  return (
    <div className={styles.wrapper}>
      <AdminLinks />
      <div className={styles.input_flex}>
        <input
          type="text"
          placeholder="Search by id..."
          onChange={handleChange}
        />
      </div>
      <div className={styles.container}>
        <p style={{ marginBottom: "20px" }}>All Orders</p>
        <ul>
          {currentData
            ?.filter((user) =>
              user.id.toLowerCase().includes(query.toLowerCase())
            )
            .map((repair, index) => (
              <div key={index} className={styles.card}>
                <div>
                  <div className={styles.flex}>
                    <span>Id:</span>
                    <span>{repair.id}</span>
                  </div>
                  <div className={styles.flex}>
                    <span>Device:</span>
                    <span>{repair.device}</span>
                  </div>
                  <div className={styles.flex}>
                    <span>Pick up:</span>
                    <span>
                      {repair.pickUp}
                      <span
                        style={{ fontSize: "11px" }}
                        className={
                          repair.status === "Pending"
                            ? `${styles.pending} ${styles.status}`
                            : `${styles.success} ${styles.status}`
                        }
                      >
                        {repair.status}
                      </span>
                    </span>
                  </div>
                  <div className={styles.flex}>
                    <span>Date:</span>
                    <span>{repair.date}</span>
                  </div>
                </div>
                <Link
                  className={styles.btn}
                  href={`/admin/orders/${repair.id}`}
                >
                  <FiEdit />
                </Link>
              </div>
            ))}
        </ul>
      </div>
      <div className={styles.pagination}>
        <p>
          page{currentPage} of {totalPages}
        </p>
      </div>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentData.length < ItemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Orders;
