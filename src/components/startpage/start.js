"use client"
import React from 'react'

function StartPage({ children }) {
    return (
        <div className='h-auto xs:w-100 w-full text-grey-300  flex flex-row justify-center align-middle py-2.5'>
            {children}
        </div>
    )
}

export default StartPage