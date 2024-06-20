import PasswordChecker from "../components/passwordChecker/PasswordChecker";
import styles from "./page.module.css";
// import Invoice from "@/components/invoice/Invoice";

export default function Home() {
  {
    /* import component to test in browser */
  }
  return (
    <main className={styles.main}>
      {/* added a new password checker component */}
      <PasswordChecker />
      {/* this is an example */}
      {/* <Invoice /> */}
    </main>
  );
}
