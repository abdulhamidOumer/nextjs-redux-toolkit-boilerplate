import "../styles/globals.css";
import type { AppProps } from "next/app";
import createCache from "@emotion/cache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { CssBaseline } from "@mui/material";
import { reduxWrapper } from "../store/configureStore";

const clientSideEmotionCache = createCache({
  key: "css",
  prepend: true,
});

interface Props extends AppProps {
  emotionCache: EmotionCache;
}

function MyApp(props: Props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default reduxWrapper.withRedux(MyApp);
