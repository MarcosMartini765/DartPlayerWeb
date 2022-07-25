import { PRIVACY_POLICY_ID, URL_SCROLL_TO_PRIVACY_POLICY } from "../constants/constants";

export function scrollToPrivacyPolicy() {
    const hash = location.hash;

    switch (hash) {
        case URL_SCROLL_TO_PRIVACY_POLICY:
            const element = document.getElementById(PRIVACY_POLICY_ID);
            element?.scrollIntoView()
            break;
        default:
            break;
    }
}

export function scrollToPrivacyPolicyClick() {
    const element = document.getElementById(PRIVACY_POLICY_ID);
    element?.scrollIntoView()
}