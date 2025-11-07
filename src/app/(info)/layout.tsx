import { InfoLayout } from "./InfoLayOut";

export default function layoutinfo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <InfoLayout>{children}</InfoLayout>
    </>
  );
}
