import {DomListener} from '@core/DomListener'
export class ExcelComponent extends DomListener {
  constructor($root, options= {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.dispatcher= options.dispatcher
    this.unsubscribers= []
    this.prepare()
  }
  // настраивает компонент до инита
  prepare() {}

  toHTML() {
    return ''
  }

  // уведомляем слушателей про событие евент
  $dispatch(event, ...args) {
    this.dispatcher.dispatch(event, ...args)
  }
  // подписка
  $on(event, fn) {
    const unsub = this.dispatcher.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }
  // инициализация компонента
  // добавление слушателей
  init() {
    this.initDomListeners()
  }
  // чистка слушателей
  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach(unsub=>unsub())
  }
}

