export default function AboutTemplate({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div style={{ border: "1px solid green" }}>
      {children}
    </div>
  );
}
