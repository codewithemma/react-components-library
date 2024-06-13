import styles from "./Admin.module.css";
import AdminLinks from "@/components/adminLinks/AdminLinks";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <AdminLinks />
    </div>
  );
};

export default page;
