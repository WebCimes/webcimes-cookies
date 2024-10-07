# webcimes-cookies

Easily create a cookie consent modal and pass your own list of cookie preferences (to accept or refuse each one). The modal includes three buttons: accept, preferences, and refuse. it works with vanilla javascript + html + css, no dependencies are required and the module is built in a very lightweight size.

Once the `webcimes-cookies` script is added to your project, the modal will be created and displayed automatically. You can also use the `WebcimesCookies` class to create a modal with your own custom options.

## Installation

Use the npm package manager to install webcimes-cookies.

```bash
npm install webcimes-cookies
```

### ESM
Compared to JS bundlers (like Webpack), using ESM in the browser requires you to use the full path and filename instead of the module name.
You can use an importmap to resolve the arbitrary module names to complete paths (not needed if you use JS bundlers):
```html
<html>
    <head>
		...
        <script type="importmap">
        {
            "imports": {
                "webcimes-cookies": "./node_modules/webcimes-cookies/dist/js/webcimes-cookies.esm.js"
            }
        }
        </script>
	</head>
	...
```

Then import javascript module:
```javascript
import { WebcimesCookies } from "webcimes-cookies";
```

Or you can also set the full path directly in the import:
```html
<html>
    <head>
		...
		<script type="module">
			// Import webcimes-cookies
			import { WebcimesCookies } from "./node_modules/webcimes-cookies/dist/js/webcimes-cookies.esm.js";
			...
		</script>
	</head>
	...
```

Or with JS bundlers (like Webpack) you can call directly the module :
```javascript
import { WebcimesCookies } from "webcimes-cookies";
```

### UDM
You can directly load the udm module in the script tag:
```html
<html>
    <head>
		...
        <script src="./node_modules/webcimes-cookies/dist/js/webcimes-cookies.udm.js" type="text/javascript"></script>
	</head>
	...
```

### Import stylesheet:
```html
<link rel="stylesheet" href="./node_modules/webcimes-cookies/dist/css/webcimes-cookies.css">
```

## Usage

### Call `WebcimesCookies` for create cookies modal:
```javascript
// Wait for dom content loaded or call WebcimesCookies before the end of body
document.addEventListener("DOMContentLoaded", function()
{
	// Create cookies modal
    const myModal = new WebcimesCookies({
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
```

### Set basic parameter on the modal:
All parameters are optionnal, for start you can set the `wrapperElement` to define the parent element of the modal (default is `body`) like this:

```javascript
const myModal = new WebcimesCookies({
	wrapperElement: document.querySelector("body"), // set default wrapper element for cookies modal, default body
});

```

You can choose the default language text with `language` (the default language is `en`) like this:

```javascript
const myModal = new WebcimesCookies({
	language: "en", // set default language for defaultTexts, default "en"
});
```

But you can also use `defaultTexts` to set custom title, description and buttons text (this will override the language text).

```javascript
const myModal = new WebcimesCookies({
	defaultTexts: { // set default texts for cookies modal (override the language texts), default english texts
		title: "My title",
		description: "My description",
		buttonAccept: "Accept",
		buttonRefuse: "Refuse",
		buttonPreferences: "Preferences",
		buttonBack: "Back",
		preferenceAccept: "Accept",
		preferenceRefuse: "Refuse",
	},
});
```

Then you can set the default cookies settings with `cookiesSettings` like this:

```javascript
const myModal = new WebcimesCookies({
	cookiesSettings: { // set default cookies settings
		consentCookieName: "cookies_consent", // set default cookie name for consent, default "cookies_consent"
		preferencesCookieName: "cookies_preferences", // set default cookie name for preferences, default "cookies_preferences
		expiration: 365, // set default cookie expiration, value can be a Number which will be interpreted as days from time of creation or a Date instance, default 365
		path: "/", // set default cookie path, default "/"
		domain: window.location.hostname, // set default cookie domain, default current domain
		secure: true, // set default cookie secure, default true
		sameSite: "Lax",
	},
});
```

### Set cookies preferences:
After accepting or refusing cookies, it's will create two cookies: `cookies_consent` and `cookies_preferences` with the value of the user's choice. You can set the list of cookies preferences with `preferences` options, like this:

```javascript
const myModal = new WebcimesCookies({}, [
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
	},
]);
```
Just note that the `name` field is required, the `title` and `description` fields are optional, and the `required` field is also optional (default is `false`). If the `required` field is set to `true`, the user will not be able to refuse the cookie (for functional cookies for example).

### Use the cookies_preferences
In your application, you can use the `cookies_preferences` cookie to check the user's choice. The cookie contains a JSON object with the user's choice for each cookie preference (boolean value, `true` for accept and `false` for refuse):

```json
{
	"cookie_required": true,
	"cookie_analytics": false
}
```

Then you can authorize or not the use of cookies according to the user's choice directly in your application.

example basic php code:
```php
$preferences = $_COOKIE["cookies_preferences"];
$preferences = json_decode($preferences, true);
if ($preferences["cookie_analytics"])
{
	// Implement your analytics code here
}
```

### Get dom element
You can get the dom element of the current modal like this:

```javascript
// Get the instance
const myModal = new WebcimesCookies(...);

// Things

// Then get the dom element of the current cookie modal
myModal.cookies;
```

### Destroy
To destroy the cookie modal manually, you can call the `destroy` method like this:

```javascript
// Get the instance
const myModal = new WebcimesCookies(...);

// Things

// Then call the destroy method:
myModal.destroy();
```

### Style modals:
You can style modal with the following field applying to the class of `.webcimes-cookies`:

```css
.webcimes-cookies
{
	--webcimes-cookies-width: 500px;
	--webcimes-cookies-background: rgba(0, 0, 0, 0.8);
	--webcimes-cookies-content-background: #fff;
	--webcimes-cookies-content-border-radius: 10px;
	--webcimes-cookies-content-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	--webcimes-cookies-option-focus-outline: 2px solid #2159a7;
	--webcimes-cookies-option-focus-outline-offset: 2px;
	--webcimes-cookies-option-refuse-background: #aaa;
	--webcimes-cookies-option-refuse-color: #fff;
	--webcimes-cookies-option-refuse-hover-background: #999;
	--webcimes-cookies-option-refuse-hover-color: #fff;
	--webcimes-cookies-option-preferences-background: #666;
	--webcimes-cookies-option-preferences-color: #fff;
	--webcimes-cookies-option-preferences-hover-background: #555;
	--webcimes-cookies-option-preferences-hover-color: #fff;
	--webcimes-cookies-option-back-background: #666;
	--webcimes-cookies-option-back-color: #fff;
	--webcimes-cookies-option-back-hover-background: #555;
	--webcimes-cookies-option-back-hover-color: #fff;
	--webcimes-cookies-option-accept-background: #333;
	--webcimes-cookies-option-accept-color: #fff;
	--webcimes-cookies-option-accept-hover-background: #000;
	--webcimes-cookies-option-accept-hover-color: #fff;
	--webcimes-cookies-icon-focus-outline: 2px solid #2159a7;
	--webcimes-cookies-icon-focus-outline-offset: 2px;

}
```
Or you can also override the default style with your own style.

## License
[MIT](https://choosealicense.com/licenses/mit/)