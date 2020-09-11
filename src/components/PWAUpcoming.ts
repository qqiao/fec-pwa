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
          <li>App Shortcuts</li>
        </ul>
      </div>`;
  }
}

export { PWAUpcoming };
