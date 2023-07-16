import{z as o,h as e,b as s,n as t,t as a,j as i,s as h,x as l,a7 as r,ab as n,V as d,Z as c,a9 as p,a8 as m}from"./index-656b1697.js";let g=class extends h{constructor(){super(...arguments),this.alwaysShowClose=!1}render(){return l`
      <mwc-dialog
        open
        heading=${this.heading}
        scrimClickAction
        @closed=${this._handleClose}
      >
        <esphome-remote-process
          .type=${this.type}
          .spawnParams=${this.spawnParams}
          @process-done=${this._handleProcessDone}
        ></esphome-remote-process>

        <mwc-button
          slot="secondaryAction"
          label="Download Logs"
          @click=${this._downloadLogs}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${r}
          ></esphome-svg-icon>
        </mwc-button>

        <slot name="secondaryAction" slot="secondaryAction"></slot>

        <mwc-button
          slot="primaryAction"
          dialogAction="close"
          .label=${void 0!==this._result||this.alwaysShowClose?"Close":"Stop"}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${void 0!==this._result||this.alwaysShowClose?d:n}
          ></esphome-svg-icon>
        </mwc-button>
      </mwc-dialog>
    `}_handleProcessDone(o){this._result=o.detail}_handleClose(){c(this,"closed")}_downloadLogs(){var o;let e="logs";(null===(o=this.spawnParams)||void 0===o?void 0:o.configuration)&&(e+=`_${p(this.spawnParams.configuration)}`),e+=`_${this.type}.txt`,m(this.shadowRoot.querySelector("esphome-remote-process").logs(),e)}};g.styles=[o,e`
      :host {
        --height-header-footer-padding: 152px;
      }
      mwc-dialog {
        --mdc-dialog-min-width: 95vw;
        --mdc-dialog-max-width: 95vw;
      }

      esphome-remote-process {
        height: calc(90vh - var(--height-header-footer-padding));
      }

      @media only screen and (max-width: 450px) {
        esphome-remote-process {
          height: calc(
            90vh - var(--height-header-footer-padding) -
              env(safe-area-inset-bottom)
          );
          margin-left: -24px;
          margin-right: -24px;
        }
      }
    `],s([t()],g.prototype,"heading",void 0),s([t()],g.prototype,"spawnParams",void 0),s([t()],g.prototype,"type",void 0),s([t({type:Boolean,attribute:"always-show-close"})],g.prototype,"alwaysShowClose",void 0),s([a()],g.prototype,"_result",void 0),g=s([i("esphome-process-dialog")],g);
//# sourceMappingURL=c.dd2b936f.js.map
