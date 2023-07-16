import{z as e,h as t,b as i,n as s,t as o,i as a,j as n,s as r,x as d,U as c,V as l,W as h,X as p,Y as m,Z as u,u as y,$ as v}from"./index-7a45a5bf.js";import{c as _,s as f}from"./c.18a8ccfa.js";import{o as w}from"./c.b5abbb63.js";import{c as b}from"./c.440fff61.js";import{s as g}from"./c.a6e96e5a.js";import"./c.3e732c4c.js";let k=class extends r{constructor(){super(...arguments),this._state="ask",this._busy=!1,this._apiKey=null,this._cleanSSIDBlur=e=>{const t=e.target;t.value=t.value.trim()}}render(){let e,t;return"ask"===this._state?(e="Adopt device",t=d`
        <div>
          Adopting ${this.device.friendly_name||this.device.name} will create
          an ESPHome configuration for this device. This allows you to install
          updates and customize the original firmware.
        </div>

        ${this._error?d`<div class="error">${this._error}</div>`:""}
        ${this.device.friendly_name?d`
              <mwc-textfield
                label="New Name"
                name="name"
                required
                dialogInitialFocus
              ></mwc-textfield>
            `:""}
        ${this._needsWifiSecrets?!1!==this._hasWifiSecrets?d`
              <div>
                This device will be configured to connect to the Wi-Fi network
                stored in your secrets.
              </div>
            `:d`
              <div>
                Enter the credentials of the Wi-Fi network that you want your
                device to connect to.
              </div>
              <div>
                This information will be stored in your secrets and used for
                this and future devices. You can edit the information later by
                editing your secrets at the top of the page.
              </div>

              <mwc-textfield
                label="Network name"
                name="ssid"
                required
                @blur=${this._cleanSSIDBlur}
                .disabled=${this._busy}
              ></mwc-textfield>

              <mwc-textfield
                label="Password"
                name="password"
                type="password"
                helper="Leave blank if no password"
                .disabled=${this._busy}
              ></mwc-textfield>
            `:""}

        <mwc-button
          slot="primaryAction"
          .label=${this._busy?"Adopting…":"Adopt"}
          @click=${this._handleAdopt}
          .disabled=${this._needsWifiSecrets&&void 0===this._hasWifiSecrets}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${c}
          ></esphome-svg-icon>
        </mwc-button>
        ${this._busy?"":d`
              <mwc-button
                no-attention
                slot="secondaryAction"
                label="Cancel"
                dialogAction="cancel"
              >
                <esphome-svg-icon
                  slot="icon"
                  .path=${l}
                ></esphome-svg-icon>
              </mwc-button>
            `}
      `):"adopted"===this._state?(e="Configuration created",t=d`
        <div>
          To finish adoption of ${this._nameOverride||this.device.name}, the
          new configuration needs to be installed on the device.
        </div>
        ${this._apiKey?d`
              <p>
                Each ESPHome device has a unique encryption key to talk to other
                devices. You will need this key to include your device in Home
                Assistant. You can find the key later in the device menu.
              </p>
              <div class="api-key-container">
                <mwc-textfield
                  label="Encryption key"
                  readonly
                  name="api_key"
                  value=${this._apiKey}
                  @click=${this._handleCopyApiKey}
                ></mwc-textfield>
                <div class="api-key-banner">Copied!</div>
              </div>
            `:""}

        <mwc-button
          slot="primaryAction"
          label="Install"
          @click=${this._handleInstall}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${h}
          ></esphome-svg-icon>
        </mwc-button>
        <mwc-button
          slot="secondaryAction"
          no-attention
          label="Skip"
          @click=${()=>{this._state="skipped"}}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${p}
          ></esphome-svg-icon>
        </mwc-button>
      `):"skipped"===this._state&&(e="Installation skipped",t=d`
        <div>
          You will be able to install the configuration at a later point from
          the three-dot menu on the device card.
        </div>
        <mwc-button
          slot="secondaryAction"
          no-attention
          label="Back"
          @click=${()=>{this._state="adopted"}}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${v}
          ></esphome-svg-icon>
        </mwc-button>
        <mwc-button
          slot="primaryAction"
          dialogAction="close"
          label="Close"
        >
          <esphome-svg-icon
            slot="icon"
            .path=${l}
          ></esphome-svg-icon>
        </mwc-button>
      `),d`
      <mwc-dialog .heading=${e} @closed=${this._handleClose} open>
        ${t}
      </mwc-dialog>
    `}firstUpdated(e){super.firstUpdated(e),this._needsWifiSecrets&&_().then((e=>{this._hasWifiSecrets=e}))}updated(e){if(super.updated(e),e.has("_state")&&"ask"===this._state&&this.device.friendly_name){const e=this._inputName;e.value=this.device.friendly_name,e.updateComplete.then((()=>e.focus()))}}get _needsWifiSecrets(){return"wifi"===this.device.network}_handleClose(){this.parentNode.removeChild(this)}async _handleAdopt(){this._error=void 0;const e=!!this.device.friendly_name,t=this._needsWifiSecrets&&!1===this._hasWifiSecrets,i=!e||this._inputName.reportValidity(),s=!t||this._inputSSID.reportValidity();if(i)if(s){if(t){this._busy=!0;try{await f(this._inputSSID.value,this._inputPassword.value)}catch(e){return console.error(e),this._busy=!1,void(this._error="Failed to store Wi-Fi credentials")}}this._busy=!0;try{let t=this.device;e&&(t={...t,friendly_name:this._inputName.value},this._nameOverride=t.friendly_name);const i=await m(t);this._configFilename=i.configuration,u(this,"adopted"),this._apiKey=await y(this._configFilename),this._state="adopted"}catch(e){this._busy=!1,this._error="Failed to import device"}}else this._inputSSID.focus();else this._inputName.focus()}async _handleInstall(){w(this._configFilename,"OTA"),this.shadowRoot.querySelector("mwc-dialog").close()}async _handleCopyApiKey(){var e;b(this._apiKey),this._inputApiKeyBanner.style.setProperty("display","flex"),await g(3e3),null===(e=this._inputApiKeyBanner)||void 0===e||e.style.setProperty("display","none")}};k.styles=[e,t`
      :host {
        --mdc-dialog-max-width: 390px;
      }
      .error {
        color: var(--alert-error-color);
        margin-bottom: 16px;
      }
      .api-key-container {
        position: relative;
      }
      .api-key-banner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--mdc-theme-primary);
        color: white;
        display: none;
        align-items: center;
        justify-content: center;
        margin: 0 !important;
        font-weight: bold;
        border-radius: 2px;
      }
    `],i([s()],k.prototype,"device",void 0),i([o()],k.prototype,"_hasWifiSecrets",void 0),i([o()],k.prototype,"_state",void 0),i([o()],k.prototype,"_busy",void 0),i([o()],k.prototype,"_error",void 0),i([a(".api-key-banner")],k.prototype,"_inputApiKeyBanner",void 0),i([a("mwc-textfield[name=ssid]")],k.prototype,"_inputSSID",void 0),i([a("mwc-textfield[name=password]")],k.prototype,"_inputPassword",void 0),i([a("mwc-textfield[name=name]")],k.prototype,"_inputName",void 0),k=i([n("esphome-adopt-dialog")],k);
//# sourceMappingURL=c.7ce4eb87.js.map
