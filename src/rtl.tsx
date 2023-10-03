import React from 'react'
import createCache from '@emotion/cache'

import { CacheProvider } from '@emotion/react'
import { prefixer } from 'stylis';
import rtlPlugin from "stylis-plugin-rtl";


const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer],
});


const RtlProvider = (props:{children:React.ReactNode}) => {

    return (

        <CacheProvider value={cacheRtl}>
            {props?.children}
        </CacheProvider>

    )
}


export default RtlProvider