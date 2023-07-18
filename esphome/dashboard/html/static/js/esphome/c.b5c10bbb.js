import{z as o,b as s,n as e,t as i,j as t,s as a,x as n,W as l,p as d}from"./index-d019e81e.js";import"./c.3ad29082.js";import"./c.3e732c4c.js";let c=class extends a{render(){const o=void 0===this._valid?"":this._valid?"✅":"❌";return n`
      <esphome-process-dialog
        .heading=${`Validate ${this.configuration} ${o}`}
        .type=${"validate"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="Install"
          @click=${this._openInstall}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${l}
          ></esphome-svg-icon>
        </mwc-button>
      </esphome-process-dialog>
    `}_openInstall(){d(this.configuration)}_handleProcessDone(o){this._valid=0==o.detail}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[o],s([e()],c.prototype,"configuration",void 0),s([i()],c.prototype,"_valid",void 0),c=s([t("esphome-validate-dialog")],c);
//# sourceMappingURL=c.b5c10bbb.js.map
