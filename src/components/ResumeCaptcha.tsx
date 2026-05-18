import { Turnstile } from "react-turnstile";

interface ResumeCaptchaProps {
    setAuthorized: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ResumeCaptcha({
    setAuthorized
}: ResumeCaptchaProps) {

    console.log('ResumeCaptcha rendered')

    function handleSuccess() {
        sessionStorage.setItem(
            'resumeAuthorized',
            'true'
        )
        setAuthorized(true)
    }

    return (
        <div className="resume-gate">
            <p className="resume-gate-description">
                Please verify to proceed.
            </p>

            <Turnstile
              sitekey="0x4AAAAAADRbgNiYgLyUlDrJ"
              onSuccess={handleSuccess}
            />
        </div>
    )
}