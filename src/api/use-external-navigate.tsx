import { useCallback } from "react";

export function useExternalNavigate() {
    return useCallback((href: string, shouldReuseTab?: boolean) => {
        if (window) {
            if (shouldReuseTab) {
                window.location.href = href;
            } else {
                window.open(href, "_blank")!.focus();
            }
        }
    }, []);
}
