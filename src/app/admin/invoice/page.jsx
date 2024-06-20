"use client";
import AdminLinks from "@/components/adminLinks/AdminLinks";
import styles from "./Invoice.module.css";
import { useState } from "react";

export const invoiceData = [
  {
    device: "Samsung Galaxy",
    id: "A1B2C3D4E5",
    username: "Charles",
    status: "Completed",
    date: "30th July, 2023",
  },
  {
    device: "iPhone 13 pro max",
    id: "F6G7H8I9J0",
    username: "Jack",
    status: "Pending",
    date: "31st December, 2023",
  },
  {
    device: "iPhone 13 pro max",
    id: "K1L2M3N4O5",
    username: "Nicholas",
    status: "Pending",
    date: "31st December, 2023",
  },
  {
    device: "iPhone 13 pro max",
    id: "P6Q7R8S9T0",
    username: "Max",
    status: "Pending",
    date: "31st December, 2023",
  },
  {
    device: "Google Pixel 6",
    id: "U1V2W3X4Y5",
    username: "Christina",
    status: "Pending",
    date: "15th January, 2024",
  },
  {
    device: "OnePlus 9",
    id: "Z6A7B8C9D0",
    username: "Roger",
    status: "Completed",
    date: "20th February, 2024",
  },
  {
    device: "iPhone 12",
    id: "E1F2G3H4I5",
    username: "Joshua",
    status: "Pending",
    date: "5th March, 2024",
  },
  {
    device: "Samsung Galaxy S21",
    id: "J6K7L8M9N0",
    username: "Richard",
    status: "Completed",
    date: "10th April, 2024",
  },
];
const ItemsPerPage = 5;
const Invoice = () => {
  const [filteredData, setFilteredData] = useState(invoiceData);

  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const totalItems = invoiceData.length;
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
    if (searchTerm === "") {
      setFilteredData(invoiceData);
    } else {
      const filtered = invoiceData.filter((item) =>
        item.id.toLowerCase().includes(searchTerm)
      );
      setFilteredData(filtered);
    }
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
        <p style={{ marginBottom: "20px" }}>All Invoices</p>
        <ul>
          {query && currentData.length === 0 ? (
            <div>
              <p
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                  fontWeight: "bold",
                }}
              >
                No results found
              </p>
            </div>
          ) : (
            currentData
              ?.filter(
                (user) =>
                  user.id.toLowerCase().includes(query.toLowerCase()) ||
                  user.username.toLowerCase().includes(query.toLowerCase()) ||
                  user.device.toLowerCase().includes(query.toLowerCase())
              )
              .map((invoice, index) => (
                <div key={index} className={styles.card}>
                  <div>
                    <div className={styles.flex}>
                      <span>Id:</span>
                      <span>{invoice.id}</span>
                    </div>
                    <div className={styles.flex}>
                      <span>Username:</span>
                      <span>{invoice.username}</span>
                    </div>
                    <div className={styles.flex}>
                      <span>Device:</span>
                      <span>{invoice.device}</span>
                    </div>
                    <div className={styles.flex}>
                      <span>Payment Status:</span>
                      <span>
                        {invoice.pickUp}
                        <span
                          style={{ fontSize: "11px" }}
                          className={
                            invoice.status === "Pending"
                              ? `${styles.pending} ${styles.status}`
                              : `${styles.success} ${styles.status}`
                          }
                        >
                          {invoice.status}
                        </span>
                      </span>
                    </div>
                    <div className={styles.flex_1}>
                      <span>Date:</span>
                      <span>{invoice.date}</span>
                    </div>
                  </div>
                </div>
              ))
          )}
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

export default Invoice;
