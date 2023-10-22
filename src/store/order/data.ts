import { IOrder } from './types'

export const orderList: IOrder[] = [
  {
    id: '1',
    invoice: '#u546',
    customer: 'Teri Dactyl',
    product: 'Apple iPhone 12',
    amount: 1200,
    payment_method: 'Visa',
    status: 'Delivered'
  },
  {
    id: '2',
    invoice: '#e3457',
    customer: 'Hope Furaletter',
    product: 'Printed T-shirt',
    amount: 540,
    payment_method: 'Visa',
    status: 'In Progress'
  },
  {
    id: '3',
    invoice: '#d104',
    customer: 'Olive Yew.',
    product: 'Kindle Paperwhite',
    amount: 100,
    payment_method: 'Mastercard',
    status: 'Cancelled'
  }
]
