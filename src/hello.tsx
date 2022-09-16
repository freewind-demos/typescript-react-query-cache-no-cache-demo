import React, {useState} from 'react';
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import fetchRemoteMessage from './fetchRemoteMessage';

export default function Hello() {
    const [version, setVersion] = useState(0)
    const query1 = useQuery(['key1'], () => {
        console.log("### fetching key1")
        return fetchRemoteMessage('RemoteHello1')
    }, {
        cacheTime: 10 * 1000
    })
    const query2 = useQuery(['key2'], () => {
        console.log("### fetching key2")
        return fetchRemoteMessage('RemoteHello2')
    }, {
        cacheTime: 0
    });

    function showMessage(query: UseQueryResult) {
        return <div>
            <>
                {query.isFetching && <div>Fetching...</div>}
                {query.error && <div>Error: {(query.error as Error).message}</div>}
                {query.data !== undefined && <>Hello, {query.data}</>}
            </>
        </div>
    }

    return <div>
        <button type={'button'} onClick={() => setVersion(n => n + 1)}>Re-render ({version})</button>
        {showMessage(query1)}
        {showMessage(query2)}
    </div>;
};
