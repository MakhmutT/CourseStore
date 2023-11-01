export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <nav>
        <ul>
          <li>Авторизация</li>
        </ul>
      </nav>
      {children}
    </>
  );
}
