// Import webcimes-cookies
import { WebcimesCookies } from "../dist/js/webcimes-cookies.esm.js";

// Wait for dom content loaded
document.addEventListener("DOMContentLoaded", function()
{
    let cookies = new WebcimesCookies({
        language: "en",
    }, [
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