import{O as a}from"./index-8751f08f.js";import{s as t}from"./c.a6e96e5a.js";const e=async t=>{let e;try{e=await fetch(a(t,!0))}catch(a){throw new Error(`Downloading firmware failed: ${a}`)}if(!e.ok)throw new Error(`Downloading firmware failed: ${e.status}`);const r=new FileReader,s=await e.blob();return[{data:await new Promise((a=>{r.addEventListener("load",(()=>a(r.result))),r.readAsBinaryString(s)})),address:0}]},r=async(a,t,e,r)=>{e&&await a.erase_flash();let s=0;for(const a of t)s+=a.data.length;let o=0;r(0),await a.write_flash(t,"keep","keep","keep",!1,!0,((a,e,i)=>{const n=e/i*t[a].data.length,w=Math.floor((o+n)/s*100);e!==i?r(w):o+=n})),r(100)},s=async a=>{await a.setRTS(!0),await t(100),await a.setRTS(!1)};export{r as f,e as g,s as r};
//# sourceMappingURL=c.274eb7bb.js.map
