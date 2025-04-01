import { Icon, MenuNavbarContainer, Menus, MenusContainer, NavbarContainer, TexMenu } from '@/components/Theme/Food1/Navbar'
import React from 'react'

const Navbar = (props) => {
    const { data, viewPage, setViewPage } = props
    return (
        <NavbarContainer>
            <MenuNavbarContainer>
                <MenusContainer>
                    <Menus onClick={() => setViewPage('Home')}>
                        {
                            viewPage === 'Home' ?
                                <TexMenu color={data} style={{ marginLeft: "-20px" }}>
                                    Home
                                </TexMenu> :

                                <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='black'>
                                    <path fill="currentColor" d="m20.765 7.982l.022.19l.007.194v7.268a2.5 2.5 0 0 1-1.099 2.07l-.15.095l-6.295 3.634l-.124.067l-.126.06v-8.99z" class="duoicon-secondary-layer" opacity="0.3" />
                                    <path fill="currentColor" d="m13.25 2.567l6.294 3.634q.076.044.148.092L12 10.838L4.308 6.293a3 3 0 0 1 .148-.092l6.294-3.634a2.5 2.5 0 0 1 2.5 0" class="duoicon-primary-layer" />
                                    <path fill="currentColor" d="M3.235 7.982L11 12.571v8.988a2 2 0 0 1-.25-.126l-6.294-3.634a2.5 2.5 0 0 1-1.25-2.165V8.366q0-.195.03-.384z" class="duoicon-secondary-layer" opacity="0.3" />
                                </Icon>
                        }
                    </Menus>
                    <Menus onClick={() => setViewPage('Categories')}>
                        {
                            viewPage === 'Categories' ?
                                <TexMenu color={data}>
                                    Categories
                                </TexMenu> :
                                <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='black'>
                                    <path fill="currentColor" fill-rule="evenodd" d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity="0.3" />
                                    <path fill="currentColor" fill-rule="evenodd" d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" class="duoicon-primary-layer" />
                                    <path fill="currentColor" fill-rule="evenodd" d="M9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z" class="duoicon-secondary-layer" opacity="0.3" />
                                </Icon>
                        }
                    </Menus>
                    <Menus onClick={() => setViewPage('History')}>
                        {
                            viewPage === 'History' ?
                                <TexMenu color={data}>
                                    History
                                </TexMenu> :
                                <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='black'>
                                    <path fill="currentColor" d="M19.82 6a2 2 0 0 1 1.972 2.329l-1.666 10A2 2 0 0 1 18.153 20H5.847a2 2 0 0 1-1.973-1.671l-1.666-10A2 2 0 0 1 4.18 6z" class="duoicon-secondary-layer" opacity="0.3" />
                                    <path fill="currentColor" d="M18 3a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z" class="duoicon-primary-layer" />
                                </Icon>
                        }
                    </Menus>
                    <Menus onClick={() => setViewPage('About')}>
                        {
                            viewPage === 'About' ?
                                <TexMenu color={data} style={{ marginRight: "-20px" }}>
                                    About
                                </TexMenu> :
                                <Icon xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" color='black'>
                                    <path fill="currentColor" d="M12 13c2.396 0 4.575.694 6.178 1.671c.8.49 1.484 1.065 1.978 1.69c.486.616.844 1.352.844 2.139c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.694 9.605 13 12 13" class="duoicon-primary-layer" />
                                    <path fill="currentColor" d="M12 2c3.849 0 6.255 4.167 4.33 7.5A5 5 0 0 1 12 12c-3.849 0-6.255-4.167-4.33-7.5A5 5 0 0 1 12 2" class="duoicon-secondary-layer" opacity="0.3" />
                                </Icon>
                        }
                    </Menus>
                </MenusContainer>
            </MenuNavbarContainer>
        </NavbarContainer>
    )
}

export default Navbar
