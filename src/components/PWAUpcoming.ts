import { TemplateResult, customElement, html } from 'lit-element';
import { sharedStyles, SlideShowElement } from './SlideShowElement';

@customElement('pwa-upcoming')
class PWAUpcoming extends SlideShowElement {
  static styles = [sharedStyles];

  protected render(): TemplateResult {
    return html`<h2>Upcoming Features</h2>
      <div class="paragraph">
        PWA as of today is still not a full replacement for complex native
        applications, but there are a few common use cases being worked on by
        browser vendors:
        <ul>
          <li><a href="./upcoming-badging">Badging</a></li>
          <li><a href="./upcoming-shortcuts">App Shortcuts</a></li>
        </ul>
      </div>
      <div class="paragraph bottom-nav">
        <a href="./installable" class="nav-link">Installable PWAs</a>
        <a href="./summary" class="nav-link">Summary</a>
      </div>`;
  }
}

export { PWAUpcoming };
