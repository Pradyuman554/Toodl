'use client'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext';
import { usePathname } from 'next/navigation';
import Link from 'next/Link'

export default function Logout(){
    const {logout, currentUser} = useAuth()
    const pathname = usePathname()

    if(!currentUser){   //If no user has logged in
        return null
    }

    if(pathname === '/'){   //Ki agar homepage pe hai
        return (
            <Link href={'/dashboard'}>
                <Button text="Go to Dashboard"/>
            </Link>
        )
    }

    return (    //Agr homepage pe ni hai to..
        <Button text="Logout" clickHandler={logout}/>
    )
}