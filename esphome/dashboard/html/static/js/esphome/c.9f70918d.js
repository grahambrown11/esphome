import{z as t,C as o,h as e,b as s,n as i,t as r,j as n,s as a,x as c}from"./index-d019e81e.js";import"./c.3ad29082.js";import{g as l}from"./c.1548c17f.js";import{m as p,s as m,b as h}from"./c.520cb78f.js";const d=(t,o)=>{import("./c.859e33b7.js");const e=document.createElement("esphome-logs-dialog");e.configuration=t,e.target=o,document.body.append(e)},w=(t,o,e)=>{import("./c.83bc50fd.js");const s=document.createElement("esphome-logs-webserial-dialog");s.configuration=e,s.port=t,s.closePortOnClose=o,document.body.append(s)};let u=class extends a{constructor(){super(...arguments),this._show="options"}render(){let t,o;return"options"===this._show?(t="How to get the logs for your device?",o=c`
        <mwc-list-item
          twoline
          hasMeta
          .port=${"WEBSERIAL"}
          @click=${this._pickWebSerial}
        >
          <span>Plug into this computer</span>
          <span slot="secondary">
            For devices connected via USB to this computer
          </span>
          ${p}
        </mwc-list-item>

        <mwc-list-item twoline hasMeta @click=${this._showServerPorts}>
          <span>Plug into computer running ESPHome Dashboard</span>
          <span slot="secondary">
            For devices connected via USB to the server
          </span>
          ${p}
        </mwc-list-item>
        <mwc-button
          no-attention
          slot="primaryAction"
          dialogAction="close"
          label="Cancel"
        ></mwc-button>
      `):"web_instructions"===this._show?(t="View logs in the browser",o=c`
        <div>
          ESPHome can view the logs of your device via the browser if certain
          requirements are met:
        </div>
        <ul>
          <li>ESPHome is visited over HTTPS</li>
          <li>Your browser supports WebSerial</li>
        </ul>
        <div>
          Not all requirements are currently met. The easiest solution is to
          view the logs with ESPHome Web. ESPHome Web works 100% in your browser
          and no data will be shared with the ESPHome project.
        </div>
        <a
          slot="primaryAction"
          href=${"https://web.esphome.io/?dashboard_logs"}
          target="_blank"
          rel="noopener"
        >
          <mwc-button
            dialogAction="close"
            label="OPEN ESPHOME WEB"
          ></mwc-button>
        </a>
        <mwc-button
          no-attention
          slot="secondaryAction"
          label="Back"
          @click=${()=>{this._show="options"}}
        ></mwc-button>
      `):(l().then((t=>{this._ports=t})),t="Pick server port",o=c`${this._ports?0===this._ports.length?c`
              <mwc-list-item>
                <span>No serial ports found.</span>
              </mwc-list-item>
            `:this._ports.map((t=>c`
                <mwc-list-item
                  twoline
                  hasMeta
                  dialogAction="close"
                  .port=${t.port}
                  @click=${this._pickPort}
                >
                  <span>${t.desc}</span>
                  <span slot="secondary">${t.port}</span>
                  ${p}
                </mwc-list-item>
              `)):c`
              <mwc-list-item>
                <span>Loading ports…</span>
              </mwc-list-item>
            `}
        <mwc-button
          no-attention
          slot="primaryAction"
          label="Back"
          @click=${()=>{this._show="options"}}
        ></mwc-button>`),c`
      <mwc-dialog
        open
        heading=${t}
        scrimClickAction
        @closed=${this._handleClose}
      >
        ${o}
      </mwc-dialog>
    `}_showServerPorts(){this._show="server_ports"}_pickPort(t){d(this.configuration,t.currentTarget.port)}async _pickWebSerial(t){if(m&&h)try{const t=await navigator.serial.requestPort();await t.open({baudRate:115200}),this.shadowRoot.querySelector("mwc-dialog").close(),w(t,!0,this.configuration)}catch(t){console.error(t)}else this._show="web_instructions"}_handleClose(){this.parentNode.removeChild(this)}};u.styles=[t,o,e`
      mwc-list-item {
        margin: 0 -20px;
      }
    `],s([i()],u.prototype,"configuration",void 0),s([r()],u.prototype,"_ports",void 0),s([r()],u.prototype,"_show",void 0),u=s([n("esphome-logs-target-dialog")],u);var g=Object.freeze({__proto__:null});export{g as l,d as o};
//# sourceMappingURL=c.9f70918d.js.map
