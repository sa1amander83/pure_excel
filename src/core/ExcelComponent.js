import {DomListener} from '@core/DomListener'
export class ExcelComponent extends DomListener {
  constructor($root, options= {}) {
    super($root, options.listeners);
    this.name = options.name || ''
    this.dispatcher= options.dispatcher
    this.prepare()
  }

  prepare() {}

  toHTML() {
    return ''
  }
  init() {
    this.initDomListeners()
  }

  destroy() {
    this.removeDomListeners()
  }
}

