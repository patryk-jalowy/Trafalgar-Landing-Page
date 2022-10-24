const navbar = document.createElement('template')

navbar.innerHTML = `
<style>
 @import "web-components/navbar/navbar.css";
</style>

<header>
  <nav>
    <div class="logo">
     <slot name="brand"></slot>
    </div>
    <div class="list">
    <slot></slot>
    </div>
  </nav>
</header>
`

class Navbar extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(navbar.content.cloneNode(true))
  }

  connectedCallback () {
    const data = {
      header: this.shadowRoot.querySelector('header'),
      nav: this.shadowRoot.querySelector('header nav')
    }
  }
}

window.customElements.define('navigation-bar', Navbar)
