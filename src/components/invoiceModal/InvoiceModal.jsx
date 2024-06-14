"use client";
import React, { useRef, useState } from "react";
import styles from "./SettingsModal.module.css";
import { MdOutlineCancel } from "react-icons/md";

const InvoiceModal = ({ setShowPopup, showPopup }) => {
  const handleModalPopUp = () => {
    setShowPopup(!showPopup);
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
              <MdOutlineCancel
                onClick={handleModalPopUp}
                className={styles.continue_cancel_icon}
              />
              <p>ssk</p>
            </div>
            <div className={styles.modal}>
              <div className={styles.modal_content}>
                <p>Generate Invoice</p>
                <div className="form">
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className={styles.modal_content}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceModal;
