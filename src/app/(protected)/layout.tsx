import ProtectedLayoutClient from "./ProtectedLayOutClient";


export default function ProtectedLayout({children}:{children:React.ReactNode}) {
  return (
    <ProtectedLayoutClient>{children}</ProtectedLayoutClient>
  )
};