import { TemplateResult, customElement, html } from 'lit-element';
import { sharedStyles, SlideShowElement } from './SlideShowElement';

import '@material/mwc-button';

@customElement('pwa-upcoming-badging')
class PWAUpcomingBadging extends SlideShowElement {
  static styles = sharedStyles;

  private _badgeCount = 0;

  protected render(): TemplateResult {
    return html`<h2>Badging API</h2>
      <div class="paragraph">
        Badging API allows applications to show a badge count as a subtle way to
        notify the user that there's activity going on within the application.
      </div>
      <div class="paragraph">
        <mwc-button
          @click="${async () => {
            this._badgeCount++;
            try {
              // some trick to get round typescript issue
              let n = navigator as any; //eslint-disable-line
              if (n.setAppBadge) await n.setAppBadge(this._badgeCount);
            } catch (e) {
              console.error(e);
            }
          }}"
          >Increment badge count</mwc-button
        >
        <mwc-button
          @click="${async () => {
            this._badgeCount = 0;
            try {
              // some trick to get round typescript issue
              let n = navigator as any; //eslint-disable-line
              if (n.setAppBadge) await n.clearAppBadge();
            } catch (e) {
              console.error(e);
            }
          }}"
          >Clear badge count</mwc-button
        >
      </div>`;
  }
}

export { PWAUpcomingBadging };
