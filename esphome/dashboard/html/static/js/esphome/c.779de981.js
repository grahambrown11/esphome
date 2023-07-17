import{z as e,h as t,b as o,n as a,j as i,s as n,x as l,y as s,Z as r}from"./index-572575df.js";import"./c.3e732c4c.js";let c=class extends n{render(){return l`
      <mwc-dialog
        .heading=${`Delete ${this.name}`}
        @closed=${this._handleClose}
        open
      >
        <div>Are you sure you want to delete ${this.name}?</div>
        <mwc-button
          slot="primaryAction"
          class="warning"
          label="Delete"
          dialogAction="close"
          @click=${this._handleDelete}
        ></mwc-button>
        <mwc-button
          slot="secondaryAction"
          no-attention
          label="Cancel"
          dialogAction="cancel"
        ></mwc-button>
      </mwc-dialog>
    `}_handleClose(){this.parentNode.removeChild(this)}async _handleDelete(){await s(this.configuration),r(this,"deleted")}};c.styles=[e,t`
      .warning {
        --mdc-theme-primary: var(--alert-error-color);
      }
    `],o([a()],c.prototype,"name",void 0),o([a()],c.prototype,"configuration",void 0),c=o([i("esphome-delete-device-dialog")],c);
//# sourceMappingURL=c.779de981.js.map
