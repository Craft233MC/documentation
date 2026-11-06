import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NotFoundPage from './components/NotFoundPage.vue'
import './styles/tailwind.css'
import './styles/overrides.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('NotFoundPage', NotFoundPage)
  }
}
