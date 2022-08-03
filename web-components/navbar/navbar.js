const navbar = document.createElement('template');

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

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(navbar.content.cloneNode(true));
  }

  connectedCallback() {

    const props = {
      active: this.getAttribute('active'),
    }
    
    const data = {
      header: this.shadowRoot.querySelector('header'),
      nav: this.shadowRoot.querySelector('header nav'),
      links: this.shadowRoot.querySelectorAll('a'),
    }

    this.setActiveLink(data.links, props.active)

  }

  setActiveLink (elements, attr) {
    elements.forEach((link) => {
      if (link.innerHTML.toLowerCase() === attr.toLowerCase()) {
          link.classList.add('nav-link--active')
      }
    })
  }
}

window.customElements.define('navigation-bar', Navbar)
