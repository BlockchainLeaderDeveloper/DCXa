import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'DCXa',
  description:
    'The most popular AMM on BSC by user count! Earn DCXa through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens on a platform you can trust.',
  image: 'https://testing6.jbms-tech.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('DCXa')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('DCXa')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('DCXa')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('DCXa')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('DCXa')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('DCXa')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('DCXa')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('DCXa')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('DCXa')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('DCXa')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('DCXa')}`,
      }
    default:
      return null
  }
}
