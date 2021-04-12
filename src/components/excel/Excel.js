import {$} from '@core/dom'
import {Dispatcher} from '@core/Dispatcher'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components= options.components || []
    this.dispatcher = new Dispatcher()
  }

  getRoot() {
    const $root =$.create('div', 'excel')
    const componentOptions = {
      dispatcher: this.dispatcher
    }
    this.components =this.components.map(Component => {
      const $el =$.create('div', Component.className)
      const component = new Component($el, componentOptions)

      if (component.name) {
        window['c'+component.name]=component
      }


      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
  destroy() {
    this.components.forEach(component => component.destroy())
  }
}
