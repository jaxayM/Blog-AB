import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const myBlogSlugs = [
  '1-intermittent-fasting-weight-loss-in-a-week', 
  '2-discover-moroccos-culture-and-best-travel-destinations',
  '4-top-3-personel-finance-apps',

]
export default defineConfig({
  plugins: [vue()],
  base: "/Blog-AB/",
  ssgOptions: {
    includedRoutes(paths, routes) {
      // use original route records
      return routes.filter(i => i.name !== 'viewpost').flatMap((route) => {
        return route.name === 'blogpost'
          ? myBlogSlugs.map(slug => `/Blog-AB/${slug}`)
          : route.path
      })
    },
  },
})
