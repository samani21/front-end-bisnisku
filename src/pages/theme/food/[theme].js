import { useRouter } from 'next/router';
import React from 'react'
import Theme1 from './Food1/Theme1';

export default function Theme() {
    const router = useRouter();
    console.log('router', router)
    return (
        <div>
            {
                router?.query?.theme === 'theme-1' ?
                    <Theme1 /> : ""
            }
        </div>
    )
}
