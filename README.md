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

### Call `WebcimesCookies` for create modal:
```javascript
// Wait for dom content loaded or call WebcimesCookies before the end of body
document.addEventListener("DOMContentLoaded", function()
{
	// Create modal
	const myModal = new WebcimesCookies({
		setId: null, // set a specific id on the modal. default "null" 
		setClass: null, // set a specific class on the modal, default "null"
		width: 'auto', // width (specify unit), default "auto"
		height: 'auto', // height (specify unit), default "auto"
		titleHtml: "My title", // html for title, default "null"
		bodyHtml: "My Body", // html for body, default "null"
		buttonCancelHtml: "Cancel", // html for cancel button, default "null"
		buttonConfirmHtml: "Confirm", // html for confirm button, default "null"
		closeOnCancelButton: false, // close modal after trigger cancel button, default "true"
		closeOnConfirmButton: true, // close modal after trigger confirm button, default "true"
		showCloseButton: true, // show close button, default "true"
		allowCloseOutside: false, // allow the modal to close when clicked outside, default "true"
		allowMovement: true, // ability to move modal, default "true"
		moveFromHeader: true, // if allowMovement is set to "true", ability to move modal from header, default "true"
		moveFromBody: false, // if allowMovement is set to "true", ability to move modal from body, default "false"
		moveFromFooter: true, // if allowMovement is set to "true", ability to move modal from footer, default "true"
		stickyHeader: true, // keep header sticky (visible) when scrolling, default "true"
		stickyFooter: true, // keep footer sticky (visible) when scrolling, default "true"
		style: null, // add extra css style to modal, default null
		animationOnShow: 'animDropDown', // "animDropDown" or "animFadeIn" for show animation, default "animDropDown"
		animationOnDestroy: 'animDropUp', // "animDropUp" or "animFadeOut" for destroy animation, default "animDropUp"
		animationDuration: 500, // animation duration in ms, default "500"
		beforeShow: () => {console.log("before show");}, // callback before show modal
		afterShow: () => {console.log("after show");}, // callback after show modal
		beforeDestroy: () => {console.log("before destroy");}, // callback before destroy modal
		afterDestroy: () => {console.log("after destroy");}, // callback after destroy modal
		onCancelButton: () => {console.log("on cancel button");}, // callback after triggering cancel button
		onConfirmButton: () => {console.log("on confirm button");}, // callback after triggering confirm button
	});
});
```

### Modal html structure:
After a creating a modal, the basic html structure look like this:

```html
<div class="webcimes-cookies">
	<div class="webcimes-cookies__header">
		<div class="webcimes-cookies__title">My title</div>
		<button class="webcimes-cookies__button webcimes-cookies__header-close webcimes-cookies__close"></button>
	</div>
	<div class="webcimes-cookies__body">
		My body
	</div>
	<div class="webcimes-cookies__footer">
		<button class="webcimes-cookies__button webcimes-cookies__footer-button webcimes-cookies__footer-button--cancel">Cancel</button>
		<button class="webcimes-cookies__button webcimes-cookies__footer-button webcimes-cookies__footer-button--confirm">Confirm</button>
	</div>
</div>
```

### Set basic parameter on the modal:
All parameters are optionnal, but to set the base message on the modal you can use `titleHtml` to create the title, `bodyHtml` contain the main message of the modal, and `buttonCancelHtml` & `buttonConfirmHtml` contain the html for each button.

For these 4 fields you can just directly write the text or define tags, or call html from an element like this : 

```javascript
const myModal = new WebcimesCookies({
	titleHtml: "My title <span style='color:red'>with red color</span>", // directly put an html tag or attribute like span and style
	bodyHtml: document.querySelector("#myID").outerHTML, // set html from an HTML element
	buttonCancelHtml: "Cancel <img src='my-url' alt=''>", // put the img tag
	buttonConfirmHtml: "Confirm", // or just text
});
```

if any of these 4 fields is set to null (the default), it will not appear on the modal

### Remove specific structure of the modal:
If you want to completely remove `webcimes-cookies__header`, `webcimes-cookies__body` or `webcimes-cookies__footer` you need:

To remove `webcimes-cookies__header`: set `titleHtml` to `null` and `showCloseButton` to `false`

To remove `webcimes-cookies__body`: set `bodyHtml` to `null`

To remove `webcimes-cookies__footer`: set `buttonCancelHtml` to `null` and `buttonConfirmHtml` to `null`

### Scale the modal:
By default the `height` and `width` are set to `auto`, the modal will also be sized according to the html content.

You can also set the determined `height` or `width` by indicating the value with a number and a unit.

```javascript
const myModal = new WebcimesCookies({
	width: '80vm',
	height: '200px',
});
```

### Modal behavior:
Below are the different options for customize the modal behavior.

```javascript
const myModal = new WebcimesCookies({
	closeOnCancelButton: false, // close modal after triggering cancel button, default "true"
	closeOnConfirmButton: false, // close modal after triggering confirm button, default "true"
	showCloseButton: true, // show close button, default "true"
	allowCloseOutside: false, // allows the modal to close when clicked outside, default "true"
	allowMovement: true, // ability to move modal, default "true"
	moveFromHeader: true, // if allowMovement is set to "true", ability to move modal from header, default "true"
	moveFromBody: false, // if allowMovement is set to "true", ability to move modal from body, default "false"
	moveFromFooter: true, // if allowMovement is set to "true", ability to move modal from footer, default "true"
	stickyHeader: true, // keep header sticky (visible) when scrolling, default "true"
	stickyFooter: true, // keep footer sticky (visible) when scrolling, default "true"
});
```

### Add extra style to the modal:
You can define the style of the modal with `css`, but you can also use the style property which allows to directly add an additional style to the modal.

```javascript
const myModal = new WebcimesCookies({
	style: "background:black; color:#fff; text-align:center;",
});
```

### Animation:
Once the modal is created, it will be shown and hidden with an animation, you can choose between two animations for each case:

For `animationOnShow` you can choose between `animDropDown` or `animFadeIn`

For `animationOnDestroy` you can choose between `animDropUp` or `animFadeOut`

And you can set the duration of all animation by setting `animationDuration` with a number in ms.

```javascript
const myModal = new WebcimesCookies({
	animationOnShow: 'animDropDown', // "animDropDown" or "animFadeIn" for show animation, default "animDropDown"
	animationOnDestroy: 'animDropUp', // "animDropUp" or "animFadeOut" for destroy animation, default "animDropUp"
	animationDuration: 500, // anim duration in ms, default "500"
});
```

### Get dom element
You can get the dom element of the current modal like this:

```javascript
// Get the instance
const myModal = new WebcimesCookies(...);

// Things

// Then get the dom element of the current modal
myModal.modal;
```

Or you can get the global container of all modals like this:

```javascript
// Get the instance
const myModal = new WebcimesCookies(...);

// Things

// Then get the dom element containing all modals
myModal.modals;
```

### Events:
Multiple events exist, which allow to interact with the modal at each step. You can use all events below: 

```javascript
const myModal = new WebcimesCookies({
	beforeShow: () => {console.log("before show");}, // callback before show modal
	afterShow: () => {console.log("after show");}, // callback after show modal
	beforeDestroy: () => {console.log("before destroy");}, // callback before destroy modal
	afterDestroy: () => {console.log("after destroy");}, // callback after destroy modal
	onCancelButton: () => {console.log("on cancel button");}, // callback after triggering cancel button
	onConfirmButton: () => {console.log("on confirm button");}, // callback after triggering confirm button
});
```

You can also use `addEventListener` for get the events from the instance like this:

```javascript
// Get the instance
const myModal = new WebcimesCookies(...);

// Create an event on the current modal
myModal.modal.addEventListener("afterDestroy", () => {
	console.log("after destroy");
});
```

### Destroy
To destroy the modal, you have several ways:

- You can use basic close button with `showCloseButton` property set to `true`

- Use `webcimes-cookies__footer-button--cancel` or `webcimes-cookies__footer-button--confirm` button with `closeOnCancelButton` or `closeOnConfirmButton` property set to `true`

- Add a custom button, and set its class to `webcimes-cookies__close`

- Destroy the modal manually with the `destroy` method, like this:

```javascript
// Get the instance
const myModal = new WebcimesCookies(...);

// Things

// Then call the destroy method:
myModal.destroy();
```

### Style modals:
You can style modal with the following field applying to the class of `.webcimes-cookiess` (for background and z-index behind the modal) and `.webcimes-cookies` (for modal):

```css
.webcimes-cookiess
{
	--webcimes-cookiess-background: rgba(0,0,0,0.8);
	--webcimes-cookiess-z-index: 5;
}
.webcimes-cookies
{
	--modal-color: inherit;
	--modal-background: #fff;
	--modal-border-color: #ddd;
	--modal-box-shadow: 1px 1px 3px 0px #444;
	--modal-title-font-size: 24px;
	--modal-button-cancel-background: rgba(102,102,102,1);
	--modal-button-cancel-background-hover: rgba(102,102,102,0.7);
	--modal-button-cancel-color: #fff;
	--modal-button-cancel-color-hover: #fff;
	--modal-button-confirm-background: rgba(0,0,0,1);
	--modal-button-confirm-background-hover: rgba(0,0,0,0.7);
	--modal-button-confirm-color: #fff;
	--modal-button-confirm-color-hover: #fff;
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)