import { ContextProviders } from "components/stores/_context-providers";
import { LoadInitialData } from "components/stores/_load-initial-data";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC } from "react";
import "styles/tailwind.css";
import "styles/theme.scss";
import "styles/utils.scss";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const router = useRouter();

  return (
    <ContextProviders>
      <LoadInitialData>
        <ThemeProvider attribute="class">
          <div className="bg-red-400">header</div>
          <Component {...pageProps} />
        </ThemeProvider>
      </LoadInitialData>
    </ContextProviders>
  );
};

export default App;
