
// Wait for dom content loaded
document.addEventListener("DOMContentLoaded", function()
{
    new WebcimesCookies({
        wrapperElement: document.querySelector("body"), // set default wrapper element for cookies modal, default body
        language: "en", // set default language for defaultTexts, default "en"
        defaultTexts: { // set default texts for cookies modal (override the language texts), default english texts
			title: "Cookies",
			description: "We use cookies to ensure the operation of the site, personalize our content, and offer a better experience.<br><br>By clicking OK or by activating an option in the preferences, you agree to use the cookies.",
			buttonAccept: "Accept",
			buttonRefuse: "Refuse",
			buttonPreferences: "Preferences",
			buttonBack: "Back",
			preferenceAccept: "Accept",
			preferenceRefuse: "Refuse",
        },
        cookiesSettings: { // set default cookies settings
            consentCookieName: "cookies_consent", // set default cookie name for consent, default "cookies_consent"
            preferencesCookieName: "cookies_preferences", // set default cookie name for preferences, default "cookies_preferences
            expiration: 365, // set default cookie expiration, value can be a Number which will be interpreted as days from time of creation or a Date instance, default 365
            path: "/", // set default cookie path, default "/"
            domain: window.location.hostname, // set default cookie domain, default current domain
            secure: true, // set default cookie secure, default true
            sameSite: "Lax",
        },
    }, [ // set cookies preferences list with required and optional cookies
        {
            name: "cookie_required",
            title: "Functional cookies",
            description: "These cookies are essential for the website to function and cannot be disabled.",
            required: true,
        },
        {
            name: "cookie_analytics",
            title: "Audience measurement and web analysis",
            description: "These cookies allow the measurement of website traffic.",
            required: false,
        }
    ]);
});