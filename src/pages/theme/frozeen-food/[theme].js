import { useRouter } from 'next/router';
import React from 'react'
import Theme1 from './theme1';

export default function Theme() {
    const router = useRouter();
    return (
        <div>
            {
                router?.query?.theme === 'theme-1' ?
                    <Theme1 /> : ""
            }
        </div>
    )
}
