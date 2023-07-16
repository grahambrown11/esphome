import{b as e,n as o,j as s,s as i,x as t}from"./index-7a45a5bf.js";import"./c.f6e63eae.js";import"./c.3e732c4c.js";let n=class extends i{render(){return t`
      <esphome-process-dialog
        .heading=${`Clean MQTT discovery topics for ${this.configuration}`}
        .type=${"clean-mqtt"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
      >
      </esphome-process-dialog>
    `}_handleClose(){this.parentNode.removeChild(this)}};e([o()],n.prototype,"configuration",void 0),n=e([s("esphome-clean-mqtt-dialog")],n);
//# sourceMappingURL=c.b600409a.js.map
