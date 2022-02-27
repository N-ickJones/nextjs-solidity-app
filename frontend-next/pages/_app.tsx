import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline, Grid, ThemeProvider, StyledEngineProvider } from '@mui/material';
import { Theme } from "@mui/material/styles";
import "@mui/styles";
import StylesProvider from '@mui/styles/StylesProvider';
import Navigation from '../components/navigation/Navigation';
import theme from '../theme';
import { SessionProvider } from 'next-auth/react';
import { Symfoni } from '../hardhat/SymfoniContext';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <StylesProvider injectFirst>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <SessionProvider session={session}>
            <CssBaseline />
            <Grid style={{ minHeight: "100vh", minWidth: 320 }}>
              <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
              </Head>
              <Navigation {...pageProps} />
              <Grid>
                <Symfoni autoInit={true}>
                  <Component {...pageProps} />
                </Symfoni>
              </Grid>
            </Grid>
          </SessionProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </StylesProvider>
  );
}