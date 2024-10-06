/**
 * Copyright (c) 2023 WebCimes - RICHARD Florian (https://webcimes.com)
 * MIT License - https://choosealicense.com/licenses/mit/
 * Date: 2024-10-04
 */
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
export declare class WebcimesCookies {
    /** Get the dom element of cookies */
    cookies: HTMLElement | null;
    /** Options of WebcimesCookies */
    private options;
    /** Cookie preferences */
    private preferences;
    /** Set the default texts for each language */
    private texts;
    /**
     * Create cookies modal
     */
    constructor(options: Partial<Options>, preferences: CookiePreference[]);
    /**
     * Convert elements entry to an array of HTMLElement
     */
    private getHtmlElements;
    /**
     * Convert element entry to an HTMLElement
     */
    private getHtmlElement;
    /**
     * Initialization of cookies modal
     */
    private init;
    /**
     * Render the cookies modal
     */
    private renderCookiesModal;
    /**
     * Render each cookie preference checkbox
     */
    private renderPreference;
    /**
     * Bind events to the buttons and preferences
     */
    private bindEvents;
    /**
     * Handle click on cookies modal buttons
     */
    private onCookieOptionClick;
    /**
     * Handle keydown on checkbox icon
     */
    private onCheckboxIconKeyDown;
    /**
     * Handle change on checkbox
     */
    private onCheckboxChange;
    /**
     * Show or hide preferences section
     */
    private showPreferencesSection;
    /**
     * Handle accepting cookies
     */
    private acceptCookies;
    /**
     * Handle refusing cookies
     */
    private refuseCookies;
    /**
     * Set cookies consent and preferences
     */
    private setCookies;
    /**
     * Destroy the cookies modal
     */
    destroy(): void;
}
export {};
//# sourceMappingURL=webcimes-cookies.d.ts.map