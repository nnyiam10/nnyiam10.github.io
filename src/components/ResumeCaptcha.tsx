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
            <Turnstile
              sitekey="0x4AAAAAADRbgNiYgLyUlDrJ"
              onSuccess={handleSuccess}
            />
        </div>
    )
}