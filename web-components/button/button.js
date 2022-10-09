const customButton = document.createElement('template')

customButton.innerHTML = `
<style>
 @import "web-components/button/button.css";
</style>

<div class="button-container">
    <span><slot name="button-text"></slot></span>
</div>
`
class CustomButton extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(customButton.content.cloneNode(true))
  }

  connectedCallback () {
  }
}
window.customElements.define('custom-button', CustomButton)
