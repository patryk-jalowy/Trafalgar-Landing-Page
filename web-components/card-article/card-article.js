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
    <div class="text">
        <div class="heading">
            <slot name="heading">
        </div>
        <div class="paragraph">
            <slot name="paragraph">
        </div>
        <div class="card-text">
            <slot name="card-text">
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
