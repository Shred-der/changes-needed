import { useContext } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { Label } from '@mui/icons-material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ThemeContext } from '../src/contexts/Theme'
import { useBodyClass } from '../src/hooks/useBodyClass'

const About: NextPage = () => {
  const { t } = useTranslation('about')
  const { mode } = useContext(ThemeContext)
  useBodyClass('--reading-backdrop', mode !== 'dark')

  return (
    <>
      <Head>
        <title>{t('pageTitle')} | Dashboard</title>
      </Head>
      <Paper sx={{ mt: 4, p: 4 }} elevation={0}>
        <Box>
          <img style={{ background: 'white', borderRadius: '5px' }} src="/images/wind.svg" alt="wind logo" />
        </Box>
        <Box sx={{ mt: 5 }}>
          <Divider sx={{ mt: 1 }} />
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="h3" fontWeight={800} fontFamily={'cursive'}>
            {t('slogan')}
          </Typography>
        </Box>
      </Paper>
      <Paper sx={{ mt: 2, p: 4 }} elevation={0}>
        <Box sx={{ mt: 1 }}>
          <Typography variant="h6" fontWeight={800} className={'wind--text'} fontFamily={'monospace'}>
            {t('title')}
          </Typography>
          <Divider sx={{ mt: 1 }} />
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1" fontFamily={'cursive'}>
            {t('description1')}
          </Typography>
          <Typography variant="subtitle1" fontFamily={'cursive'} sx={{ mt: 2 }}>
            {t('description2')}
          </Typography>
        </Box>
      </Paper>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'about']))
    }
  }
}

export default About
