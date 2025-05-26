import type { AvailableLanguageTag } from "../paraglide/runtime.js"

type AbsolutePathname = `/${string}`

const pathnames : Record<AbsolutePathname, 
	Record<AvailableLanguageTag, AbsolutePathname>
> = {
    "/": {
        en: "/en",
        pt: "/pt"
    }
}

// src/linking.ts
export function localizePathname(
	pathname: AbsolutePathname, 
	locale: AvailableLanguageTag
) {
	if(pathnames[pathname]) {
		return pathnames[pathname][locale]
	}
	return pathname
}
