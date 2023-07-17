import{z as o,h as e,b as i,n as t,t as s,j as a,s as d,x as c,u as n}from"./index-2f60aea4.js";import{c as p}from"./c.440fff61.js";import"./c.3e732c4c.js";let r=class extends d{constructor(){super(...arguments),this._showCopied=!1}render(){return c`
      <mwc-dialog
        open
        heading=${`API key for ${this.configuration}`}
        scrimClickAction
        @closed=${this._handleClose}
      >
        ${void 0===this._apiKey?"Loading…":null===this._apiKey?c`Unable to automatically extract API key. It may not be set.
              Open the configuration and look for <code>api:</code>.`:c`
              <div class="key" @click=${this._copyApiKey}>
                <code>${this._apiKey}</code>
                <mwc-button ?disabled=${this._showCopied}
                  >${this._showCopied?"Copied!":"Copy"}</mwc-button
                >
              </div>
            `}

        <mwc-button
          no-attention
          slot="primaryAction"
          dialogAction="close"
          label="Close"
        ></mwc-button>
      </mwc-dialog>
    `}firstUpdated(o){super.firstUpdated(o),n(this.configuration).then((o=>{this._apiKey=o}))}_copyApiKey(){p(this._apiKey),this._showCopied=!0,setTimeout((()=>this._showCopied=!1),2e3)}_handleClose(){this.parentNode.removeChild(this)}};r.styles=[o,e`
      .key {
        position: relative;
        display: flex;
        align-items: center;
      }
      code {
        word-break: break-all;
      }
      .key mwc-button {
        margin-left: 16px;
      }
      .copied {
        font-weight: bold;
        color: var(--alert-success-color);

        position: absolute;
        background-color: var(--mdc-theme-surface, #fff);
        padding: 10px;
        right: 0;
        font-size: 1.2em;
      }
    `],i([t()],r.prototype,"configuration",void 0),i([s()],r.prototype,"_apiKey",void 0),i([s()],r.prototype,"_showCopied",void 0),r=i([a("esphome-show-api-key-dialog")],r);
//# sourceMappingURL=c.c2cccecc.js.map
