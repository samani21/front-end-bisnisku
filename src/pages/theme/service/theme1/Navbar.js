import { Icon, Menu, Menus, NavbarContainer } from '@/components/Theme/Service1/Navbar'
import React from 'react'

const Navbar = (props) => {
    const { viewPage, setViewPage } = props
    return (
        <NavbarContainer>
            <Menus>
                <Menu className={viewPage === 'Home' && 'active'} onClick={() => setViewPage("Home")}>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color={viewPage === 'Home' ? '#0077B5' : '#333333'}>
                        <path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity="0.5" />
                        <path fill="currentColor" d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" />
                    </Icon>
                </Menu>
                <Menu className={viewPage === 'Chat' && 'active'} onClick={() => setViewPage("Chat")}>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color={viewPage === 'Chat' ? '#0077B5' : '#333333'}>
                        <path fill="currentColor" d="m13.629 20.472l-.542.916c-.483.816-1.69.816-2.174 0l-.542-.916c-.42-.71-.63-1.066-.968-1.262c-.338-.197-.763-.204-1.613-.219c-1.256-.021-2.043-.098-2.703-.372a5 5 0 0 1-2.706-2.706C2 14.995 2 13.83 2 11.5v-1c0-3.273 0-4.91.737-6.112a5 5 0 0 1 1.65-1.651C5.59 2 7.228 2 10.5 2h3c3.273 0 4.91 0 6.113.737a5 5 0 0 1 1.65 1.65C22 5.59 22 7.228 22 10.5v1c0 2.33 0 3.495-.38 4.413a5 5 0 0 1-2.707 2.706c-.66.274-1.447.35-2.703.372c-.85.015-1.275.022-1.613.219c-.338.196-.548.551-.968 1.262" opacity="0.5" />
                        <path fill="currentColor" d="M7.25 9A.75.75 0 0 1 8 8.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9m0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" />
                    </Icon>
                </Menu>
                <Menu className={viewPage === 'History' && 'active'} onClick={() => setViewPage("History")}>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color={viewPage === 'History' ? '#0077B5' : '#333333'}>
                        <path fill="currentColor" d="M22 10v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7z" class="duoicon-secondary-layer" opacity="0.3" />
                        <path fill="currentColor" d="M19 4a3 3 0 0 1 3 3v1H2V7a3 3 0 0 1 3-3zm-1 10h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2" class="duoicon-primary-layer" />
                    </Icon>
                </Menu>
                <Menu className={viewPage === 'About' && 'active'} onClick={() => setViewPage("About")}>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color={viewPage === 'About' ? '#0077B5' : '#333333'}>
                        <path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity="0.5" />
                        <path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" />
                    </Icon>
                </Menu>
            </Menus>
        </NavbarContainer >
    )
}

export default Navbar
