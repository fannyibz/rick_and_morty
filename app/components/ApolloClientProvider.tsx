'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '../lib/apollo-client';

export default function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  const client = getApolloClient();
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}