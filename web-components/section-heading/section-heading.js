const sectionHeading = document.createElement('template')

sectionHeading.innerHTML =
`
<style>
    @import "/web-components/section-heading/section-heading.css";
</style>

<div class="container">
    <div class="section-heading">
        <h1><slot name="title"></slot></h1>
        <hr>
        <p><slot name="paragraph"></slot></p>
    </div>
</div>
`
class Heading extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(sectionHeading.content.cloneNode(true))
  }

  connectedCallback () {
  }
}
window.customElements.define('section-heading', Heading)
