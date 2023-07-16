import{z as o,b as s,n as t,t as e,j as i,s as r,x as a,a4 as n}from"./index-7a45a5bf.js";import"./c.f6e63eae.js";import{o as l}from"./c.c3360d1b.js";import"./c.3e732c4c.js";import"./c.c4eae155.js";import"./c.e86e8bde.js";let c=class extends r{render(){return a`
      <esphome-process-dialog
        always-show-close
        .heading=${`Logs ${this.configuration}`}
        .type=${"logs"}
        .spawnParams=${{configuration:this.configuration,port:this.target}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        ${void 0===this._result||0===this._result?"":a`
              <mwc-button
                slot="secondaryAction"
                dialogAction="close"
                label="Retry"
                @click=${this._handleRetry}
              >
                <esphome-svg-icon
                  slot="icon"
                  .path=${n}
                ></esphome-svg-icon>
              </mwc-button>
            `}
      </esphome-process-dialog>
    `}_handleProcessDone(o){this._result=o.detail}_handleRetry(){l(this.configuration,this.target)}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[o],s([t()],c.prototype,"configuration",void 0),s([t()],c.prototype,"target",void 0),s([e()],c.prototype,"_result",void 0),c=s([i("esphome-logs-dialog")],c);
//# sourceMappingURL=c.133d68f8.js.map
