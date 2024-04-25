import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'; 
import azMessages from '../Components/language/locales/az.json';
import enMessages from '../Components/language/locales/en.json';
import ruMessages from '../Components/language/locales/ru.json';
import { useRouter } from 'next/router';
import { AuthProvider } from '../pages/AuthContext/Authcontext';


import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
type LocaleMessages = {
  [key: string]: { [key: string]: string };
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale } = router;
  
 
  const messages: LocaleMessages = { 
    az: azMessages,
    en: enMessages,
    ru: ruMessages
  };

  return ( 
    <AuthProvider>

    <QueryClientProvider client={queryClient}>

    <IntlProvider locale={locale!} messages={messages[locale!]}>
      <Component {...pageProps} />
    </IntlProvider>
    </QueryClientProvider>
    </AuthProvider>


  );
}
