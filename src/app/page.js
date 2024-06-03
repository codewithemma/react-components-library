import styles from "./page.module.css";
import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <main className={styles.main}>
      <Timeline />
    </main>
  );
}
