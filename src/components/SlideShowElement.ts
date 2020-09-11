import { LitElement, css } from 'lit-element';

abstract class SlideShowElement extends LitElement {
  private paragraphCounter = 0;
  constructor() {
    super();
    this.addEventListener('click', () => {
      const paragraphs = this.renderRoot.querySelectorAll(
        'div.paragraph'
      ) as NodeListOf<HTMLDivElement>;
      if (this.paragraphCounter < paragraphs.length) {
        const paragraph = paragraphs[this.paragraphCounter];
        paragraph.classList.add('shown');
        this.paragraphCounter++;
      }
    });
  }
}

const sharedStyles = css`
  :host {
    display: block;
  }

  :host div.paragraph {
    opacity: 1;
    margin: 1.5em 0;
  }

  :host div.paragraph.shown {
    opacity: 1;
    transition: opacity 1s linear;
  }

  :host div.bottom-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  :host a.nav-link {
    font-weight: bold;
  }
`;

export { SlideShowElement, sharedStyles };
