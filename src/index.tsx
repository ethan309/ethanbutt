import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    ChakraProvider,
    ColorModeScript,
    StyleFunctionProps,
    defineStyleConfig,
    extendTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

export const linkTheme = defineStyleConfig({
    baseStyle: (props: StyleFunctionProps) => ({
        color: mode("red.900", "red.100")(props),
        textDecoration: "underline",
    }),
});

const theme = extendTheme({
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("#d9d9d9", "#36454F")(props),
            },
        }),
    },
    components: { Link: linkTheme },
});

root.render(
    <React.StrictMode>
        <ColorModeScript />
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>
);

serviceWorker.unregister();
reportWebVitals();
