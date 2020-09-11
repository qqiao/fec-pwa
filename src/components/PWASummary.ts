import { customElement } from 'lit-element';
import { TemplateResult, html } from 'lit-html';
import { sharedStyles, SlideShowElement } from './SlideShowElement';

@customElement('pwa-summary')
class PWASummary extends SlideShowElement {
  static styles = sharedStyles;

  protected render(): TemplateResult {
    return html`<h2>Summary</h2>
      <div class="paragraph">
        Web applications have never been more powerful and they will continue to
        be even more powerful.
      </div>
      <div class="paragraph">
        With the introduction of new technologies like WASM, geolocation, file
        system access, device API, what used to native application exclusive
        features are becoming available for web applications.
      </div>
      <div class="paragraph">
        PWAs does not require fundamental changes to existing applications.
        Feature can be introduced progressively.
      </div>
      <div class="paragraph">
        This page itself is a PWA.
        <a href="https://github.com/qqiao/fec-pwa" target="_blank"
          >Source Code</a
        >
      </div>
      <div class="paragraph">
        Learn more about the web (beyond PWA) at
        <a href="https://web.dev" target="_blank">web.dev</a>, which happens to
        also be a PWA.
      </div>
      <div class="paragraph bottom-nav">
        <a href="./upcoming" class="nav-link">Upcoming features</a>
      </div>`;
  }
}

export { PWASummary };
