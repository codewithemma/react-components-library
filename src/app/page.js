import styles from "./page.module.css";
import Invoice from "@/components/invoice/Invoice";

export default function Home() {
  return (
    <main className={styles.main}>
      <Invoice />
    </main>
  );
}
