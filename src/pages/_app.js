//import '@/styles/globals.css'
import '@/styles/old.css'
import { ApolloProvider } from '@apollo/client/react'
import { client } from "/lib/apollo"
import 'bootstrap/dist/css/bootstrap.css';


export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
     <Component {...pageProps} />
    </ApolloProvider>
  );
}

