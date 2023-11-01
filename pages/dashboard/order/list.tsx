import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { ListPage } from '~/components/pages/ListPage'
import { orderListMetaGetter } from '~/meta/listMeta/order'

const OrderList: NextPage = () => {
  const { t } = useTranslation('order')
  return <ListPage title={t('list.pageTitle')} metaGetter={orderListMetaGetter} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'order']))
    }
  }
}

export default OrderList
