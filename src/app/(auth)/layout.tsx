import AuthLayout from "./AuthLayOut";

export default function AuthLayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthLayout>{children}</AuthLayout>
    </>
  );
}
