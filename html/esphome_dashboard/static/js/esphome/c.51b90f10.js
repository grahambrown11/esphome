import{z as o,h as e,b as t,n as i,t as s,j as n,s as a,x as r,O as l,a3 as d,a4 as c,P as h}from"./index-299aa7a6.js";import"./c.28da2557.js";import"./c.3e732c4c.js";let p=class extends a{constructor(){super(...arguments),this.downloadFactoryFirmware=!0,this.buildOnly=!1}render(){return r`
      <esphome-process-dialog
        .heading=${`${this.buildOnly?"Build":"Download"} ${this.configuration}`}
        .type=${"compile"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        ${void 0===this._result?"":0===this._result?r`
              <a
                slot="secondaryAction"
                href="${l(this.configuration,this.downloadFactoryFirmware)}"
                rel="external"
              >
                <mwc-button label="Download">
                <esphome-svg-icon
                  slot="icon"
                  .path=${d}
                ></esphome-svg-icon>
                </mwc-button>
              </a>
            `:r`
              <mwc-button
                slot="secondaryAction"
                dialogAction="close"
                label="Retry"
                @click=${this._handleRetry}
              >
                <esphome-svg-icon
                  slot="icon"
                  .path=${c}
                ></esphome-svg-icon>
              </mwc-button>
            `}
      </esphome-process-dialog>
    `}_handleProcessDone(o){if(this._result=o.detail,0!==o.detail)return;const e=document.createElement("a");e.download=this.configuration+".bin",e.rel="external",e.href=l(this.configuration,this.downloadFactoryFirmware),document.body.appendChild(e),this.buildOnly||(e.click(),e.remove())}_handleRetry(){h(this.configuration,this.downloadFactoryFirmware)}_handleClose(){this.parentNode.removeChild(this)}};p.styles=[o,e`
      a {
        text-decoration: none;
      }
    `],t([i()],p.prototype,"configuration",void 0),t([i()],p.prototype,"downloadFactoryFirmware",void 0),t([i()],p.prototype,"buildOnly",void 0),t([s()],p.prototype,"_result",void 0),p=t([n("esphome-compile-dialog")],p);
//# sourceMappingURL=c.51b90f10.js.map
