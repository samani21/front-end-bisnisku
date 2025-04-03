import { HeaderContainer, HomeContainer, Logo } from '@/components/Theme/Service1/Home'
import React from 'react'

const Home = (props) => {
    const { data } = props
    return (
        <HomeContainer>
            <HeaderContainer>
                <Logo src={data?.logo} />
            </HeaderContainer>
        </HomeContainer>
    )
}

export default Home
