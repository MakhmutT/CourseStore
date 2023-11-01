import styles from './page.module.css';
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "ComputedMeta"
  };
}

export default function Home(): JSX.Element {
  console.log('I am home');
  return (
    <main className={styles.main}>
      Главная страница
    </main>
  );
}
