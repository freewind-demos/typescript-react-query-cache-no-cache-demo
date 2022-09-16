import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './hello'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            onError: console.error,
            retry: false,
            refetchOnWindowFocus: false
        }
    }
})
ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Hello/>
    </QueryClientProvider>,
    document.body
)
