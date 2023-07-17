import{z as t,h as e,b as o,n as s,t as i,j as a,s as n,x as r,a4 as l}from"./index-572575df.js";import"./c.78ed9218.js";import{o as h}from"./c.1e0d0f8e.js";import"./c.3e732c4c.js";let c=class extends n{render(){return r`
      <esphome-process-dialog
        .heading=${`Install ${this.configuration}`}
        .type=${"run"}
        .spawnParams=${{configuration:this.configuration,port:this.target}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        ${"OTA"===this.target?"":r`
              <a
                href="https://esphome.io/guides/faq.html#i-can-t-get-flashing-over-usb-to-work"
                slot="secondaryAction"
                target="_blank"
                >❓</a
              >
            `}
        ${void 0===this._result||0===this._result?"":r`
              <mwc-button
                slot="secondaryAction"
                dialogAction="close"
                label="Retry"
                @click=${this._handleRetry}
              >
                <esphome-svg-icon
                  slot="icon"
                  .path=${l}
                ></esphome-svg-icon>
              </mwc-button>
            `}
      </esphome-process-dialog>
    `}_handleProcessDone(t){this._result=t.detail}_handleRetry(){h(this.configuration,this.target)}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[t,e`
      a[slot="secondaryAction"] {
        text-decoration: none;
        line-height: 32px;
      }
    `],o([s()],c.prototype,"configuration",void 0),o([s()],c.prototype,"target",void 0),o([i()],c.prototype,"_result",void 0),c=o([a("esphome-install-server-dialog")],c);
//# sourceMappingURL=c.dcad5265.js.map
