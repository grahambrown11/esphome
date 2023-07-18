import{z as o,b as s,n as e,j as n,s as t,x as i,W as a,p as l}from"./index-d019e81e.js";import"./c.3ad29082.js";import"./c.3e732c4c.js";let c=class extends t{render(){return i`
      <esphome-process-dialog
        .heading=${`Clean ${this.configuration}`}
        .type=${"clean"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
      >
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="Install"
          @click=${this._openInstall}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${a}
          ></esphome-svg-icon>
        </mwc-button>
      </esphome-process-dialog>
    `}_openInstall(){l(this.configuration)}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[o],s([e()],c.prototype,"configuration",void 0),c=s([n("esphome-clean-dialog")],c);
//# sourceMappingURL=c.6efca6eb.js.map
