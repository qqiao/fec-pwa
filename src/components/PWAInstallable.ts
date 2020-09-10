import { TemplateResult, css, customElement, html } from 'lit-element';
import { sharedStyles, SlideShowElement } from './SlideShowElement';

@customElement('pwa-installable')
class PWAInstallable extends SlideShowElement {
  static styles = [sharedStyles, css``];

  protected render(): TemplateResult {
    return html`<h2>Installable PWAs</h2>
    <div class="paragraph">
      On capable browsers, users will be prompted for installation of a PWA if:
      <ul>
        <li>The web app is not already installed</li>
        <li>Meets a user engagement heuristic</li>
        <li>Be served over HTTPS</li>
        <li>Includes a Web App Manifest that includes:
          <ul>
            <li>short_name or name</li>
            <li>icons - must include a 192px and a 512px icon</li>
            <li>start_url</li>
            <li>display - must be one of fullscreen, standalone,
              or minimal-ui</li>
            <li>Note: prefer_related_applications must not be present, or be
              false</li>
          </ul>
        <li>Registers a service worker with a functional fetch handler</li>
      </ul>
  </div>`;
  }
}
