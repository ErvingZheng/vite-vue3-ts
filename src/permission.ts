import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from './router'

const whiteList: string[] = ['/login'] // 无需权限白名单

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
