import{b as e,n as o,t as s,j as t,s as i,x as n,a4 as a,aa as r}from"./index-572575df.js";import"./c.78ed9218.js";import"./c.3e732c4c.js";let l=class extends i{render(){return n`
      <esphome-process-dialog
        always-show-close
        .heading=${`Rename ${this.configuration}`}
        .type=${"rename"}
        .spawnParams=${{configuration:this.configuration,newName:`${this.newName}`}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        ${void 0===this._result||0===this._result?"":n`
              <mwc-button
                slot="secondaryAction"
                dialogAction="close"
                label="Retry"
                @click=${this._handleRetry}
              >
              <esphome-svg-icon
                slot="icon"
                .path=${a}
              ></esphome-svg-icon>
              </mwc-button>
            `}
      </esphome-process-dialog>
    `}_handleProcessDone(e){this._result=e.detail}_handleRetry(){r(this.configuration,this.newName)}_handleClose(){this.parentNode.removeChild(this)}};e([o()],l.prototype,"configuration",void 0),e([o()],l.prototype,"newName",void 0),e([s()],l.prototype,"_result",void 0),l=e([t("esphome-rename-process-dialog")],l);
//# sourceMappingURL=c.189e7937.js.map
