import type { AvailableLanguageTag } from "../paraglide/runtime";
import { localizePathname } from "./linking";

export function getLanguageUrl(currentPath: string, newLang: AvailableLanguageTag): string {
    // Handle root paths (/, /en, /es, /pt)
    if (currentPath === "/" || currentPath === "" || /^\/(en|es|pt)\/?$/.test(currentPath)) {
        return localizePathname("/", newLang);
    }
    
    // Remove leading/trailing slashes and language prefix
    const cleanPath = currentPath.replace(/^\/|\/$/g, '').replace(/^(en|es|pt)\//, '');
    
    // If cleanPath is empty after processing, treat as root
    if (!cleanPath) {
        return localizePathname("/", newLang);
    }
    
    return localizePathname(`/${cleanPath}`, newLang);
}
