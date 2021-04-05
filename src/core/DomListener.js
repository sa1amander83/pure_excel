import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners=[]) {
    if (!$root) {
      throw new Error('No root provided for DomListener')
    }
    this.$root=$root
    this.listeners=listeners
  }
  initDomListeners() {
    this.listeners.forEach(listener =>{
      const method = getMetodName(listener)
      if (!this[method]) {
        const name = this.name ||''
        throw new Error(`Method ${method} is not implemented in ${name}`)
      }

      this.$root.on(listener, this[method])
    })
  }
  removeDomListeners() {
  }
}

function getMetodName(eventName) {
  return 'on'+capitalize(eventName)
}
