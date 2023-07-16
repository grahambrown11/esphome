import{a5 as o,a6 as e,z as n,h as t,b as s,n as i,i as a,t as c,j as l,s as r,x as d,a7 as h,a4 as p,V as g,N as u,a8 as m,a9 as w}from"./index-8751f08f.js";import{s as _}from"./c.a6e96e5a.js";import"./c.3e732c4c.js";class f{constructor(){this.chunks=""}transform(o,e){this.chunks+=o;const n=this.chunks.split("\r\n");this.chunks=n.pop(),n.forEach((o=>e.enqueue(o+"\r\n")))}flush(o){o.enqueue(this.chunks)}}class v extends HTMLElement{constructor(){super(...arguments),this.allowInput=!0}logs(){var o;return(null===(o=this._console)||void 0===o?void 0:o.logs())||""}connectedCallback(){if(this._console)return;if(this.attachShadow({mode:"open"}).innerHTML=`\n      <style>\n        :host, input {\n          background-color: #1c1c1c;\n          color: #ddd;\n          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,\n            monospace;\n          line-height: 1.45;\n          display: flex;\n          flex-direction: column;\n        }\n        form {\n          display: flex;\n          align-items: center;\n          padding: 0 8px 0 16px;\n        }\n        input {\n          flex: 1;\n          padding: 4px;\n          margin: 0 8px;\n          border: 0;\n          outline: none;\n        }\n        ${o}\n      </style>\n      <div class="log"></div>\n      ${this.allowInput?"<form>\n                >\n                <input autofocus>\n              </form>\n            ":""}\n    `,this._console=new e(this.shadowRoot.querySelector("div")),this.allowInput){const o=this.shadowRoot.querySelector("input");this.addEventListener("click",(()=>{var e;""===(null===(e=getSelection())||void 0===e?void 0:e.toString())&&o.focus()})),o.addEventListener("keydown",(o=>{"Enter"===o.key&&(o.preventDefault(),o.stopPropagation(),this._sendCommand())}))}const n=new AbortController,t=this._connect(n.signal);this._cancelConnection=()=>(n.abort(),t)}async _connect(o){this.logger.debug("Starting console read loop");try{await this.port.readable.pipeThrough(new TextDecoderStream,{signal:o}).pipeThrough(new TransformStream(new f)).pipeTo(new WritableStream({write:o=>{this._console.addLine(o.replace("\r",""))}})),o.aborted||(this._console.addLine(""),this._console.addLine(""),this._console.addLine("Terminal disconnected"))}catch(o){this._console.addLine(""),this._console.addLine(""),this._console.addLine(`Terminal disconnected: ${o}`)}finally{await _(100),this.logger.debug("Finished console read loop")}}async _sendCommand(){const o=this.shadowRoot.querySelector("input"),e=o.value,n=new TextEncoder,t=this.port.writable.getWriter();await t.write(n.encode(e+"\r\n")),this._console.addLine(`> ${e}\r\n`),o.value="",o.focus();try{t.releaseLock()}catch(o){console.error("Ignoring release lock error",o)}}async disconnect(){this._cancelConnection&&(await this._cancelConnection(),this._cancelConnection=void 0)}async reset(){this.logger.debug("Triggering reset."),await this.port.setSignals({dataTerminalReady:!1,requestToSend:!0}),await this.port.setSignals({dataTerminalReady:!1,requestToSend:!1}),await new Promise((o=>setTimeout(o,1e3)))}}customElements.define("ewt-console",v);let y=class extends r{constructor(){super(...arguments),this._isPico=!1}render(){return d`
      <mwc-dialog
        open
        .heading=${`Serial Logs ${this.configuration?this.configuration:""}`}
        scrimClickAction
        @closed=${this._handleClose}
      >
        <ewt-console
          .port=${this.port}
          .logger=${console}
          .allowInput=${!1}
        ></ewt-console>
        <mwc-button
          slot="secondaryAction"
          label="Download Logs"
          @click=${this._downloadLogs}
        >
          <esphome-svg-icon
            slot="icon"
            .path=${h}
          ></esphome-svg-icon>
        </mwc-button>
        ${this._isPico?"":d`
              <mwc-button
                slot="secondaryAction"
                label="Reset Device"
                @click=${this._resetDevice}
              >
                <esphome-svg-icon
                  slot="icon"
                  .path=${p}
                ></esphome-svg-icon>
              </mwc-button>
            `}
        <mwc-button
          slot="primaryAction"
          dialogAction="close"
          label="Close"
        >
          <esphome-svg-icon
            slot="icon"
            .path=${g}
          ></esphome-svg-icon>
        </mwc-button>
      </mwc-dialog>
    `}firstUpdated(o){super.firstUpdated(o),this.configuration&&u(this.configuration).then((o=>{this._isPico="RP2040"===o.esp_platform}))}async _handleClose(){await this._console.disconnect(),this.closePortOnClose&&await this.port.close(),this.parentNode.removeChild(this)}async _resetDevice(){await this._console.reset()}_downloadLogs(){m(this._console.logs(),(this.configuration?`${w(this.configuration)}_logs`:"logs")+".txt")}};y.styles=[n,t`
      mwc-dialog {
        --mdc-dialog-max-width: 90vw;
      }
      ewt-console {
        width: calc(80vw - 48px);
        height: calc(90vh - 128px);
      }
    `],s([i()],y.prototype,"configuration",void 0),s([i()],y.prototype,"port",void 0),s([i()],y.prototype,"closePortOnClose",void 0),s([a("ewt-console")],y.prototype,"_console",void 0),s([c()],y.prototype,"_isPico",void 0),y=s([l("esphome-logs-webserial-dialog")],y);
//# sourceMappingURL=c.de193764.js.map
