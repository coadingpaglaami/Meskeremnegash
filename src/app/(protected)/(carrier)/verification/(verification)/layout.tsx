import VerificationLayOut from "./VerificationLayOut";

export default function VerificationMainLayout({children}:{children:React.ReactNode}) {
    return (
        <VerificationLayOut>
            {children}
        </VerificationLayOut>
    )
}