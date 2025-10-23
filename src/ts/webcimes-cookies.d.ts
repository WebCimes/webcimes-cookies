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
        sameSite: 'strict' | 'Strict' | 'lax' | 'Lax' | 'none' | 'None';
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
 * Public interface for WebcimesCookies instances
 * This represents the actual accessible members of the instance
 */
export interface WebcimesCookies {
    /** Get the dom element of cookies */
    cookies: HTMLElement | null;
    /** Destroy the cookies modal */
    destroy(): void;
}
/**
 * Factory function to create a WebcimesCookies instance with proper typing
 */
export declare function createWebcimesCookies(options: Partial<Options>, preferences?: CookiePreference[]): WebcimesCookies;
export {};
//# sourceMappingURL=webcimes-cookies.d.ts.map