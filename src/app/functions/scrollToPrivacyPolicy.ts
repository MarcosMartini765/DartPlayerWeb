import { PRIVACY_POLICY_ID, URL_SCROLL_TO_PRIVACY_POLICY } from "../constants/constants";

function blink(element: HTMLElement | null) {
    if (!element) return

    const previousText = element.innerText
    element.innerHTML = `# ${previousText}`
    setTimeout(() => {
        element.innerHTML = previousText
    }, 1000);
}

export function scrollToPrivacyPolicy() {
    setTimeout(() => {
        const hash = location.hash;

        switch (hash) {
            case URL_SCROLL_TO_PRIVACY_POLICY:
                const element = document.getElementById(PRIVACY_POLICY_ID);
                element?.scrollIntoView()
                blink(element)
                break;
            default:
                break;
        }
    }, 1000);
}

export function scrollToPrivacyPolicyClick() {
    const element = document.getElementById(PRIVACY_POLICY_ID);
    element?.scrollIntoView()
    blink(element)
}