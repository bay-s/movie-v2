import MainLayout from '@/component/main-container'
import '../styles/index.css'
import '../styles/bulma.min.css'
import '../styles/custom.css'
import '../styles/loading.css'
import 'font-awesome/css/font-awesome.min.css';
import ValueProvider from './value-context';

 

export default function RootLayout({ Component, pageProps }) {
    return (
<ValueProvider>
<MainLayout>
   <Component {...pageProps} />
        </MainLayout>
</ValueProvider>
    )
  }
  