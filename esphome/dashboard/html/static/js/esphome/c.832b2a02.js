import{b as e,n as o,j as s,s as i,x as t}from"./index-f953f643.js";import"./c.db76c3bd.js";import"./c.3e732c4c.js";let n=class extends i{render(){return t`
      <esphome-process-dialog
        .heading=${`Clean MQTT discovery topics for ${this.configuration}`}
        .type=${"clean-mqtt"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
      >
      </esphome-process-dialog>
    `}_handleClose(){this.parentNode.removeChild(this)}};e([o()],n.prototype,"configuration",void 0),n=e([s("esphome-clean-mqtt-dialog")],n);
//# sourceMappingURL=c.832b2a02.js.map
