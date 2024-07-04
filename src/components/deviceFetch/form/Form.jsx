"use client";
import { useState } from "react";
import styles from "./Form.module.css";
const DeviceFetch = ({ deviceDetails }) => {
  const [category, setCategory] = useState("");
  const [filteredDevices, setFilteredDevices] = useState(deviceDetails);
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory) {
      const filtered = deviceDetails.phones.filter(
        (device) =>
          device.deviceName.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredDevices(filtered);
    } else {
      setFilteredDevices(deviceDetails.phones);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <select
          className={styles.select}
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">Select a category</option>
          <option value="iPhone">iPhone</option>
          <option value="Samsung">Samsung</option>
          <option value="Infinix">Infinix</option>
          <option value="Tecno">Tecno</option>
          <option value="iTel">iTel</option>
        </select>
        <select className={styles.select}>
          <option value="">Select an item</option>
          {Object.values(filteredDevices).map((device, index) => (
            <option key={index} value={device.deviceName}>
              {device.deviceModel}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DeviceFetch;
