import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { ListPage } from '../../../src/components/pages/ListPage'
import { productListMetaGetter } from '../../../src/meta/listMeta/product'

const ProductList: NextPage = () => {
  const { t } = useTranslation('product')
  return <ListPage title={t('list.pageTitle')} metaGetter={productListMetaGetter} />
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'menu', 'product']))
    }
  }
}

export default ProductList
