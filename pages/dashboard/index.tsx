import { useContext, useEffect, useState } from 'react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Avatar, Box, CircularProgress, Divider, Paper, Typography } from '@mui/material'
import { AuthContext } from '../../src/contexts/Auth'

const Home: NextPage = () => {
  const { getUserInfo, authenticated, loading } = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState<Awaited<Promise<ReturnType<typeof getUserInfo>>>>()
  const { t } = useTranslation('home')

  useEffect(() => {
    if (!authenticated) {
      setUserInfo(undefined)
      return
    }
    getUserInfo().then((resp) => {
      setUserInfo(resp)
    })
  }, [authenticated, getUserInfo])

  return (
    <>
      <Head>
        <title>{t('pageTitle')} | Dashboard</title>
      </Head>
      <Box
        sx={{
          mt: 4
        }}
      >
        {loading ? (
          <CircularProgress />
        ) : userInfo ? (
          <Paper
            sx={{
              p: 3
            }}
            // variant={'outlined'}
            elevation={1}
          >
            <Typography variant="h5">{t('loggedInAs')}-</Typography>
            <Divider sx={{ mt: 2 }} />
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 1 }}>
              {userInfo.profileImage ? (
                <Avatar
                  sx={{ mb: 1, width: '100px', height: '100px' }}
                  src={userInfo.profileImage}
                  alt={'avatar'}
                  variant={'rounded'}
                />
              ) : null}
              <Typography variant="body2">
                <strong>{t('name')}:</strong> {userInfo.name}
              </Typography>
              <Typography variant="body2">
                <strong>{t('email')}:</strong> {userInfo.email}
              </Typography>
            </Box>
          </Paper>
        ) : null}
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'home']))
    }
  }
}

export default Home
