/**
 * Copyright (c) 2023 WebCimes - RICHARD Florian (https://webcimes.com)
 * MIT License - https://choosealicense.com/licenses/mit/
 * Date: 2024-10-04
 */

"use strict";

// Import js-cookie.ts
import Cookies from 'js-cookie'

/**
 * Options
 */
interface Options {
    /** set default wrapper element for cookies modal, default body */
    wrapperElement: string | HTMLElement | null;
	/** set default language for texts, default "en" */
	language: string;
	/** set title of cookies, default "Cookies" */
	title: string;
	/** set description of cookies, default "We use cookies to ensure the operation of the site, personalize our content, and offer a better experience.<br><br>By clicking OK or by activating an option in the preferences, you agree to use the cookies." */
	description: string;
	/** set text of button accept, default "Accept" */
	buttonAccept: string;
	/** set text of button refuse, default "Refuse" */
	buttonRefuse: string;
	/** set text of button preferences, default "Preferences" */
	buttonPreferences: string;
	/** set text of button back, default "Back" */
	buttonBack: string;
	/** set text of preference accept, default "Accept" */
	preferenceAccept: string;
	/** set text of preference refuse, default "Refuse" */
	preferenceRefuse: string;
    /** cookies settings */
    cookiesSettings: {
        /** set default cookies consent cookie name, default "cookies_consent" */
        consentCookieName: string;
        /** set default cookies preferences cookie name, default "cookies_preferences" */
        preferencesCookieName: string;
        /** set default cookie expiration, value can be a Number which will be interpreted as days from time of creation or a Date instance, default 365 */
        expiration: number | Date;
        /** set default cookie path, default "/" */
        path: string;
        /** set default cookie domain, default current domain */
        domain: string;
        /** set default cookie secure, default false */
        secure: boolean;
        /** set default cookie same site, default "Lax" */
        sameSite: "strict" | "Strict" | "lax" | "Lax" | "none" | "None";
    };
}

/**
 * Cookie preference
 */
interface CookiePreference {
    name: string;
    title: string;
    description: string;
    required?: boolean;
}

/**
 * Class WebcimesCookies
 */
export class WebcimesCookies {
    /** Get the dom element of cookies */
    public cookies: HTMLElement | null;

    /** Options of WebcimesCookies */
    private options: Options;

    /** Cookie preferences */
    private preferences: CookiePreference[] = [];

    /** Set the default texts for each language */
    private texts: { [key: string]: { [key: string]: string } } = {
		"en": {
			title: "Cookies",
			description: "We use cookies to ensure the operation of the site, personalize our content, and offer a better experience.<br><br>By clicking OK or by activating an option in the preferences, you agree to use the cookies.",
			buttonAccept: "Accept",
			buttonRefuse: "Refuse",
			buttonPreferences: "Preferences",
			buttonBack: "Back",
			preferenceAccept: "Accept",
			preferenceRefuse: "Refuse",
		},
		"fr": {
			title: "Les cookies",
			description: "Nous utilisons des cookies afin de garantir le fonctionnement du site, personnaliser notre contenu, ainsi que proposer une meilleure expérience.<br><br>En cliquant sur OK ou en activant une option dans les préférences, vous acceptez d'utiliser les cookies.",
			buttonAccept: "Accepter",
			buttonRefuse: "Refuser",
			buttonPreferences: "Préférences",
			buttonBack: "Retour",
			preferenceAccept: "Accepter",
			preferenceRefuse: "Refuser",
		},
		"es": {
			title: "Cookies",
			description: "Utilizamos cookies para garantizar el funcionamiento del sitio, personalizar nuestro contenido y ofrecer una mejor experiencia.<br><br>Al hacer clic en Aceptar o al activar una opción en las preferencias, acepta el uso de cookies.",
			buttonAccept: "Aceptar",
			buttonRefuse: "Rechazar",
			buttonPreferences: "Preferencias",
			buttonBack: "Volver",
			preferenceAccept: "Aceptar",
			preferenceRefuse: "Rechazar",
		},
		"de": {
			title: "Cookies",
			description: "Wir verwenden Cookies, um den Betrieb der Website zu gewährleisten, unseren Inhalt zu personalisieren und ein besseres Erlebnis zu bieten.<br><br>Durch Klicken auf OK oder durch Aktivieren einer Option in den Einstellungen stimmen Sie der Verwendung von Cookies zu.",
			buttonAccept: "Akzeptieren",
			buttonRefuse: "Ablehnen",
			buttonPreferences: "Einstellungen",
			buttonBack: "Zurück",
			preferenceAccept: "Akzeptieren",
			preferenceRefuse: "Ablehnen",
		},
		"it": {
			title: "Cookies",
			description: "Utilizziamo i cookie per garantire il funzionamento del sito, personalizzare i nostri contenuti e offrire una migliore esperienza.<br><br>Cliccando su OK o attivando un'opzione nelle preferenze, accetti di utilizzare i cookie.",
			buttonAccept: "Accetta",
			buttonRefuse: "Rifiuta",
			buttonPreferences: "Preferenze",
			buttonBack: "Indietro",
			preferenceAccept: "Accetta",
			preferenceRefuse: "Rifiuta",
		},
		"pt": {
			title: "Cookies",
			description: "Utilizamos cookies para garantir o funcionamento do site, personalizar nosso conteúdo e oferecer uma melhor experiência.<br><br>Ao clicar em OK ou ao ativar uma opção nas preferências, você concorda em usar os cookies.",
			buttonAccept: "Aceitar",
			buttonRefuse: "Recusar",
			buttonPreferences: "Preferências",
			buttonBack: "Voltar",
			preferenceAccept: "Aceitar",
			preferenceRefuse: "Recusar",
		},
		"nl": {
			title: "Cookies",
			description: "We gebruiken cookies om de werking van de site te garanderen, onze inhoud te personaliseren en een betere ervaring te bieden.<br><br>Door op OK te klikken of een optie in de voorkeuren te activeren, gaat u akkoord met het gebruik van cookies.",
			buttonAccept: "Accepteren",
			buttonRefuse: "Weigeren",
			buttonPreferences: "Voorkeuren",
			buttonBack: "Terug",
			preferenceAccept: "Accepteren",
			preferenceRefuse: "Weigeren",
		},
		"ru": {
			title: "Cookies",
			description: "Мы используем файлы cookie для обеспечения работы сайта, персонализации нашего контента и предоставления лучшего опыта.<br><br>Нажимая ОК или активируя опцию в настройках, вы соглашаетесь на использование файлов cookie.",
			buttonAccept: "Принять",
			buttonRefuse: "Отказать",
			buttonPreferences: "Настройки",
			buttonBack: "Назад",
			preferenceAccept: "Принять",
			preferenceRefuse: "Отказать",
		},
    };

    /**
     * Create cookies modal
     */
    constructor(options: Partial<Options>, preferences: CookiePreference[]) {
        // Defaults
        const defaults: Options = {
            wrapperElement: document.querySelector("body") as HTMLElement,
            language: "en",
            title: this.texts["en"]["title"],
            description: this.texts["en"]["description"],
            buttonAccept: this.texts["en"]["buttonAccept"],
            buttonRefuse: this.texts["en"]["buttonRefuse"],
            buttonPreferences: this.texts["en"]["buttonPreferences"],
            buttonBack: this.texts["en"]["buttonBack"],
			preferenceAccept: this.texts["en"]["preferenceAccept"],
			preferenceRefuse: this.texts["en"]["preferenceRefuse"],
            cookiesSettings: {
                consentCookieName: "cookies_consent",
                preferencesCookieName: "cookies_preferences",
                expiration: 365,
                path: "/",
                domain: window.location.hostname,
                secure: true,
                sameSite: "Lax",
            },
        };

        // If options language is set, set texts according to the language
        if (options.language && this.texts[options.language]) {
            defaults.title = this.texts[options.language]["title"];
            defaults.description = this.texts[options.language]["description"];
            defaults.buttonAccept = this.texts[options.language]["buttonAccept"];
            defaults.buttonRefuse = this.texts[options.language]["buttonRefuse"];
            defaults.buttonPreferences = this.texts[options.language]["buttonPreferences"];
            defaults.buttonBack = this.texts[options.language]["buttonBack"];
			defaults.preferenceAccept = this.texts[options.language]["preferenceAccept"];
			defaults.preferenceRefuse = this.texts[options.language]["preferenceRefuse"];
        }

        // Merge defaults and options
        this.options = { ...defaults, ...options };

		// Set preferences
        this.preferences = preferences;

        // Initialize the cookies modal
        this.init();
    }

	/**
	 * Convert elements entry to an array of HTMLElement
	 */
	private getHtmlElements(element: string | HTMLElement | NodeList | null)
	{
		// Convert options.element to an array of HTMLElement
		let htmlElements: HTMLElement[] = [];
		if(element instanceof NodeList)
		{
			htmlElements = [...Array.from(element) as HTMLElement[]];
		}
		if(element instanceof HTMLElement)
		{
			htmlElements = [...[element]];
		}
		if(typeof element === "string")
		{
			htmlElements = [...Array.from(document.querySelectorAll(element)) as HTMLElement[]];
		}
		return htmlElements;
	}

	/**
	 * Convert element entry to an HTMLElement
	 */
	private getHtmlElement(element: string | HTMLElement | null)
	{
		// Convert options.element to an array of HTMLElement
		let htmlElement: HTMLElement | null = null;
		if(element instanceof HTMLElement)
		{
			htmlElement = element;
		}
		if(typeof element === "string")
		{
			htmlElement = document.querySelector(element) as HTMLElement | null;
		}
		return htmlElement;
	}

    /**
     * Initialization of cookies modal
     */
    private init() {
        // Set the wrapper element
        const wrapperElement = this.getHtmlElement(this.options.wrapperElement);

        // Insert cookies modal if not already accepted or refused
        if (Cookies.get(this.options.cookiesSettings.consentCookieName) === undefined) {
            // Insert cookies modal
            wrapperElement?.insertAdjacentHTML("beforeend", this.renderCookiesModal());

            // Get the cookies modal
            this.cookies = document.querySelector(".webcimes-cookies");

            // Focus the first button
            (this.cookies?.querySelector(".webcimes-cookies__option") as HTMLElement)?.focus();
            
            // Bind events
			this.bindEvents();
        }
    }

    /**
     * Render the cookies modal
     */
    private renderCookiesModal(): string {
        return /* html */ `
        <div class="webcimes-cookies" role="dialog" aria-modal="true" aria-labelledby="webcimes-cookies-title" aria-describedby="webcimes-cookies-description">
            <div class="webcimes-cookies__content">
            <div class="webcimes-cookies__section webcimes-cookies__section--default webcimes-cookies__section--active">
                <div class="webcimes-cookies__data">
                <div id="webcimes-cookies-title" class="webcimes-cookies__title">${this.options.title}</div>
                <div id="webcimes-cookies-description" class="webcimes-cookies__text">${this.options.description}</div>
                </div>
                <div class="webcimes-cookies__options">
                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--accept" title="${this.options.buttonAccept}" aria-label="${this.options.buttonAccept}">${this.options.buttonAccept}</button>
                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--preferences" title="${this.options.buttonPreferences}" aria-label="${this.options.buttonPreferences}">${this.options.buttonPreferences}</button>
                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--refuse" title="${this.options.buttonRefuse}" aria-label="${this.options.buttonRefuse}">${this.options.buttonRefuse}</button>
                </div>
            </div>
            <div class="webcimes-cookies__section webcimes-cookies__section--preferences">
                <div class="webcimes-cookies__data">
                <div class="webcimes-cookies__title">${this.options.buttonPreferences}</div>
                <div class="webcimes-cookies__preferences">
                    ${this.preferences.map(pref => this.renderPreference(pref)).join('')}
                </div>
                </div>
                <div class="webcimes-cookies__options">
                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--back" title="${this.options.buttonBack}" aria-label="${this.options.buttonBack}">${this.options.buttonBack}</button>
                <button type="button" class="webcimes-cookies__option webcimes-cookies__option--accept" title="${this.options.buttonAccept}" aria-label="${this.options.buttonAccept}">${this.options.buttonAccept}</button>
                </div>
            </div>
            </div>
        </div>`;
    }

    /**
     * Render each cookie preference checkbox
     */
    private renderPreference(preference: CookiePreference): string {
        return /* html */ `
        <div class="webcimes-cookies__preference">
            <div class="webcimes-cookies__preference-title" id="${preference.name}-title">${preference.title}</div>
            <div class="webcimes-cookies__preference-description" id="${preference.name}-description">${preference.description}</div>
            <div class="webcimes-cookies__check">
                <label>
                    <input type="checkbox" 
                        name="${preference.name}"
                        ${preference.required ? "disabled" : ""} 
                        checked
                        aria-hidden="true"
                        autocomplete="off">
                    <div class="webcimes-cookies__icon"
                        role="checkbox" 
                        tabindex="0"
                        aria-labelledby="${preference.name}-label" 
                        aria-describedby="${preference.name}-description"
                        aria-required="${preference.required ? 'true' : 'false'}"
                        aria-checked="true">
                        <div class="webcimes-cookies__icon--on">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192s-86-192-192-192H192zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
                            <div>${this.options.preferenceAccept}</div>
                        </div>
                        <div class="webcimes-cookies__icon--off">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128H192c-70.7 0-128-57.3-128-128s57.3-128 128-128H384zM576 256c0-106-86-192-192-192H192C86 64 0 150 0 256S86 448 192 448H384c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/></svg>
                            <div>${this.options.preferenceRefuse}</div>
                        </div>
                    </div>
                </label>
            </div>
        </div>`;
    }

    /**
     * Bind events to the buttons and preferences
     */
    private bindEvents() {
        // Events on buttons click
        this.cookies?.querySelectorAll(".webcimes-cookies__option").forEach((el: HTMLElement) => {
            el.addEventListener("click", () => this.onCookieOptionClick(el));
        });

        // Events on checkbox icon keydown
        this.cookies?.querySelectorAll(".webcimes-cookies__icon").forEach((el: HTMLElement) => {
            el.addEventListener("keydown", (e) => this.onCheckboxIconKeyDown(el, e));
        });

        // Events on checkbox change
        this.cookies?.querySelectorAll(".webcimes-cookies__check input[type=checkbox]").forEach((el: HTMLElement) => {
            el.addEventListener("change", () => this.onCheckboxChange(el));
        });
    }

    /**
     * Handle click on cookies modal buttons
     */
    private onCookieOptionClick(el: HTMLElement) {
        if (el.classList.contains("webcimes-cookies__option--preferences")) {
            this.showPreferencesSection(true);
        } else if (el.classList.contains("webcimes-cookies__option--back")) {
            this.showPreferencesSection(false);
        } else if (el.classList.contains("webcimes-cookies__option--accept")) {
            this.acceptCookies();
        } else if (el.classList.contains("webcimes-cookies__option--refuse")) {
            this.refuseCookies();
        }
    }

    /**
     * Handle keydown on checkbox icon
     */
    private onCheckboxIconKeyDown(el: HTMLElement, e: KeyboardEvent) {
        const checkbox = el.parentElement?.querySelector("input[type=checkbox]") as HTMLInputElement;
        if ((e?.key === "Enter" || e?.key === " ") && !checkbox.disabled) {
            e.preventDefault();
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event("change"));
        }
    }

    /**
     * Handle change on checkbox
     */
    private onCheckboxChange(el: HTMLElement) {
        const checkbox = el as HTMLInputElement;
        const icon = checkbox.parentElement?.querySelector(".webcimes-cookies__icon") as HTMLElement;
        icon.setAttribute("aria-checked", checkbox.checked.toString());
    }

    /**
     * Show or hide preferences section
     */
    private showPreferencesSection(showPreferences: boolean) {
        if (showPreferences) {
            // Show preferences section
            this.cookies?.querySelector(".webcimes-cookies__section--default")?.classList.remove("webcimes-cookies__section--active");
            this.cookies?.querySelector(".webcimes-cookies__section--preferences")?.classList.add("webcimes-cookies__section--active");

            // Focus the first checkbox icon
            (this.cookies?.querySelector(".webcimes-cookies__icon") as HTMLElement)?.focus();
        } else {
            // Show default section
            this.cookies?.querySelector(".webcimes-cookies__section--preferences")?.classList.remove("webcimes-cookies__section--active");
            this.cookies?.querySelector(".webcimes-cookies__section--default")?.classList.add("webcimes-cookies__section--active");
            
            // Focus the first button
            (this.cookies?.querySelector(".webcimes-cookies__option") as HTMLElement)?.focus();
        }
    }

    /**
     * Handle accepting cookies
     */
    private acceptCookies() {
        // Get preferences state
        const preferencesState: Record<string, boolean> = {};

        // Get the state of each preference
        this.preferences.forEach(pref => {
            const checkbox = this.cookies?.querySelector(`input[name='${pref.name}']`) as HTMLInputElement;
            preferencesState[pref.name] = checkbox?.checked || false;
        });

        // Set cookies consent and preferences
        this.setCookies(true, preferencesState);

        // Destroy the cookies modal
        this.destroy();
    }

    /**
     * Handle refusing cookies
     */
    private refuseCookies() {
        // Get preferences state
        const preferencesState: Record<string, boolean> = {};

        // Get the state of each preference
        this.preferences.forEach(pref => {
            preferencesState[pref.name] = pref.required || false;  // Required cookies stay active
        });

        // Set cookies consent and preferences
        this.setCookies(false, preferencesState);

        // Destroy the cookies modal
        this.destroy();
    }

    /**
     * Set cookies consent and preferences
     */
    private setCookies(consent: boolean, preferences: Record<string, boolean>) {
        Cookies.set(this.options.cookiesSettings.consentCookieName, consent.toString(), { expires: this.options.cookiesSettings.expiration, path: this.options.cookiesSettings.path, domain: this.options.cookiesSettings.domain, secure: this.options.cookiesSettings.secure, sameSite: this.options.cookiesSettings.sameSite });
        Cookies.set(this.options.cookiesSettings.preferencesCookieName, JSON.stringify(preferences), { expires: this.options.cookiesSettings.expiration, path: this.options.cookiesSettings.path, domain: this.options.cookiesSettings.domain, secure: this.options.cookiesSettings.secure, sameSite: this.options.cookiesSettings.sameSite });
    }

    /**
     * Destroy the cookies modal
     */
    public destroy() {
        this.cookies?.classList.add("webcimes-cookies--inactive");
        setTimeout(() => {
            // Remove events on buttons click
            this.cookies?.querySelectorAll(".webcimes-cookies__option").forEach((el: HTMLElement) => {
                el.removeEventListener("click", () => this.onCookieOptionClick(el));
            });

            // Remove events on checkbox icon keydown
            this.cookies?.querySelectorAll(".webcimes-cookies__icon").forEach((el: HTMLElement) => {
                el.removeEventListener("keydown", (e) => this.onCheckboxIconKeyDown(el, e));
            });

            // Remove events on checkbox change
            this.cookies?.querySelectorAll(".webcimes-cookies__check input[type=checkbox]").forEach((el: HTMLElement) => {
                el.removeEventListener("change", () => this.onCheckboxChange(el));
            });
    
            // Remove cookies modal
            this.cookies?.remove();
        }, 500);
    }
}