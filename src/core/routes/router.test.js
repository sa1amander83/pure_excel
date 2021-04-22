import {Router} from './Router'
import {Page} from '../Page'
class DashboardPage extends Page {
  getRoot() {
    const root = document.createElement('div')
    root.innerHTML = 'dashboard'
    return root
  }
}
class ExcelPage extends Page {}

describe('router', () => {
  let router
  let $root
 
  beforeEach(()=>{
    $root = document.createElement('div')
    router = new Router($root, {
      dashboard: DashboardPage,
      excel: ExcelPage
    })
  })
  test('обьявление роутера', ()=>{
    expect(router).toBeDefined()
  })
  test('рендер дашборда', ()=>{
    router.changePageHandler()

    expect($root.innerHTML).toBe('<div>dashboard</div>')
  })
})
