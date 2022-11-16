const cardart = document.createElement('template')

cardart.innerHTML =
`
<style>
    @import "web-components/card-article/card-article.css";
</style>

<div class="article">
    <div class="picture">
        <slot name="picture">
    </div>
    <div class="title">
        <div>
            <slot name="title">
        </div>
        <div class="description">
            <slot name="description">
        </div>
        <div class="button">
            <slot name="button">
        </div>
    </div>
</div>
`
class Cardart extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(cardart.content.cloneNode(true))
  }

  connectedCallback () {
  }
}

window.customElements.define('card-article', Cardart)
