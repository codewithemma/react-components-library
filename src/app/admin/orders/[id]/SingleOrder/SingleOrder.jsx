"use client";
import styles from "./SingleOrder.module.css";
import { repairData } from "../../page";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import InvoiceModal from "@/components/invoiceModal/InvoiceModal";

const SingleOrder = ({ id }) => {
  const item = repairData.find((data) => data.id === id);
  const [formData, setFormData] = useState({
    severity: "",
    issuesDetected: "",
    recommendation: "",
    imei: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [active, setActive] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const showPopUp = async () => {
    setShowPopup(!showPopup);
  };

  const handleButtonClick = (event) => {
    const value = event.target.innerText;
    setActive(value);
    setFormData({ ...formData, severity: value });
  };
  const handleSave = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.item_name}>{item.device}</p>
        <div className={styles.severity}>
          <p>Severity:</p>
          <div>
            <button
              className={active === "High" && styles.active}
              onClick={handleButtonClick}
            >
              High
            </button>
            <button
              className={active === "Low" && styles.active}
              onClick={handleButtonClick}
            >
              Low
            </button>
          </div>
        </div>
        <div className={styles.form}>
          <p>Issues Detected</p>
          <textarea
            onChange={handleChange}
            className={styles.textarea}
            name="issuesDetected"
            value={formData.issuesDetected}
          />
        </div>
        <div className={styles.form}>
          <p>Recommendation</p>
          <textarea
            onChange={handleChange}
            className={styles.textarea}
            name="recommendation"
            value={formData.recommendation}
          />
        </div>
        <div className={styles.form}>
          <p>Serial number / IMEI</p>
          <input
            name="imei"
            type="text"
            onChange={handleChange}
            value={formData.imei}
            className={styles.input}
          />
        </div>
        <div className={styles.btn_group}>
          <button onClick={handleSave}>Save</button>
          <button onClick={showPopUp}>Generate Invoice</button>
        </div>
      </div>
      <div className={styles.device_details}>
        <div className={styles.device_flex}>
          <button className={styles.float}>
            <FiEdit />
          </button>
          <div className={styles.device_flex_child}>
            <p>Device Diagnostics</p>
          </div>
        </div>
        {submittedData && (
          <div className={styles.card}>
            <div className={styles.flex1}>
              <span>Severity:</span>
              <span>{submittedData.severity}</span>
            </div>
            <div className={styles.flex}>
              <span>Issues Detected:</span>
              <textarea value={submittedData?.issuesDetected} disabled />
            </div>
            <div className={styles.flex}>
              <span>Recommendation:</span>
              <textarea value={submittedData?.recommendation} disabled />
            </div>
            <div className={styles.flex1}>
              <span> Serial number / IMEI:</span>
              <span>{submittedData.imei}</span>
            </div>
          </div>
        )}
      </div>
      <InvoiceModal setShowPopup={setShowPopup} showPopup={showPopup} />
    </div>
  );
};

export default SingleOrder;
