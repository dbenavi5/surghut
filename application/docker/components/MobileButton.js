//mobile sign up button
import React from 'react';
import Link from 'next/link';


export function MobileButton() {
    return (
        <Link href="/register" >
            <button className="mobileBtn">
                Sign Up
            </button>
        </Link>
    );
}