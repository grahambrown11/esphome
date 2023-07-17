import{b as t,t as s,j as e,s as i,x as a,g as o,h as r}from"./index-f953f643.js";import"./c.3e732c4c.js";let m=class extends i{async showDialog(t,s){this._params=t,this._resolve=s}render(){return this._params?a`
      <mwc-dialog
        .heading=${this._params.title||""}
        @closed=${this._handleClose}
        open
      >
        ${this._params.text?a`<div>${this._params.text}</div>`:""}
        <mwc-button
          slot="secondaryAction"
          no-attention
          .label=${this._params.dismissText||"Cancel"}
          dialogAction="dismiss"
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          .label=${this._params.confirmText||"Yes"}
          class=${o({destructive:this._params.destructive||!1})}
          dialogAction="confirm"
        ></mwc-button>
      </mwc-dialog>
    `:a``}_handleClose(t){this._resolve("confirm"===t.detail.action),this.parentNode.removeChild(this)}static get styles(){return r`
      mwc-button {
        --mdc-theme-primary: var(--primary-text-color);
      }

      .destructive {
        --mdc-theme-primary: var(--alert-error-color);
      }
    `}};t([s()],m.prototype,"_params",void 0),t([s()],m.prototype,"_resolve",void 0),m=t([e("esphome-confirmation-dialog")],m);
//# sourceMappingURL=c.355f9a80.js.map
