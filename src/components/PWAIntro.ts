import { TemplateResult, css, customElement, html } from 'lit-element';

import { sharedStyles, SlideShowElement } from './SlideShowElement';

@customElement('pwa-intro')
class PWAIntro extends SlideShowElement {
  static styles = [sharedStyles];
  protected render(): TemplateResult {
    return html`<h2>Introducing PWA</h2>
      <div class="paragraph">
        Progressive Web Applications are web applications designed to close the
        gap between native applications and web applications.
      </div>
      <div class="paragraph">
        <h4>Progressive</h4>
        PWAs are first of all, web applications: built with common web
        technologies: HTML, CSS, JavaScript. So on less capable browsers, they
        are just like any other simple web application. And you also deploy like
        one.
      </div>
      <div class="paragraph">
        <h4>Installable</h4>
        On capable browsers, users will be prompted to install the PWA. Once
        installed, PWAs are not opened by typing in the URL in the browser, but
        by using the application icon directly.
      </div>
      <div class="paragraph">
        <h4>Reliable</h4>
        Application caching + data caching + service worker = an application
        that is capable to handle poor or even no connectivity. Or... many calls
        to the user: could you clear your browser cache...
      </div>
      <div class="paragraph">
        <h4>Capable</h4>
        Modern browsers have been openning up more and more APIs for application
        developers: WebRTC, geolocation, push notification, WASM.
      </div>
      <div class="paragraph">
        There are also upcoming APIs specifically designed to break the barrier
        between web applications and their native counterparts: file system
        access, app badging, clipboard support, and much more.
      </div>
      <div class="paragraph">
        With PWA, you get the best of both worlds:<br />
        <img src="./assets/capabilities-reach.svg" style="width: 70%" />
      </div>
      <div class="paragraph bottom-nav">
        <a href="./history" class="nav-link">A bit of history</a>
        <a href="./installable" class="nav-link">Installable PWAs</a>
      </div>`;
  }
}

export { PWAIntro };
