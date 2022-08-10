import * as React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/mui/createEmotionCache";
import theme from "../lib/mui/theme";
import "tailwindcss/tailwind.css";
import UserProvider from "../lib/contexts/auth/AuthProvider";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<UserProvider>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</UserProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}
