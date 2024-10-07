/**
 * Copyright (c) 2023 WebCimes - RICHARD Florian (https://webcimes.com)
 * MIT License - https://choosealicense.com/licenses/mit/
 * Date: 2024-10-04
 */
/**
 * Default texts
 */
interface defaultTexts {
    title: string;
    description: string;
    buttonAccept: string;
    buttonRefuse: string;
    buttonPreferences: string;
    buttonBack: string;
    preferenceAccept: string;
    preferenceRefuse: string;
}
/**
 * Options
 */
interface Options {
    /** set default wrapper element for cookies modal, default body */
    wrapperElement: string | HTMLElement | null;
    /** set default language for defaultTexts, default "en" */
    language: string;
    /** set default texts for cookies modal (override the language texts), default english texts */
    defaultTexts: defaultTexts;
    /** set default cookies settings */
    cookiesSettings: {
        /** set default cookie name for consent, default "cookies_consent" */
        consentCookieName: string;
        /** set default cookie name for preferences, default "cookies_preferences */
        preferencesCookieName: string;
        /** set default cookie expiration, value can be a Number which will be interpreted as days from time of creation or a Date instance, default 365 */
        expiration: number | Date;
        /** set default cookie path, default "/" */
        path: string;
        /** set default cookie domain, default current domain */
        domain: string;
        /** set default cookie secure, default true */
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
    private defaultTexts;
    /**
     * Create cookies modal
     * @param options Options
     * @param preferences Cookies preferences list with required and optional cookies
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