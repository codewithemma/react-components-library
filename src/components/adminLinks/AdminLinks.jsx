import Link from "next/link";
import styles from "./AdminLinks.module.css";
import { FaBoxOpen, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { PiInvoice } from "react-icons/pi";
const AdminLinks = () => {
  return (
    <div className={styles.container}>
      <Link href="/admin/orders" className={styles.link}>
        <FaBoxOpen />
        <span>Orders</span>
      </Link>
      <Link href="/admin/track-status" className={styles.link}>
        <FaMapMarkerAlt />
        <span>Track Status</span>
      </Link>
      <Link href="/admin/notification" className={styles.link}>
        <IoIosNotifications />
        <span>Notification</span>
      </Link>
      <Link href="/admin/invoice" className={styles.link}>
        <PiInvoice />
        <span>Invoice</span>
      </Link>
    </div>
  );
};

export default AdminLinks;
