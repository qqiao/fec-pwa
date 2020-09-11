import {
  LitElement,
  TemplateResult,
  css,
  customElement,
  html,
  query,
  property,
} from 'lit-element';
import { connect, installRouter } from 'pwa-helpers';

import '@material/mwc-drawer'; // eslint-disable-line import/no-duplicates
import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar';
import { Drawer } from '@material/mwc-drawer'; // eslint-disable-line import/no-duplicates

import { RootState, store } from '../store';

import './PWAHistory';
import { navigate } from '../actions/app';

@customElement('pwa-demo')
class PWADemo extends connect(store)(LitElement) {
  static styles = css`
    :host #pageContainer {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    :host #pwaLogo {
      margin-top: 30px;
      width: 200px;
    }

    :host #navigation-links li {
      padding: 10px;
    }

    :host #navigation-links a {
      text-decoration: none;
    }

    :host #pageContainer .page {
      display: none;
      max-width: 1000px;
      width: 80%;
    }

    :host #pageContainer .page[active] {
      display: block;
    }
  `;

  @query('#drawer')
  private drawer?: Drawer;

  @property()
  private _page?: string;

  public stateChanged(state: RootState): void {
    this._page = state.app?.page;
  }

  protected firstUpdated(): void {
    installRouter(location => {
      store.dispatch(navigate(decodeURIComponent(location.pathname)));
    });
  }

  protected render(): TemplateResult {
    return html` <mwc-drawer id="drawer" type="modal" hasHeader>
      <span slot="title">
        <img src="./assets/Progressive_Web_Apps_Logo.svg" id="pwaLogo">
      </span>
      <ol id="navigation-links">
        <li><a href="./history">History</a></li>
        <li><a href="./intro">Introducing PWA</a></li>
        <li><a href="./installable">Installable</a></li>
        <li><a href="./upcoming">Upcoming Features</a></li>
        <ol>
          <li><a href="./upcoming-badging">Badging</a></li>
          <li><a href="./upcoming-shortcuts">App Shortcuts</a></li>
        </ol>
      </ol>
      <div slot="appContent">
        <mwc-top-app-bar>
          <mwc-icon-button
            icon="menu"
            slot="navigationIcon"
            @click="${() => {
              if (!this.drawer) return;
              this.drawer.open = !this.drawer.open;
            }}"
          ></mwc-icon-button>
          <div slot="title">PWA （FEC重磅推出，2020首次活动，国庆献礼不容错过）</div>
          <!--<mwc-icon-button
            icon="file_download"
            slot="actionItems"
          ></mwc-icon-button>
          <mwc-icon-button icon="print" slot="actionItems"></mwc-icon-button>
          <mwc-icon-button icon="favorite" slot="actionItems"></mwc-icon-button
        >
        -->
        </mwc-top-app-bar>
        <div id="pageContainer">
          <pwa-history class="page" ?active=${
            'history' === this._page
          }></pwa-history>
          <pwa-intro class="page" ?active=${'intro' === this._page}></pwa-intro>
          <pwa-installable class="page" ?active=${
            'installable' === this._page
          }></pwa-installable>
          <pwa-upcoming class="page" ?active=${
            'upcoming' === this._page
          }></pwa-upcoming>
          <pwa-upcoming-badging class="page" ?active=${
            'upcoming-badging' === this._page
          }></pwa-upcoming-badging>
          <pwa-upcoming-shortcuts class="page" ?active=${
            'upcoming-shortcuts' === this._page
          }></pwa-upcoming-shortcuts>
        <div>
      </div>
    </mwc-drawer>`;
  }
}

export { PWADemo };
