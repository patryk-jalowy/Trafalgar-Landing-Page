const foot = document.createElement('template')

foot.innerHTML = `
<style>
    @import "web-components/footer/footer.css";
</style>

<div class="footer-container">
    <div class="row">
    
        <div>
            <slot name="company-information"></slot>
        </div>
        
        <div>
            <slot name="list-1"></slot>
        </div>
        
        <div>
            <slot name="list-2"></slot>
        </div>
        
        <div>
            <slot name="list-3"></slot>
        </div>

    </div>
</div>
`

class Footer extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(foot.content.cloneNode(true))
  }

  connectedCallback () {
  }
}

window.customElements.define('site-footer', Footer)
