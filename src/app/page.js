import PasswordChecker from "./admin/passwordChecker/PasswordChecker";
import styles from "./page.module.css";
// import Invoice from "@/components/invoice/Invoice";

export default function Home() {
  {
    /* import component to test in browser */
  }
  return (
    <main className={styles.main}>
      <PasswordChecker />
      {/* this is an example */}
      {/* <Invoice /> */}
    </main>
  );
}
