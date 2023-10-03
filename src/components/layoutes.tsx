import React from 'react'
import AppHeader from './Header'
import AppFooter from './Footer'


const AppLayout = (props: {
    children: React.ReactNode
}) => {


    return (
        <>
            <AppHeader />
            {props.children}
            <AppFooter />

        </>

    )
}


export default AppLayout