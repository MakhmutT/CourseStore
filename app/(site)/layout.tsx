import './globals.css';
import styles from './page.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>Курсы</li>
          <li>Для детей</li>
          <li>О нас</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
