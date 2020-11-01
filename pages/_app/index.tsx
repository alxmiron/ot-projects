import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";

import { theme } from "@Definitions/Styled";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";
import { FocusStyleManager } from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@Static/css/main.scss";

FocusStyleManager.onlyShowFocusOnTabs();

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(WebApp /* appWithTranslation(WebApp) */);
