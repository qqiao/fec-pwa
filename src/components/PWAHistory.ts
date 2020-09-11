import { TemplateResult, css, customElement, html } from 'lit-element';

import { SlideShowElement, sharedStyles } from './SlideShowElement';

@customElement('pwa-history')
class PWAHistory extends SlideShowElement {
  static styles = [sharedStyles];

  protected render(): TemplateResult {
    return html`<h2>A bit of history</h2>
      <div class="paragraph">
        Long long ago, native applications are native applications, and web
        applications are web applications.
      </div>
      <div class="paragraph">
        Native applications are powerful because they are:
        <ul>
          <li>Installable: setup.exe + desktop and/or launcher icons</li>
          <li>Reliable: offline capable</li>
          <li>Capable: advanced graphics, bluetooth, USB, local file system</li>
        </ul>
      </div>
      <div class="paragraph">
        But... Native application isn't without its drawbacks:
        <ul>
          <li>
            Platform dependency: Linux vs MacOS vs Windows XP vs Windows Vista
            vs Windows 7 vs Windows 8 vs Windows 8.1 vs Windows 10 vs iOS vs
            Android vs 鸿蒙 vs Aliyun OS; x64 vs x32 vs ia64 vs arm vs arm64 vs
            MIPS vs PPC vs sparc
          </li>
          <li>
            Distribution channels: 30% App*e or Goo*le tax, other app stores
            charge even more
          </li>
          <li>
            Version problem: even to this day, lots of ATMs are still using
            Windows XP!
          </li>
        </ul>
      </div>
      <div class="paragraph">
        Traditional web applications are, however, the opposite. But being the
        opposite isn't the solution, it has its own problems:
        <ul>
          <li>Can you remember the URL of 上海交警?</li>
          <li>
            Have you seen this before?<br />
            <img src="./assets/broken_page.png" />
            <li></li>
            <li>
              The great Amazon used to look like this:<br />
              <img src="./assets/old_amazon.jpg" />
            </li>
          </li>
        </ul>
      </div>
      <div class="paragraph">
        But... There's always somebody who simply won't settle.
      </div>
      <div class="paragraph">
        GMail showed the world that you can do powerful things in a browser:<br />
        <img src="./assets/gmailold.png" />
      </div>
      <div class="paragraph">
        And the world started to realize that you can do much more just in a
        browser: listen to music (Spotify), watch videos (Youtube),
        lookup directions (Google Maps), make friends (Facebook), do financial
        things (Citi Velocity), be a 杠精 (贴吧)...
      </div>
      <div class="paragraph">
        <img src="./assets/gang.jpg" style="width: 300px">
      </div>
      <div class="paragraph">
        Then the browsers became our bottleneck... Fond memories of Internet
        Explorer anyone?
      </div>
      <div class="paragraph">
        Then there were brave souls trying to solve the problem by modifying
        a browser: OpenFin, Electron, Finsemble and our very own ICGDesktop...
      </div>
      <div class="paragraph bottom-nav">
        <div></div>
        <a href="./intro" class="nav-link">Introducing PWA</a>
      </div>`;
  }
}

export { PWAHistory };
