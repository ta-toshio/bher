import React from 'react'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../app/withApollo'
import { wrapper } from '../app/store'
import { AuthProvider } from '../contexts/auth/authContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default wrapper.withRedux(MyApp)
