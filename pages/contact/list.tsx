import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { ListPage } from '~/components/pages/ListPage'
import { contactListMetaGetter } from '~/meta/listMeta/contact'

const ContactList: NextPage = () => {
  const { t } = useTranslation('contact')
  return <ListPage title={t('list.pageTitle')} metaGetter={contactListMetaGetter} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'contact']))
    }
  }
}

export default ContactList
