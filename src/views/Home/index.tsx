import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'

import Page from 'components/Layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
// import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import TwitterCard from 'views/Home/components/TwitterCard'
import WinCard from 'views/Home/components/WinCard'
import { useTranslation } from 'contexts/Localization'
import StakingPairCard from './components/StakingPairCard'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CardImage1 = styled.img`
${({ theme }) => theme.mediaQueries.lg} {
    background : ${({ theme }) => theme.isDark ? "#182a4e" : " url('/images/logo(d1).png')"};
  background-size : cover;
  width:200px;
  padding-left:330px;
}


`
const CardImage2 = styled.img`

${({ theme }) => theme.mediaQueries.lg} {
  background : ${({ theme }) => theme.isDark ? "#182a4e" : " url('/images/logo(d2).png')"};
  background-size: cover;
  width:30%;
  padding-right:370px;
}
  
`

const Home: React.FC = () => {

  const { t } = useTranslation()
  return (
    <Page>
      <div className='header' style={{ "display": "flex" }}>
        <CardImage1 style={{ "float": "left" }} />
        <Hero>
          <Text color="#ab3a09" fontSize='38px' fontFamily="emoji" fontWeight="bold">
            {t('AsiaticFarms')}
          </Text>
          <Text color="#ab3a09">{t('The fastest farming ever.')}</Text>
        </Hero>
        <CardImage2 style={{ "float": "right" }} />
      </div>
      <div>
        <Cards>
          <div>
            <CakeStats />
            {/* <TwitterCard /> */}
            <TotalValueLockedCard />
          </div>
          <div>
            <FarmStakingCard />
          </div>
        </Cards>
        <CTACards>
          {/* <EarnAPRCard /> */}
          <WinCard />
          <StakingPairCard />
        </CTACards>
      </div>
    </Page>
  )
}

export default Home
