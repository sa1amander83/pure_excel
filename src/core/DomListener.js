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
      console.log(method)
      this.$root.on(listener, this[method])
    })
  }
  removeDomListeners() {

  }
}

function getMetodName(eventName) {
  return 'on'+capitalize(eventName)
}
