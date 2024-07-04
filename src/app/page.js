// import DeviceFetch from "@/components/deviceFetch/DeviceFetch";
import App from "@/components/select/Select";
import styles from "./page.module.css";
import Dummy from "@/components/dummy/Dummy";
import DeviceFetch from "@/components/deviceFetch/DeviceFetch";
// import Invoice from "@/components/invoice/Invoice";

export default function Home() {
  {
    /* import component to test in browser */
  }
  return (
    <main className={styles.main}>
      {/* added a new device component */}
      <DeviceFetch />
      {/* this is an example */}
      {/* <Invoice /> */}
    </main>
  );
}
