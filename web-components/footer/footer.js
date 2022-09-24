const foot = document.createElement('template')

foot.innerHTML = `
<style>
@import "/web-components/footer/footer.css";

</style>

<div class="footer-container">
    <div class="row">
        <div class="col-4">
            <div><slot name="logo"></div>
            <p><slot name="info"></p>
            <p><slot name="copyright"></p>
        </div>
        <div class="col-3">
            <h4><slot name="header-1"></h4>
            <ul>
                <li><slot name="first-1"></li>
                <li><slot name="second-1"></li>
                <li><slot name="third-1"></li>
                <li><slot name="fourth-1"></li>
            </ul>
        </div>
        <div class="col-3">
            <h4><slot name="header-2"></h4>
                <ul>
                <li><slot name="first-2"></li>
                <li><slot name="second-2"></li>
                <li><slot name="third-2"></li>
                <li><slot name="fourth-2"></li>
                </ul>
        </div>
        <div class="col-3">
        <h4><slot name="header-3"</h4>
            <ul>
            <li><slot name="first-3"></li>
            <li><slot name="second-3"></li>
            <li><slot name="third-3"></li>
            <li><slot name="fourth-3"></li>
            </ul>
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

  connectedCallback () {}
}

window.customElements.define('site-footer', Footer)
