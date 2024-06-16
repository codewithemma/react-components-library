"use client";
import React, { useState } from "react";
import styles from "./InvoiceModal.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
let dummyDatabase = [];
const InvoiceModal = ({ setShowPopup, showPopup }) => {
  const [formData, setFormData] = useState({
    repairType: "",
    quantity: "",
    price: "",
    discount: "",
    total: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };

  const handleModalPopUp = () => {
    setShowPopup(!showPopup);
  };

  const handleSave = () => {
    setFormData({
      repairType: "",
      quantity: "",
      price: "",
      discount: "",
      total: "",
    });
    dummyDatabase.push(formData);
    console.log(dummyDatabase);
  };

  return (
    <>
      <div
        style={{
          marginTop: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className={`${styles.continue_container} ${
            showPopup ? styles.active : styles.inactive
          }`}
        >
          <div className={styles.continue_wrapper}>
            <div className={styles.continue_wrapper_header}>
              <p>Mobosure</p>
              <MdOutlineCancel
                onClick={handleModalPopUp}
                className={styles.continue_cancel_icon}
              />
            </div>
            <div className={styles.modal}>
              <div className={styles.modal_content}>
                <p>Generate Invoice</p>
                <div className="form">
                  <div className={styles.input_group}>
                    <label htmlFor="repair">Repair Type</label>
                    <input
                      type="text"
                      id="repair"
                      onChange={handleChange}
                      value={formData.repairType}
                      name="repairType"
                    />
                  </div>
                  <div className={styles.input_group}>
                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      onChange={handleChange}
                      value={formData.quantity}
                      name="quantity"
                    />
                  </div>
                  <div className={styles.input_group}>
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      id="price"
                      onChange={handleChange}
                      value={formData.price}
                      name="price"
                    />
                  </div>
                  <div>
                    <button onClick={handleSave} className={styles.save_btn}>
                      <span>
                        <FiPlus />
                      </span>
                      <span>Add Field</span>
                    </button>
                  </div>
                  <div className={styles.input_group}>
                    <label htmlFor="total">Total</label>
                    <input
                      type="text"
                      id="total"
                      onChange={handleChange}
                      value={formData.total}
                      name="total"
                    />
                  </div>
                  <div className={styles.input_group}>
                    <label htmlFor="discount">Discount</label>
                    <input
                      type="text"
                      id="discount"
                      onChange={handleChange}
                      value={formData.discount}
                      name="discount"
                    />
                  </div>
                  <div className={styles.generate_btn}>
                    <button>Generate</button>
                  </div>
                </div>
              </div>
              <div className={styles.modal_content1}>
                {dummyDatabase?.map((data, id) => {
                  return (
                    <li key={id} className={styles.card}>
                      <div>
                        <p className={styles.flex}>
                          <span>Repair Type:</span>
                          <span>{data?.repairType}</span>
                        </p>
                        <p className={styles.flex}>
                          <span>Quantity:</span>
                          <span>{data?.quantity}</span>
                        </p>
                        <p className={styles.flex}>
                          <span>Price:</span>
                          <span>{data?.price}</span>
                        </p>
                      </div>
                    </li>
                  );
                })}
                {dummyDatabase && (
                  <>
                    <p className={styles.flex}>
                      <span>Discount:</span>
                      <span>{dummyDatabase.discount}</span>
                    </p>
                    <p className={styles.flex}>
                      <span>Total:</span>
                      <span>{dummyDatabase.total}</span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceModal;
