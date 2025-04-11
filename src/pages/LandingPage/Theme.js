import { Option, Options, ThemeComponent, ThemePreview } from '@/components/landingPage.js/theme'
import React from 'react'

const Theme = () => {
    return (
        <ThemeComponent>
            <h2>Pilih Tema Untuk Bisnis Anda</h2>
            <Options>
                <Option>
                    <ThemePreview className='light-theme' />
                    <h3>Light Theme</h3>
                </Option>
                <Option>
                    <ThemePreview className='dark-theme' />
                    <h3>Dark Theme</h3>
                </Option>
                <Option>
                    <ThemePreview className='professional-theme' />
                    <h3>Professional</h3>
                </Option>
            </Options>
        </ThemeComponent>
    )
}

export default Theme
