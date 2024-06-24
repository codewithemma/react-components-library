import styles from "./Form.module.css";
const categories = ["Laptop", "MobilePhone", "Tablet"];
const handleSelectChange = () => {};

const Form = ({ deviceDetails }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form action="">
          <select className={styles.select} name="" id="">
            <option value="">Select a device</option>
            {categories.map((category, id) => (
              <option key={id} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select className={styles.select} name="" id="">
            {/* {deviceDetails?.map((data, id) => (
              <p> {data?.status}</p>
            ))} */}
          </select>
        </form>
      </div>
    </div>
  );
};

export default Form;
