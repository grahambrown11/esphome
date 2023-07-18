import{s as t,x as e,V as s,a4 as i,P as r,N as o,v as a,z as n,h as l,b as c,n as p,t as d,j as h}from"./index-d019e81e.js";import"./c.3f5aabb2.js";import{f as g,r as m,g as _}from"./c.f18f813d.js";import{o as v}from"./c.c6b73131.js";import{c as u}from"./c.520cb78f.js";import"./c.3e732c4c.js";import"./c.a6e96e5a.js";import"./c.1548c17f.js";import"./c.c813bd5d.js";let w=class extends t{constructor(){super(...arguments),this._state="connecting_webserial"}render(){let t,r=!1;return"connecting_webserial"===this._state?(t=this._renderProgress("Connecting"),r=!0):"prepare_installation"===this._state?(t=this._renderProgress("Preparing installation"),r=!0):"installing"===this._state?(t=void 0===this._writeProgress?this._renderProgress("Erasing"):this._renderProgress(e`
                Installing<br /><br />
                This will take
                ${"ESP8266"===this._platform?"a minute":"2 minutes"}.<br />
                Keep this page visible to prevent slow down
              `,this._writeProgress>3?this._writeProgress:void 0),r=!0):"done"===this._state&&(t=this._error?t=e`
          ${this._renderMessage("👀",this._error,!1)}
          <mwc-button
            slot="secondaryAction"
            dialogAction="ok"
            label="Close"
          >
            <esphome-svg-icon
              slot="icon"
              .path=${s}
            ></esphome-svg-icon>
          </mwc-button>
          <mwc-button
            slot="primaryAction"
            label="Retry"
            @click=${this._handleRetry}
          >
            <esphome-svg-icon
              slot="icon"
              .path=${i}
            ></esphome-svg-icon>
          </mwc-button>
        `:this._renderMessage("🎉","Configuration installed!",!0)),e`
      <mwc-dialog
        open
        heading=${undefined}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${r}
      >
        ${t}
      </mwc-dialog>
    `}_renderProgress(t,s){return e`
      <div class="center">
        <div>
          <mwc-circular-progress
            active
            ?indeterminate=${void 0===s}
            .progress=${void 0!==s?s/100:void 0}
            density="8"
          ></mwc-circular-progress>
          ${void 0!==s?e`<div class="progress-pct">${s}%</div>`:""}
        </div>
        ${t}
      </div>
    `}_renderMessage(t,i,r){return e`
      <div class="center">
        <div class="icon">${t}</div>
        ${i}
      </div>
      ${r?e`
            <mwc-button
              slot="primaryAction"
              dialogAction="ok"
              label="Close"
            >
              <esphome-svg-icon
                slot="icon"
                .path=${s}
              ></esphome-svg-icon>
            </mwc-button>
          `:""}
    `}firstUpdated(t){super.firstUpdated(t),this._handleInstall()}_openCompileDialog(){r(this.params.configuration,!1),this._close()}_handleRetry(){v(this.params,(()=>this._close()))}async _handleInstall(){const t=this.esploader;t.transport.device.addEventListener("disconnect",(async()=>{this._state="done",this._error="Device disconnected",this.params.port||await t.transport.device.close()}));try{try{await t.main_fn(),await t.flash_id()}catch(t){return console.error(t),this._state="done",void(this._error="Failed to initialize. Try resetting your device or holding the BOOT button while selecting your serial port until it starts preparing the installation.")}this._platform=u[t.chip.CHIP_NAME];const e=this.params.filesCallback||(t=>this._getFilesForConfiguration(this.params.configuration,t));let s=[];try{s=await e(this._platform)}catch(t){return this._state="done",void(this._error=String(t))}if(!s)return;this._state="installing";try{await g(t,s,!0===this.params.erase,(t=>{this._writeProgress=t}))}catch(t){return void("done"!==this._state&&(this._error=`Installation failed: ${t}`,this._state="done"))}await m(t.transport),this._state="done"}finally{if(!this.params.port){console.log("Closing port");try{await t.transport.disconnect()}catch(t){}}}}async _getFilesForConfiguration(t,s){let i;try{i=await o(t)}catch(t){return this._state="done",void(this._error="Error fetching configuration information")}if(s!==i.esp_platform.toUpperCase())return this._state="done",void(this._error=`Configuration does not match the platform of the connected device. Expected an ${i.esp_platform.toUpperCase()} device.`);this._state="prepare_installation";try{await a(t)}catch(t){return this._error=e`
        Failed to prepare configuration<br /><br />
        <button class="link" @click=${this._openCompileDialog}>
          See what went wrong.
        </button>
      `,void(this._state="done")}return"done"!==this._state?await _(t):void 0}_close(){this.shadowRoot.querySelector("mwc-dialog").close()}async _handleClose(){this.params.onClose&&this.params.onClose("done"===this._state&&void 0===this._error),this.parentNode.removeChild(this)}};w.styles=[n,l`
      mwc-list-item {
        margin: 0 -20px;
      }
      svg {
        fill: currentColor;
      }
      .center {
        text-align: center;
      }
      mwc-circular-progress {
        margin-bottom: 16px;
      }
      .progress-pct {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
      }
      .icon {
        font-size: 50px;
        line-height: 80px;
        color: black;
      }
      .show-ports {
        margin-top: 16px;
      }
      .error {
        padding: 8px 24px;
        background-color: #fff59d;
        margin: 0 -24px;
      }
    `],c([p()],w.prototype,"params",void 0),c([p()],w.prototype,"esploader",void 0),c([d()],w.prototype,"_writeProgress",void 0),c([d()],w.prototype,"_state",void 0),c([d()],w.prototype,"_error",void 0),w=c([h("esphome-install-web-dialog")],w);export{w as ESPHomeInstallWebDialog};
//# sourceMappingURL=c.66fe4f19.js.map
