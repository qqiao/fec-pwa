import { TemplateResult, css, customElement, html } from 'lit-element';
import { sharedStyles, SlideShowElement } from './SlideShowElement';

@customElement('pwa-installable')
class PWAInstallable extends SlideShowElement {
  static styles = [sharedStyles];

  protected render(): TemplateResult {
    return html`<h2>Installable PWAs</h2>
      <div class="paragraph">
        On capable browsers, users will be prompted for installation of a PWA
        if:
        <ul>
          <li>The web app is not already installed</li>
          <li>Meets a user engagement heuristic</li>
          <li>Be served over HTTPS</li>
          <li>
            Includes a Web App Manifest that includes:
            <ul>
              <li><code>short_name</code> or <code>name</code></li>
              <li>
                <code>icons</code> - must include a 192px and a 512px icon
              </li>
              <li><code>start_url</code></li>
              <li>
                <code>display</code> - must be one of <code>fullscreen</code>,
                <code>standalone</code>, or <code>minimal-ui</code>
              </li>
              <li>
                Note: <code>prefer_related_applications</code> must not be
                present, or be <code>false</code>
              </li>
            </ul>
          </li>

          <li>
            Registers a service worker with a functional <code>fetch</code>
            handler.
          </li>
        </ul>
      </div>
      <div class="paragraph">
        Let's take a look at the
        <a href="./assets/manifest.json">manifest.json</a> file of this
        application.
      </div>
      <div class="paragraph">
        When those criterion are met, you get a very nice installation icon on
        your desktop browser: <img src="./assets/install_desktop.png" />
      </div>
      <div class="paragraph">
        Once installed, they appear on your desktop just like any other
        application <br /><img src="./assets/installed_desktop.png" />
      </div>
      <div class="paragraph">
        For mobile, the story is very similar, if not smoother:<br />
        <img src="./assets/install_mobile.jpg" />
        <img src="./assets/installed_mobile.jpg" />
      </div>
      <div class="paragraph bottom-nav">
        <a href="./intro" class="nav-link">Introducing PWA</a>
        <a href="./upcoming" class="nav-link">Upcoming features</a>
      </div>`;
  }
}

export { PWAInstallable };
