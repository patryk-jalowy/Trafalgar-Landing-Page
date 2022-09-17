const template = document.createElement('template')

template.innerHTML = `
<style>
@import "/web-components/footer/footer.css"/;

</style>

<div class="footer-container">
    <div class="row">
        <div class="column-6">
        </div>
        <div class="column-3">
            <h2></h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="column-3">
            <h2></h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div>
    </div>
</div>
`
class Footer extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback () {}
}

window.customElements.define('site-footer', Footer)
