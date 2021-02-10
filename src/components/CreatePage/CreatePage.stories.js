import CreatePage from './CreatePage'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Pages/CreatePage', // macht Kategorie Pages in storybook
  component: CreatePage,
}

export const base = () => CreatePage(action('onSubmit')).el
