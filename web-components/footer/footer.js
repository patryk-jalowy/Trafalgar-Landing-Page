const foot = document.createElement('template')

foot.innerHTML = `
<style>
@import "/web-components/footer/footer.css";

</style>

<div class="footer-container">
    <div class="row">
        <div class="col-4">
        </div>
        <div class="col-3">
            <h2></h2>
            <ul>
                <li slot name="first-1"></li>
                <li slot name="second-1"></li>
                <li slot name="third-1"></li>
                <li slot name="fourth-1"></li>
            </ul>
        </div>
        <div class="col-3">
            <h2></h2>
                <ul>
                <li slot name="first-2"></li>
                <li slot name="second-2"></li>
                <li slot name="third-2"></li>
                <li slot name="fourth-2"></li>
                </ul>
        </div>
        <div class="col-3">
        <h2></h2>
            <ul>
            <li slot name="first-3"></li>
            <li slot name="second-3"></li>
            <li slot name="third-3"></li>
            <li slot name="fourth-3"></li>
            </ul>
    </div>
</div>
`
class Footer extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(foot.content.cloneNode(true))
  }

  connectedCallback () {}
}

window.customElements.define('site-footer', Footer)
