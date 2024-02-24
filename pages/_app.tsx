import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'; 
import azMessages from '../Components/language/locales/az.json';
import enMessages from '../Components/language/locales/en.json';
import ruMessages from '../Components/language/locales/ru.json';
import { useRouter } from 'next/router';

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
    <IntlProvider locale={locale!} messages={messages[locale!]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
