import { customElement } from 'lit-element';
import { TemplateResult, html } from 'lit-html';
import { sharedStyles, SlideShowElement } from './SlideShowElement';

@customElement('pwa-upcoming-shortcuts')
class PWAUpcomingShortcuts extends SlideShowElement {
  static styles = sharedStyles;

  protected render(): TemplateResult {
    return html`<h2>Application Shortcuts</h2>
      <div class="paragraph">
        We are all familiar with the force touch or long press menu on mobile
        devices.<br />
        <img src="./assets/app-shortcuts-menu-android.jpg" />
      </div>
      <div class="paragraph">
        App shortcuts allows PWAs to do exactly that. And also on desktops.
      </div>`;
  }
}

export { PWAUpcomingShortcuts };
