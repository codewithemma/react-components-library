"use client";
import styles from "./SingleOrder.module.css";
import { repairData } from "../../page";

const SingleOrder = ({ id }) => {
  const item = repairData.find((data) => data.id === id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.item_name}>{item.device}</p>
        <div className={styles.btn_group}>
          <p>Severity:</p>
          <div>
            <select className={styles.select} name="name" id="id">
              <option value="high">High</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>
        <div className={styles.form}>
          <p>Issues Detected</p>
          <textarea className={styles.textarea} name="text" id="" />
        </div>
        <div className={styles.form}>
          <p>Recommendation</p>
          <textarea className={styles.textarea} name="text" id="" />
        </div>
        <div className={styles.form}>
          <p>Serial number / IMEI</p>
          <textarea className={styles.textarea} name="text" id="" />
        </div>
        <div className={styles.btn_group}>
          <button>Save</button>
          <button>Generate Invoice</button>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
