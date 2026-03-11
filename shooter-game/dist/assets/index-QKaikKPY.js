(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Co="160",kc=0,Xo=1,Wc=2,kl=1,Wl=2,Ri=3,Yi=0,Ot=1,Ft=2,Ii=0,zn=1,rr=2,Yo=3,jo=4,qc=5,rn=100,Xc=101,Yc=102,Ko=103,$o=104,jc=200,Kc=201,$c=202,Zc=203,go=204,_o=205,Jc=206,Qc=207,eh=208,th=209,ih=210,nh=211,sh=212,rh=213,oh=214,ah=0,lh=1,ch=2,or=3,hh=4,uh=5,dh=6,fh=7,ql=0,ph=1,mh=2,qi=0,gh=1,_h=2,vh=3,Xl=4,xh=5,yh=6,Yl=300,Hn=301,Vn=302,vo=303,xo=304,gr=306,ps=1e3,ci=1001,yo=1002,Nt=1003,Zo=1004,Ar=1005,ti=1006,Mh=1007,ms=1008,Xi=1009,Sh=1010,Eh=1011,Ro=1012,jl=1013,ki=1014,Wi=1015,Di=1016,Kl=1017,$l=1018,hn=1020,Th=1021,hi=1023,wh=1024,bh=1025,un=1026,kn=1027,Ah=1028,Zl=1029,Ch=1030,Jl=1031,Ql=1033,Cr=33776,Rr=33777,Lr=33778,Pr=33779,Jo=35840,Qo=35841,ea=35842,ta=35843,ec=36196,ia=37492,na=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,Ir=36492,va=36494,xa=36495,Rh=36283,ya=36284,Ma=36285,Sa=36286,tc=3e3,dn=3001,Lh=3200,Ph=3201,ic=0,Ih=1,ii="",Et="srgb",Ui="srgb-linear",Lo="display-p3",_r="display-p3-linear",ar="linear",it="srgb",lr="rec709",cr="p3",_n=7680,Ea=519,Dh=512,Uh=513,Nh=514,nc=515,Fh=516,Oh=517,Bh=518,zh=519,Ta=35044,Gh=35048,wa="300 es",Mo=1035,Pi=2e3,hr=2001;class $n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,ur=180/Math.PI;function gs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function Vt(r,e,t){return Math.max(e,Math.min(t,r))}function Hh(r,e){return(r%e+e)%e}function Ur(r,e,t){return(1-t)*r+t*e}function ba(r){return(r&r-1)===0&&r!==0}function So(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,n,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],m=i[5],g=i[8],_=n[0],p=n[3],f=n[6],v=n[1],x=n[4],M=n[7],R=n[2],w=n[5],C=n[8];return s[0]=o*_+a*v+l*R,s[3]=o*p+a*x+l*w,s[6]=o*f+a*M+l*C,s[1]=c*_+h*v+d*R,s[4]=c*p+h*x+d*w,s[7]=c*f+h*M+d*C,s[2]=u*_+m*v+g*R,s[5]=u*p+m*x+g*w,s[8]=u*f+m*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*s,m=c*s-o*l,g=t*d+i*u+n*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(a*i-n*o)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*s-a*t)*_,e[6]=m*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nr.makeScale(e,t)),this}rotate(e){return this.premultiply(Nr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Ve;function sc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function dr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Vh(){const r=dr("canvas");return r.style.display="block",r}const Aa={};function ds(r){r in Aa||(Aa[r]=!0,console.warn(r))}const Ca=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ra=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Ui]:{transfer:ar,primaries:lr,toReference:r=>r,fromReference:r=>r},[Et]:{transfer:it,primaries:lr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_r]:{transfer:ar,primaries:cr,toReference:r=>r.applyMatrix3(Ra),fromReference:r=>r.applyMatrix3(Ca)},[Lo]:{transfer:it,primaries:cr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ra),fromReference:r=>r.applyMatrix3(Ca).convertLinearToSRGB()}},kh=new Set([Ui,_r]),Ke={enabled:!0,_workingColorSpace:Ui,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!kh.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=bs[e].toReference,n=bs[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return bs[r].primaries},getTransfer:function(r){return r===ii?ar:bs[r].transfer}};function Gn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vn;class rc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vn===void 0&&(vn=dr("canvas")),vn.width=e.width,vn.height=e.height;const i=vn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Gn(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gn(t[i]/255)*255):t[i]=Gn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class oc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=gs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Or(n[o].image)):s.push(Or(n[o]))}else s=Or(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Or(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class Wt extends $n{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=ci,n=ci,s=ti,o=ms,a=hi,l=Xi,c=Wt.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=gs(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===dn?Et:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?dn:tc}set encoding(e){ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dn?Et:ii}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Yl;Wt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,M=(m+1)/2,R=(f+1)/2,w=(h+u)/4,C=(d+_)/4,B=(g+p)/4;return x>M&&x>R?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):M>R?M<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(M),i=w/n,s=B/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=C/s,n=B/s),this.set(i,n,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends $n{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===dn?Et:ii),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Wt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Xh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ac extends Wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yh extends Wt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let _s=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=s[o+0],m=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==m||h!==g){let p=1-a;const f=l*u+c*m+h*g+d*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,f*v);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const M=a*v;if(l=l*p+u*M,c=c*p+m*M,h=h*p+g*M,d=d*p+_*M,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,s,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+h*d+l*m-c*u,e[t+1]=l*g+h*u+c*d-a*m,e[t+2]=c*g+h*m+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),m=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-n)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(s+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-n)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new U,La=new _s;class pn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),As.copy(i.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Cs.subVectors(this.max,es),xn.subVectors(e.a,es),yn.subVectors(e.b,es),Mn.subVectors(e.c,es),Ni.subVectors(yn,xn),Fi.subVectors(Mn,yn),$i.subVectors(xn,Mn);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-$i.z,$i.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,$i.z,0,-$i.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-$i.y,$i.x,0];return!zr(t,xn,yn,Mn,Cs)||(t=[1,0,0,0,1,0,0,0,1],!zr(t,xn,yn,Mn,Cs))?!1:(Rs.crossVectors(Ni,Fi),t=[Rs.x,Rs.y,Rs.z],zr(t,xn,yn,Mn,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,As=new pn,xn=new U,yn=new U,Mn=new U,Ni=new U,Fi=new U,$i=new U,es=new U,Cs=new U,Rs=new U,Zi=new U;function zr(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Zi.fromArray(r,s);const a=n.x*Math.abs(Zi.x)+n.y*Math.abs(Zi.y)+n.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const jh=new pn,ts=new U,Gr=new U;let mn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ts,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Gr)),this.expandByPoint(ts.copy(e.center).sub(Gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const yi=new U,Hr=new U,Ls=new U,Oi=new U,Vr=new U,Ps=new U,kr=new U;let vr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Hr.copy(e).add(t).multiplyScalar(.5),Ls.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Hr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ls),a=Oi.dot(this.direction),l=-Oi.dot(Ls),c=Oi.lengthSq(),h=Math.abs(1-o*o);let d,u,m,g;if(h>0)if(d=o*l-a,u=o*a-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),m=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Hr).addScaledVector(Ls,u),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),n=yi.dot(yi)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,n,s){Vr.subVectors(t,e),Ps.subVectors(i,e),kr.crossVectors(Vr,Ps);let o=this.direction.dot(kr),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(Ps.crossVectors(Oi,Ps));if(l<0)return null;const c=a*this.direction.dot(Vr.cross(Oi));if(c<0||l+c>o)return null;const h=-a*Oi.dot(kr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class st{constructor(e,t,i,n,s,o,a,l,c,h,d,u,m,g,_,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,d,u,m,g,_,p)}set(e,t,i,n,s,o,a,l,c,h,d,u,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Sn.setFromMatrixColumn(e,0).length(),s=1/Sn.setFromMatrixColumn(e,1).length(),o=1/Sn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,m=l*d,g=c*h,_=c*d;t[0]=u+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,m=l*d,g=c*h,_=c*d;t[0]=u-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,m=o*d,g=a*h,_=a*d;t[0]=l*h,t[4]=g*c-m,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,$h)}lookAt(e,t,i){const n=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Bi.crossVectors(i,Xt),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Bi.crossVectors(i,Xt)),Bi.normalize(),Is.crossVectors(Xt,Bi),n[0]=Bi.x,n[4]=Is.x,n[8]=Xt.x,n[1]=Bi.y,n[5]=Is.y,n[9]=Xt.y,n[2]=Bi.z,n[6]=Is.z,n[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],v=i[3],x=i[7],M=i[11],R=i[15],w=n[0],C=n[4],B=n[8],S=n[12],T=n[1],F=n[5],z=n[9],N=n[13],L=n[2],P=n[6],I=n[10],K=n[14],G=n[3],q=n[7],$=n[11],J=n[15];return s[0]=o*w+a*T+l*L+c*G,s[4]=o*C+a*F+l*P+c*q,s[8]=o*B+a*z+l*I+c*$,s[12]=o*S+a*N+l*K+c*J,s[1]=h*w+d*T+u*L+m*G,s[5]=h*C+d*F+u*P+m*q,s[9]=h*B+d*z+u*I+m*$,s[13]=h*S+d*N+u*K+m*J,s[2]=g*w+_*T+p*L+f*G,s[6]=g*C+_*F+p*P+f*q,s[10]=g*B+_*z+p*I+f*$,s[14]=g*S+_*N+p*K+f*J,s[3]=v*w+x*T+M*L+R*G,s[7]=v*C+x*F+M*P+R*q,s[11]=v*B+x*z+M*I+R*$,s[15]=v*S+x*N+M*K+R*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+s*l*d-n*c*d-s*a*u+i*c*u+n*a*m-i*l*m)+_*(+t*l*m-t*c*u+s*o*u-n*o*m+n*c*h-s*l*h)+p*(+t*c*d-t*a*m-s*o*d+i*o*m+s*a*h-i*c*h)+f*(-n*a*h-t*l*d+t*a*u+n*o*d-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],v=d*p*c-_*u*c+_*l*m-a*p*m-d*l*f+a*u*f,x=g*u*c-h*p*c-g*l*m+o*p*m+h*l*f-o*u*f,M=h*_*c-g*d*c+g*a*m-o*_*m-h*a*f+o*d*f,R=g*d*l-h*_*l-g*a*u+o*_*u+h*a*p-o*d*p,w=t*v+i*x+n*M+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=v*C,e[1]=(_*u*s-d*p*s-_*n*m+i*p*m+d*n*f-i*u*f)*C,e[2]=(a*p*s-_*l*s+_*n*c-i*p*c-a*n*f+i*l*f)*C,e[3]=(d*l*s-a*u*s-d*n*c+i*u*c+a*n*m-i*l*m)*C,e[4]=x*C,e[5]=(h*p*s-g*u*s+g*n*m-t*p*m-h*n*f+t*u*f)*C,e[6]=(g*l*s-o*p*s-g*n*c+t*p*c+o*n*f-t*l*f)*C,e[7]=(o*u*s-h*l*s+h*n*c-t*u*c-o*n*m+t*l*m)*C,e[8]=M*C,e[9]=(g*d*s-h*_*s-g*i*m+t*_*m+h*i*f-t*d*f)*C,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*f+t*a*f)*C,e[11]=(h*a*s-o*d*s-h*i*c+t*d*c+o*i*m-t*a*m)*C,e[12]=R*C,e[13]=(h*_*n-g*d*n+g*i*u-t*_*u-h*i*p+t*d*p)*C,e[14]=(g*a*n-o*_*n-g*i*l+t*_*l+o*i*p-t*a*p)*C,e[15]=(o*d*n-h*a*n+h*i*l-t*d*l-o*i*u+t*a*u)*C,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,d=a+a,u=s*c,m=s*h,g=s*d,_=o*h,p=o*d,f=a*d,v=l*c,x=l*h,M=l*d,R=i.x,w=i.y,C=i.z;return n[0]=(1-(_+f))*R,n[1]=(m+M)*R,n[2]=(g-x)*R,n[3]=0,n[4]=(m-M)*w,n[5]=(1-(u+f))*w,n[6]=(p+v)*w,n[7]=0,n[8]=(g+x)*C,n[9]=(p-v)*C,n[10]=(1-(u+_))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Sn.set(n[0],n[1],n[2]).length();const o=Sn.set(n[4],n[5],n[6]).length(),a=Sn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ri.copy(this);const c=1/s,h=1/o,d=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Pi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let m,g;if(a===Pi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===hr)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Pi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(o-s),u=(t+e)*c,m=(i+n)*h;let g,_;if(a===Pi)g=(o+s)*d,_=-2*d;else if(a===hr)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Sn=new U,ri=new st,Kh=new U(0,0,0),$h=new U(1,1,1),Bi=new U,Is=new U,Xt=new U,Pa=new st,Ia=new _s;class vs{constructor(e=0,t=0,i=0,n=vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ia.setFromEuler(this),this.setFromQuaternion(Ia,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vs.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Da=new U,En=new _s,Mi=new st,Ds=new U,is=new U,Jh=new U,Qh=new _s,Ua=new U(1,0,0),Na=new U(0,1,0),Fa=new U(0,0,1),eu={type:"added"},tu={type:"removed"};class ht extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new U,t=new vs,i=new _s,n=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new st},normalMatrix:{value:new Ve}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.multiply(En),this}rotateOnWorldAxis(e,t){return En.setFromAxisAngle(e,t),this.quaternion.premultiply(En),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(Na,e)}rotateZ(e){return this.rotateOnAxis(Fa,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(Na,e)}translateZ(e){return this.translateOnAxis(Fa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ds.copy(e):Ds.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(is,Ds,this.up):Mi.lookAt(Ds,is,this.up),this.quaternion.setFromRotationMatrix(Mi),n&&(Mi.extractRotation(n.matrixWorld),En.setFromRotationMatrix(Mi),this.quaternion.premultiply(En.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,Jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Qh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ht.DEFAULT_UP=new U(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new U,Si=new U,Wr=new U,Ei=new U,Tn=new U,wn=new U,Oa=new U,qr=new U,Xr=new U,Yr=new U;let Us=!1;class li{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),oi.subVectors(e,t),n.cross(oi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){oi.subVectors(n,t),Si.subVectors(i,t),Wr.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Si),l=oi.dot(Wr),c=Si.dot(Si),h=Si.dot(Wr),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,m=(c*l-a*h)*u,g=(o*h-a*l)*u;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getUV(e,t,i,n,s,o,a,l){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,i,n,s,o,a,l)}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static isFrontFacing(e,t,i,n){return oi.subVectors(i,t),Si.subVectors(e,t),oi.cross(Si).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),oi.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),li.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}getInterpolation(e,t,i,n,s){return li.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,a;Tn.subVectors(n,i),wn.subVectors(s,i),qr.subVectors(e,i);const l=Tn.dot(qr),c=wn.dot(qr);if(l<=0&&c<=0)return t.copy(i);Xr.subVectors(e,n);const h=Tn.dot(Xr),d=wn.dot(Xr);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Tn,o);Yr.subVectors(e,s);const m=Tn.dot(Yr),g=wn.dot(Yr);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(wn,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Oa.subVectors(s,n),a=(d-h)/(d-h+(m-g)),t.copy(n).addScaledVector(Oa,a);const f=1/(p+_+u);return o=_*f,a=u*f,t.copy(i).addScaledVector(Tn,o).addScaledVector(wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function jr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Re{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ke.workingColorSpace){if(e=Hh(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jr(o,s,e+1/3),this.g=jr(o,s,e),this.b=jr(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,n),this}setStyle(e,t=Et){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const i=lc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ke.fromWorkingColorSpace(At.copy(this),e),Math.round(Vt(At.r*255,0,255))*65536+Math.round(Vt(At.g*255,0,255))*256+Math.round(Vt(At.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(At.copy(this),t);const i=At.r,n=At.g,s=At.b,o=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Et){Ke.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,n=At.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(Ns);const i=Ur(zi.h,Ns.h,t),n=Ur(zi.s,Ns.s,t),s=Ur(zi.l,Ns.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new Re;Re.NAMES=lc;let iu=0,gn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=zn,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_n,this.stencilZFail=_n,this.stencilZPass=_n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zn&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==go&&(i.blendSrc=this.blendSrc),this.blendDst!==_o&&(i.blendDst=this.blendDst),this.blendEquation!==rn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_n&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_n&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_n&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class $t extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new U,Fs=new Ae;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class cc extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hc extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gt extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let nu=0;const ei=new st,Kr=new ht,bn=new U,Yt=new pn,ns=new pn,Mt=new U;class Bt extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sc(e)?hc:cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,i){return ei.makeTranslation(e,t,i),this.applyMatrix4(ei),this}scale(e,t,i){return ei.makeScale(e,t,i),this.applyMatrix4(ei),this}lookAt(e){return Kr.lookAt(e),Kr.updateMatrix(),this.applyMatrix4(Kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Yt.min,ns.min),Yt.expandByPoint(Mt),Mt.addVectors(Yt.max,ns.max),Yt.expandByPoint(Mt)):(Yt.expandByPoint(ns.min),Yt.expandByPoint(ns.max))}Yt.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Mt.fromBufferAttribute(a,c),l&&(bn.fromBufferAttribute(e,c),Mt.add(bn)),n=Math.max(n,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new U,h[T]=new U;const d=new U,u=new U,m=new U,g=new Ae,_=new Ae,p=new Ae,f=new U,v=new U;function x(T,F,z){d.fromArray(n,T*3),u.fromArray(n,F*3),m.fromArray(n,z*3),g.fromArray(o,T*2),_.fromArray(o,F*2),p.fromArray(o,z*2),u.sub(d),m.sub(d),_.sub(g),p.sub(g);const N=1/(_.x*p.y-p.x*_.y);isFinite(N)&&(f.copy(u).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(N),v.copy(m).multiplyScalar(_.x).addScaledVector(u,-p.x).multiplyScalar(N),c[T].add(f),c[F].add(f),c[z].add(f),h[T].add(v),h[F].add(v),h[z].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,F=M.length;T<F;++T){const z=M[T],N=z.start,L=z.count;for(let P=N,I=N+L;P<I;P+=3)x(i[P+0],i[P+1],i[P+2])}const R=new U,w=new U,C=new U,B=new U;function S(T){C.fromArray(s,T*3),B.copy(C);const F=c[T];R.copy(F),R.sub(C.multiplyScalar(C.dot(F))).normalize(),w.crossVectors(B,F);const N=w.dot(h[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=N}for(let T=0,F=M.length;T<F;++T){const z=M[T],N=z.start,L=z.count;for(let P=N,I=N+L;P<I;P+=3)S(i[P+0]),S(i[P+1]),S(i[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const n=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)n.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new Zt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=e(u,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ba=new st,Ji=new vr,Os=new mn,za=new U,An=new U,Cn=new U,Rn=new U,$r=new U,Bs=new U,zs=new Ae,Gs=new Ae,Hs=new Ae,Ga=new U,Ha=new U,Va=new U,Vs=new U,ks=new U;class We extends ht{constructor(e=new Bt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Bs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&($r.fromBufferAttribute(d,e),o?Bs.addScaledVector($r,h):Bs.addScaledVector($r.sub(t),h))}t.add(Bs)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(Os.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Os,za)===null||Ji.origin.distanceToSquared(za)>(e.far-e.near)**2))&&(Ba.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Ba),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let n;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,R=x;M<R;M+=3){const w=a.getX(M),C=a.getX(M+1),B=a.getX(M+2);n=Ws(this,f,e,i,c,h,d,w,C,B),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const v=a.getX(p),x=a.getX(p+1),M=a.getX(p+2);n=Ws(this,o,e,i,c,h,d,v,x,M),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=o[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,R=x;M<R;M+=3){const w=M,C=M+1,B=M+2;n=Ws(this,f,e,i,c,h,d,w,C,B),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const v=p,x=p+1,M=p+2;n=Ws(this,o,e,i,c,h,d,v,x,M),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function su(r,e,t,i,n,s,o,a){let l;if(e.side===Ot?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Yi,a),l===null)return null;ks.copy(a),ks.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:r}}function Ws(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,An),r.getVertexPosition(l,Cn),r.getVertexPosition(c,Rn);const h=su(r,e,t,i,An,Cn,Rn,Vs);if(h){n&&(zs.fromBufferAttribute(n,a),Gs.fromBufferAttribute(n,l),Hs.fromBufferAttribute(n,c),h.uv=li.getInterpolation(Vs,An,Cn,Rn,zs,Gs,Hs,new Ae)),s&&(zs.fromBufferAttribute(s,a),Gs.fromBufferAttribute(s,l),Hs.fromBufferAttribute(s,c),h.uv1=li.getInterpolation(Vs,An,Cn,Rn,zs,Gs,Hs,new Ae),h.uv2=h.uv1),o&&(Ga.fromBufferAttribute(o,a),Ha.fromBufferAttribute(o,l),Va.fromBufferAttribute(o,c),h.normal=li.getInterpolation(Vs,An,Cn,Rn,Ga,Ha,Va,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};li.getNormal(An,Cn,Rn,d.normal),h.face=d}return h}class Tt extends Bt{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(_,p,f,v,x,M,R,w,C,B,S){const T=M/C,F=R/B,z=M/2,N=R/2,L=w/2,P=C+1,I=B+1;let K=0,G=0;const q=new U;for(let $=0;$<I;$++){const J=$*F-N;for(let j=0;j<P;j++){const Y=j*T-z;q[_]=Y*v,q[p]=J*x,q[f]=L,c.push(q.x,q.y,q.z),q[_]=0,q[p]=0,q[f]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(j/C),d.push(1-$/B),K+=1}}for(let $=0;$<B;$++)for(let J=0;J<C;J++){const j=u+J+P*$,Y=u+J+P*($+1),Z=u+(J+1)+P*($+1),ae=u+(J+1)+P*$;l.push(j,Y,ae),l.push(Y,Z,ae),G+=6}a.addGroup(m,G,S),m+=G,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ut(r){const e={};for(let t=0;t<r.length;t++){const i=Wn(r[t]);for(const n in i)e[n]=i[n]}return e}function ru(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function uc(r){return r.getRenderTarget()===null?r.outputColorSpace:Ke.workingColorSpace}const fr={clone:Wn,merge:Ut};var ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ou,this.fragmentShader=au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.uniformsGroups=ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let dc=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class kt extends dc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dr*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ln=-90,Pn=1;class lu extends ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new kt(Ln,Pn,e,t);n.layers=this.layers,this.add(n);const s=new kt(Ln,Pn,e,t);s.layers=this.layers,this.add(s);const o=new kt(Ln,Pn,e,t);o.layers=this.layers,this.add(o);const a=new kt(Ln,Pn,e,t);a.layers=this.layers,this.add(a);const l=new kt(Ln,Pn,e,t);l.layers=this.layers,this.add(l);const c=new kt(Ln,Pn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class fc extends Wt{constructor(e,t,i,n,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Hn,super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cu extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dn?Et:ii),this.texture=new fc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Tt(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:Ii});s.uniforms.tEquirect.value=t;const o=new We(n,s),a=t.minFilter;return t.minFilter===ms&&(t.minFilter=ti),new lu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const Zr=new U,hu=new U,uu=new Ve;let nn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Zr.subVectors(i,t).cross(hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Zr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uu.getNormalMatrix(e),n=this.coplanarPoint(Zr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Qi=new mn,qs=new U;class Io{constructor(e=new nn,t=new nn,i=new nn,n=new nn,s=new nn,o=new nn){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pi){const i=this.planes,n=e.elements,s=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],m=n[8],g=n[9],_=n[10],p=n[11],f=n[12],v=n[13],x=n[14],M=n[15];if(i[0].setComponents(l-s,u-c,p-m,M-f).normalize(),i[1].setComponents(l+s,u+c,p+m,M+f).normalize(),i[2].setComponents(l+o,u+h,p+g,M+v).normalize(),i[3].setComponents(l-o,u-h,p-g,M-v).normalize(),i[4].setComponents(l-a,u-d,p-_,M-x).normalize(),t===Pi)i[5].setComponents(l+a,u+d,p+_,M+x).normalize();else if(t===hr)i[5].setComponents(a,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(qs.x=n.normal.x>0?e.max.x:e.min.x,qs.y=n.normal.y>0?e.max.y:e.min.y,qs.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pc(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function du(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const d=c.array,u=c.usage,m=d.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,d,u),c.onUploadCallback();let _;if(d instanceof Float32Array)_=r.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=r.SHORT;else if(d instanceof Uint32Array)_=r.UNSIGNED_INT;else if(d instanceof Int32Array)_=r.INT;else if(d instanceof Int8Array)_=r.BYTE;else if(d instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,h,d){const u=h.array,m=h._updateRange,g=h.updateRanges;if(r.bindBuffer(d,c),m.count===-1&&g.length===0&&r.bufferSubData(d,0,u),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):r.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):r.bufferSubData(d,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,n(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}class qn extends Bt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=e/a,u=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const v=f*u-o;for(let x=0;x<c;x++){const M=x*d-s;g.push(M,-v,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+c*f,M=v+c*(f+1),R=v+1+c*(f+1),w=v+1+c*f;m.push(x,M,w),m.push(M,R,w)}this.setIndex(m),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var fu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Au=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ou=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ed=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,td=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ld=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ud=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Od=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,af=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,df=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,If=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:fu,alphahash_pars_fragment:pu,alphamap_fragment:mu,alphamap_pars_fragment:gu,alphatest_fragment:_u,alphatest_pars_fragment:vu,aomap_fragment:xu,aomap_pars_fragment:yu,batching_pars_vertex:Mu,batching_vertex:Su,begin_vertex:Eu,beginnormal_vertex:Tu,bsdfs:wu,iridescence_fragment:bu,bumpmap_pars_fragment:Au,clipping_planes_fragment:Cu,clipping_planes_pars_fragment:Ru,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Pu,color_fragment:Iu,color_pars_fragment:Du,color_pars_vertex:Uu,color_vertex:Nu,common:Fu,cube_uv_reflection_fragment:Ou,defaultnormal_vertex:Bu,displacementmap_pars_vertex:zu,displacementmap_vertex:Gu,emissivemap_fragment:Hu,emissivemap_pars_fragment:Vu,colorspace_fragment:ku,colorspace_pars_fragment:Wu,envmap_fragment:qu,envmap_common_pars_fragment:Xu,envmap_pars_fragment:Yu,envmap_pars_vertex:ju,envmap_physical_pars_fragment:od,envmap_vertex:Ku,fog_vertex:$u,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:Qu,gradientmap_pars_fragment:ed,lightmap_fragment:td,lightmap_pars_fragment:id,lights_lambert_fragment:nd,lights_lambert_pars_fragment:sd,lights_pars_begin:rd,lights_toon_fragment:ad,lights_toon_pars_fragment:ld,lights_phong_fragment:cd,lights_phong_pars_fragment:hd,lights_physical_fragment:ud,lights_physical_pars_fragment:dd,lights_fragment_begin:fd,lights_fragment_maps:pd,lights_fragment_end:md,logdepthbuf_fragment:gd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:xd,map_fragment:yd,map_pars_fragment:Md,map_particle_fragment:Sd,map_particle_pars_fragment:Ed,metalnessmap_fragment:Td,metalnessmap_pars_fragment:wd,morphcolor_vertex:bd,morphnormal_vertex:Ad,morphtarget_pars_vertex:Cd,morphtarget_vertex:Rd,normal_fragment_begin:Ld,normal_fragment_maps:Pd,normal_pars_fragment:Id,normal_pars_vertex:Dd,normal_vertex:Ud,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Od,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:zd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Vd,project_vertex:kd,dithering_fragment:Wd,dithering_pars_fragment:qd,roughnessmap_fragment:Xd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:jd,shadowmap_pars_vertex:Kd,shadowmap_vertex:$d,shadowmask_pars_fragment:Zd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:ef,skinnormal_vertex:tf,specularmap_fragment:nf,specularmap_pars_fragment:sf,tonemapping_fragment:rf,tonemapping_pars_fragment:of,transmission_fragment:af,transmission_pars_fragment:lf,uv_pars_fragment:cf,uv_pars_vertex:hf,uv_vertex:uf,worldpos_vertex:df,background_vert:ff,background_frag:pf,backgroundCube_vert:mf,backgroundCube_frag:gf,cube_vert:_f,cube_frag:vf,depth_vert:xf,depth_frag:yf,distanceRGBA_vert:Mf,distanceRGBA_frag:Sf,equirect_vert:Ef,equirect_frag:Tf,linedashed_vert:wf,linedashed_frag:bf,meshbasic_vert:Af,meshbasic_frag:Cf,meshlambert_vert:Rf,meshlambert_frag:Lf,meshmatcap_vert:Pf,meshmatcap_frag:If,meshnormal_vert:Df,meshnormal_frag:Uf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:zf,meshtoon_frag:Gf,points_vert:Hf,points_frag:Vf,shadow_vert:kf,shadow_frag:Wf,sprite_vert:qf,sprite_frag:Xf},se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},_i={basic:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ut([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ut([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ut([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ut([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ut([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ut([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ut([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ut([se.lights,se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};_i.physical={uniforms:Ut([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Xs={r:0,b:0,g:0};function Yf(r,e,t,i,n,s,o){const a=new Re(0);let l=s===!0?0:1,c,h,d=null,u=0,m=null;function g(p,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===gr)?(h===void 0&&(h=new We(new Tt(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Wn(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==it,(d!==x||u!==x.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new We(new qn(2,2),new Kt({name:"BackgroundMaterial",uniforms:Wn(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(Xs,uc(r)),i.buffers.color.setClear(Xs.r,Xs.g,Xs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function jf(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function d(L,P,I,K,G){let q=!1;if(o){const $=_(K,I,P);c!==$&&(c=$,m(c.object)),q=f(L,K,I,G),q&&v(L,K,I,G)}else{const $=P.wireframe===!0;(c.geometry!==K.id||c.program!==I.id||c.wireframe!==$)&&(c.geometry=K.id,c.program=I.id,c.wireframe=$,q=!0)}G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,B(L,P,I,K),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function u(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,P,I){const K=I.wireframe===!0;let G=a[L.id];G===void 0&&(G={},a[L.id]=G);let q=G[P.id];q===void 0&&(q={},G[P.id]=q);let $=q[K];return $===void 0&&($=p(u()),q[K]=$),$}function p(L){const P=[],I=[],K=[];for(let G=0;G<n;G++)P[G]=0,I[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:K,object:L,attributes:{},index:null}}function f(L,P,I,K){const G=c.attributes,q=P.attributes;let $=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){const Z=G[j];let ae=q[j];if(ae===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor)),Z===void 0||Z.attribute!==ae||ae&&Z.data!==ae.data)return!0;$++}return c.attributesNum!==$||c.index!==K}function v(L,P,I,K){const G={},q=P.attributes;let $=0;const J=I.getAttributes();for(const j in J)if(J[j].location>=0){let Z=q[j];Z===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ae={};ae.attribute=Z,Z&&Z.data&&(ae.data=Z.data),G[j]=ae,$++}c.attributes=G,c.attributesNum=$,c.index=K}function x(){const L=c.newAttributes;for(let P=0,I=L.length;P<I;P++)L[P]=0}function M(L){R(L,0)}function R(L,P){const I=c.newAttributes,K=c.enabledAttributes,G=c.attributeDivisors;I[L]=1,K[L]===0&&(r.enableVertexAttribArray(L),K[L]=1),G[L]!==P&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,P),G[L]=P)}function w(){const L=c.newAttributes,P=c.enabledAttributes;for(let I=0,K=P.length;I<K;I++)P[I]!==L[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function C(L,P,I,K,G,q,$){$===!0?r.vertexAttribIPointer(L,P,I,G,q):r.vertexAttribPointer(L,P,I,K,G,q)}function B(L,P,I,K){if(i.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=K.attributes,q=I.getAttributes(),$=P.defaultAttributeValues;for(const J in q){const j=q[J];if(j.location>=0){let Y=G[J];if(Y===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const Z=Y.normalized,ae=Y.itemSize,pe=t.get(Y);if(pe===void 0)continue;const me=pe.buffer,Ie=pe.type,Ue=pe.bytesPerElement,Te=i.isWebGL2===!0&&(Ie===r.INT||Ie===r.UNSIGNED_INT||Y.gpuType===jl);if(Y.isInterleavedBufferAttribute){const qe=Y.data,H=qe.stride,Lt=Y.offset;if(qe.isInstancedInterleavedBuffer){for(let ye=0;ye<j.locationSize;ye++)R(j.location+ye,qe.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let ye=0;ye<j.locationSize;ye++)M(j.location+ye);r.bindBuffer(r.ARRAY_BUFFER,me);for(let ye=0;ye<j.locationSize;ye++)C(j.location+ye,ae/j.locationSize,Ie,Z,H*Ue,(Lt+ae/j.locationSize*ye)*Ue,Te)}else{if(Y.isInstancedBufferAttribute){for(let qe=0;qe<j.locationSize;qe++)R(j.location+qe,Y.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let qe=0;qe<j.locationSize;qe++)M(j.location+qe);r.bindBuffer(r.ARRAY_BUFFER,me);for(let qe=0;qe<j.locationSize;qe++)C(j.location+qe,ae/j.locationSize,Ie,Z,ae*Ue,ae/j.locationSize*qe*Ue,Te)}}else if($!==void 0){const Z=$[J];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(j.location,Z);break;case 3:r.vertexAttrib3fv(j.location,Z);break;case 4:r.vertexAttrib4fv(j.location,Z);break;default:r.vertexAttrib1fv(j.location,Z)}}}}w()}function S(){z();for(const L in a){const P=a[L];for(const I in P){const K=P[I];for(const G in K)g(K[G].object),delete K[G];delete P[I]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const P=a[L.id];for(const I in P){const K=P[I];for(const G in K)g(K[G].object),delete K[G];delete P[I]}delete a[L.id]}function F(L){for(const P in a){const I=a[P];if(I[L.id]===void 0)continue;const K=I[L.id];for(const G in K)g(K[G].object),delete K[G];delete I[L.id]}}function z(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:N,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function Kf(r,e,t,i){const n=i.isWebGL2;let s;function o(h){s=h}function a(h,d){r.drawArrays(s,h,d),t.update(d,s,1)}function l(h,d,u){if(u===0)return;let m,g;if(n)m=r,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,h,d,u),t.update(d,s,u)}function c(h,d,u){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(s,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function $f(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=o||e.has("OES_texture_float"),R=x&&M,w=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:w}}function Zf(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new nn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||i!==0||n;return n=u,i=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=r.get(d);if(!n||g===null||g.length===0||s&&!p)s?h(null):c();else{const v=s?0:i,x=v*4;let M=f.clippingState||null;l.value=M,M=h(g,u,x,m);for(let R=0;R!==x;++R)M[R]=t[R];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,M=m;x!==_;++x,M+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Jf(r){let e=new WeakMap;function t(o,a){return a===vo?o.mapping=Hn:a===xo&&(o.mapping=Vn),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vo||a===xo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cu(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Do extends dc{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fn=4,ka=[.125,.215,.35,.446,.526,.582],on=20,Jr=new Do,Wa=new Re;let Qr=null,eo=0,to=0;const sn=(1+Math.sqrt(5))/2,In=1/sn,qa=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,sn,In),new U(0,sn,-In),new U(In,0,sn),new U(-In,0,sn),new U(sn,In,0),new U(-sn,In,0)];class Xa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Qr=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,eo,to),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Di,format:hi,colorSpace:Ui,depthBuffer:!1},n=Ya(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qf(s)),this._blurMaterial=ep(s,e,t)}return n}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,i,n){const a=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wa),h.toneMapping=qi,h.autoClear=!1;const m=new $t({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new We(new Tt,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Wa),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const x=this._cubeSize;Ys(n,v*x,f>2?x:0,x,x),h.setRenderTarget(n),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Hn||e.mapping===Vn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=qa[(n-1)%qa.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new We(this._lodPlanes[n],c),u=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*on-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):on;p>on&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${on}`);const f=[];let v=0;for(let C=0;C<on;++C){const B=C/_,S=Math.exp(-B*B/2);f.push(S),C===0?v+=S:C<p&&(v+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const M=this._sizeLods[n],R=3*M*(n>x-Fn?n-x+Fn:0),w=4*(this._cubeSize-M);Ys(t,R,w,3*M,2*M),l.setRenderTarget(t),l.render(d,Jr)}}function Qf(r){const e=[],t=[],i=[];let n=r;const s=r-Fn+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,n);t.push(a);let l=1/a;o>r-Fn?l=ka[o-r+Fn-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,f=1,v=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,B=w>2?0:-1,S=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];v.set(S,_*g*w),x.set(u,p*g*w);const T=[w,w,w,w,w,w];M.set(T,f*g*w)}const R=new Bt;R.setAttribute("position",new Zt(v,_)),R.setAttribute("uv",new Zt(x,p)),R.setAttribute("faceIndex",new Zt(M,f)),e.push(R),n>Fn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ya(r,e,t){const i=new di(r,e,t);return i.texture.mapping=gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ys(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function ep(r,e,t){const i=new Float32Array(on),n=new U(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:on,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ja(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ka(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Uo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tp(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vo||l===xo,h=l===Hn||l===Vn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Xa(r)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||h&&d&&n(d)){t===null&&(t=new Xa(r));const u=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,u),a.addEventListener("dispose",s),u.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ip(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function np(r,e,t,i){const n={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}u.removeEventListener("dispose",o),delete n[u.id];const m=s.get(u);m&&(e.remove(m),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const v=m.array;_=m.version;for(let x=0,M=v.length;x<M;x+=3){const R=v[x+0],w=v[x+1],C=v[x+2];u.push(R,w,w,C,C,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const R=x+0,w=x+1,C=x+2;u.push(R,w,w,C,C,R)}}else return;const p=new(sc(u)?hc:cc)(u,1);p.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,p)}function h(d){const u=s.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function sp(r,e,t,i){const n=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){r.drawElements(s,g,a,m*l),t.update(g,s,1)}function d(m,g,_){if(_===0)return;let p,f;if(n)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*l,_),t.update(g,s,_)}function u(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function rp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function op(r,e){return r[0]-e[0]}function ap(r,e){return Math.abs(e[1])-Math.abs(r[1])}function lp(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let P=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",P)};var m=P;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),R===!0&&(S=3);let T=h.attributes.position.count*S,F=1;T>e.maxTextureSize&&(F=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const z=new Float32Array(T*F*4*_),N=new ac(z,T,F,_);N.type=Wi,N.needsUpdate=!0;const L=S*4;for(let I=0;I<_;I++){const K=w[I],G=C[I],q=B[I],$=T*F*4*I;for(let J=0;J<K.count;J++){const j=J*L;x===!0&&(o.fromBufferAttribute(K,J),z[$+j+0]=o.x,z[$+j+1]=o.y,z[$+j+2]=o.z,z[$+j+3]=0),M===!0&&(o.fromBufferAttribute(G,J),z[$+j+4]=o.x,z[$+j+5]=o.y,z[$+j+6]=o.z,z[$+j+7]=0),R===!0&&(o.fromBufferAttribute(q,J),z[$+j+8]=o.x,z[$+j+9]=o.y,z[$+j+10]=o.z,z[$+j+11]=q.itemSize===4?o.w:1)}}p={count:_,texture:N,size:new Ae(T,F)},s.set(h,p),h.addEventListener("dispose",P)}let f=0;for(let x=0;x<u.length;x++)f+=u[x];const v=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",u),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=u===void 0?0:u.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];i[h.id]=_}for(let M=0;M<g;M++){const R=_[M];R[0]=M,R[1]=u[M]}_.sort(ap);for(let M=0;M<8;M++)M<g&&_[M][1]?(a[M][0]=_[M][0],a[M][1]=_[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(op);const p=h.morphAttributes.position,f=h.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const R=a[M],w=R[0],C=R[1];w!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+M)!==p[w]&&h.setAttribute("morphTarget"+M,p[w]),f&&h.getAttribute("morphNormal"+M)!==f[w]&&h.setAttribute("morphNormal"+M,f[w]),n[M]=C,v+=C):(p&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),n[M]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",x),d.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function cp(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class mc extends Wt{constructor(e,t,i,n,s,o,a,l,c,h){if(h=h!==void 0?h:un,h!==un&&h!==kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===un&&(i=ki),i===void 0&&h===kn&&(i=hn),super(null,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nt,this.minFilter=l!==void 0?l:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const gc=new Wt,_c=new mc(1,1);_c.compareFunction=nc;const vc=new ac,xc=new Yh,yc=new fc,$a=[],Za=[],Ja=new Float32Array(16),Qa=new Float32Array(9),el=new Float32Array(4);function Zn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=$a[n];if(s===void 0&&(s=new Float32Array(n),$a[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function _t(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function xr(r,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function hp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function dp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function fp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function pp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;el.set(i),r.uniformMatrix2fv(this.addr,!1,el),vt(t,i)}}function mp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Qa.set(i),r.uniformMatrix3fv(this.addr,!1,Qa),vt(t,i)}}function gp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;Ja.set(i),r.uniformMatrix4fv(this.addr,!1,Ja),vt(t,i)}}function _p(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function Mp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function Ep(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function Tp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function wp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?_c:gc;t.setTexture2D(e||s,n)}function bp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||xc,n)}function Ap(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||yc,n)}function Cp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||vc,n)}function Rp(r){switch(r){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return Ep;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}function Lp(r,e){r.uniform1fv(this.addr,e)}function Pp(r,e){const t=Zn(e,this.size,2);r.uniform2fv(this.addr,t)}function Ip(r,e){const t=Zn(e,this.size,3);r.uniform3fv(this.addr,t)}function Dp(r,e){const t=Zn(e,this.size,4);r.uniform4fv(this.addr,t)}function Up(r,e){const t=Zn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Np(r,e){const t=Zn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fp(r,e){const t=Zn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Op(r,e){r.uniform1iv(this.addr,e)}function Bp(r,e){r.uniform2iv(this.addr,e)}function zp(r,e){r.uniform3iv(this.addr,e)}function Gp(r,e){r.uniform4iv(this.addr,e)}function Hp(r,e){r.uniform1uiv(this.addr,e)}function Vp(r,e){r.uniform2uiv(this.addr,e)}function kp(r,e){r.uniform3uiv(this.addr,e)}function Wp(r,e){r.uniform4uiv(this.addr,e)}function qp(r,e,t){const i=this.cache,n=e.length,s=xr(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||gc,s[o])}function Xp(r,e,t){const i=this.cache,n=e.length,s=xr(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||xc,s[o])}function Yp(r,e,t){const i=this.cache,n=e.length,s=xr(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||yc,s[o])}function jp(r,e,t){const i=this.cache,n=e.length,s=xr(t,n);_t(i,s)||(r.uniform1iv(this.addr,s),vt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||vc,s[o])}function Kp(r){switch(r){case 5126:return Lp;case 35664:return Pp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return Np;case 35676:return Fp;case 5124:case 35670:return Op;case 35667:case 35671:return Bp;case 35668:case 35672:return zp;case 35669:case 35673:return Gp;case 5125:return Hp;case 36294:return Vp;case 36295:return kp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return qp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return jp}}class $p{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rp(t.type)}}class Zp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kp(t.type)}}class Jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const io=/(\w+)(\])?(\[|\.)?/g;function tl(r,e){r.seq.push(e),r.map[e.id]=e}function Qp(r,e,t){const i=r.name,n=i.length;for(io.lastIndex=0;;){const s=io.exec(i),o=io.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){tl(t,c===void 0?new $p(a,r,e):new Zp(a,r,e));break}else{let d=t.map[a];d===void 0&&(d=new Jp(a),tl(t,d)),t=d}}}class nr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);Qp(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function il(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const em=37297;let tm=0;function im(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function nm(r){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(r);let i;switch(e===t?i="":e===cr&&t===lr?i="LinearDisplayP3ToLinearSRGB":e===lr&&t===cr&&(i="LinearSRGBToLinearDisplayP3"),r){case Ui:case _r:return[i,"LinearTransferOETF"];case Et:case Lo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function nl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+im(r.getShaderSource(e),o)}else return n}function sm(r,e){const t=nm(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rm(r,e){let t;switch(e){case gh:t="Linear";break;case _h:t="Reinhard";break;case vh:t="OptimizedCineon";break;case Xl:t="ACESFilmic";break;case yh:t="AgX";break;case xh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function om(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(On).join(`
`)}function am(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(On).join(`
`)}function lm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cm(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function On(r){return r!==""}function sl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eo(r){return r.replace(hm,dm)}const um=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function dm(r,e){let t=Fe[e];if(t===void 0){const i=um.get(e);if(i!==void 0)t=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eo(t)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(r){return r.replace(fm,pm)}function pm(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function al(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function gm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hn:case Vn:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _m(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vn:e="ENVMAP_MODE_REFRACTION";break}return e}function vm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ql:e="ENVMAP_BLENDING_MULTIPLY";break;case ph:e="ENVMAP_BLENDING_MIX";break;case mh:e="ENVMAP_BLENDING_ADD";break}return e}function xm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ym(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mm(t),c=gm(t),h=_m(t),d=vm(t),u=xm(t),m=t.isWebGL2?"":om(t),g=am(t),_=lm(s),p=n.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(On).join(`
`),f.length>0&&(f+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(On).join(`
`),v.length>0&&(v+=`
`)):(f=[al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(On).join(`
`),v=[m,al(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Fe.tonemapping_pars_fragment:"",t.toneMapping!==qi?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,sm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(On).join(`
`)),o=Eo(o),o=sl(o,t),o=rl(o,t),a=Eo(a),a=sl(a,t),a=rl(a,t),o=ol(o),a=ol(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+f+o,R=x+v+a,w=il(n,n.VERTEX_SHADER,M),C=il(n,n.FRAGMENT_SHADER,R);n.attachShader(p,w),n.attachShader(p,C),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p);function B(z){if(r.debug.checkShaderErrors){const N=n.getProgramInfoLog(p).trim(),L=n.getShaderInfoLog(w).trim(),P=n.getShaderInfoLog(C).trim();let I=!0,K=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,p,w,C);else{const G=nl(n,w,"vertex"),q=nl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+q)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||P==="")&&(K=!1);K&&(z.diagnostics={runnable:I,programLog:N,vertexShader:{log:L,prefix:f},fragmentShader:{log:P,prefix:v}})}n.deleteShader(w),n.deleteShader(C),S=new nr(n,p),T=cm(n,p)}let S;this.getUniforms=function(){return S===void 0&&B(this),S};let T;this.getAttributes=function(){return T===void 0&&B(this),T};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=n.getProgramParameter(p,em)),F},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=C,this}let Mm=0;class Sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Em(e),t.set(e,i)),i}}class Em{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}}function Tm(r,e,t,i,n,s,o){const a=new Po,l=new Sm,c=[],h=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures;let m=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,T,F,z,N){const L=z.fog,P=N.geometry,I=S.isMeshStandardMaterial?z.environment:null,K=(S.isMeshStandardMaterial?t:e).get(S.envMap||I),G=K&&K.mapping===gr?K.image.height:null,q=g[S.type];S.precision!==null&&(m=n.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=$!==void 0?$.length:0;let j=0;P.morphAttributes.position!==void 0&&(j=1),P.morphAttributes.normal!==void 0&&(j=2),P.morphAttributes.color!==void 0&&(j=3);let Y,Z,ae,pe;if(q){const Pt=_i[q];Y=Pt.vertexShader,Z=Pt.fragmentShader}else Y=S.vertexShader,Z=S.fragmentShader,l.update(S),ae=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const me=r.getRenderTarget(),Ie=N.isInstancedMesh===!0,Ue=N.isBatchedMesh===!0,Te=!!S.map,qe=!!S.matcap,H=!!K,Lt=!!S.aoMap,ye=!!S.lightMap,Le=!!S.bumpMap,ge=!!S.normalMap,ot=!!S.displacementMap,Oe=!!S.emissiveMap,A=!!S.metalnessMap,E=!!S.roughnessMap,k=S.anisotropy>0,te=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,_e=S.transmission>0,ce=k&&!!S.anisotropyMap,de=te&&!!S.clearcoatMap,Ee=te&&!!S.clearcoatNormalMap,Be=te&&!!S.clearcoatRoughnessMap,Q=ee&&!!S.iridescenceMap,je=ee&&!!S.iridescenceThicknessMap,ke=ie&&!!S.sheenColorMap,Ce=ie&&!!S.sheenRoughnessMap,xe=!!S.specularMap,fe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,Ye=_e&&!!S.transmissionMap,lt=_e&&!!S.thicknessMap,Ge=!!S.gradientMap,ne=!!S.alphaMap,D=S.alphaTest>0,re=!!S.alphaHash,oe=!!S.extensions,we=!!P.attributes.uv1,Me=!!P.attributes.uv2,Ze=!!P.attributes.uv3;let Je=qi;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Je=r.toneMapping),{isWebGL2:h,shaderID:q,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:Z,defines:S.defines,customVertexShaderID:ae,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ue,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:me===null?r.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ui,map:Te,matcap:qe,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:G,aoMap:Lt,lightMap:ye,bumpMap:Le,normalMap:ge,displacementMap:u&&ot,emissiveMap:Oe,normalMapObjectSpace:ge&&S.normalMapType===Ih,normalMapTangentSpace:ge&&S.normalMapType===ic,metalnessMap:A,roughnessMap:E,anisotropy:k,anisotropyMap:ce,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Be,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:je,sheen:ie,sheenColorMap:ke,sheenRoughnessMap:Ce,specularMap:xe,specularColorMap:fe,specularIntensityMap:Ne,transmission:_e,transmissionMap:Ye,thicknessMap:lt,gradientMap:Ge,opaque:S.transparent===!1&&S.blending===zn,alphaMap:ne,alphaTest:D,alphaHash:re,combine:S.combine,mapUv:Te&&_(S.map.channel),aoMapUv:Lt&&_(S.aoMap.channel),lightMapUv:ye&&_(S.lightMap.channel),bumpMapUv:Le&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:ot&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:A&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ce&&_(S.anisotropyMap.channel),clearcoatMapUv:de&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:xe&&_(S.specularMap.channel),specularColorMapUv:fe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ne&&_(S.specularIntensityMap.channel),transmissionMapUv:Ye&&_(S.transmissionMap.channel),thicknessMapUv:lt&&_(S.thicknessMap.channel),alphaMapUv:ne&&_(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ge||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Me,vertexUv3s:Ze,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(Te||ne),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===Ot,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)T.push(F),T.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(v(T,S),x(T,S),T.push(r.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){const T=g[S.type];let F;if(T){const z=_i[T];F=fr.clone(z.uniforms)}else F=S.uniforms;return F}function R(S,T){let F;for(let z=0,N=c.length;z<N;z++){const L=c[z];if(L.cacheKey===T){F=L,++F.usedTimes;break}}return F===void 0&&(F=new ym(r,T,S,s),c.push(F)),F}function w(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:B}}function wm(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function bm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ll(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cl(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(d,u,m,g,_,p){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),e++,f}function a(d,u,m,g,_,p){const f=o(d,u,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?n.push(f):t.push(f)}function l(d,u,m,g,_,p){const f=o(d,u,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?n.unshift(f):t.unshift(f)}function c(d,u){t.length>1&&t.sort(d||bm),i.length>1&&i.sort(u||ll),n.length>1&&n.sort(u||ll)}function h(){for(let d=e,u=r.length;d<u;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function Am(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new cl,r.set(i,[o])):n>=s.length?(o=new cl,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Re};break;case"SpotLight":t={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Rm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Lm=0;function Pm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Im(r,e){const t=new Cm,i=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const s=new U,o=new st,a=new st;function l(h,d){let u=0,m=0,g=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let _=0,p=0,f=0,v=0,x=0,M=0,R=0,w=0,C=0,B=0,S=0;h.sort(Pm);const T=d===!0?Math.PI:1;for(let z=0,N=h.length;z<N;z++){const L=h[z],P=L.color,I=L.intensity,K=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=P.r*I*T,m+=P.g*I*T,g+=P.b*I*T;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],I);S++}else if(L.isDirectionalLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const $=L.shadow,J=i.get(L);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.directionalShadow[_]=J,n.directionalShadowMap[_]=G,n.directionalShadowMatrix[_]=L.shadow.matrix,M++}n.directional[_]=q,_++}else if(L.isSpotLight){const q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(P).multiplyScalar(I*T),q.distance=K,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[f]=q;const $=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,$.updateMatrices(L),L.castShadow&&B++),n.spotLightMatrix[f]=$.matrix,L.castShadow){const J=i.get(L);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.spotShadow[f]=J,n.spotShadowMap[f]=G,w++}f++}else if(L.isRectAreaLight){const q=t.get(L);q.color.copy(P).multiplyScalar(I),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=q,v++}else if(L.isPointLight){const q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*T),q.distance=L.distance,q.decay=L.decay,L.castShadow){const $=L.shadow,J=i.get(L);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=L.shadow.matrix,R++}n.point[p]=q,p++}else if(L.isHemisphereLight){const q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(I*T),q.groundColor.copy(L.groundColor).multiplyScalar(I*T),n.hemi[x]=q,x++}}v>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=g;const F=n.hash;(F.directionalLength!==_||F.pointLength!==p||F.spotLength!==f||F.rectAreaLength!==v||F.hemiLength!==x||F.numDirectionalShadows!==M||F.numPointShadows!==R||F.numSpotShadows!==w||F.numSpotMaps!==C||F.numLightProbes!==S)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=v,n.point.length=p,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=w+C-B,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=S,F.directionalLength=_,F.pointLength=p,F.spotLength=f,F.rectAreaLength=v,F.hemiLength=x,F.numDirectionalShadows=M,F.numPointShadows=R,F.numSpotShadows=w,F.numSpotMaps=C,F.numLightProbes=S,n.version=Lm++)}function c(h,d){let u=0,m=0,g=0,_=0,p=0;const f=d.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const M=h[v];if(M.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),u++}else if(M.isSpotLight){const R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const R=n.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(M.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const R=n.hemi[p];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:n}}function hl(r,e){const t=new Im(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(d){i.push(d)}function a(d){n.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dm(r,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new hl(r,e),t.set(s,[l])):o>=a.length?(l=new hl(r,e),a.push(l)):l=a[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Um extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bm(r,e,t){let i=new Io;const n=new Ae,s=new Ae,o=new rt,a=new Um({depthPacking:Ph}),l=new Nm,c={},h=t.maxTextureSize,d={[Yi]:Ot,[Ot]:Yi,[Ft]:Ft},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Fm,fragmentShader:Om}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let f=this.type;this.render=function(w,C,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ii),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=f!==Ri&&this.type===Ri,L=f===Ri&&this.type!==Ri;for(let P=0,I=w.length;P<I;P++){const K=w[P],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;n.copy(G.mapSize);const q=G.getFrameExtents();if(n.multiply(q),s.copy(G.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/q.x),n.x=s.x*q.x,G.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/q.y),n.y=s.y*q.y,G.mapSize.y=s.y)),G.map===null||N===!0||L===!0){const J=this.type!==Ri?{minFilter:Nt,magFilter:Nt}:{};G.map!==null&&G.map.dispose(),G.map=new di(n.x,n.y,J),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const $=G.getViewportCount();for(let J=0;J<$;J++){const j=G.getViewport(J);o.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),z.viewport(o),G.updateMatrices(K,J),i=G.getFrustum(),M(C,B,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Ri&&v(G,B),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(S,T,F)};function v(w,C){const B=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new di(n.x,n.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,B,u,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,B,m,_,null)}function x(w,C,B,S){let T=null;const F=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)T=F;else if(T=B.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=T.uuid,N=C.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let P=L[N];P===void 0&&(P=T.clone(),L[N]=P,C.addEventListener("dispose",R)),T=P}if(T.visible=C.visible,T.wireframe=C.wireframe,S===Ri?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,B.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=r.properties.get(T);z.light=B}return T}function M(w,C,B,S,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Ri)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const N=e.update(w),L=w.material;if(Array.isArray(L)){const P=N.groups;for(let I=0,K=P.length;I<K;I++){const G=P[I],q=L[G.materialIndex];if(q&&q.visible){const $=x(w,q,S,T);w.onBeforeShadow(r,w,C,B,N,$,G),r.renderBufferDirect(B,null,N,$,w,G),w.onAfterShadow(r,w,C,B,N,$,G)}}}else if(L.visible){const P=x(w,L,S,T);w.onBeforeShadow(r,w,C,B,N,P,null),r.renderBufferDirect(B,null,N,P,w,null),w.onAfterShadow(r,w,C,B,N,P,null)}}const z=w.children;for(let N=0,L=z.length;N<L;N++)M(z[N],C,B,S,T)}function R(w){w.target.removeEventListener("dispose",R);for(const B in c){const S=c[B],T=w.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function zm(r,e,t){const i=t.isWebGL2;function n(){let D=!1;const re=new rt;let oe=null;const we=new rt(0,0,0,0);return{setMask:function(Me){oe!==Me&&!D&&(r.colorMask(Me,Me,Me,Me),oe=Me)},setLocked:function(Me){D=Me},setClear:function(Me,Ze,Je,xt,Pt){Pt===!0&&(Me*=xt,Ze*=xt,Je*=xt),re.set(Me,Ze,Je,xt),we.equals(re)===!1&&(r.clearColor(Me,Ze,Je,xt),we.copy(re))},reset:function(){D=!1,oe=null,we.set(-1,0,0,0)}}}function s(){let D=!1,re=null,oe=null,we=null;return{setTest:function(Me){Me?Ue(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(Me){re!==Me&&!D&&(r.depthMask(Me),re=Me)},setFunc:function(Me){if(oe!==Me){switch(Me){case ah:r.depthFunc(r.NEVER);break;case lh:r.depthFunc(r.ALWAYS);break;case ch:r.depthFunc(r.LESS);break;case or:r.depthFunc(r.LEQUAL);break;case hh:r.depthFunc(r.EQUAL);break;case uh:r.depthFunc(r.GEQUAL);break;case dh:r.depthFunc(r.GREATER);break;case fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=Me}},setLocked:function(Me){D=Me},setClear:function(Me){we!==Me&&(r.clearDepth(Me),we=Me)},reset:function(){D=!1,re=null,oe=null,we=null}}}function o(){let D=!1,re=null,oe=null,we=null,Me=null,Ze=null,Je=null,xt=null,Pt=null;return{setTest:function(Qe){D||(Qe?Ue(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!D&&(r.stencilMask(Qe),re=Qe)},setFunc:function(Qe,It,fi){(oe!==Qe||we!==It||Me!==fi)&&(r.stencilFunc(Qe,It,fi),oe=Qe,we=It,Me=fi)},setOp:function(Qe,It,fi){(Ze!==Qe||Je!==It||xt!==fi)&&(r.stencilOp(Qe,It,fi),Ze=Qe,Je=It,xt=fi)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Pt!==Qe&&(r.clearStencil(Qe),Pt=Qe)},reset:function(){D=!1,re=null,oe=null,we=null,Me=null,Ze=null,Je=null,xt=null,Pt=null}}}const a=new n,l=new s,c=new o,h=new WeakMap,d=new WeakMap;let u={},m={},g=new WeakMap,_=[],p=null,f=!1,v=null,x=null,M=null,R=null,w=null,C=null,B=null,S=new Re(0,0,0),T=0,F=!1,z=null,N=null,L=null,P=null,I=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,q=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),G=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=q>=2);let J=null,j={};const Y=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),ae=new rt().fromArray(Y),pe=new rt().fromArray(Z);function me(D,re,oe,we){const Me=new Uint8Array(4),Ze=r.createTexture();r.bindTexture(D,Ze),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<oe;Je++)i&&(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)?r.texImage3D(re,0,r.RGBA,1,1,we,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(re+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return Ze}const Ie={};Ie[r.TEXTURE_2D]=me(r.TEXTURE_2D,r.TEXTURE_2D,1),Ie[r.TEXTURE_CUBE_MAP]=me(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[r.TEXTURE_2D_ARRAY]=me(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ie[r.TEXTURE_3D]=me(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(r.DEPTH_TEST),l.setFunc(or),Oe(!1),A(Xo),Ue(r.CULL_FACE),ge(Ii);function Ue(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function Te(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function qe(D,re){return m[D]!==re?(r.bindFramebuffer(D,re),m[D]=re,i&&(D===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=re),D===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=re)),!0):!1}function H(D,re){let oe=_,we=!1;if(D)if(oe=g.get(re),oe===void 0&&(oe=[],g.set(re,oe)),D.isWebGLMultipleRenderTargets){const Me=D.texture;if(oe.length!==Me.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Ze=0,Je=Me.length;Ze<Je;Ze++)oe[Ze]=r.COLOR_ATTACHMENT0+Ze;oe.length=Me.length,we=!0}}else oe[0]!==r.COLOR_ATTACHMENT0&&(oe[0]=r.COLOR_ATTACHMENT0,we=!0);else oe[0]!==r.BACK&&(oe[0]=r.BACK,we=!0);we&&(t.isWebGL2?r.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function Lt(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const ye={[rn]:r.FUNC_ADD,[Xc]:r.FUNC_SUBTRACT,[Yc]:r.FUNC_REVERSE_SUBTRACT};if(i)ye[Ko]=r.MIN,ye[$o]=r.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ye[Ko]=D.MIN_EXT,ye[$o]=D.MAX_EXT)}const Le={[jc]:r.ZERO,[Kc]:r.ONE,[$c]:r.SRC_COLOR,[go]:r.SRC_ALPHA,[ih]:r.SRC_ALPHA_SATURATE,[eh]:r.DST_COLOR,[Jc]:r.DST_ALPHA,[Zc]:r.ONE_MINUS_SRC_COLOR,[_o]:r.ONE_MINUS_SRC_ALPHA,[th]:r.ONE_MINUS_DST_COLOR,[Qc]:r.ONE_MINUS_DST_ALPHA,[nh]:r.CONSTANT_COLOR,[sh]:r.ONE_MINUS_CONSTANT_COLOR,[rh]:r.CONSTANT_ALPHA,[oh]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(D,re,oe,we,Me,Ze,Je,xt,Pt,Qe){if(D===Ii){f===!0&&(Te(r.BLEND),f=!1);return}if(f===!1&&(Ue(r.BLEND),f=!0),D!==qc){if(D!==v||Qe!==F){if((x!==rn||w!==rn)&&(r.blendEquation(r.FUNC_ADD),x=rn,w=rn),Qe)switch(D){case zn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rr:r.blendFunc(r.ONE,r.ONE);break;case Yo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jo:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case zn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jo:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,R=null,C=null,B=null,S.set(0,0,0),T=0,v=D,F=Qe}return}Me=Me||re,Ze=Ze||oe,Je=Je||we,(re!==x||Me!==w)&&(r.blendEquationSeparate(ye[re],ye[Me]),x=re,w=Me),(oe!==M||we!==R||Ze!==C||Je!==B)&&(r.blendFuncSeparate(Le[oe],Le[we],Le[Ze],Le[Je]),M=oe,R=we,C=Ze,B=Je),(xt.equals(S)===!1||Pt!==T)&&(r.blendColor(xt.r,xt.g,xt.b,Pt),S.copy(xt),T=Pt),v=D,F=!1}function ot(D,re){D.side===Ft?Te(r.CULL_FACE):Ue(r.CULL_FACE);let oe=D.side===Ot;re&&(oe=!oe),Oe(oe),D.blending===zn&&D.transparent===!1?ge(Ii):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),k(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){z!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),z=D)}function A(D){D!==kc?(Ue(r.CULL_FACE),D!==N&&(D===Xo?r.cullFace(r.BACK):D===Wc?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),N=D}function E(D){D!==L&&(G&&r.lineWidth(D),L=D)}function k(D,re,oe){D?(Ue(r.POLYGON_OFFSET_FILL),(P!==re||I!==oe)&&(r.polygonOffset(re,oe),P=re,I=oe)):Te(r.POLYGON_OFFSET_FILL)}function te(D){D?Ue(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function ee(D){D===void 0&&(D=r.TEXTURE0+K-1),J!==D&&(r.activeTexture(D),J=D)}function ie(D,re,oe){oe===void 0&&(J===null?oe=r.TEXTURE0+K-1:oe=J);let we=j[oe];we===void 0&&(we={type:void 0,texture:void 0},j[oe]=we),(we.type!==D||we.texture!==re)&&(J!==oe&&(r.activeTexture(oe),J=oe),r.bindTexture(D,re||Ie[D]),we.type=D,we.texture=re)}function _e(){const D=j[J];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(D){ae.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ae.copy(D))}function Ye(D){pe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function lt(D,re){let oe=d.get(re);oe===void 0&&(oe=new WeakMap,d.set(re,oe));let we=oe.get(D);we===void 0&&(we=r.getUniformBlockIndex(re,D.name),oe.set(D,we))}function Ge(D,re){const we=d.get(re).get(D);h.get(re)!==we&&(r.uniformBlockBinding(re,we,D.__bindingPointIndex),h.set(re,we))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},J=null,j={},m={},g=new WeakMap,_=[],p=null,f=!1,v=null,x=null,M=null,R=null,w=null,C=null,B=null,S=new Re(0,0,0),T=0,F=!1,z=null,N=null,L=null,P=null,I=null,ae.set(0,0,r.canvas.width,r.canvas.height),pe.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Te,bindFramebuffer:qe,drawBuffers:H,useProgram:Lt,setBlending:ge,setMaterial:ot,setFlipSided:Oe,setCullFace:A,setLineWidth:E,setPolygonOffset:k,setScissorTest:te,activeTexture:ee,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:de,texImage2D:xe,texImage3D:fe,updateUBOMapping:lt,uniformBlockBinding:Ge,texStorage2D:ke,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:Be,compressedTexSubImage2D:Q,compressedTexSubImage3D:je,scissor:Ne,viewport:Ye,reset:ne}}function Gm(r,e,t,i,n,s,o){const a=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return m?new OffscreenCanvas(A,E):dr("canvas")}function _(A,E,k,te){let ee=1;if((A.width>te||A.height>te)&&(ee=te/Math.max(A.width,A.height)),ee<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=E?So:Math.floor,_e=ie(ee*A.width),ce=ie(ee*A.height);d===void 0&&(d=g(_e,ce));const de=k?g(_e,ce):d;return de.width=_e,de.height=ce,de.getContext("2d").drawImage(A,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_e+"x"+ce+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function p(A){return ba(A.width)&&ba(A.height)}function f(A){return a?!1:A.wrapS!==ci||A.wrapT!==ci||A.minFilter!==Nt&&A.minFilter!==ti}function v(A,E){return A.generateMipmaps&&E&&A.minFilter!==Nt&&A.minFilter!==ti}function x(A){r.generateMipmap(A)}function M(A,E,k,te,ee=!1){if(a===!1)return E;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=E;if(E===r.RED&&(k===r.FLOAT&&(ie=r.R32F),k===r.HALF_FLOAT&&(ie=r.R16F),k===r.UNSIGNED_BYTE&&(ie=r.R8)),E===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(ie=r.R8UI),k===r.UNSIGNED_SHORT&&(ie=r.R16UI),k===r.UNSIGNED_INT&&(ie=r.R32UI),k===r.BYTE&&(ie=r.R8I),k===r.SHORT&&(ie=r.R16I),k===r.INT&&(ie=r.R32I)),E===r.RG&&(k===r.FLOAT&&(ie=r.RG32F),k===r.HALF_FLOAT&&(ie=r.RG16F),k===r.UNSIGNED_BYTE&&(ie=r.RG8)),E===r.RGBA){const _e=ee?ar:Ke.getTransfer(te);k===r.FLOAT&&(ie=r.RGBA32F),k===r.HALF_FLOAT&&(ie=r.RGBA16F),k===r.UNSIGNED_BYTE&&(ie=_e===it?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(A,E,k){return v(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Nt&&A.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function w(A){return A===Nt||A===Zo||A===Ar?r.NEAREST:r.LINEAR}function C(A){const E=A.target;E.removeEventListener("dispose",C),S(E),E.isVideoTexture&&h.delete(E)}function B(A){const E=A.target;E.removeEventListener("dispose",B),F(E)}function S(A){const E=i.get(A);if(E.__webglInit===void 0)return;const k=A.source,te=u.get(k);if(te){const ee=te[E.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(A),Object.keys(te).length===0&&u.delete(k)}i.remove(A)}function T(A){const E=i.get(A);r.deleteTexture(E.__webglTexture);const k=A.source,te=u.get(k);delete te[E.__cacheKey],o.memory.textures--}function F(A){const E=A.texture,k=i.get(A),te=i.get(E);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let ie=0;ie<k.__webglFramebuffer[ee].length;ie++)r.deleteFramebuffer(k.__webglFramebuffer[ee][ie]);else r.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)r.deleteFramebuffer(k.__webglFramebuffer[ee]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ee=0,ie=E.length;ee<ie;ee++){const _e=i.get(E[ee]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(E[ee])}i.remove(E),i.remove(A)}let z=0;function N(){z=0}function L(){const A=z;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),z+=1,A}function P(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function I(A,E){const k=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,A,E);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+E)}function K(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+E)}function G(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,E);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+E)}function q(A,E){const k=i.get(A);if(A.version>0&&k.__version!==A.version){pe(k,A,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+E)}const $={[ps]:r.REPEAT,[ci]:r.CLAMP_TO_EDGE,[yo]:r.MIRRORED_REPEAT},J={[Nt]:r.NEAREST,[Zo]:r.NEAREST_MIPMAP_NEAREST,[Ar]:r.NEAREST_MIPMAP_LINEAR,[ti]:r.LINEAR,[Mh]:r.LINEAR_MIPMAP_NEAREST,[ms]:r.LINEAR_MIPMAP_LINEAR},j={[Dh]:r.NEVER,[zh]:r.ALWAYS,[Uh]:r.LESS,[nc]:r.LEQUAL,[Nh]:r.EQUAL,[Bh]:r.GEQUAL,[Fh]:r.GREATER,[Oh]:r.NOTEQUAL};function Y(A,E,k){if(k?(r.texParameteri(A,r.TEXTURE_WRAP_S,$[E.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,$[E.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,$[E.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,J[E.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,J[E.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(E.wrapS!==ci||E.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,w(E.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Nt&&E.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,j[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Nt||E.minFilter!==Ar&&E.minFilter!==ms||E.type===Wi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Di&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(r.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,n.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Z(A,E){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",C));const te=E.source;let ee=u.get(te);ee===void 0&&(ee={},u.set(te,ee));const ie=P(E);if(ie!==A.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[ie].usedTimes++;const _e=ee[A.__cacheKey];_e!==void 0&&(ee[A.__cacheKey].usedTimes--,_e.usedTimes===0&&T(E)),A.__cacheKey=ie,A.__webglTexture=ee[ie].texture}return k}function ae(A,E,k){let te=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=r.TEXTURE_3D);const ee=Z(A,E),ie=E.source;t.bindTexture(te,A.__webglTexture,r.TEXTURE0+k);const _e=i.get(ie);if(ie.version!==_e.__version||ee===!0){t.activeTexture(r.TEXTURE0+k);const ce=Ke.getPrimaries(Ke.workingColorSpace),de=E.colorSpace===ii?null:Ke.getPrimaries(E.colorSpace),Ee=E.colorSpace===ii||ce===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Be=f(E)&&p(E.image)===!1;let Q=_(E.image,Be,!1,n.maxTextureSize);Q=Oe(E,Q);const je=p(Q)||a,ke=s.convert(E.format,E.colorSpace);let Ce=s.convert(E.type),xe=M(E.internalFormat,ke,Ce,E.colorSpace,E.isVideoTexture);Y(te,E,je);let fe;const Ne=E.mipmaps,Ye=a&&E.isVideoTexture!==!0&&xe!==ec,lt=_e.__version===void 0||ee===!0,Ge=R(E,Q,je);if(E.isDepthTexture)xe=r.DEPTH_COMPONENT,a?E.type===Wi?xe=r.DEPTH_COMPONENT32F:E.type===ki?xe=r.DEPTH_COMPONENT24:E.type===hn?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:E.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===un&&xe===r.DEPTH_COMPONENT&&E.type!==Ro&&E.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ki,Ce=s.convert(E.type)),E.format===kn&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,E.type!==hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=hn,Ce=s.convert(E.type))),lt&&(Ye?t.texStorage2D(r.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,ke,Ce,null));else if(E.isDataTexture)if(Ne.length>0&&je){Ye&&lt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Ne[0].width,Ne[0].height);for(let ne=0,D=Ne.length;ne<D;ne++)fe=Ne[ne],Ye?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,fe.width,fe.height,ke,Ce,fe.data):t.texImage2D(r.TEXTURE_2D,ne,xe,fe.width,fe.height,0,ke,Ce,fe.data);E.generateMipmaps=!1}else Ye?(lt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,ke,Ce,Q.data)):t.texImage2D(r.TEXTURE_2D,0,xe,Q.width,Q.height,0,ke,Ce,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ye&&lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,xe,Ne[0].width,Ne[0].height,Q.depth);for(let ne=0,D=Ne.length;ne<D;ne++)fe=Ne[ne],E.format!==hi?ke!==null?Ye?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,Q.depth,ke,fe.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,xe,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,Q.depth,ke,Ce,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,xe,fe.width,fe.height,Q.depth,0,ke,Ce,fe.data)}else{Ye&&lt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Ne[0].width,Ne[0].height);for(let ne=0,D=Ne.length;ne<D;ne++)fe=Ne[ne],E.format!==hi?ke!==null?Ye?t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,fe.width,fe.height,ke,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,xe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,fe.width,fe.height,ke,Ce,fe.data):t.texImage2D(r.TEXTURE_2D,ne,xe,fe.width,fe.height,0,ke,Ce,fe.data)}else if(E.isDataArrayTexture)Ye?(lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ge,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ke,Ce,Q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,ke,Ce,Q.data);else if(E.isData3DTexture)Ye?(lt&&t.texStorage3D(r.TEXTURE_3D,Ge,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ke,Ce,Q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,ke,Ce,Q.data);else if(E.isFramebufferTexture){if(lt)if(Ye)t.texStorage2D(r.TEXTURE_2D,Ge,xe,Q.width,Q.height);else{let ne=Q.width,D=Q.height;for(let re=0;re<Ge;re++)t.texImage2D(r.TEXTURE_2D,re,xe,ne,D,0,ke,Ce,null),ne>>=1,D>>=1}}else if(Ne.length>0&&je){Ye&&lt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Ne[0].width,Ne[0].height);for(let ne=0,D=Ne.length;ne<D;ne++)fe=Ne[ne],Ye?t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ke,Ce,fe):t.texImage2D(r.TEXTURE_2D,ne,xe,ke,Ce,fe);E.generateMipmaps=!1}else Ye?(lt&&t.texStorage2D(r.TEXTURE_2D,Ge,xe,Q.width,Q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Ce,Q)):t.texImage2D(r.TEXTURE_2D,0,xe,ke,Ce,Q);v(E,je)&&x(te),_e.__version=ie.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function pe(A,E,k){if(E.image.length!==6)return;const te=Z(A,E),ee=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);const ie=i.get(ee);if(ee.version!==ie.__version||te===!0){t.activeTexture(r.TEXTURE0+k);const _e=Ke.getPrimaries(Ke.workingColorSpace),ce=E.colorSpace===ii?null:Ke.getPrimaries(E.colorSpace),de=E.colorSpace===ii||_e===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!Ee&&!Be?Q[ne]=_(E.image[ne],!1,!0,n.maxCubemapSize):Q[ne]=Be?E.image[ne].image:E.image[ne],Q[ne]=Oe(E,Q[ne]);const je=Q[0],ke=p(je)||a,Ce=s.convert(E.format,E.colorSpace),xe=s.convert(E.type),fe=M(E.internalFormat,Ce,xe,E.colorSpace),Ne=a&&E.isVideoTexture!==!0,Ye=ie.__version===void 0||te===!0;let lt=R(E,je,ke);Y(r.TEXTURE_CUBE_MAP,E,ke);let Ge;if(Ee){Ne&&Ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,fe,je.width,je.height);for(let ne=0;ne<6;ne++){Ge=Q[ne].mipmaps;for(let D=0;D<Ge.length;D++){const re=Ge[D];E.format!==hi?Ce!==null?Ne?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,0,0,re.width,re.height,Ce,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,fe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,0,0,re.width,re.height,Ce,xe,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D,fe,re.width,re.height,0,Ce,xe,re.data)}}}else{Ge=E.mipmaps,Ne&&Ye&&(Ge.length>0&&lt++,t.texStorage2D(r.TEXTURE_CUBE_MAP,lt,fe,Q[0].width,Q[0].height));for(let ne=0;ne<6;ne++)if(Be){Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Q[ne].width,Q[ne].height,Ce,xe,Q[ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Q[ne].width,Q[ne].height,0,Ce,xe,Q[ne].data);for(let D=0;D<Ge.length;D++){const oe=Ge[D].image[ne].image;Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,0,0,oe.width,oe.height,Ce,xe,oe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,fe,oe.width,oe.height,0,Ce,xe,oe.data)}}else{Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,xe,Q[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,fe,Ce,xe,Q[ne]);for(let D=0;D<Ge.length;D++){const re=Ge[D];Ne?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,0,0,Ce,xe,re.image[ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,D+1,fe,Ce,xe,re.image[ne])}}}v(E,ke)&&x(r.TEXTURE_CUBE_MAP),ie.__version=ee.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function me(A,E,k,te,ee,ie){const _e=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),de=M(k.internalFormat,_e,ce,k.colorSpace);if(!i.get(E).__hasExternalTextures){const Be=Math.max(1,E.width>>ie),Q=Math.max(1,E.height>>ie);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,de,Be,Q,E.depth,0,_e,ce,null):t.texImage2D(ee,ie,de,Be,Q,0,_e,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,ee,i.get(k).__webglTexture,0,Le(E)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,te,ee,i.get(k).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(A,E,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let te=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(k||ge(E)){const ee=E.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Wi?te=r.DEPTH_COMPONENT32F:ee.type===ki&&(te=r.DEPTH_COMPONENT24));const ie=Le(E);ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,te,E.width,E.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,te,E.width,E.height)}else r.renderbufferStorage(r.RENDERBUFFER,te,E.width,E.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const te=Le(E);k&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,r.DEPTH24_STENCIL8,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ee=0;ee<te.length;ee++){const ie=te[ee],_e=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),de=M(ie.internalFormat,_e,ce,ie.colorSpace),Ee=Le(E);k&&ge(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,de,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ee,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ue(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),I(E.depthTexture,0);const te=i.get(E.depthTexture).__webglTexture,ee=Le(E);if(E.depthTexture.format===un)ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(E.depthTexture.format===kn)ge(E)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,ee):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(A){const E=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,A)}else if(k){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=r.createRenderbuffer(),Ie(E.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ie(E.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(A,E,k){const te=i.get(A);E!==void 0&&me(te.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Te(A)}function H(A){const E=A.texture,k=i.get(A),te=i.get(E);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=E.version,o.memory.textures++);const ee=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,_e=p(A)||a;if(ee){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let de=0;de<E.mipmaps.length;de++)k.__webglFramebuffer[ce][de]=r.createFramebuffer()}else k.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)k.__webglFramebuffer[ce]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ie)if(n.drawBuffers){const ce=A.texture;for(let de=0,Ee=ce.length;de<Ee;de++){const Be=i.get(ce[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ge(A)===!1){const ce=ie?E:[E];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const Ee=ce[de];k.__webglColorRenderbuffer[de]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[de]);const Be=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),je=M(Ee.internalFormat,Be,Q,Ee.colorSpace,A.isXRRenderTarget===!0),ke=Le(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,je,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,k.__webglColorRenderbuffer[de])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ee){t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),Y(r.TEXTURE_CUBE_MAP,E,_e);for(let ce=0;ce<6;ce++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)me(k.__webglFramebuffer[ce][de],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else me(k.__webglFramebuffer[ce],A,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(E,_e)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ce=A.texture;for(let de=0,Ee=ce.length;de<Ee;de++){const Be=ce[de],Q=i.get(Be);t.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Y(r.TEXTURE_2D,Be,_e),me(k.__webglFramebuffer,A,Be,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,0),v(Be,_e)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ce=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,te.__webglTexture),Y(ce,E,_e),a&&E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)me(k.__webglFramebuffer[de],A,E,r.COLOR_ATTACHMENT0,ce,de);else me(k.__webglFramebuffer,A,E,r.COLOR_ATTACHMENT0,ce,0);v(E,_e)&&x(ce),t.unbindTexture()}A.depthBuffer&&Te(A)}function Lt(A){const E=p(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ee=k.length;te<ee;te++){const ie=k[te];if(v(ie,E)){const _e=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ce=i.get(ie).__webglTexture;t.bindTexture(_e,ce),x(_e),t.unbindTexture()}}}function ye(A){if(a&&A.samples>0&&ge(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,te=A.height;let ee=r.COLOR_BUFFER_BIT;const ie=[],_e=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=i.get(A),de=A.isWebGLMultipleRenderTargets===!0;if(de)for(let Ee=0;Ee<E.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Ee=0;Ee<E.length;Ee++){ie.push(r.COLOR_ATTACHMENT0+Ee),A.depthBuffer&&ie.push(_e);const Be=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Be===!1&&(A.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),de&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]),Be===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[_e]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_e])),de){const Q=i.get(E[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,k,te,0,0,k,te,ee,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<E.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,ce.__webglColorRenderbuffer[Ee]);const Be=i.get(E[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,Be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Le(A){return Math.min(n.maxSamples,A.samples)}function ge(A){const E=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(A){const E=o.render.frame;h.get(A)!==E&&(h.set(A,E),A.update())}function Oe(A,E){const k=A.colorSpace,te=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Mo||k!==Ui&&k!==ii&&(Ke.getTransfer(k)===it?a===!1?e.has("EXT_sRGB")===!0&&te===hi?(A.format=Mo,A.minFilter=ti,A.generateMipmaps=!1):E=rc.sRGBToLinear(E):(te!==hi||ee!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=qe,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function Hm(r,e,t){const i=t.isWebGL2;function n(s,o=ii){let a;const l=Ke.getTransfer(o);if(s===Xi)return r.UNSIGNED_BYTE;if(s===Kl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===$l)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Sh)return r.BYTE;if(s===Eh)return r.SHORT;if(s===Ro)return r.UNSIGNED_SHORT;if(s===jl)return r.INT;if(s===ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Di)return i?r.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Th)return r.ALPHA;if(s===hi)return r.RGBA;if(s===wh)return r.LUMINANCE;if(s===bh)return r.LUMINANCE_ALPHA;if(s===un)return r.DEPTH_COMPONENT;if(s===kn)return r.DEPTH_STENCIL;if(s===Mo)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ah)return r.RED;if(s===Zl)return r.RED_INTEGER;if(s===Ch)return r.RG;if(s===Jl)return r.RG_INTEGER;if(s===Ql)return r.RGBA_INTEGER;if(s===Cr||s===Rr||s===Lr||s===Pr)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jo||s===Qo||s===ea||s===ta)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ea)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ta)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ec)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ia||s===na)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ia)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===na)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===_a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sa)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ra)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oa)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===aa)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===la)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ca)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ha)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ua)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===da)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fa)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pa)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ma)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ga)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_a)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ir||s===va||s===xa)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ir)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===va)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rh||s===ya||s===Ma||s===Sa)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ir)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ya)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ma)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sa)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hn?i?r.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class Vm extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ln extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const km={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(km)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Wm extends $n{constructor(e,t){super();const i=this;let n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const v=[],x=[],M=new Ae;let R=null;const w=new kt;w.layers.enable(1),w.viewport=new rt;const C=new kt;C.layers.enable(2),C.viewport=new rt;const B=[w,C],S=new Vm;S.layers.enable(1),S.layers.enable(2);let T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=v[Y];return Z===void 0&&(Z=new no,v[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=v[Y];return Z===void 0&&(Z=new no,v[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=v[Y];return Z===void 0&&(Z=new no,v[Y]=Z),Z.getHandSpace()};function z(Y){const Z=x.indexOf(Y.inputSource);if(Z===-1)return;const ae=v[Z];ae!==void 0&&(ae.update(Y.inputSource,Y.frame,c||o),ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",N),n.removeEventListener("inputsourceschange",L);for(let Y=0;Y<v.length;Y++){const Z=x[Y];Z!==null&&(x[Y]=null,v[Y].disconnect(Z))}T=null,F=null,e.setRenderTarget(p),m=null,u=null,d=null,n=null,f=null,j.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",N),n.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(n,t,Z),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new di(m.framebufferWidth,m.framebufferHeight,{format:hi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,ae=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?kn:un,ae=_.stencil?hn:ki);const me={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(me),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),f=new di(u.textureWidth,u.textureHeight,{format:hi,type:Xi,depthTexture:new mc(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ie=e.properties.get(f);Ie.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),j.setContext(n),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(Y){for(let Z=0;Z<Y.removed.length;Z++){const ae=Y.removed[Z],pe=x.indexOf(ae);pe>=0&&(x[pe]=null,v[pe].disconnect(ae))}for(let Z=0;Z<Y.added.length;Z++){const ae=Y.added[Z];let pe=x.indexOf(ae);if(pe===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=x.length){x.push(ae),pe=Ie;break}else if(x[Ie]===null){x[Ie]=ae,pe=Ie;break}if(pe===-1)break}const me=v[pe];me&&me.connect(ae)}}const P=new U,I=new U;function K(Y,Z,ae){P.setFromMatrixPosition(Z.matrixWorld),I.setFromMatrixPosition(ae.matrixWorld);const pe=P.distanceTo(I),me=Z.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,Ue=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),qe=(me[9]+1)/me[5],H=(me[9]-1)/me[5],Lt=(me[8]-1)/me[0],ye=(Ie[8]+1)/Ie[0],Le=Ue*Lt,ge=Ue*ye,ot=pe/(-Lt+ye),Oe=ot*-Lt;Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const A=Ue+ot,E=Te+ot,k=Le-Oe,te=ge+(pe-Oe),ee=qe*Te/E*A,ie=H*Te/E*A;Y.projectionMatrix.makePerspective(k,te,ee,ie,A,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function G(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;S.near=C.near=w.near=Y.near,S.far=C.far=w.far=Y.far,(T!==S.near||F!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,F=S.far);const Z=Y.parent,ae=S.cameras;G(S,Z);for(let pe=0;pe<ae.length;pe++)G(ae[pe],Z);ae.length===2?K(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),q(Y,S,Z)};function q(Y,Z,ae){ae===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ur*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)};let $=null;function J(Y,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const ae=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let pe=!1;ae.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let me=0;me<ae.length;me++){const Ie=ae[me];let Ue=null;if(m!==null)Ue=m.getViewport(Ie);else{const qe=d.getViewSubImage(u,Ie);Ue=qe.viewport,me===0&&(e.setRenderTargetTextures(f,qe.colorTexture,u.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(f))}let Te=B[me];Te===void 0&&(Te=new kt,Te.layers.enable(me),Te.viewport=new rt,B[me]=Te),Te.matrix.fromArray(Ie.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ie.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),me===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(Te)}}for(let ae=0;ae<v.length;ae++){const pe=x[ae],me=v[ae];pe!==null&&me!==void 0&&me.update(pe,Z,c||o)}$&&$(Y,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const j=new pc;j.setAnimationLoop(J),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}}function qm(r,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,uc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),h(p,f)):f.isMeshStandardMaterial?(s(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,v,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ot&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ot&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,v,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ot&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const v=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Xm(r,e,t,i){let n={},s={},o=[];const a=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function c(v,x){let M=n[v.id];M===void 0&&(g(v),M=h(v),n[v.id]=M,v.addEventListener("dispose",p));const R=x.program;i.updateUBOMapping(v,R);const w=e.render.frame;s[v.id]!==w&&(u(v),s[v.id]=w)}function h(v){const x=d();v.__bindingPointIndex=x;const M=r.createBuffer(),R=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const x=n[v.id],M=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,C=M.length;w<C;w++){const B=Array.isArray(M[w])?M[w]:[M[w]];for(let S=0,T=B.length;S<T;S++){const F=B[S];if(m(F,w,S,R)===!0){const z=F.__offset,N=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let P=0;P<N.length;P++){const I=N[P],K=_(I);typeof I=="number"||typeof I=="boolean"?(F.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,z+L,F.__data)):I.isMatrix3?(F.__data[0]=I.elements[0],F.__data[1]=I.elements[1],F.__data[2]=I.elements[2],F.__data[3]=0,F.__data[4]=I.elements[3],F.__data[5]=I.elements[4],F.__data[6]=I.elements[5],F.__data[7]=0,F.__data[8]=I.elements[6],F.__data[9]=I.elements[7],F.__data[10]=I.elements[8],F.__data[11]=0):(I.toArray(F.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(v,x,M,R){const w=v.value,C=x+"_"+M;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const B=R[C];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return R[C]=w,!0}else if(B.equals(w)===!1)return B.copy(w),!0}return!1}function g(v){const x=v.uniforms;let M=0;const R=16;for(let C=0,B=x.length;C<B;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,F=S.length;T<F;T++){const z=S[T],N=Array.isArray(z.value)?z.value:[z.value];for(let L=0,P=N.length;L<P;L++){const I=N[L],K=_(I),G=M%R;G!==0&&R-G<K.boundary&&(M+=R-G),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=K.storage}}}const w=M%R;return w>0&&(M+=R-w),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function f(){for(const v in n)r.deleteBuffer(n[v]);o=[],n={},s={}}return{bind:l,update:c,dispose:f}}class Mc{constructor(e={}){const{canvas:t=Vh(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const x=this;let M=!1,R=0,w=0,C=null,B=-1,S=null;const T=new rt,F=new rt;let z=null;const N=new Re(0);let L=0,P=t.width,I=t.height,K=1,G=null,q=null;const $=new rt(0,0,P,I),J=new rt(0,0,P,I);let j=!1;const Y=new Io;let Z=!1,ae=!1,pe=null;const me=new st,Ie=new Ae,Ue=new U,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return C===null?K:1}let H=i;function Lt(b,O){for(let W=0;W<b.length;W++){const X=b[W],V=t.getContext(X,O);if(V!==null)return V}return null}try{const b={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Co}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",re,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),H=Lt(O,b),H===null)throw Lt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ye,Le,ge,ot,Oe,A,E,k,te,ee,ie,_e,ce,de,Ee,Be,Q,je,ke,Ce,xe,fe,Ne,Ye;function lt(){ye=new ip(H),Le=new $f(H,ye,e),ye.init(Le),fe=new Hm(H,ye,Le),ge=new zm(H,ye,Le),ot=new rp(H),Oe=new wm,A=new Gm(H,ye,ge,Oe,Le,fe,ot),E=new Jf(x),k=new tp(x),te=new du(H,Le),Ne=new jf(H,ye,te,Le),ee=new np(H,te,ot,Ne),ie=new cp(H,ee,te,ot),ke=new lp(H,Le,A),Be=new Zf(Oe),_e=new Tm(x,E,k,ye,Le,Ne,Be),ce=new qm(x,Oe),de=new Am,Ee=new Dm(ye,Le),je=new Yf(x,E,k,ge,ie,u,l),Q=new Bm(x,ie,Le),Ye=new Xm(H,ot,Le,ge),Ce=new Kf(H,ye,ot,Le),xe=new sp(H,ye,ot,Le),ot.programs=_e.programs,x.capabilities=Le,x.extensions=ye,x.properties=Oe,x.renderLists=de,x.shadowMap=Q,x.state=ge,x.info=ot}lt();const Ge=new Wm(x,H);this.xr=Ge,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=ye.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ye.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(P,I,!1))},this.getSize=function(b){return b.set(P,I)},this.setSize=function(b,O,W=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=b,I=O,t.width=Math.floor(b*K),t.height=Math.floor(O*K),W===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(P*K,I*K).floor()},this.setDrawingBufferSize=function(b,O,W){P=b,I=O,K=W,t.width=Math.floor(b*W),t.height=Math.floor(O*W),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,O,W,X){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,O,W,X),ge.viewport(T.copy($).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,O,W,X){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,W,X),ge.scissor(F.copy(J).multiplyScalar(K).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(b){ge.setScissorTest(j=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(b=!0,O=!0,W=!0){let X=0;if(b){let V=!1;if(C!==null){const he=C.texture.format;V=he===Ql||he===Jl||he===Zl}if(V){const he=C.texture.type,ve=he===Xi||he===ki||he===Ro||he===hn||he===Kl||he===$l,Se=je.getClearColor(),be=je.getClearAlpha(),ze=Se.r,Pe=Se.g,De=Se.b;ve?(m[0]=ze,m[1]=Pe,m[2]=De,m[3]=be,H.clearBufferuiv(H.COLOR,0,m)):(g[0]=ze,g[1]=Pe,g[2]=De,g[3]=be,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}O&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",re,!1),de.dispose(),Ee.dispose(),Oe.dispose(),E.dispose(),k.dispose(),ie.dispose(),Ne.dispose(),Ye.dispose(),_e.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Pt),Ge.removeEventListener("sessionend",Qe),pe&&(pe.dispose(),pe=null),It.stop()};function ne(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=ot.autoReset,O=Q.enabled,W=Q.autoUpdate,X=Q.needsUpdate,V=Q.type;lt(),ot.autoReset=b,Q.enabled=O,Q.autoUpdate=W,Q.needsUpdate=X,Q.type=V}function re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const O=b.target;O.removeEventListener("dispose",oe),we(O)}function we(b){Me(b),Oe.remove(b)}function Me(b){const O=Oe.get(b).programs;O!==void 0&&(O.forEach(function(W){_e.releaseProgram(W)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,W,X,V,he){O===null&&(O=Te);const ve=V.isMesh&&V.matrixWorld.determinant()<0,Se=zc(b,O,W,X,V);ge.setMaterial(X,ve);let be=W.index,ze=1;if(X.wireframe===!0){if(be=ee.getWireframeAttribute(W),be===void 0)return;ze=2}const Pe=W.drawRange,De=W.attributes.position;let ut=Pe.start*ze,qt=(Pe.start+Pe.count)*ze;he!==null&&(ut=Math.max(ut,he.start*ze),qt=Math.min(qt,(he.start+he.count)*ze)),be!==null?(ut=Math.max(ut,0),qt=Math.min(qt,be.count)):De!=null&&(ut=Math.max(ut,0),qt=Math.min(qt,De.count));const yt=qt-ut;if(yt<0||yt===1/0)return;Ne.setup(V,X,Se,W,be);let vi,at=Ce;if(be!==null&&(vi=te.get(be),at=xe,at.setIndex(vi)),V.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*qe()),at.setMode(H.LINES)):at.setMode(H.TRIANGLES);else if(V.isLine){let He=X.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*qe()),V.isLineSegments?at.setMode(H.LINES):V.isLineLoop?at.setMode(H.LINE_LOOP):at.setMode(H.LINE_STRIP)}else V.isPoints?at.setMode(H.POINTS):V.isSprite&&at.setMode(H.TRIANGLES);if(V.isBatchedMesh)at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)at.renderInstances(ut,yt,V.count);else if(W.isInstancedBufferGeometry){const He=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Er=Math.min(W.instanceCount,He);at.renderInstances(ut,yt,Er)}else at.render(ut,yt)};function Ze(b,O,W){b.transparent===!0&&b.side===Ft&&b.forceSinglePass===!1?(b.side=Ot,b.needsUpdate=!0,ws(b,O,W),b.side=Yi,b.needsUpdate=!0,ws(b,O,W),b.side=Ft):ws(b,O,W)}this.compile=function(b,O,W=null){W===null&&(W=b),p=Ee.get(W),p.init(),v.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const X=new Set;return b.traverse(function(V){const he=V.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const Se=he[ve];Ze(Se,W,V),X.add(Se)}else Ze(he,W,V),X.add(he)}),v.pop(),p=null,X},this.compileAsync=function(b,O,W=null){const X=this.compile(b,O,W);return new Promise(V=>{function he(){if(X.forEach(function(ve){Oe.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){V(b);return}setTimeout(he,10)}ye.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Je=null;function xt(b){Je&&Je(b)}function Pt(){It.stop()}function Qe(){It.start()}const It=new pc;It.setAnimationLoop(xt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(b){Je=b,Ge.setAnimationLoop(b),b===null?It.stop():It.start()},Ge.addEventListener("sessionstart",Pt),Ge.addEventListener("sessionend",Qe),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(O),O=Ge.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,C),p=Ee.get(b,v.length),p.init(),v.push(p),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(me),ae=this.localClippingEnabled,Z=Be.init(this.clippingPlanes,ae),_=de.get(b,f.length),_.init(),f.push(_),fi(b,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,q),this.info.render.frame++,Z===!0&&Be.beginShadows();const W=p.state.shadowsArray;if(Q.render(W,b,O),Z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,b),p.setupLights(x._useLegacyLights),O.isArrayCamera){const X=O.cameras;for(let V=0,he=X.length;V<he;V++){const ve=X[V];Go(_,b,ve,ve.viewport)}}else Go(_,b,O);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,O),Ne.resetDefaultState(),B=-1,S=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function fi(b,O,W,X){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){X&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(me);const ve=ie.update(b),Se=b.material;Se.visible&&_.push(b,ve,Se,W,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const ve=ie.update(b),Se=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(me)),Array.isArray(Se)){const be=ve.groups;for(let ze=0,Pe=be.length;ze<Pe;ze++){const De=be[ze],ut=Se[De.materialIndex];ut&&ut.visible&&_.push(b,ve,ut,W,Ue.z,De)}}else Se.visible&&_.push(b,ve,Se,W,Ue.z,null)}}const he=b.children;for(let ve=0,Se=he.length;ve<Se;ve++)fi(he[ve],O,W,X)}function Go(b,O,W,X){const V=b.opaque,he=b.transmissive,ve=b.transparent;p.setupLightsView(W),Z===!0&&Be.setGlobalState(x.clippingPlanes,W),he.length>0&&Bc(V,he,O,W),X&&ge.viewport(T.copy(X)),V.length>0&&Ts(V,O,W),he.length>0&&Ts(he,O,W),ve.length>0&&Ts(ve,O,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Bc(b,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const he=Le.isWebGL2;pe===null&&(pe=new di(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Di:Xi,minFilter:ms,samples:he?4:0})),x.getDrawingBufferSize(Ie),he?pe.setSize(Ie.x,Ie.y):pe.setSize(So(Ie.x),So(Ie.y));const ve=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(N),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=qi,Ts(b,W,X),A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe);let be=!1;for(let ze=0,Pe=O.length;ze<Pe;ze++){const De=O[ze],ut=De.object,qt=De.geometry,yt=De.material,vi=De.group;if(yt.side===Ft&&ut.layers.test(X.layers)){const at=yt.side;yt.side=Ot,yt.needsUpdate=!0,Ho(ut,W,X,qt,yt,vi),yt.side=at,yt.needsUpdate=!0,be=!0}}be===!0&&(A.updateMultisampleRenderTarget(pe),A.updateRenderTargetMipmap(pe)),x.setRenderTarget(ve),x.setClearColor(N,L),x.toneMapping=Se}function Ts(b,O,W){const X=O.isScene===!0?O.overrideMaterial:null;for(let V=0,he=b.length;V<he;V++){const ve=b[V],Se=ve.object,be=ve.geometry,ze=X===null?ve.material:X,Pe=ve.group;Se.layers.test(W.layers)&&Ho(Se,O,W,be,ze,Pe)}}function Ho(b,O,W,X,V,he){b.onBeforeRender(x,O,W,X,V,he),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(x,O,W,X,b,he),V.transparent===!0&&V.side===Ft&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,x.renderBufferDirect(W,O,X,V,b,he),V.side=Yi,V.needsUpdate=!0,x.renderBufferDirect(W,O,X,V,b,he),V.side=Ft):x.renderBufferDirect(W,O,X,V,b,he),b.onAfterRender(x,O,W,X,V,he)}function ws(b,O,W){O.isScene!==!0&&(O=Te);const X=Oe.get(b),V=p.state.lights,he=p.state.shadowsArray,ve=V.state.version,Se=_e.getParameters(b,V.state,he,O,W),be=_e.getProgramCacheKey(Se);let ze=X.programs;X.environment=b.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(b.isMeshStandardMaterial?k:E).get(b.envMap||X.environment),ze===void 0&&(b.addEventListener("dispose",oe),ze=new Map,X.programs=ze);let Pe=ze.get(be);if(Pe!==void 0){if(X.currentProgram===Pe&&X.lightsStateVersion===ve)return ko(b,Se),Pe}else Se.uniforms=_e.getUniforms(b),b.onBuild(W,Se,x),b.onBeforeCompile(Se,x),Pe=_e.acquireProgram(Se,be),ze.set(be,Pe),X.uniforms=Se.uniforms;const De=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=Be.uniform),ko(b,Se),X.needsLights=Hc(b),X.lightsStateVersion=ve,X.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Pe,X.uniformsList=null,Pe}function Vo(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=nr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function ko(b,O){const W=Oe.get(b);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function zc(b,O,W,X,V){O.isScene!==!0&&(O=Te),A.resetTextureUnits();const he=O.fog,ve=X.isMeshStandardMaterial?O.environment:null,Se=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ui,be=(X.isMeshStandardMaterial?k:E).get(X.envMap||ve),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,qt=!!W.morphAttributes.color;let yt=qi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=x.toneMapping);const vi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=vi!==void 0?vi.length:0,He=Oe.get(X),Er=p.state.lights;if(Z===!0&&(ae===!0||b!==S)){const Qt=b===S&&X.id===B;Be.setState(X,b,Qt)}let ct=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Er.state.version||He.outputColorSpace!==Se||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||He.envMap!==be||X.fog===!0&&He.fog!==he||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Be.numPlanes||He.numIntersection!==Be.numIntersection)||He.vertexAlphas!==ze||He.vertexTangents!==Pe||He.morphTargets!==De||He.morphNormals!==ut||He.morphColors!==qt||He.toneMapping!==yt||Le.isWebGL2===!0&&He.morphTargetsCount!==at)&&(ct=!0):(ct=!0,He.__version=X.version);let ji=He.currentProgram;ct===!0&&(ji=ws(X,O,V));let Wo=!1,Jn=!1,Tr=!1;const wt=ji.getUniforms(),Ki=He.uniforms;if(ge.useProgram(ji.program)&&(Wo=!0,Jn=!0,Tr=!0),X.id!==B&&(B=X.id,Jn=!0),Wo||S!==b){wt.setValue(H,"projectionMatrix",b.projectionMatrix),wt.setValue(H,"viewMatrix",b.matrixWorldInverse);const Qt=wt.map.cameraPosition;Qt!==void 0&&Qt.setValue(H,Ue.setFromMatrixPosition(b.matrixWorld)),Le.logarithmicDepthBuffer&&wt.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Jn=!0,Tr=!0)}if(V.isSkinnedMesh){wt.setOptional(H,V,"bindMatrix"),wt.setOptional(H,V,"bindMatrixInverse");const Qt=V.skeleton;Qt&&(Le.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),wt.setValue(H,"boneTexture",Qt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(wt.setOptional(H,V,"batchingTexture"),wt.setValue(H,"batchingTexture",V._matricesTexture,A));const wr=W.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0&&Le.isWebGL2===!0)&&ke.update(V,W,ji),(Jn||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,wt.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ki.envMap.value=be,Ki.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Jn&&(wt.setValue(H,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Gc(Ki,Tr),he&&X.fog===!0&&ce.refreshFogUniforms(Ki,he),ce.refreshMaterialUniforms(Ki,X,K,I,pe),nr.upload(H,Vo(He),Ki,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(nr.upload(H,Vo(He),Ki,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(H,"center",V.center),wt.setValue(H,"modelViewMatrix",V.modelViewMatrix),wt.setValue(H,"normalMatrix",V.normalMatrix),wt.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Qt=X.uniformsGroups;for(let br=0,Vc=Qt.length;br<Vc;br++)if(Le.isWebGL2){const qo=Qt[br];Ye.update(qo,ji),Ye.bind(qo,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function Gc(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Hc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,O,W){Oe.get(b.texture).__webglTexture=O,Oe.get(b.depthTexture).__webglTexture=W;const X=Oe.get(b);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){const W=Oe.get(b);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,W=0){C=b,R=O,w=W;let X=!0,V=null,he=!1,ve=!1;if(b){const be=Oe.get(b);be.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):be.__webglFramebuffer===void 0?A.setupRenderTarget(b):be.__hasExternalTextures&&A.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ve=!0);const Pe=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?V=Pe[O][W]:V=Pe[O],he=!0):Le.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?V=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?V=Pe[W]:V=Pe,T.copy(b.viewport),F.copy(b.scissor),z=b.scissorTest}else T.copy($).multiplyScalar(K).floor(),F.copy(J).multiplyScalar(K).floor(),z=j;if(ge.bindFramebuffer(H.FRAMEBUFFER,V)&&Le.drawBuffers&&X&&ge.drawBuffers(b,V),ge.viewport(T),ge.scissor(F),ge.setScissorTest(z),he){const be=Oe.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,W)}else if(ve){const be=Oe.get(b.texture),ze=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,be.__webglTexture,W||0,ze)}B=-1},this.readRenderTargetPixels=function(b,O,W,X,V,he,ve){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){ge.bindFramebuffer(H.FRAMEBUFFER,Se);try{const be=b.texture,ze=be.format,Pe=be.type;if(ze!==hi&&fe.convert(ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Di&&(ye.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Pe!==Xi&&fe.convert(Pe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===Wi&&(Le.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-X&&W>=0&&W<=b.height-V&&H.readPixels(O,W,X,V,fe.convert(ze),fe.convert(Pe),he)}finally{const be=C!==null?Oe.get(C).__webglFramebuffer:null;ge.bindFramebuffer(H.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(b,O,W=0){const X=Math.pow(2,-W),V=Math.floor(O.image.width*X),he=Math.floor(O.image.height*X);A.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,b.x,b.y,V,he),ge.unbindTexture()},this.copyTextureToTexture=function(b,O,W,X=0){const V=O.image.width,he=O.image.height,ve=fe.convert(W.format),Se=fe.convert(W.type);A.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,b.x,b.y,V,he,ve,Se,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,ve,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,b.x,b.y,ve,Se,O.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,O,W,X,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=b.max.x-b.min.x+1,ve=b.max.y-b.min.y+1,Se=b.max.z-b.min.z+1,be=fe.convert(X.format),ze=fe.convert(X.type);let Pe;if(X.isData3DTexture)A.setTexture3D(X,0),Pe=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)A.setTexture2DArray(X,0),Pe=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const De=H.getParameter(H.UNPACK_ROW_LENGTH),ut=H.getParameter(H.UNPACK_IMAGE_HEIGHT),qt=H.getParameter(H.UNPACK_SKIP_PIXELS),yt=H.getParameter(H.UNPACK_SKIP_ROWS),vi=H.getParameter(H.UNPACK_SKIP_IMAGES),at=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,at.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,b.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,b.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,b.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Pe,V,O.x,O.y,O.z,he,ve,Se,be,ze,at.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Pe,V,O.x,O.y,O.z,he,ve,Se,be,at.data)):H.texSubImage3D(Pe,V,O.x,O.y,O.z,he,ve,Se,be,ze,at),H.pixelStorei(H.UNPACK_ROW_LENGTH,De),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ut),H.pixelStorei(H.UNPACK_SKIP_PIXELS,qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,yt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,vi),V===0&&X.generateMipmaps&&H.generateMipmap(Pe),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Lo?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===_r?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?dn:tc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dn?Et:Ui}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ym extends Mc{}Ym.prototype.isWebGL1Renderer=!0;class No{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new No(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class jm extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class To extends Zt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dn=new st,ul=new st,js=[],dl=new pn,Km=new st,ss=new We,rs=new mn;class $m extends We{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new To(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Km)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dn),dl.copy(e.boundingBox).applyMatrix4(Dn),this.boundingBox.union(dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Dn),rs.copy(e.boundingSphere).applyMatrix4(Dn),this.boundingSphere.union(rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(i),e.ray.intersectsSphere(rs)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Dn),ul.multiplyMatrices(i,Dn),ss.matrixWorld=ul,ss.raycast(e,js);for(let o=0,a=js.length;o<a;o++){const l=js[o];l.instanceId=s,l.object=this,t.push(l)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new To(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sc extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fl=new U,pl=new U,ml=new st,so=new vr,Ks=new mn;class Zm extends ht{constructor(e=new Bt,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)fl.fromBufferAttribute(t,n-1),pl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=fl.distanceTo(pl);e.setAttribute("lineDistance",new gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(n),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;ml.copy(n).invert(),so.copy(e.ray).applyMatrix4(ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new U,h=new U,d=new U,u=new U,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=f,M=v-1;x<M;x+=m){const R=g.getX(x),w=g.getX(x+1);if(c.fromBufferAttribute(p,R),h.fromBufferAttribute(p,w),so.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(u);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=f,M=v-1;x<M;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),so.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(u);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Ec extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gl=new st,wo=new vr,$s=new mn,Zs=new U;class Jm extends ht{constructor(e=new Bt,t=new Ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(n),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;gl.copy(n).invert(),wo.copy(e.ray).applyMatrix4(gl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=u,_=m;g<_;g++){const p=c.getX(g);Zs.fromBufferAttribute(d,p),_l(Zs,p,l,n,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=u,_=m;g<_;g++)Zs.fromBufferAttribute(d,g),_l(Zs,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _l(r,e,t,i,n,s,o){const a=wo.distanceSqToPoint(r);if(a<t){const l=new U;wo.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Tc extends Wt{constructor(e,t,i,n,s,o,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pr extends Bt{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],d=[],u=[],m=[];let g=0;const _=[],p=i/2;let f=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(m,2));function v(){const M=new U,R=new U;let w=0;const C=(t-e)/i;for(let B=0;B<=s;B++){const S=[],T=B/s,F=T*(t-e)+e;for(let z=0;z<=n;z++){const N=z/n,L=N*l+a,P=Math.sin(L),I=Math.cos(L);R.x=F*P,R.y=-T*i+p,R.z=F*I,d.push(R.x,R.y,R.z),M.set(P,C,I).normalize(),u.push(M.x,M.y,M.z),m.push(N,1-T),S.push(g++)}_.push(S)}for(let B=0;B<n;B++)for(let S=0;S<s;S++){const T=_[S][B],F=_[S+1][B],z=_[S+1][B+1],N=_[S][B+1];h.push(T,F,N),h.push(F,z,N),w+=6}c.addGroup(f,w,0),f+=w}function x(M){const R=g,w=new Ae,C=new U;let B=0;const S=M===!0?e:t,T=M===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,p*T,0),u.push(0,T,0),m.push(.5,.5),g++;const F=g;for(let z=0;z<=n;z++){const L=z/n*l+a,P=Math.cos(L),I=Math.sin(L);C.x=S*I,C.y=p*T,C.z=S*P,d.push(C.x,C.y,C.z),u.push(0,T,0),w.x=P*.5+.5,w.y=I*.5*T+.5,m.push(w.x,w.y),g++}for(let z=0;z<n;z++){const N=R+z,L=F+z;M===!0?h.push(L,L+1,N):h.push(L+1,L,N),B+=3}c.addGroup(f,B,M===!0?1:2),f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xn extends Bt{constructor(e=.5,t=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let d=e;const u=(t-e)/n,m=new U,g=new Ae;for(let _=0;_<=n;_++){for(let p=0;p<=i;p++){const f=s+p/i*o;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<n;_++){const p=_*(i+1);for(let f=0;f<i;f++){const v=f+p,x=v,M=v+i+1,R=v+i+2,w=v+1;a.push(x,M,w),a.push(M,R,w)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class fn extends Bt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new U,u=new U,m=[],g=[],_=[],p=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let M=0;f===0&&o===0?M=.5/t:f===i&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const w=R/t;d.x=-e*Math.cos(n+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(n+w*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(w+M,1-x),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const x=h[f][v+1],M=h[f][v],R=h[f+1][v],w=h[f+1][v+1];(f!==0||o>0)&&m.push(x,M,w),(f!==i-1||l<Math.PI)&&m.push(M,R,w)}this.setIndex(m),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rt extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xs extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Qm extends xs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ro=new st,vl=new U,xl=new U;class Fo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(vl),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eg extends Fo{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ur*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tg extends xs{constructor(e,t,i=0,n=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new eg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yl=new st,os=new U,oo=new U;class ig extends Fo{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),i.position.copy(os),oo.copy(i.position),oo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(oo),i.updateMatrixWorld(),n.makeTranslation(-os.x,-os.y,-os.z),yl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class Yn extends xs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new ig}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ng extends Fo{constructor(){super(new Do(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new ng}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rg extends xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let og=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ml(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ml();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ml(){return(typeof performance>"u"?Date:performance).now()}class ag{constructor(e,t,i=0,n=1/0){this.ray=new vr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return bo(e,this,i,t),i.sort(Sl),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)bo(e[n],this,i,t);return i.sort(Sl),i}}function Sl(r,e){return r.distance-e.distance}function bo(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)bo(n[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Co}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Co);class ui{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const i=this.elements,n=e.x,s=e.y,o=e.z;return t.x=i[0]*n+i[1]*s+i[2]*o,t.y=i[3]*n+i[4]*s+i[5]*o,t.z=i[6]*n+i[7]*s+i[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new ui);const i=this.elements,n=e.elements,s=t.elements,o=i[0],a=i[1],l=i[2],c=i[3],h=i[4],d=i[5],u=i[6],m=i[7],g=i[8],_=n[0],p=n[1],f=n[2],v=n[3],x=n[4],M=n[5],R=n[6],w=n[7],C=n[8];return s[0]=o*_+a*v+l*R,s[1]=o*p+a*x+l*w,s[2]=o*f+a*M+l*C,s[3]=c*_+h*v+d*R,s[4]=c*p+h*x+d*w,s[5]=c*f+h*M+d*C,s[6]=u*_+m*v+g*R,s[7]=u*p+m*x+g*w,s[8]=u*f+m*M+g*C,t}scale(e,t){t===void 0&&(t=new ui);const i=this.elements,n=t.elements;for(let s=0;s!==3;s++)n[3*s+0]=e.x*i[3*s+0],n[3*s+1]=e.y*i[3*s+1],n[3*s+2]=e.z*i[3*s+2];return t}solve(e,t){t===void 0&&(t=new y);const i=3,n=4,s=[];let o,a;for(o=0;o<i*n;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+n*a]=this.elements[o+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(o=c-l,s[o+n*o]===0){for(a=o+1;a<c;a++)if(s[o+n*a]!==0){h=d;do u=d-h,s[u+n*o]+=s[u+n*a];while(--h);break}}if(s[o+n*o]!==0)for(a=o+1;a<c;a++){const m=s[o+n*a]/s[o+n*o];h=d;do u=d-h,s[u+n*a]=u<=o?0:s[u+n*a]-s[u+n*o]*m;while(--h)}}while(--l);if(t.z=s[2*n+3]/s[2*n+2],t.y=(s[1*n+3]-s[1*n+2]*t.z)/s[1*n+1],t.x=(s[0*n+3]-s[0*n+2]*t.z-s[0*n+1]*t.y)/s[0*n+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new ui);const t=3,i=6,n=lg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)n[s+i*o]=this.elements[s+3*o];n[3+6*0]=1,n[3+6*1]=0,n[3+6*2]=0,n[4+6*0]=0,n[4+6*1]=1,n[4+6*2]=0,n[5+6*0]=0,n[5+6*1]=0,n[5+6*2]=1;let a=3;const l=a;let c;const h=i;let d;do{if(s=l-a,n[s+i*s]===0){for(o=s+1;o<l;o++)if(n[s+i*o]!==0){c=h;do d=h-c,n[d+i*s]+=n[d+i*o];while(--c);break}}if(n[s+i*s]!==0)for(o=s+1;o<l;o++){const u=n[s+i*o]/n[s+i*s];c=h;do d=h-c,n[d+i*o]=d<=s?0:n[d+i*o]-n[d+i*s]*u;while(--c)}}while(--a);s=2;do{o=s-1;do{const u=n[s+i*o]/n[s+i*s];c=i;do d=i-c,n[d+i*o]=n[d+i*o]-n[d+i*s]*u;while(--c)}while(o--)}while(--s);s=2;do{const u=1/n[s+i*s];c=i;do d=i-c,n[d+i*s]=n[d+i*s]*u;while(--c)}while(s--);s=2;do{o=2;do{if(d=n[t+o+i*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,d)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,n=e.z,s=e.w,o=t+t,a=i+i,l=n+n,c=t*o,h=t*a,d=t*l,u=i*a,m=i*l,g=n*l,_=s*o,p=s*a,f=s*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-f,v[3*0+2]=d+p,v[3*1+0]=h+f,v[3*1+1]=1-(c+g),v[3*1+2]=m-_,v[3*2+0]=d-p,v[3*2+1]=m+_,v[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new ui);const t=this.elements,i=e.elements;let n;return i[0]=t[0],i[4]=t[4],i[8]=t[8],n=t[1],i[1]=t[3],i[3]=n,n=t[2],i[2]=t[6],i[6]=n,n=t[5],i[5]=t[7],i[7]=n,e}}const lg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new y);const i=e.x,n=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*n,t.y=l*i-o*s,t.z=o*n-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new ui([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,n=Math.sqrt(e*e+t*t+i*i);if(n>0){const s=1/n;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new y);const t=this.x,i=this.y,n=this.z;let s=Math.sqrt(t*t+i*i+n*n);return s>0?(s=1/s,e.x=t*s,e.y=i*s,e.z=n*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-i)*(o-i)+(a-n)*(a-n))}distanceSquared(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-i)*(o-i)+(a-n)*(a-n)}scale(e,t){t===void 0&&(t=new y);const i=this.x,n=this.y,s=this.z;return t.x=e*i,t.y=e*n,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new y),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const n=cg,s=1/i;n.set(this.x*s,this.y*s,this.z*s);const o=hg;Math.abs(n.x)<.9?(o.set(1,0,0),n.cross(o,e)):(o.set(0,1,0),n.cross(o,e)),n.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const n=this.x,s=this.y,o=this.z;i.x=n+(e.x-n)*t,i.y=s+(e.y-s)*t,i.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(El),El.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const cg=new y,hg=new y,El=new y;class Jt{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,n){const s=this.lowerBound,o=this.upperBound,a=i;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Tl),c=Tl),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),n&&(s.x-=n,s.y-=n,s.z-=n,o.x+=n,o.y+=n,o.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Jt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,s=e.upperBound,o=n.x<=i.x&&i.x<=s.x||t.x<=s.x&&s.x<=i.x,a=n.y<=i.y&&i.y<=s.y||t.y<=s.y&&s.y<=i.y,l=n.z<=i.z&&i.z<=s.z||t.z<=s.z&&s.z<=i.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,n=e.lowerBound,s=e.upperBound;return t.x<=n.x&&i.x>=s.x&&t.y<=n.y&&i.y>=s.y&&t.z<=n.z&&i.z>=s.z}getCorners(e,t,i,n,s,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),n.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const i=wl,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(n,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const m=i[u];e.pointToLocal(m,m)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=wl,n=i[0],s=i[1],o=i[2],a=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(n,s,o,a,l,c,h,d);for(let u=0;u!==8;u++){const m=i[u];e.pointToWorld(m,m)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,n=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-i.x)*n,l=(this.upperBound.x-i.x)*n,c=(this.lowerBound.y-i.y)*s,h=(this.upperBound.y-i.y)*s,d=(this.lowerBound.z-i.z)*o,u=(this.upperBound.z-i.z)*o,m=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||m>g)}}const Tl=new y,wl=[new y,new y,new y,new y,new y,new y,new y,new y];class bl{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:n}=t;if(n>i){const s=n;n=i,i=s}return this.matrix[(i*(i+1)>>1)+n-1]}set(e,t,i){let{index:n}=e,{index:s}=t;if(s>n){const o=s;s=n,n=o}this.matrix[(n*(n+1)>>1)+s-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class wc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const n=i[e].indexOf(t);return n!==-1&&i[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const i=this._listeners[e.type];if(i!==void 0){e.target=this;for(let n=0,s=i.length;n<s;n++)i[n].call(this,e)}return this}}class pt{constructor(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),this.x=e,this.y=t,this.z=i,this.w=n}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=ug,n=dg;e.tangents(i,n),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new pt);const i=this.x,n=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=i*h+o*a+n*c-s*l,t.y=n*h+o*l+s*a-i*c,t.z=s*h+o*c+i*l-n*a,t.w=o*h-i*a-n*l-s*c,t}inverse(e){e===void 0&&(e=new pt);const t=this.x,i=this.y,n=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+i*i+n*n+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new pt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const i=e.x,n=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*i+a*s-l*n,d=c*n+l*i-o*s,u=c*s+o*n-a*i,m=-o*i-a*n-l*s;return t.x=h*c+m*-o+d*-l-u*-a,t.y=d*c+m*-a+u*-o-h*-l,t.z=u*c+m*-l+h*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,n,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(i=2*Math.atan2(o,c),n=Math.PI/2,s=0),h<-.499&&(i=-2*Math.atan2(o,c),n=-Math.PI/2,s=0),i===void 0){const d=o*o,u=a*a,m=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*u-2*m),n=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*d-2*m)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=n,e.x=s}setFromEuler(e,t,i,n){n===void 0&&(n="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(i/2);return n==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):n==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):n==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):n==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):n==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):n==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new pt(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new pt);const n=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,m,g,_,p;return m=n*l+s*c+o*h+a*d,m<0&&(m=-m,l=-l,c=-c,h=-h,d=-d),1-m>1e-6?(u=Math.acos(m),g=Math.sin(u),_=Math.sin((1-t)*u)/g,p=Math.sin(t*u)/g):(_=1-t,p=t),i.x=_*n+p*l,i.y=_*s+p*c,i.z=_*o+p*h,i.w=_*a+p*d,i}integrate(e,t,i,n){n===void 0&&(n=new pt);const s=e.x*i.x,o=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return n.x+=u*(s*d+o*h-a*c),n.y+=u*(o*d+a*l-s*h),n.z+=u*(a*d+s*c-o*l),n.w+=u*(-s*l-o*c-a*h),n}}const ug=new y,dg=new y,fg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ue{constructor(e){e===void 0&&(e={}),this.id=ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ue.idCounter=0;ue.types=fg;class Xe{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new pt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Xe.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Xe.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,n){return n===void 0&&(n=new y),i.vsub(e,n),t.conjugate(Al),Al.vmult(n,n),n}static pointToWorldFrame(e,t,i,n){return n===void 0&&(n=new y),t.vmult(i,n),n.vadd(e,n),n}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new y),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,n){return n===void 0&&(n=new y),t.w*=-1,t.vmult(i,n),t.w*=-1,n}}const Al=new pt;class fs extends ue{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:n=[],axes:s,boundingSphereRadius:o}=e;super({type:ue.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const n=new y;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],n),n.normalize();let h=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(n)||i[d].almostEquals(n)){h=!0;break}h||i.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],n=this.vertices[i[0]],s=this.vertices[i[1]],o=this.vertices[i[2]];fs.computeNormal(n,s,o,t)}static computeNormal(e,t,i,n){const s=new y,o=new y;t.vsub(e,o),i.vsub(t,s),s.cross(o,n),n.isZero()||n.normalize()}clipAgainstHull(e,t,i,n,s,o,a,l,c){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){h.copy(i.faceNormals[g]),s.vmult(h,h);const _=h.dot(o);_>u&&(u=_,d=g)}const m=[];for(let g=0;g<i.faces[d].length;g++){const _=i.vertices[i.faces[d][g]],p=new y;p.copy(_),s.vmult(p,p),n.vadd(p,p),m.push(p)}d>=0&&this.clipFaceAgainstHull(o,e,t,m,a,l,c)}findSeparatingAxis(e,t,i,n,s,o,a,l){const c=new y,h=new y,d=new y,u=new y,m=new y,g=new y;let _=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let f=0;f!==p.uniqueAxes.length;f++){i.vmult(p.uniqueAxes[f],c);const v=p.testSepAxis(c,e,t,i,n,s);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}else{const f=a?a.length:p.faces.length;for(let v=0;v<f;v++){const x=a?a[v]:v;c.copy(p.faceNormals[x]),i.vmult(c,c);const M=p.testSepAxis(c,e,t,i,n,s);if(M===!1)return!1;M<_&&(_=M,o.copy(c))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],h);const v=p.testSepAxis(h,e,t,i,n,s);if(v===!1)return!1;v<_&&(_=v,o.copy(h))}else{const f=l?l.length:e.faces.length;for(let v=0;v<f;v++){const x=l?l[v]:v;h.copy(e.faceNormals[x]),s.vmult(h,h);const M=p.testSepAxis(h,e,t,i,n,s);if(M===!1)return!1;M<_&&(_=M,o.copy(h))}}for(let f=0;f!==p.uniqueEdges.length;f++){i.vmult(p.uniqueEdges[f],u);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],m),u.cross(m,g),!g.almostZero()){g.normalize();const x=p.testSepAxis(g,e,t,i,n,s);if(x===!1)return!1;x<_&&(_=x,o.copy(g))}}return n.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,i,n,s,o){const a=this;fs.project(a,e,i,n,ao),fs.project(t,e,s,o,lo);const l=ao[0],c=ao[1],h=lo[0],d=lo[1];if(l<d||h<c)return!1;const u=l-d,m=h-c;return u<m?u:m}calculateLocalInertia(e,t){const i=new y,n=new y;this.computeLocalAABB(n,i);const s=i.x-n.x,o=i.y-n.y,a=i.z-n.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],n=this.vertices[t[0]];return-i.dot(n)}clipFaceAgainstHull(e,t,i,n,s,o,a){const l=new y,c=new y,h=new y,d=new y,u=new y,m=new y,g=new y,_=new y,p=this,f=[],v=n,x=f;let M=-1,R=Number.MAX_VALUE;for(let T=0;T<p.faces.length;T++){l.copy(p.faceNormals[T]),i.vmult(l,l);const F=l.dot(e);F<R&&(R=F,M=T)}if(M<0)return;const w=p.faces[M];w.connectedFaces=[];for(let T=0;T<p.faces.length;T++)for(let F=0;F<p.faces[T].length;F++)w.indexOf(p.faces[T][F])!==-1&&T!==M&&w.connectedFaces.indexOf(T)===-1&&w.connectedFaces.push(T);const C=w.length;for(let T=0;T<C;T++){const F=p.vertices[w[T]],z=p.vertices[w[(T+1)%C]];F.vsub(z,c),h.copy(c),i.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[M]),i.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),m.copy(F),i.vmult(m,m),t.vadd(m,m);const N=w.connectedFaces[T];g.copy(this.faceNormals[N]);const L=this.getPlaneConstantOfFace(N);_.copy(g),i.vmult(_,_);const P=L-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,P);v.length;)v.shift();for(;x.length;)v.push(x.shift())}g.copy(this.faceNormals[M]);const B=this.getPlaneConstantOfFace(M);_.copy(g),i.vmult(_,_);const S=B-_.dot(t);for(let T=0;T<v.length;T++){let F=_.dot(v[T])+S;if(F<=s&&(console.log(`clamped: depth=${F} to minDist=${s}`),F=s),F<=o){const z=v[T];if(F<=1e-6){const N={point:z,normal:_,depth:F};a.push(N)}}}}clipFaceAgainstPlane(e,t,i,n){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=i.dot(l)+n;for(let h=0;h<a;h++){if(c=e[h],o=i.dot(c)+n,s<0)if(o<0){const d=new y;d.copy(c),t.push(d)}else{const d=new y;l.lerp(c,s/(s-o),d),t.push(d)}else if(o<0){const d=new y;l.lerp(c,s/(s-o),d),t.push(d),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const i=this.vertices,n=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(i[s],n[s]),e.vadd(n[s],n[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){const s=i[n];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const i=this.faceNormals,n=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(i[s],n[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const n=t[i].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,n){const s=this.vertices;let o,a,l,c,h,d,u=new y;for(let m=0;m<s.length;m++){u.copy(s[m]),t.vmult(u,u),e.vadd(u,u);const g=u;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}i.set(o,a,l),n.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,n=this.vertices;if(t){for(let s=0;s<i;s++){const o=n[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<i;s++){const o=n[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,i=this.faces,n=this.faceNormals,s=new y;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=n[o];const l=t[i[o][0]],c=new y;e.vsub(l,c);const h=a.dot(c),d=new y;s.vsub(l,d);const u=a.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(e,t,i,n,s){const o=e.vertices.length,a=pg;let l=0,c=0;const h=mg,d=e.vertices;h.setZero(),Xe.vectorToLocalFrame(i,n,t,a),Xe.pointToLocalFrame(i,n,h,h);const u=h.dot(a);c=l=d[0].dot(a);for(let m=1;m<o;m++){const g=d[m].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const m=c;c=l,l=m}s[0]=l,s[1]=c}}const ao=[],lo=[];new y;const pg=new y,mg=new y;class jn extends ue{constructor(e){super({type:ue.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,n=y,s=[new n(-e,-t,-i),new n(e,-t,-i),new n(e,t,-i),new n(-e,t,-i),new n(-e,-t,i),new n(e,-t,i),new n(e,t,i),new n(-e,t,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new fs({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),jn.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const n=e;i.x=1/12*t*(2*n.y*2*n.y+2*n.z*2*n.z),i.y=1/12*t*(2*n.x*2*n.x+2*n.z*2*n.z),i.z=1/12*t*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,t){const i=e,n=this.halfExtents;if(i[0].set(n.x,0,0),i[1].set(0,n.y,0),i[2].set(0,0,n.z),i[3].set(-n.x,0,0),i[4].set(0,-n.y,0),i[5].set(0,0,-n.z),t!==void 0)for(let s=0;s!==i.length;s++)t.vmult(i[s],i[s]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const n=this.halfExtents,s=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let o=0;o<s.length;o++)Gi.set(s[o][0],s[o][1],s[o][2]),t.vmult(Gi,Gi),e.vadd(Gi,Gi),i(Gi.x,Gi.y,Gi.z)}calculateWorldAABB(e,t,i,n){const s=this.halfExtents;pi[0].set(s.x,s.y,s.z),pi[1].set(-s.x,s.y,s.z),pi[2].set(-s.x,-s.y,s.z),pi[3].set(-s.x,-s.y,-s.z),pi[4].set(s.x,-s.y,-s.z),pi[5].set(s.x,s.y,-s.z),pi[6].set(-s.x,s.y,-s.z),pi[7].set(s.x,-s.y,s.z);const o=pi[0];t.vmult(o,o),e.vadd(o,o),n.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=pi[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>n.x&&(n.x=c),h>n.y&&(n.y=h),d>n.z&&(n.z=d),c<i.x&&(i.x=c),h<i.y&&(i.y=h),d<i.z&&(i.z=d)}}}const Gi=new y,pi=[new y,new y,new y,new y,new y,new y,new y,new y],Oo={DYNAMIC:1,STATIC:2,KINEMATIC:4},Bo={AWAKE:0,SLEEPY:1,SLEEPING:2};class le extends wc{constructor(e){e===void 0&&(e={}),super(),this.id=le.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?le.STATIC:le.DYNAMIC,typeof e.type==typeof le.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=le.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new pt,this.initQuaternion=new pt,this.previousQuaternion=new pt,this.interpolatedQuaternion=new pt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new ui,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new ui,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Jt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=le.AWAKE,this.wakeUpAfterNarrowphase=!1,e===le.SLEEPING&&this.dispatchEvent(le.wakeupEvent)}sleep(){this.sleepState=le.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;t===le.AWAKE&&i<n?(this.sleepState=le.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(le.sleepyEvent)):t===le.SLEEPY&&i>n?this.wakeUp():t===le.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(le.sleepEvent))}}updateSolveMassProperties(){this.sleepState===le.SLEEPING||this.type===le.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,i){const n=new y,s=new pt;return t&&n.copy(t),i&&s.copy(i),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let n=0;for(let s=0;s!==i;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>n&&(n=a+l)}this.boundingRadius=n}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,n=e.length,s=gg,o=_g,a=this.quaternion,l=this.aabb,c=vg;for(let h=0;h!==n;h++){const d=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(i[h],o),d.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=xg,n=yg;i.setRotationFromQuaternion(this.quaternion),i.transpose(n),i.scale(t,i),i.mmult(n,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const i=Mg;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==le.DYNAMIC)return;const i=Sg,n=Eg;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyForce(i,n)}applyTorque(e){this.type===le.DYNAMIC&&(this.sleepState===le.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==le.DYNAMIC)return;this.sleepState===le.SLEEPING&&this.wakeUp();const i=t,n=Tg;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);const s=wg;i.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==le.DYNAMIC)return;const i=bg,n=Ag;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,n),this.applyImpulse(i,n)}updateMassProperties(){const e=Cg;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),jn.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new y;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===le.DYNAMIC||this.type===le.KINEMATIC)||this.sleepState===le.SLEEPING)return;const n=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,m=h*e;n.x+=a.x*m*u.x,n.y+=a.y*m*u.y,n.z+=a.z*m*u.z;const g=d.elements,_=this.angularFactor,p=l.x*_.x,f=l.y*_.y,v=l.z*_.z;s.x+=e*(g[0]*p+g[1]*f+g[2]*v),s.y+=e*(g[3]*p+g[4]*f+g[5]*v),s.z+=e*(g[6]*p+g[7]*f+g[8]*v),o.x+=n.x*e,o.y+=n.y*e,o.z+=n.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}le.idCounter=0;le.COLLIDE_EVENT_NAME="collide";le.DYNAMIC=Oo.DYNAMIC;le.STATIC=Oo.STATIC;le.KINEMATIC=Oo.KINEMATIC;le.AWAKE=Bo.AWAKE;le.SLEEPY=Bo.SLEEPY;le.SLEEPING=Bo.SLEEPING;le.wakeupEvent={type:"wakeup"};le.sleepyEvent={type:"sleepy"};le.sleepEvent={type:"sleep"};const gg=new y,_g=new pt,vg=new Jt,xg=new ui,yg=new ui;new ui;const Mg=new y,Sg=new y,Eg=new y,Tg=new y,wg=new y,bg=new y,Ag=new y,Cg=new y;class bc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&le.STATIC||e.sleepState===le.SLEEPING)&&(t.type&le.STATIC||t.sleepState===le.SLEEPING))}intersectionTest(e,t,i,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,n):this.doBoundingSphereBroadphase(e,t,i,n)}doBoundingSphereBroadphase(e,t,i,n){const s=Rg;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(i.push(e),n.push(t))}doBoundingBoxBroadphase(e,t,i,n){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),n.push(t))}makePairsUnique(e,t){const i=Lg,n=Pg,s=Ig,o=e.length;for(let a=0;a!==o;a++)n[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=n[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=a,i.keys.push(h)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(n[c]),t.push(s[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new y;e.position.vsub(t.position,i);const n=e.shapes[0],s=t.shapes[0];return Math.pow(n.boundingSphereRadius+s.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Rg=new y;new y;new pt;new y;const Lg={keys:[]},Pg=[],Ig=[];new y;new y;new y;class Dg extends bc{constructor(){super()}collisionPairs(e,t,i){const n=e.bodies,s=n.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=n[l],a=n[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let n=0;n<e.bodies.length;n++){const s=e.bodies[n];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&i.push(s)}return i}}class mr{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,n,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(n),this.shape=s,this.body=o,this.distance=a}}let Ac,Cc,Rc,Lc,Pc,Ic,Dc;const zo={CLOSEST:1,ANY:2,ALL:4};Ac=ue.types.SPHERE;Cc=ue.types.PLANE;Rc=ue.types.BOX;Lc=ue.types.CYLINDER;Pc=ue.types.CONVEXPOLYHEDRON;Ic=ue.types.HEIGHTFIELD;Dc=ue.types.TRIMESH;class ft{get[Ac](){return this._intersectSphere}get[Cc](){return this._intersectPlane}get[Rc](){return this._intersectBox}get[Lc](){return this._intersectConvex}get[Pc](){return this._intersectConvex}get[Ic](){return this._intersectHeightfield}get[Dc](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=ft.ANY,this.result=new mr,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||ft.ANY,this.result=t.result||new mr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Cl),co.length=0,e.broadphase.aabbQuery(e,Cl,co),this.intersectBodies(co),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const n=Ug,s=Ng;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],n),n.vadd(e.position,n),this.intersectShape(l,s,n,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,n=e.length;!this.result.shouldStop&&i<n;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,n){const s=this.from;if(Kg(s,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,n,e)}_intersectBox(e,t,i,n,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,n,s)}_intersectPlane(e,t,i,n,s){const o=this.from,a=this.to,l=this.direction,c=new y(0,0,1);t.vmult(c,c);const h=new y;o.vsub(i,h);const d=h.dot(c);a.vsub(i,h);const u=h.dot(c);if(d*u>0||o.distanceTo(a)<d)return;const m=c.dot(l);if(Math.abs(m)<this.precision)return;const g=new y,_=new y,p=new y;o.vsub(i,g);const f=-c.dot(g)/m;l.scale(f,_),o.vadd(_,p),this.reportIntersection(c,p,s,n,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,n=this.to,s=this.from;t.x=Math.min(n.x,s.x),t.y=Math.min(n.y,s.y),t.z=Math.min(n.z,s.z),i.x=Math.max(n.x,s.x),i.y=Math.max(n.y,s.y),i.z=Math.max(n.z,s.z)}_intersectHeightfield(e,t,i,n,s){e.data,e.elementSize;const o=Fg;o.from.copy(this.from),o.to.copy(this.to),Xe.pointToLocalFrame(i,t,o.from,o.from),Xe.pointToLocalFrame(i,t,o.to,o.to),o.updateDirection();const a=Og;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new Jt;o.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let m=l;m<h;m++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(m,g,u),!!u.overlapsRay(o)){if(e.getConvexTrianglePillar(m,g,!1),Xe.pointToWorldFrame(i,t,e.pillarOffset,Js),this._intersectConvex(e.pillarConvex,t,Js,n,s,Rl),this.result.shouldStop)return;e.getConvexTrianglePillar(m,g,!0),Xe.pointToWorldFrame(i,t,e.pillarOffset,Js),this._intersectConvex(e.pillarConvex,t,Js,n,s,Rl)}}}_intersectSphere(e,t,i,n,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),d=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,u=h**2-4*c*d,m=Bg,g=zg;if(!(u<0))if(u===0)o.lerp(a,u,m),m.vsub(i,g),g.normalize(),this.reportIntersection(g,m,s,n,-1);else{const _=(-h-Math.sqrt(u))/(2*c),p=(-h+Math.sqrt(u))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,m),m.vsub(i,g),g.normalize(),this.reportIntersection(g,m,s,n,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,m),m.vsub(i,g),g.normalize(),this.reportIntersection(g,m,s,n,-1))}}_intersectConvex(e,t,i,n,s,o){const a=Gg,l=Ll,c=o&&o.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,m=this.direction,g=this.from,_=this.to,p=g.distanceTo(_),f=c?c.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<f;x++){const M=c?c[x]:x,R=h[M],w=u[M],C=t,B=i;l.copy(d[R[0]]),C.vmult(l,l),l.vadd(B,l),l.vsub(g,l),C.vmult(w,a);const S=m.dot(a);if(Math.abs(S)<this.precision)continue;const T=a.dot(l)/S;if(!(T<0)){m.scale(T,Gt),Gt.vadd(g,Gt),ai.copy(d[R[0]]),C.vmult(ai,ai),B.vadd(ai,ai);for(let F=1;!v.shouldStop&&F<R.length-1;F++){mi.copy(d[R[F]]),gi.copy(d[R[F+1]]),C.vmult(mi,mi),C.vmult(gi,gi),B.vadd(mi,mi),B.vadd(gi,gi);const z=Gt.distanceTo(g);!(ft.pointInTriangle(Gt,ai,mi,gi)||ft.pointInTriangle(Gt,mi,ai,gi))||z>p||this.reportIntersection(a,Gt,s,n,M)}}}}_intersectTrimesh(e,t,i,n,s,o){const a=Hg,l=Yg,c=jg,h=Ll,d=Vg,u=kg,m=Wg,g=Xg,_=qg,p=e.indices;e.vertices;const f=this.from,v=this.to,x=this.direction;c.position.copy(i),c.quaternion.copy(t),Xe.vectorToLocalFrame(i,t,x,d),Xe.pointToLocalFrame(i,t,f,u),Xe.pointToLocalFrame(i,t,v,m),m.x*=e.scale.x,m.y*=e.scale.y,m.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,m.vsub(u,d),d.normalize();const M=u.distanceSquared(m);e.tree.rayQuery(this,c,l);for(let R=0,w=l.length;!this.result.shouldStop&&R!==w;R++){const C=l[R];e.getNormal(C,a),e.getVertex(p[C*3],ai),ai.vsub(u,h);const B=d.dot(a),S=a.dot(h)/B;if(S<0)continue;d.scale(S,Gt),Gt.vadd(u,Gt),e.getVertex(p[C*3+1],mi),e.getVertex(p[C*3+2],gi);const T=Gt.distanceSquared(u);!(ft.pointInTriangle(Gt,mi,ai,gi)||ft.pointInTriangle(Gt,ai,mi,gi))||T>M||(Xe.vectorToWorldFrame(t,a,_),Xe.pointToWorldFrame(i,t,Gt,g),this.reportIntersection(_,g,s,n,C))}l.length=0}reportIntersection(e,t,i,n,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case ft.ALL:this.hasHit=!0,c.set(o,a,e,t,i,n,l),c.hasHit=!0,this.callback(c);break;case ft.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,n,l));break;case ft.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,n,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,n){n.vsub(t,an),i.vsub(t,as),e.vsub(t,ho);const s=an.dot(an),o=an.dot(as),a=an.dot(ho),l=as.dot(as),c=as.dot(ho);let h,d;return(h=l*a-o*c)>=0&&(d=s*c-o*a)>=0&&h+d<s*l-o*o}}ft.CLOSEST=zo.CLOSEST;ft.ANY=zo.ANY;ft.ALL=zo.ALL;const Cl=new Jt,co=[],as=new y,ho=new y,Ug=new y,Ng=new pt,Gt=new y,ai=new y,mi=new y,gi=new y;new y;new mr;const Rl={faceList:[0]},Js=new y,Fg=new ft,Og=[],Bg=new y,zg=new y,Gg=new y;new y;new y;const Ll=new y,Hg=new y,Vg=new y,kg=new y,Wg=new y,qg=new y,Xg=new y;new Jt;const Yg=[],jg=new Xe,an=new y,Qs=new y;function Kg(r,e,t){t.vsub(r,an);const i=an.dot(e);return e.scale(i,Qs),Qs.vadd(r,Qs),t.distanceTo(Qs)}class Bn extends bc{static checkBounds(e,t,i){let n,s;i===0?(n=e.position.x,s=t.position.x):i===1?(n=e.position.y,s=t.position.y):i===2&&(n=e.position.z,s=t.position.z);const o=e.boundingRadius,a=t.boundingRadius,l=n+o;return s-a<l}static insertionSortX(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=n.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=n}return e}static insertionSortY(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=n.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=n}return e}static insertionSortZ(e){for(let t=1,i=e.length;t<i;t++){const n=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=n.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=n}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=i=>{t.push(i.body)},this._removeBodyHandler=i=>{const n=t.indexOf(i.body);n!==-1&&t.splice(n,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,i){const n=this.axisList,s=n.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=n[a];for(l=a+1;l<s;l++){const h=n[l];if(this.needBroadphaseCollision(c,h)){if(!Bn.checkBounds(c,h,o))break;this.intersectionTest(c,h,t,i)}}}}sortList(){const e=this.axisList,t=this.axisIndex,i=e.length;for(let n=0;n!==i;n++){const s=e[n];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Bn.insertionSortX(e):t===1?Bn.insertionSortY(e):t===2&&Bn.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,i=0,n=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let m=0;m!==l;m++){const g=a[m],_=g.position.x;e+=_,t+=_*_;const p=g.position.y;i+=p,n+=p*p;const f=g.position.z;s+=f,o+=f*f}const h=t-e*e*c,d=n-i*i*c,u=o-s*s*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,i){i===void 0&&(i=[]),this.dirty&&(this.sortList(),this.dirty=!1);const n=this.axisIndex;let s="x";n===1&&(s="y"),n===2&&(s="z");const o=this.axisList;t.lowerBound[s],t.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(t)&&i.push(l)}return i}}class $g{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class Pl{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class ys{constructor(e,t,i,n){i===void 0&&(i=-1e6),n===void 0&&(n=1e6),this.id=ys.idCounter++,this.minForce=i,this.maxForce=n,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Pl,this.jacobianElementB=new Pl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const n=t,s=e,o=i;this.a=4/(o*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(o*o*s*(1+4*n))}computeB(e,t,i){const n=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-n*t-o*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.position,o=n.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.velocity,o=n.velocity,a=i.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.vlambda,o=n.vlambda,a=i.wlambda,l=n.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.force,o=i.torque,a=n.force,l=n.torque,c=i.invMassSolve,h=n.invMassSolve;return s.scale(c,Il),a.scale(h,Dl),i.invInertiaWorldSolve.vmult(o,Ul),n.invInertiaWorldSolve.vmult(l,Nl),e.multiplyVectors(Il,Ul)+t.multiplyVectors(Dl,Nl)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,n=this.bj,s=i.invMassSolve,o=n.invMassSolve,a=i.invInertiaWorldSolve,l=n.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,er),c+=er.dot(e.rotational),l.vmult(t.rotational,er),c+=er.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,n=this.bi,s=this.bj,o=Zg;n.vlambda.addScaledVector(n.invMassSolve*e,t.spatial,n.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,i.spatial,s.vlambda),n.invInertiaWorldSolve.vmult(t.rotational,o),n.wlambda.addScaledVector(e,o,n.wlambda),s.invInertiaWorldSolve.vmult(i.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ys.idCounter=0;const Il=new y,Dl=new y,Ul=new y,Nl=new y,er=new y,Zg=new y;class Jg extends ys{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,i=this.b,n=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Qg,c=e0,h=n.velocity,d=n.angularVelocity;n.force,n.torque;const u=s.velocity,m=s.angularVelocity;s.force,s.torque;const g=t0,_=this.jacobianElementA,p=this.jacobianElementB,f=this.ni;o.cross(f,l),a.cross(f,c),f.negate(_.spatial),l.negate(_.rotational),p.spatial.copy(f),p.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(n.position,g),g.vsub(o,g);const v=f.dot(g),x=this.restitution+1,M=x*u.dot(f)-x*h.dot(f)+m.dot(c)-d.dot(l),R=this.computeGiMf();return-v*t-M*i-e*R}getImpactVelocityAlongNormal(){const e=i0,t=n0,i=s0,n=r0,s=o0;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(n,t),e.vsub(t,s),this.ni.dot(s)}}const Qg=new y,e0=new y,t0=new y,i0=new y,n0=new y,s0=new y,r0=new y,o0=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Fl extends ys{constructor(e,t,i){super(e,t,-i,i),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,n=this.rj,s=a0,o=l0,a=this.t;i.cross(a,s),n.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const a0=new y,l0=new y;class yr{constructor(e,t,i){i=$g.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=yr.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}yr.idCounter=0;class Mr{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Mr.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Mr.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new ft;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Uc extends ue{constructor(e){if(super({type:ue.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new y);const i=2*e*this.radius*this.radius/5;return t.x=i,t.y=i,t.z=i,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,i,n){const s=this.radius,o=["x","y","z"];for(let a=0;a<o.length;a++){const l=o[a];i[l]=e[l]-s,n[l]=e[l]+s}}}new y;new y;new y;new y;new y;new y;new y;new y;new y;class c0 extends ue{constructor(){super({type:ue.types.PLANE}),this.worldNormal=new y,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new y),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,n){Ti.set(0,0,1),t.vmult(Ti,Ti);const s=Number.MAX_VALUE;i.set(-s,-s,-s),n.set(s,s,s),Ti.x===1?n.x=e.x:Ti.x===-1&&(i.x=e.x),Ti.y===1?n.y=e.y:Ti.y===-1&&(i.y=e.y),Ti.z===1?n.z=e.z:Ti.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Ti=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Jt;new y;new Jt;new y;new y;new y;new y;new y;new y;new y;new Jt;new y;new Xe;new Jt;class h0{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class u0 extends h0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const n=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let d,u,m,g,_,p;if(a!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const f=f0,v=p0,x=d0;f.length=a,v.length=a,x.length=a;for(let M=0;M!==a;M++){const R=o[M];x[M]=0,v[M]=R.computeB(h),f[M]=1/R.computeC()}if(a!==0){for(let w=0;w!==c;w++){const C=l[w],B=C.vlambda,S=C.wlambda;B.set(0,0,0),S.set(0,0,0)}for(i=0;i!==n;i++){g=0;for(let w=0;w!==a;w++){const C=o[w];d=v[w],u=f[w],p=x[w],_=C.computeGWlambda(),m=u*(d-_-C.eps*p),p+m<C.minForce?m=C.minForce-p:p+m>C.maxForce&&(m=C.maxForce-p),x[w]+=m,g+=m>0?m:-m,C.addToWlambda(m)}if(g*g<s)break}for(let w=0;w!==c;w++){const C=l[w],B=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),B.vadd(C.vlambda,B),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let M=o.length;const R=1/h;for(;M--;)o[M].multiplier=x[M]*R}return i}}const d0=[],f0=[],p0=[];class m0{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class g0 extends m0{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const tt={sphereSphere:ue.types.SPHERE,spherePlane:ue.types.SPHERE|ue.types.PLANE,boxBox:ue.types.BOX|ue.types.BOX,sphereBox:ue.types.SPHERE|ue.types.BOX,planeBox:ue.types.PLANE|ue.types.BOX,convexConvex:ue.types.CONVEXPOLYHEDRON,sphereConvex:ue.types.SPHERE|ue.types.CONVEXPOLYHEDRON,planeConvex:ue.types.PLANE|ue.types.CONVEXPOLYHEDRON,boxConvex:ue.types.BOX|ue.types.CONVEXPOLYHEDRON,sphereHeightfield:ue.types.SPHERE|ue.types.HEIGHTFIELD,boxHeightfield:ue.types.BOX|ue.types.HEIGHTFIELD,convexHeightfield:ue.types.CONVEXPOLYHEDRON|ue.types.HEIGHTFIELD,sphereParticle:ue.types.PARTICLE|ue.types.SPHERE,planeParticle:ue.types.PLANE|ue.types.PARTICLE,boxParticle:ue.types.BOX|ue.types.PARTICLE,convexParticle:ue.types.PARTICLE|ue.types.CONVEXPOLYHEDRON,cylinderCylinder:ue.types.CYLINDER,sphereCylinder:ue.types.SPHERE|ue.types.CYLINDER,planeCylinder:ue.types.PLANE|ue.types.CYLINDER,boxCylinder:ue.types.BOX|ue.types.CYLINDER,convexCylinder:ue.types.CONVEXPOLYHEDRON|ue.types.CYLINDER,heightfieldCylinder:ue.types.HEIGHTFIELD|ue.types.CYLINDER,particleCylinder:ue.types.PARTICLE|ue.types.CYLINDER,sphereTrimesh:ue.types.SPHERE|ue.types.TRIMESH,planeTrimesh:ue.types.PLANE|ue.types.TRIMESH};class _0{get[tt.sphereSphere](){return this.sphereSphere}get[tt.spherePlane](){return this.spherePlane}get[tt.boxBox](){return this.boxBox}get[tt.sphereBox](){return this.sphereBox}get[tt.planeBox](){return this.planeBox}get[tt.convexConvex](){return this.convexConvex}get[tt.sphereConvex](){return this.sphereConvex}get[tt.planeConvex](){return this.planeConvex}get[tt.boxConvex](){return this.boxConvex}get[tt.sphereHeightfield](){return this.sphereHeightfield}get[tt.boxHeightfield](){return this.boxHeightfield}get[tt.convexHeightfield](){return this.convexHeightfield}get[tt.sphereParticle](){return this.sphereParticle}get[tt.planeParticle](){return this.planeParticle}get[tt.boxParticle](){return this.boxParticle}get[tt.convexParticle](){return this.convexParticle}get[tt.cylinderCylinder](){return this.convexConvex}get[tt.sphereCylinder](){return this.sphereConvex}get[tt.planeCylinder](){return this.planeConvex}get[tt.boxCylinder](){return this.boxConvex}get[tt.convexCylinder](){return this.convexConvex}get[tt.heightfieldCylinder](){return this.heightfieldCylinder}get[tt.particleCylinder](){return this.particleCylinder}get[tt.sphereTrimesh](){return this.sphereTrimesh}get[tt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new g0,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,n,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Jg(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&n.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,h=n.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||i,a.sj=o||n,a}createFrictionEquationsFromContact(e,t){const i=e.bi,n=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||i.material,d=o.material||n.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(a.frictionGravity||a.gravity).length();let m=i.invMass+n.invMass;m>0&&(m=1/m);const g=this.frictionEquationPool,_=g.length?g.pop():new Fl(i,n,u*m),p=g.length?g.pop():new Fl(i,n,u*m);return _.bi=p.bi=i,_.bj=p.bj=n,_.minForce=p.minForce=-u*m,_.maxForce=p.maxForce=u*m,_.ri.copy(e.ri),_.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(_.t,p.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=p.enabled=e.enabled,t.push(_,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];en.setZero(),Un.setZero(),Nn.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(en.vadd(t.ni,en),Un.vadd(t.ri,Un),Nn.vadd(t.rj,Nn)):(en.vsub(t.ni,en),Un.vadd(t.rj,Un),Nn.vadd(t.ri,Nn));const o=1/e;Un.scale(o,i.ri),Nn.scale(o,i.rj),n.ri.copy(i.ri),n.rj.copy(i.rj),en.normalize(),en.tangents(i.t,n.t)}getContacts(e,t,i,n,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=n,this.frictionResult=o;const l=y0,c=M0,h=v0,d=x0;for(let u=0,m=e.length;u!==m;u++){const g=e[u],_=t[u];let p=null;g.material&&_.material&&(p=i.getContactMaterial(g.material,_.material)||null);const f=g.type&le.KINEMATIC&&_.type&le.STATIC||g.type&le.STATIC&&_.type&le.KINEMATIC||g.type&le.KINEMATIC&&_.type&le.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);const x=g.shapes[v];for(let M=0;M<_.shapes.length;M++){_.quaternion.mult(_.shapeOrientations[M],c),_.quaternion.vmult(_.shapeOffsets[M],d),d.vadd(_.position,d);const R=_.shapes[M];if(!(x.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+R.boundingSphereRadius)continue;let w=null;x.material&&R.material&&(w=i.getContactMaterial(x.material,R.material)||null),this.currentContactMaterial=w||p||i.defaultContactMaterial;const C=x.type|R.type,B=this[C];if(B){let S=!1;x.type<R.type?S=B.call(this,x,R,h,d,l,c,g,_,x,R,f):S=B.call(this,R,x,d,h,c,l,_,g,x,R,f),S&&f&&(i.shapeOverlapKeeper.set(x.id,R.id),i.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(e,t,i,n,s,o,a,l,c,h,d){if(d)return i.distanceSquared(n)<(e.radius+t.radius)**2;const u=this.createContactEquation(a,l,e,t,c,h);n.vsub(i,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(i,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(n,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,i,n,s,o,a,l,c,h,d){const u=this.createContactEquation(a,l,e,t,c,h);if(u.ni.set(0,0,1),o.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),i.vsub(n,tr),u.ni.scale(u.ni.dot(tr),Ol),tr.vsub(Ol,u.rj),-tr.dot(u.ni)<=e.radius){if(d)return!0;const m=u.ri,g=u.rj;m.vadd(i,m),m.vsub(a.position,m),g.vadd(n,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,i,n,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,n,s,o,a,l,e,t,d)}sphereBox(e,t,i,n,s,o,a,l,c,h,d){const u=this.v3pool,m=Y0;i.vsub(n,ir),t.getSideNormals(m,o);const g=e.radius;let _=!1;const p=K0,f=$0,v=Z0;let x=null,M=0,R=0,w=0,C=null;for(let I=0,K=m.length;I!==K&&_===!1;I++){const G=W0;G.copy(m[I]);const q=G.length();G.normalize();const $=ir.dot(G);if($<q+g&&$>0){const J=q0,j=X0;J.copy(m[(I+1)%3]),j.copy(m[(I+2)%3]);const Y=J.length(),Z=j.length();J.normalize(),j.normalize();const ae=ir.dot(J),pe=ir.dot(j);if(ae<Y&&ae>-Y&&pe<Z&&pe>-Z){const me=Math.abs($-q-g);if((C===null||me<C)&&(C=me,R=ae,w=pe,x=q,p.copy(G),f.copy(J),v.copy(j),M++,d))return!0}}}if(M){_=!0;const I=this.createContactEquation(a,l,e,t,c,h);p.scale(-g,I.ri),I.ni.copy(p),I.ni.negate(I.ni),p.scale(x,p),f.scale(R,f),p.vadd(f,p),v.scale(w,v),p.vadd(v,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(a.position,I.ri),I.rj.vadd(n,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let B=u.get();const S=j0;for(let I=0;I!==2&&!_;I++)for(let K=0;K!==2&&!_;K++)for(let G=0;G!==2&&!_;G++)if(B.set(0,0,0),I?B.vadd(m[0],B):B.vsub(m[0],B),K?B.vadd(m[1],B):B.vsub(m[1],B),G?B.vadd(m[2],B):B.vsub(m[2],B),n.vadd(B,S),S.vsub(i,S),S.lengthSquared()<g*g){if(d)return!0;_=!0;const q=this.createContactEquation(a,l,e,t,c,h);q.ri.copy(S),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(B),q.ri.vadd(i,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(n,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(B),B=null;const T=u.get(),F=u.get(),z=u.get(),N=u.get(),L=u.get(),P=m.length;for(let I=0;I!==P&&!_;I++)for(let K=0;K!==P&&!_;K++)if(I%3!==K%3){m[K].cross(m[I],T),T.normalize(),m[I].vadd(m[K],F),z.copy(i),z.vsub(F,z),z.vsub(n,z);const G=z.dot(T);T.scale(G,N);let q=0;for(;q===I%3||q===K%3;)q++;L.copy(i),L.vsub(N,L),L.vsub(F,L),L.vsub(n,L);const $=Math.abs(G),J=L.length();if($<m[q].length()&&J<g){if(d)return!0;_=!0;const j=this.createContactEquation(a,l,e,t,c,h);F.vadd(N,j.rj),j.rj.copy(j.rj),L.negate(j.ni),j.ni.normalize(),j.ri.copy(j.rj),j.ri.vadd(n,j.ri),j.ri.vsub(i,j.ri),j.ri.normalize(),j.ri.scale(g,j.ri),j.ri.vadd(i,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(n,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}u.release(T,F,z,N,L)}planeBox(e,t,i,n,s,o,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,n,s,o,a,l,e,t,d)}convexConvex(e,t,i,n,s,o,a,l,c,h,d,u,m){const g=d_;if(!(i.distanceTo(n)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,s,n,o,g,u,m)){const _=[],p=f_;e.clipAgainstHull(i,s,t,n,o,g,-100,100,_);let f=0;for(let v=0;v!==_.length;v++){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,h),M=x.ri,R=x.rj;g.negate(x.ni),_[v].normal.negate(p),p.scale(_[v].depth,p),_[v].point.vadd(p,M),R.copy(_[v].point),M.vsub(i,M),R.vsub(n,R),M.vadd(i,M),M.vsub(a.position,M),R.vadd(n,R),R.vsub(l.position,R),this.result.push(x),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,t,i,n,s,o,a,l,c,h,d){const u=this.v3pool;i.vsub(n,J0);const m=t.faceNormals,g=t.faces,_=t.vertices,p=e.radius;let f=!1;for(let v=0;v!==_.length;v++){const x=_[v],M=i_;o.vmult(x,M),n.vadd(M,M);const R=t_;if(M.vsub(i,R),R.lengthSquared()<p*p){if(d)return!0;f=!0;const w=this.createContactEquation(a,l,e,t,c,h);w.ri.copy(R),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(p,w.ri),M.vsub(n,w.rj),w.ri.vadd(i,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(n,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let v=0,x=g.length;v!==x&&f===!1;v++){const M=m[v],R=g[v],w=n_;o.vmult(M,w);const C=s_;o.vmult(_[R[0]],C),C.vadd(n,C);const B=r_;w.scale(-p,B),i.vadd(B,B);const S=o_;B.vsub(C,S);const T=S.dot(w),F=a_;if(i.vsub(C,F),T<0&&F.dot(w)>0){const z=[];for(let N=0,L=R.length;N!==L;N++){const P=u.get();o.vmult(_[R[N]],P),n.vadd(P,P),z.push(P)}if(k0(z,w,i)){if(d)return!0;f=!0;const N=this.createContactEquation(a,l,e,t,c,h);w.scale(-p,N.ri),w.negate(N.ni);const L=u.get();w.scale(-T,L);const P=u.get();w.scale(-p,P),i.vsub(n,N.rj),N.rj.vadd(P,N.rj),N.rj.vadd(L,N.rj),N.rj.vadd(n,N.rj),N.rj.vsub(l.position,N.rj),N.ri.vadd(i,N.ri),N.ri.vsub(a.position,N.ri),u.release(L),u.release(P),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let I=0,K=z.length;I!==K;I++)u.release(z[I]);return}else for(let N=0;N!==R.length;N++){const L=u.get(),P=u.get();o.vmult(_[R[(N+1)%R.length]],L),o.vmult(_[R[(N+2)%R.length]],P),n.vadd(L,L),n.vadd(P,P);const I=Q0;P.vsub(L,I);const K=e_;I.unit(K);const G=u.get(),q=u.get();i.vsub(L,q);const $=q.dot(K);K.scale($,G),G.vadd(L,G);const J=u.get();if(G.vsub(i,J),$>0&&$*$<I.lengthSquared()&&J.lengthSquared()<p*p){if(d)return!0;const j=this.createContactEquation(a,l,e,t,c,h);G.vsub(n,j.rj),G.vsub(i,j.ni),j.ni.normalize(),j.ni.scale(p,j.ri),j.rj.vadd(n,j.rj),j.rj.vsub(l.position,j.rj),j.ri.vadd(i,j.ri),j.ri.vsub(a.position,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult);for(let Y=0,Z=z.length;Y!==Z;Y++)u.release(z[Y]);u.release(L),u.release(P),u.release(G),u.release(J),u.release(q);return}u.release(L),u.release(P),u.release(G),u.release(J),u.release(q)}for(let N=0,L=z.length;N!==L;N++)u.release(z[N])}}}planeConvex(e,t,i,n,s,o,a,l,c,h,d){const u=l_,m=c_;m.set(0,0,1),s.vmult(m,m);let g=0;const _=h_;for(let p=0;p!==t.vertices.length;p++)if(u.copy(t.vertices[p]),o.vmult(u,u),n.vadd(u,u),u.vsub(i,_),m.dot(_)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h),x=u_;m.scale(m.dot(_),x),u.vsub(x,x),x.vsub(i,v.ri),v.ni.copy(m),u.vsub(n,v.rj),v.ri.vadd(i,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(n,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,n,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,n,s,o,a,l,e,t,d)}sphereHeightfield(e,t,i,n,s,o,a,l,c,h,d){const u=t.data,m=e.radius,g=t.elementSize,_=w_,p=T_;Xe.pointToLocalFrame(n,o,i,p);let f=Math.floor((p.x-m)/g)-1,v=Math.ceil((p.x+m)/g)+1,x=Math.floor((p.y-m)/g)-1,M=Math.ceil((p.y+m)/g)+1;if(v<0||M<0||f>u.length||x>u[0].length)return;f<0&&(f=0),v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),f>=u.length&&(f=u.length-1),v>=u.length&&(v=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const R=[];t.getRectMinMax(f,x,v,M,R);const w=R[0],C=R[1];if(p.z-m>C||p.z+m<w)return;const B=this.result;for(let S=f;S<v;S++)for(let T=x;T<M;T++){const F=B.length;let z=!1;if(t.getConvexTrianglePillar(S,T,!1),Xe.pointToWorldFrame(n,o,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,i,_,s,o,a,l,e,t,d)),d&&z||(t.getConvexTrianglePillar(S,T,!0),Xe.pointToWorldFrame(n,o,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,i,_,s,o,a,l,e,t,d)),d&&z))return!0;if(B.length-F>2)return}}boxHeightfield(e,t,i,n,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,n,s,o,a,l,e,t,d)}convexHeightfield(e,t,i,n,s,o,a,l,c,h,d){const u=t.data,m=t.elementSize,g=e.boundingSphereRadius,_=S_,p=E_,f=M_;Xe.pointToLocalFrame(n,o,i,f);let v=Math.floor((f.x-g)/m)-1,x=Math.ceil((f.x+g)/m)+1,M=Math.floor((f.y-g)/m)-1,R=Math.ceil((f.y+g)/m)+1;if(x<0||R<0||v>u.length||M>u[0].length)return;v<0&&(v=0),x<0&&(x=0),M<0&&(M=0),R<0&&(R=0),v>=u.length&&(v=u.length-1),x>=u.length&&(x=u.length-1),R>=u[0].length&&(R=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const w=[];t.getRectMinMax(v,M,x,R,w);const C=w[0],B=w[1];if(!(f.z-g>B||f.z+g<C))for(let S=v;S<x;S++)for(let T=M;T<R;T++){let F=!1;if(t.getConvexTrianglePillar(S,T,!1),Xe.pointToWorldFrame(n,o,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,i,_,s,o,a,l,null,null,d,p,null)),d&&F||(t.getConvexTrianglePillar(S,T,!0),Xe.pointToWorldFrame(n,o,t.pillarOffset,_),i.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.convexConvex(e,t.pillarConvex,i,_,s,o,a,l,null,null,d,p,null)),d&&F))return!0}}sphereParticle(e,t,i,n,s,o,a,l,c,h,d){const u=__;if(u.set(0,0,1),n.vsub(i,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(l,a,t,e,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,i,n,s,o,a,l,c,h,d){const u=p_;u.set(0,0,1),a.quaternion.vmult(u,u);const m=m_;if(n.vsub(a.position,m),u.dot(m)<=0){if(d)return!0;const _=this.createContactEquation(l,a,t,e,c,h);_.ni.copy(u),_.ni.negate(_.ni),_.ri.set(0,0,0);const p=g_;u.scale(u.dot(n),p),n.vsub(p,p),_.rj.copy(p),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,i,n,s,o,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,n,s,o,a,l,e,t,d)}convexParticle(e,t,i,n,s,o,a,l,c,h,d){let u=-1;const m=x_,g=y_;let _=null;const p=v_;if(p.copy(n),p.vsub(i,p),s.conjugate(Bl),Bl.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,v=e.faces.length;f!==v;f++){const x=[e.worldVertices[e.faces[f][0]]],M=e.worldFaceNormals[f];n.vsub(x[0],zl);const R=-M.dot(zl);if(_===null||Math.abs(R)<Math.abs(_)){if(d)return!0;_=R,u=f,m.copy(M)}}if(u!==-1){const f=this.createContactEquation(l,a,t,e,c,h);m.scale(_,g),g.vadd(n,g),g.vsub(i,g),f.rj.copy(g),m.negate(f.ni),f.ri.set(0,0,0);const v=f.ri,x=f.rj;v.vadd(n,v),v.vsub(l.position,v),x.vadd(i,x),x.vsub(a.position,x),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,n,s,o,a,l,c,h,d){return this.convexHeightfield(t,e,n,i,o,s,l,a,c,h,d)}particleCylinder(e,t,i,n,s,o,a,l,c,h,d){return this.convexParticle(t,e,n,i,o,s,l,a,c,h,d)}sphereTrimesh(e,t,i,n,s,o,a,l,c,h,d){const u=R0,m=L0,g=P0,_=I0,p=D0,f=U0,v=B0,x=C0,M=b0,R=z0;Xe.pointToLocalFrame(n,o,i,p);const w=e.radius;v.lowerBound.set(p.x-w,p.y-w,p.z-w),v.upperBound.set(p.x+w,p.y+w,p.z+w),t.getTrianglesInAABB(v,R);const C=A0,B=e.radius*e.radius;for(let N=0;N<R.length;N++)for(let L=0;L<3;L++)if(t.getVertex(t.indices[R[N]*3+L],C),C.vsub(p,M),M.lengthSquared()<=B){if(x.copy(C),Xe.pointToWorldFrame(n,o,x,C),C.vsub(i,M),d)return!0;let P=this.createContactEquation(a,l,e,t,c,h);P.ni.copy(M),P.ni.normalize(),P.ri.copy(P.ni),P.ri.scale(e.radius,P.ri),P.ri.vadd(i,P.ri),P.ri.vsub(a.position,P.ri),P.rj.copy(C),P.rj.vsub(l.position,P.rj),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult)}for(let N=0;N<R.length;N++)for(let L=0;L<3;L++){t.getVertex(t.indices[R[N]*3+L],u),t.getVertex(t.indices[R[N]*3+(L+1)%3],m),m.vsub(u,g),p.vsub(m,f);const P=f.dot(g);p.vsub(u,f);let I=f.dot(g);if(I>0&&P<0&&(p.vsub(u,f),_.copy(g),_.normalize(),I=f.dot(_),_.scale(I,f),f.vadd(u,f),f.distanceTo(p)<e.radius)){if(d)return!0;const G=this.createContactEquation(a,l,e,t,c,h);f.vsub(p,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(i,G.ri),G.ri.vsub(a.position,G.ri),Xe.pointToWorldFrame(n,o,f,f),f.vsub(l.position,G.rj),Xe.vectorToWorldFrame(o,G.ni,G.ni),Xe.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const S=N0,T=F0,F=O0,z=w0;for(let N=0,L=R.length;N!==L;N++){t.getTriangleVertices(R[N],S,T,F),t.getNormal(R[N],z),p.vsub(S,f);let P=f.dot(z);if(z.scale(P,f),p.vsub(f,f),P=f.distanceTo(p),ft.pointInTriangle(f,S,T,F)&&P<e.radius){if(d)return!0;let I=this.createContactEquation(a,l,e,t,c,h);f.vsub(p,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(i,I.ri),I.ri.vsub(a.position,I.ri),Xe.pointToWorldFrame(n,o,f,f),f.vsub(l.position,I.rj),Xe.vectorToWorldFrame(o,I.ni,I.ni),Xe.vectorToWorldFrame(o,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}R.length=0}planeTrimesh(e,t,i,n,s,o,a,l,c,h,d){const u=new y,m=S0;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const _=new y;_.copy(u),Xe.pointToWorldFrame(n,o,_,u);const p=E0;if(u.vsub(i,p),m.dot(p)<=0){if(d)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(m);const x=T0;m.scale(p.dot(m),x),u.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const en=new y,Un=new y,Nn=new y,v0=new y,x0=new y,y0=new pt,M0=new pt,S0=new y,E0=new y,T0=new y,w0=new y,b0=new y;new y;const A0=new y,C0=new y,R0=new y,L0=new y,P0=new y,I0=new y,D0=new y,U0=new y,N0=new y,F0=new y,O0=new y,B0=new Jt,z0=[],tr=new y,Ol=new y,G0=new y,H0=new y,V0=new y;function k0(r,e,t){let i=null;const n=r.length;for(let s=0;s!==n;s++){const o=r[s],a=G0;r[(s+1)%n].vsub(o,a);const l=H0;a.cross(e,l);const c=V0;t.vsub(o,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const ir=new y,W0=new y,q0=new y,X0=new y,Y0=[new y,new y,new y,new y,new y,new y],j0=new y,K0=new y,$0=new y,Z0=new y,J0=new y,Q0=new y,e_=new y,t_=new y,i_=new y,n_=new y,s_=new y,r_=new y,o_=new y,a_=new y;new y;new y;const l_=new y,c_=new y,h_=new y,u_=new y,d_=new y,f_=new y,p_=new y,m_=new y,g_=new y,__=new y,Bl=new pt,v_=new y;new y;const x_=new y,zl=new y,y_=new y,M_=new y,S_=new y,E_=[0],T_=new y,w_=new y;class Gl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),n=this.current;let s=0;for(;i>n[s];)s++;if(i!==n[s]){for(let o=n.length-1;o>=s;o--)n[o+1]=n[o];n[s]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,n=this.previous,s=i.length,o=n.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=h===n[a],c||Hl(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=i[a]===h,c||Hl(t,h)}}}function Hl(r,e){r.push((e&4294901760)>>16,e&65535)}const uo=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class b_{constructor(){this.data={keys:[]}}get(e,t){const i=uo(e,t);return this.data[i]}set(e,t,i){const n=uo(e,t);this.get(e,t)||this.data.keys.push(n),this.data[n]=i}delete(e,t){const i=uo(e,t),n=this.data.keys.indexOf(i);n!==-1&&this.data.keys.splice(n,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class A_ extends wc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Dg,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new u0,this.constraints=[],this.narrowphase=new _0(this),this.collisionMatrix=new bl,this.collisionMatrixPrevious=new bl,this.bodyOverlapKeeper=new Gl,this.shapeOverlapKeeper=new Gl,this.contactmaterials=[],this.contactMaterialTable=new b_,this.defaultMaterial=new Mr("default"),this.defaultContactMaterial=new yr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof mr?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,n){return i===void 0&&(i={}),i.mode=ft.ALL,i.from=e,i.to=t,i.callback=n,fo.intersectWorld(this,i)}raycastAny(e,t,i,n){return i===void 0&&(i={}),i.mode=ft.ANY,i.from=e,i.to=t,i.result=n,fo.intersectWorld(this,i)}raycastClosest(e,t,i,n){return i===void 0&&(i={}),i.mode=ft.CLOSEST,i.from=e,i.to=t,i.result=n,fo.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof le&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,n=i.indexOf(e);if(n!==-1){i.splice(n,1);for(let s=0;s!==i.length;s++)i[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const n=t[i].shapes;for(let s=0;s<n.length;s++){const o=n[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=mt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const n=i-this.lastCallTime;this.step(e,n,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const n=mt.now();let s=0;for(;this.accumulator>=e&&s<i&&(this.internalStep(e),this.accumulator-=e,s++,!(mt.now()-n>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=I_,n=D_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=le.DYNAMIC;let u=-1/0;const m=this.constraints,g=P_;l.length();const _=l.x,p=l.y,f=l.z;let v=0;for(c&&(u=mt.now()),v=0;v!==s;v++){const N=o[v];if(N.type===d){const L=N.force,P=N.mass;L.x+=P*_,L.y+=P*p,L.z+=P*f}}for(let N=0,L=this.subsystems.length;N!==L;N++)this.subsystems[N].update();c&&(u=mt.now()),i.length=0,n.length=0,this.broadphase.collisionPairs(this,i,n),c&&(h.broadphase=mt.now()-u);let x=m.length;for(v=0;v!==x;v++){const N=m[v];if(!N.collideConnected)for(let L=i.length-1;L>=0;L-=1)(N.bodyA===i[L]&&N.bodyB===n[L]||N.bodyB===i[L]&&N.bodyA===n[L])&&(i.splice(L,1),n.splice(L,1))}this.collisionMatrixTick(),c&&(u=mt.now());const M=L_,R=t.length;for(v=0;v!==R;v++)M.push(t[v]);t.length=0;const w=this.frictionEquations.length;for(v=0;v!==w;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,n,this,t,M,this.frictionEquations,g),c&&(h.narrowphase=mt.now()-u),c&&(u=mt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=t.length;for(let N=0;N!==C;N++){const L=t[N],P=L.bi,I=L.bj,K=L.si,G=L.sj;let q;if(P.material&&I.material?q=this.getContactMaterial(P.material,I.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,P.material&&I.material&&(P.material.friction>=0&&I.material.friction>=0&&P.material.friction*I.material.friction,P.material.restitution>=0&&I.material.restitution>=0&&(L.restitution=P.material.restitution*I.material.restitution)),a.addEquation(L),P.allowSleep&&P.type===le.DYNAMIC&&P.sleepState===le.SLEEPING&&I.sleepState===le.AWAKE&&I.type!==le.STATIC){const $=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),J=I.sleepSpeedLimit**2;$>=J*2&&(P.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===le.DYNAMIC&&I.sleepState===le.SLEEPING&&P.sleepState===le.AWAKE&&P.type!==le.STATIC){const $=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),J=P.sleepSpeedLimit**2;$>=J*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(P,I,!0),this.collisionMatrixPrevious.get(P,I)||(ls.body=I,ls.contact=L,P.dispatchEvent(ls),ls.body=P,I.dispatchEvent(ls)),this.bodyOverlapKeeper.set(P.id,I.id),this.shapeOverlapKeeper.set(K.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=mt.now()-u,u=mt.now()),v=0;v!==s;v++){const N=o[v];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(x=m.length,v=0;v!==x;v++){const N=m[v];N.update();for(let L=0,P=N.equations.length;L!==P;L++){const I=N.equations[L];a.addEquation(I)}}a.solve(e,this),c&&(h.solve=mt.now()-u),a.removeAllEquations();const B=Math.pow;for(v=0;v!==s;v++){const N=o[v];if(N.type&d){const L=B(1-N.linearDamping,e),P=N.velocity;P.scale(L,P);const I=N.angularVelocity;if(I){const K=B(1-N.angularDamping,e);I.scale(K,I)}}}this.dispatchEvent(R_),c&&(u=mt.now());const T=this.stepnumber%(this.quatNormalizeSkip+1)===0,F=this.quatNormalizeFast;for(v=0;v!==s;v++)o[v].integrate(e,T,F);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=mt.now()-u),this.stepnumber+=1,this.dispatchEvent(C_);let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==s;v++){const N=o[v];N.sleepTick(this.time),N.sleepState!==le.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(wi,bi),e){for(let s=0,o=wi.length;s<o;s+=2)cs.bodyA=this.getBodyById(wi[s]),cs.bodyB=this.getBodyById(wi[s+1]),this.dispatchEvent(cs);cs.bodyA=cs.bodyB=null}if(t){for(let s=0,o=bi.length;s<o;s+=2)hs.bodyA=this.getBodyById(bi[s]),hs.bodyB=this.getBodyById(bi[s+1]),this.dispatchEvent(hs);hs.bodyA=hs.bodyB=null}wi.length=bi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((i||n)&&this.shapeOverlapKeeper.getDiff(wi,bi),i){for(let s=0,o=wi.length;s<o;s+=2){const a=this.getShapeById(wi[s]),l=this.getShapeById(wi[s+1]);Ai.shapeA=a,Ai.shapeB=l,a&&(Ai.bodyA=a.body),l&&(Ai.bodyB=l.body),this.dispatchEvent(Ai)}Ai.bodyA=Ai.bodyB=Ai.shapeA=Ai.shapeB=null}if(n){for(let s=0,o=bi.length;s<o;s+=2){const a=this.getShapeById(bi[s]),l=this.getShapeById(bi[s+1]);Ci.shapeA=a,Ci.shapeB=l,a&&(Ci.bodyA=a.body),l&&(Ci.bodyB=l.body),this.dispatchEvent(Ci)}Ci.bodyA=Ci.bodyB=Ci.shapeA=Ci.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const n=e[i];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}}new Jt;const fo=new ft,mt=globalThis.performance||{};if(!mt.now){let r=Date.now();mt.timing&&mt.timing.navigationStart&&(r=mt.timing.navigationStart),mt.now=()=>Date.now()-r}new y;const C_={type:"postStep"},R_={type:"preStep"},ls={type:le.COLLIDE_EVENT_NAME,body:null,contact:null},L_=[],P_=[],I_=[],D_=[],wi=[],bi=[],cs={type:"beginContact",bodyA:null,bodyB:null},hs={type:"endContact",bodyA:null,bodyB:null},Ai={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ci={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const U_=new Do(-1,1,1,-1,0,1);class N_ extends Bt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}}const F_=new N_;class Fc{constructor(e){this._mesh=new We(F_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,U_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class O_ extends Ms{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fr.clone(e.uniforms),this.material=new Kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Fc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vl extends Ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class B_ extends Ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class z_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ae);this._width=i.width,this._height=i.height,t=new di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new O_(Nc),this.copyPass.material.blending=Ii,this.clock=new og}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vl!==void 0&&(o instanceof Vl?i=!0:o instanceof B_&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class G_ extends Ms{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=n}}const H_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Kn extends Ms{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new di(s,o,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new di(s,o,{type:Di});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const m=new di(s,o,{type:Di});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),o=Math.round(o/2)}const a=H_;this.highPassUniforms=fr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ae(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Nc;this.copyUniforms=fr.clone(h.uniforms),this.blendMaterial=new Kt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new Fc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ae(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Kn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Kn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Kt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Kn.BlurDirectionX=new Ae(1,0);Kn.BlurDirectionY=new Ae(0,1);const Hi={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class V_{constructor(){this.current=Hi.MENU,this.listeners=[]}set(e){const t=this.current;this.current=e;for(const i of this.listeners)i(e,t)}is(e){return this.current===e}onChange(e){this.listeners.push(e)}}class k_{constructor(){this.keys={},this.mouseButtons={},this.mouseDX=0,this.mouseDY=0,this.scrollDelta=0,this._pendingDX=0,this._pendingDY=0,this._onKeyDown=e=>{this.keys[e.code]=!0},this._onKeyUp=e=>{this.keys[e.code]=!1},this._onMouseDown=e=>{this.mouseButtons[e.button]=!0},this._onMouseUp=e=>{this.mouseButtons[e.button]=!1},this._onMouseMove=e=>{this._pendingDX+=e.movementX||0,this._pendingDY+=e.movementY||0},this._onWheel=e=>{this.scrollDelta+=Math.sign(e.deltaY)},this._onContextMenu=e=>e.preventDefault(),this._previousKeys={},this._onPointerLockChange=()=>{console.log("[InputManager] Pointer lock changed. pointerLockElement:",!!document.pointerLockElement),this._clearAll()},this._onBlur=()=>{console.log("[InputManager] Window blur — clearing input state"),this._clearAll()},this._onVisibilityChange=()=>{document.hidden&&(console.log("[InputManager] Tab hidden — clearing input state"),this._clearAll())},document.addEventListener("keydown",this._onKeyDown),document.addEventListener("keyup",this._onKeyUp),document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("wheel",this._onWheel),document.addEventListener("contextmenu",this._onContextMenu),document.addEventListener("pointerlockchange",this._onPointerLockChange),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("blur",this._onBlur)}_clearAll(){this.keys={},this.mouseButtons={},this._pendingDX=0,this._pendingDY=0,this._previousKeys={}}update(){this.mouseDX=this._pendingDX,this.mouseDY=this._pendingDY,this._pendingDX=0,this._pendingDY=0}wasKeyPressed(e){return!!this.keys[e]&&!this._previousKeys[e]}lateUpdate(){this._previousKeys={...this.keys}}resetFrame(){this.scrollDelta=0}isKeyDown(e){return!!this.keys[e]}isMouseDown(e=0){return!!this.mouseButtons[e]}dispose(){document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("wheel",this._onWheel),document.removeEventListener("contextmenu",this._onContextMenu),document.removeEventListener("pointerlockchange",this._onPointerLockChange),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("blur",this._onBlur)}debugState(){const e=Object.entries(this.keys).filter(([,i])=>i).map(([i])=>i),t=Object.entries(this.mouseButtons).filter(([,i])=>i).map(([i])=>i);(e.length||t.length)&&console.log("[InputManager] Keys:",e.join(", "),"| Mouse:",t.join(", "))}}class W_{constructor(){this.lastTime=performance.now(),this.deltaTime=0,this.elapsedTime=0,this.frameCount=0}tick(){const e=performance.now();return this.deltaTime=Math.min((e-this.lastTime)/1e3,.1),this.lastTime=e,this.elapsedTime+=this.deltaTime,this.frameCount++,this.deltaTime}}const et={MOVE_SPEED:12,SPRINT_MULTIPLIER:1.6,JUMP_FORCE:8,MAX_HEALTH:150,SPAWN_INVULNERABILITY:3,HEIGHT:1.8,RADIUS:.5,MOUSE_SENSITIVITY:.002,DECELERATION:10,ACCELERATION:40,HEAD_BOB_SPEED:12,HEAD_BOB_AMOUNT:.04,DASH_SPEED:28,DASH_DURATION:.15,DASH_COOLDOWN:1.2},cn={PISTOL:{name:"Pistol",damage:15,fireRate:.3,ammo:1/0,maxAmmo:1/0,magSize:1/0,reloadTime:0,spread:.01,auto:!1,recoil:.02,color:8947848},SHOTGUN:{name:"Shotgun",damage:8,pellets:8,fireRate:.8,ammo:30,maxAmmo:30,magSize:6,reloadTime:2,spread:.08,auto:!1,recoil:.06,color:11167283},ASSAULT_RIFLE:{name:"Assault Rifle",damage:10,fireRate:.1,ammo:120,maxAmmo:120,magSize:30,reloadTime:1.5,spread:.02,spreadIncrease:.005,maxSpread:.08,auto:!0,recoil:.015,color:4473924},ROCKET_LAUNCHER:{name:"Rocket Launcher",damage:80,splashDamage:40,splashRadius:5,fireRate:1.5,ammo:12,maxAmmo:12,magSize:4,reloadTime:2.5,spread:0,projectileSpeed:30,auto:!1,recoil:.08,color:3364147}},nt={GRUNT:{name:"Grunt",health:30,damage:8,speed:6,size:{x:.6,y:.8,z:.6},color:16720469,emissive:16716083,points:100,attackRange:1.5,attackCooldown:1.2},SHOOTER:{name:"Shooter",health:60,damage:8,speed:4,size:{x:.7,y:1.2,z:.7},color:52479,emissive:35020,points:200,attackRange:25,preferredRange:12,attackCooldown:2,projectileSpeed:15},TANK:{name:"Tank",health:150,damage:30,speed:3,chargeSpeed:12,size:{x:1.2,y:1.5,z:1.2},color:2293640,emissive:1166421,points:500,attackRange:15,chargeCooldown:4,chargeDistance:3},EXPLODER:{name:"Exploder",health:20,damage:45,speed:8,size:{x:.5,y:.6,z:.5},color:16737792,emissive:16729088,points:150,attackRange:2.5,attackCooldown:99,explosionRadius:4},TELEPORTER:{name:"Teleporter",health:45,damage:15,speed:5,size:{x:.5,y:1,z:.5},color:11158783,emissive:8921804,points:300,attackRange:3,attackCooldown:1.5,teleportCooldown:3,teleportRange:8}},St={SIZE:60,WALL_HEIGHT:8,COVER_COUNT:18,FOG_COLOR:657950},Dt={BASE_GRUNTS:4,GRUNT_INCREMENT:3,SHOOTER_UNLOCK_WAVE:2,TANK_UNLOCK_WAVE:4,EXPLODER_UNLOCK_WAVE:3,TELEPORTER_UNLOCK_WAVE:5,BOSS_WAVE_INTERVAL:5,HEALTH_SCALE_START_WAVE:3,HEALTH_SCALE_PER_WAVE:.12,BREATHER_TIME:3,SPAWN_STAGGER:.25,WAVE_CLEAR_BONUS_MULTIPLIER:1500},po={COMBO_TIMEOUT:4,COMBO_INCREMENT:.5,HEADSHOT_MULTIPLIER:2.5},Ct={DROP_CHANCE:.35,FLOAT_HEIGHT:.8,BOB_SPEED:2,BOB_AMOUNT:.3,ROTATE_SPEED:1.5,HEALTH_AMOUNT:35,SPEED_DURATION:7,SPEED_MULTIPLIER:2,DAMAGE_DURATION:7,DAMAGE_MULTIPLIER:2.5,SHIELD_AMOUNT:60,TIMESLOW_DURATION:5,TIMESLOW_FACTOR:.35,SIZE:.5},mo={GRAVITY:-20,FIXED_TIMESTEP:1/60,MAX_SUB_STEPS:3},Vi={MUZZLE_FLASH_DURATION:.05,BULLET_TRAIL_DURATION:.1,HIT_MARKER_DURATION:.15,KILL_MARKER_DURATION:.25,DAMAGE_VIGNETTE_DURATION:.3,SCREEN_SHAKE_DURATION:.2,PARTICLE_COUNT:500},Ht={WARNING_TIME:1.5,ACTIVE_TIME:.5,DAMAGE:25,RADIUS:4,MIN_WAVE:3,INTERVAL:8},tn={KILLS_TO_CHARGE:15,RADIUS:20,DAMAGE:200,KEY:"KeyF"};function Li(r,e,t){return r+(e-r)*t}function Ao(r,e,t){return Math.max(e,Math.min(t,r))}function ni(r,e){return Math.random()*(e-r)+r}function Ss(r,e){const t=r.x-e.x,i=r.z-e.z;return Math.sqrt(t*t+i*i)}class q_{constructor(){this.camera=new kt(75,window.innerWidth/window.innerHeight,.1,200),this.camera.rotation.order="YXZ",this.camera.position.set(0,et.HEIGHT,0),this.recoilPitch=0,this.recoilRecovery=8,this.shakeIntensity=0,this.shakeTimer=0,this.baseFOV=75,this.fovPunch=0,this.bobTime=0,this.bobActive=!1,this.offsetX=0,this.offsetY=0,this.bobZ=0,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()})}addRecoil(e){this.recoilPitch+=e}addShake(e,t){this.shakeIntensity=e,this.shakeTimer=t||Vi.SCREEN_SHAKE_DURATION}addFOVPunch(e){this.fovPunch+=e}update(e,t,i=!1){if(this.recoilPitch=Li(this.recoilPitch,0,e*this.recoilRecovery),this.shakeTimer>0){this.shakeTimer-=e;const c=this.shakeTimer>0?this.shakeIntensity:0;this.offsetX=(Math.random()-.5)*c*.1,this.offsetY=(Math.random()-.5)*c*.1}else this.offsetX=Li(this.offsetX,0,e*10),this.offsetY=Li(this.offsetY,0,e*10);const n=i?82:75;this.baseFOV=Li(this.baseFOV,n,e*6),this.fovPunch=Li(this.fovPunch,0,e*6),this.camera.fov=this.baseFOV+this.fovPunch,this.camera.updateProjectionMatrix();const s=i?et.HEAD_BOB_SPEED*1.4:et.HEAD_BOB_SPEED,o=i?et.HEAD_BOB_AMOUNT*1.5:et.HEAD_BOB_AMOUNT;t?this.bobTime+=e*s:this.bobTime=Li(this.bobTime,0,e*4);const a=Math.sin(this.bobTime)*o,l=Math.cos(this.bobTime*.5)*o*.5;this.camera.position.y=et.HEIGHT+a+this.offsetY,this.bobZ=l*.3+this.offsetX}get three(){return this.camera}}class X_{constructor(e,t,i){this.camera=e,this.world=t,this.input=i,this.yaw=0,this.pitch=0,this.velocity=new U,this.isGrounded=!1,this.speedMultiplier=1,this.euler=new vs(0,0,0,"YXZ"),this.isSprinting=!1,this.dashCooldown=0,this.dashTimer=0,this.dashDir=new U,this.body=new le({mass:80,shape:new Uc(et.RADIUS),fixedRotation:!0,linearDamping:.05,allowSleep:!1}),this.body.position.set(0,et.HEIGHT,0),t.addBody(this.body),this._groundedThisFrame=!1,this.body.addEventListener("collide",n=>{const s=new y,o=n.contact;o.bi===this.body?o.ni.negate(s):s.copy(o.ni),s.y>.5&&(this.isGrounded=!0,this._groundedThisFrame=!0)}),this.isLocked=!1,document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement!==null}),this._onCanvasClick=()=>{!this.isLocked&&this._wantsLock&&this.lock()},document.addEventListener("click",this._onCanvasClick),this._wantsLock=!1}lock(){this._wantsLock=!0;try{const e=document.body.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}unlock(){this._wantsLock=!1;try{document.pointerLockElement&&document.exitPointerLock()}catch{}}update(e){this.body.sleepState!==le.AWAKE&&(console.warn("[PlayerController] Body was asleep! Forcing wake-up. sleepState:",this.body.sleepState),this.body.wakeUp()),this._groundedThisFrame=!1,this.camera.three.position.x=this.body.position.x+this.camera.offsetX,this.camera.three.position.z=this.body.position.z,this.body.position.y<et.RADIUS&&(this.body.position.y=et.RADIUS,this.body.velocity.y=Math.max(0,this.body.velocity.y),this._groundedThisFrame=!0),this.isLocked&&(this.yaw-=this.input.mouseDX*et.MOUSE_SENSITIVITY,this.pitch-=this.input.mouseDY*et.MOUSE_SENSITIVITY,this.pitch=Ao(this.pitch,-Math.PI/2+.01,Math.PI/2-.01)),this.euler.set(this.pitch+this.camera.recoilPitch,this.yaw,this.camera.bobZ),this.camera.three.quaternion.setFromEuler(this.euler);const t=new U,i=new U;this.camera.three.getWorldDirection(t),t.y=0,t.lengthSq()<.001&&t.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),t.normalize(),i.crossVectors(t,new U(0,1,0)).normalize(),this.isSprinting=this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("ShiftRight");const n=this.isSprinting?et.SPRINT_MULTIPLIER:1,s=et.MOVE_SPEED*this.speedMultiplier*n,o=new U;if(this.input.isKeyDown("KeyW")&&o.add(t),this.input.isKeyDown("KeyS")&&o.sub(t),this.input.isKeyDown("KeyA")&&o.sub(i),this.input.isKeyDown("KeyD")&&o.add(i),this.dashCooldown>0&&(this.dashCooldown-=e),this.dashTimer>0)this.dashTimer-=e,this.body.velocity.x=this.dashDir.x*et.DASH_SPEED,this.body.velocity.z=this.dashDir.z*et.DASH_SPEED;else if(this.input.isKeyDown("KeyQ")&&this.dashCooldown<=0&&o.lengthSq()>0)this.dashDir.copy(o).normalize(),this.dashTimer=et.DASH_DURATION,this.dashCooldown=et.DASH_COOLDOWN,this.camera.addFOVPunch(8);else if(o.lengthSq()>0){o.normalize();const l=o.x*s,c=o.z*s,h=et.ACCELERATION,d=Math.min(1,h*e);this.body.velocity.x+=(l-this.body.velocity.x)*d,this.body.velocity.z+=(c-this.body.velocity.z)*d}else{const l=Math.max(0,1-et.DECELERATION*e);this.body.velocity.x*=l,this.body.velocity.z*=l}this._groundedThisFrame?this.isGrounded=!0:this.body.velocity.y<-.5&&(this.isGrounded=!1),this.input.isKeyDown("Space")&&this.isGrounded&&(this.body.velocity.y=et.JUMP_FORCE,this.isGrounded=!1);const a=o.lengthSq()>0;this.camera.update(e,a,this.isSprinting),this.camera.three.position.y+=this.body.position.y-et.RADIUS}getPosition(){return new U(this.body.position.x,this.body.position.y,this.body.position.z)}getDirection(){const e=new U;return this.camera.three.getWorldDirection(e),e}reset(){this.body.position.set(0,et.HEIGHT,0),this.body.velocity.set(0,0,0),this.yaw=0,this.pitch=0,this.speedMultiplier=1,this.isGrounded=!1,this.isSprinting=!1,this.dashCooldown=0,this.dashTimer=0}}class Y_{constructor(){this.maxHealth=et.MAX_HEALTH,this.health=this.maxHealth,this.isDead=!1,this.damageMultiplier=1,this.invulnerableTimer=0,this.shield=0}takeDamage(e){if(!(this.isDead||this.invulnerableTimer>0)){if(this.shield>0){const t=Math.min(this.shield,e);if(this.shield-=t,e-=t,e<=0)return}this.health=Ao(this.health-e,0,this.maxHealth),this.health<=0&&(this.isDead=!0)}}heal(e){this.isDead||(this.health=Ao(this.health+e,0,this.maxHealth))}update(e){this.invulnerableTimer>0&&(this.invulnerableTimer-=e)}reset(){this.health=this.maxHealth,this.isDead=!1,this.damageMultiplier=1,this.invulnerableTimer=et.SPAWN_INVULNERABILITY,this.shield=0}}class j_{constructor(e,t){this.scene=e,this.world=t,this.coverObjects=[],this.coverBodies=[],this._createGround(),this._createWalls(),this._createCover(),this._createFloorDetails()}_createGround(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#1a1a2e",t.fillRect(0,0,512,512),t.strokeStyle="#2a2a4e",t.lineWidth=1;for(let l=0;l<=512;l+=32)t.beginPath(),t.moveTo(l,0),t.lineTo(l,512),t.stroke(),t.beginPath(),t.moveTo(0,l),t.lineTo(512,l),t.stroke();t.strokeStyle="rgba(0, 200, 255, 0.15)",t.lineWidth=2;for(let l=0;l<=512;l+=128)t.beginPath(),t.moveTo(l,0),t.lineTo(l,512),t.stroke(),t.beginPath(),t.moveTo(0,l),t.lineTo(512,l),t.stroke();t.fillStyle="rgba(0, 200, 255, 0.3)";for(let l=0;l<=512;l+=128)for(let c=0;c<=512;c+=128)t.beginPath(),t.arc(l,c,3,0,Math.PI*2),t.fill();const i=new Tc(e);i.wrapS=ps,i.wrapT=ps,i.repeat.set(St.SIZE/4,St.SIZE/4);const n=new qn(St.SIZE,St.SIZE),s=new Rt({map:i,roughness:.85,metalness:.15}),o=new We(n,s);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const a=new le({type:le.STATIC,shape:new c0});a.quaternion.setFromEuler(-Math.PI/2,0,0),this.world.addBody(a),this.groundBody=a}_createWalls(){const e=St.SIZE/2,t=St.WALL_HEIGHT,i=[16720469,52479,2293640,16755200],n=[{x:0,z:-e,ry:0},{x:0,z:e,ry:Math.PI},{x:-e,z:0,ry:Math.PI/2},{x:e,z:0,ry:-Math.PI/2}];for(let s=0;s<n.length;s++){const o=n[s],a=new Tt(St.SIZE,t,1),l=new Rt({color:1450302,roughness:.7,metalness:.3}),c=new We(a,l);c.position.set(o.x,t/2,o.z),c.rotation.y=o.ry,c.receiveShadow=!0,this.scene.add(c);const h=new Tt(St.SIZE,.15,1.05),d=new Rt({color:i[s],emissive:i[s],emissiveIntensity:2,roughness:.2}),u=new We(h,d);u.position.set(o.x,.08,o.z),u.rotation.y=o.ry,this.scene.add(u);const m=u.clone();m.position.y=t,this.scene.add(m);const g=new We(new Tt(St.SIZE,.06,1.03),new Rt({color:i[s],emissive:i[s],emissiveIntensity:.8,roughness:.2}));g.position.set(o.x,t*.4,o.z),g.rotation.y=o.ry,this.scene.add(g);const _=new le({type:le.STATIC,shape:new jn(new y(St.SIZE/2,t/2,.5))});_.position.set(o.x,t/2,o.z),_.quaternion.setFromEuler(0,o.ry,0),this.world.addBody(_)}}_createCover(){const e=St.SIZE/2-5,t=[{w:3,h:2.5,d:.5,name:"wall"},{w:1,h:3,d:1,name:"pillar"},{w:1.5,h:1.2,d:1.5,name:"crate"},{w:2,h:1.8,d:2,name:"block"},{w:.6,h:4,d:.6,name:"column"}],i=[16720469,52479,2293640,16755200,11158783,16737792,65450,16729258,4500223,11206468];for(let n=0;n<St.COVER_COUNT;n++){const s=t[n%t.length];let o,a;do o=ni(-e,e),a=ni(-e,e);while(Math.abs(o)<5&&Math.abs(a)<5);const l=new Tt(s.w,s.h,s.d),c=i[n%i.length],h=new Rt({color:1710654,roughness:.6,metalness:.4}),d=new We(l,h);d.position.set(o,s.h/2,a),d.rotation.y=ni(0,Math.PI*2),d.castShadow=!0,d.receiveShadow=!0,d.userData.isCover=!0,this.scene.add(d),this.coverObjects.push(d);const u=new Tt(s.w+.05,.06,s.d+.05),m=new Rt({color:c,emissive:c,emissiveIntensity:1.5,roughness:.2}),g=new We(u,m);g.position.set(o,s.h,a),g.rotation.y=d.rotation.y,this.scene.add(g);const _=new le({type:le.STATIC,shape:new jn(new y(s.w/2,s.h/2,s.d/2))});_.position.set(o,s.h/2,a),_.quaternion.copy(d.quaternion),this.world.addBody(_),this.coverBodies.push(_)}}_createFloorDetails(){const e=new Xn(4.8,5,64),t=new $t({color:52479,transparent:!0,opacity:.15,side:Ft}),i=new We(e,t);i.rotation.x=-Math.PI/2,i.position.y=.01,this.scene.add(i);const n=new We(new Xn(9.8,10,64),new $t({color:16720469,transparent:!0,opacity:.08,side:Ft}));n.rotation.x=-Math.PI/2,n.position.y=.01,this.scene.add(n)}}class K_{constructor(e){this.scene=e,e.fog=new No(St.FOG_COLOR,.012),e.background=new Re(St.FOG_COLOR);const t=new rg(1710654,.4);e.add(t);const i=new Qm(2245802,1118498,.5);e.add(i);const n=new sg(8952268,.8);n.position.set(10,25,10),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=1,n.shadow.camera.far=60,n.shadow.camera.left=-30,n.shadow.camera.right=30,n.shadow.camera.top=30,n.shadow.camera.bottom=-30,n.shadow.bias=-.001,e.add(n);const s=[16720469,52479,2293640,16755200],o=St.SIZE/2-5,a=[[-o,6,-o],[o,6,-o],[-o,6,o],[o,6,o]];for(let d=0;d<4;d++){const u=new Yn(s[d],3,45);u.position.set(...a[d]),e.add(u)}const l=new tg(4491519,2,40,Math.PI/4,.5,1);l.position.set(0,15,0),l.target.position.set(0,0,0),e.add(l),e.add(l.target);const c=[11141375,16737792,65416,16711782],h=[[0,4,-o+2],[0,4,o-2],[-o+2,4,0],[o-2,4,0]];for(let d=0;d<4;d++){const u=new Yn(c[d],1.5,25);u.position.set(...h[d]),e.add(u)}}}class $_{constructor(e){const t=document.createElement("canvas");t.width=2,t.height=512;const i=t.getContext("2d"),n=i.createLinearGradient(0,0,0,512);n.addColorStop(0,"#000011"),n.addColorStop(.15,"#0a0a2e"),n.addColorStop(.3,"#16213e"),n.addColorStop(.5,"#1a1a3e"),n.addColorStop(.7,"#0f3460"),n.addColorStop(.85,"#16213e"),n.addColorStop(1,"#1a1a2e"),i.fillStyle=n,i.fillRect(0,0,2,512);const s=new Tc(t),o=new fn(100,16,16),a=new $t({map:s,side:Ot}),l=new We(o,a);e.add(l)}}class Sr{constructor(e){this.name=e.name,this.damage=e.damage,this.fireRate=e.fireRate,this.maxAmmo=e.maxAmmo,this.magSize=e.magSize,this.reloadTime=e.reloadTime,this.spread=e.spread,this.baseSpread=e.spread,this.spreadIncrease=e.spreadIncrease||0,this.maxSpread=e.maxSpread||e.spread,this.auto=e.auto||!1,this.recoil=e.recoil||0,this.pellets=e.pellets||1,this.currentAmmo=e.magSize===1/0?1/0:e.magSize,this.reserveAmmo=e.ammo===1/0?1/0:e.ammo,this.cooldownTimer=0,this.reloading=!1,this.reloadTimer=0,this.currentSpread=e.spread,this.hasFiredThisPress=!1,this.mesh=this._createMesh(e.color),this.mesh.visible=!1,this.baseMeshPos=new U(.35,-.3,-.6),this.mesh.position.copy(this.baseMeshPos),this.swayOffset=new U,this.targetSwayOffset=new U}_createMesh(e){const t=new ln,i=new Tt(.08,.09,.45),n=new Rt({color:2763326,roughness:.3,metalness:.7}),s=new We(i,n);t.add(s);const o=new Tt(.04,.02,.3),a=new Rt({color:1710638,roughness:.2,metalness:.8}),l=new We(o,a);l.position.set(0,.055,-.05),t.add(l);const c=new Tt(.06,.13,.06),h=new Rt({color:2236962,roughness:.8,metalness:.1}),d=new We(c,h);d.position.set(0,-.1,.08),t.add(d);const u=new pr(.018,.022,.22,8),m=new Rt({color:4473941,roughness:.2,metalness:.9}),g=new We(u,m);g.rotation.x=Math.PI/2,g.position.set(0,.02,-.32),t.add(g);const _=new Tt(.085,.015,.2),p=new Rt({color:e,emissive:e,emissiveIntensity:.8,roughness:.2}),f=new We(_,p);f.position.set(0,-.035,0),t.add(f);const v=new pr(.01,.02,.03,6),x=new Rt({color:e,emissive:e,emissiveIntensity:1.5,roughness:.1}),M=new We(v,x);return M.rotation.x=Math.PI/2,M.position.set(0,.02,-.44),t.add(M),t}canFire(){return this.cooldownTimer<=0&&!this.reloading&&(this.currentAmmo>0||this.currentAmmo===1/0)}fire(){return this.canFire()?(this.currentAmmo!==1/0&&this.currentAmmo--,this.cooldownTimer=this.fireRate,this.currentSpread=Math.min(this.currentSpread+this.spreadIncrease,this.maxSpread),this.mesh.position.z=this.baseMeshPos.z+.05,!0):!1}reload(){this.reloading||this.currentAmmo===this.magSize||this.reserveAmmo===0||this.magSize===1/0||(this.reloading=!0,this.reloadTimer=this.reloadTime)}addAmmo(e){this.reserveAmmo!==1/0&&(this.reserveAmmo=Math.min(this.reserveAmmo+e,this.maxAmmo))}update(e,t,i){if(this.cooldownTimer>0&&(this.cooldownTimer-=e),this.reloading&&(this.reloadTimer-=e,this.reloadTimer<=0)){const n=this.magSize-this.currentAmmo;if(this.reserveAmmo===1/0)this.currentAmmo=this.magSize;else{const s=Math.min(n,this.reserveAmmo);this.currentAmmo+=s,this.reserveAmmo-=s}this.reloading=!1}this.spreadIncrease>0&&(this.currentSpread=Li(this.currentSpread,this.baseSpread,e*5)),this.mesh.position.z=Li(this.mesh.position.z,this.baseMeshPos.z,e*15),this.mesh.position.y=Li(this.mesh.position.y,this.baseMeshPos.y+(this.reloading?-.1:0),e*8),this.targetSwayOffset.x=-(t||0)*2e-4,this.targetSwayOffset.y=-(i||0)*2e-4,this.swayOffset.lerp(this.targetSwayOffset,e*8),this.mesh.position.x=this.baseMeshPos.x+this.swayOffset.x}equip(){this.mesh.visible=!0,this.mesh.position.set(this.baseMeshPos.x,this.baseMeshPos.y-.3,this.baseMeshPos.z)}holster(){this.mesh.visible=!1}reset(){this.currentAmmo=this.magSize===1/0?1/0:this.magSize,this.reserveAmmo=this.maxAmmo===1/0?1/0:this.maxAmmo,this.cooldownTimer=0,this.reloading=!1,this.reloadTimer=0,this.currentSpread=this.baseSpread}}class Z_ extends Sr{constructor(){super(cn.PISTOL),this.type="hitscan"}}class J_ extends Sr{constructor(){super(cn.SHOTGUN),this.type="hitscan"}}class Q_ extends Sr{constructor(){super(cn.ASSAULT_RIFLE),this.type="hitscan"}}class ev extends Sr{constructor(){super(cn.ROCKET_LAUNCHER),this.type="projectile",this.projectileSpeed=cn.ROCKET_LAUNCHER.projectileSpeed,this.splashDamage=cn.ROCKET_LAUNCHER.splashDamage,this.splashRadius=cn.ROCKET_LAUNCHER.splashRadius}}class tv{constructor(e,t){this.camera=e,this.scene=t,this.container=new ln,e.three.add(this.container),this.weapons=[new Z_,new J_,new Q_,new ev];for(const i of this.weapons)this.container.add(i.mesh);this.currentIndex=0,this.weapons[0].equip(),this.raycaster=new ag,this.raycaster.far=100}get current(){return this.weapons[this.currentIndex]}switchTo(e){e<0||e>=this.weapons.length||e===this.currentIndex||(this.weapons[this.currentIndex].holster(),this.currentIndex=e,this.weapons[this.currentIndex].equip())}handleInput(e){if(e.isKeyDown("Digit1")&&this.switchTo(0),e.isKeyDown("Digit2")&&this.switchTo(1),e.isKeyDown("Digit3")&&this.switchTo(2),e.isKeyDown("Digit4")&&this.switchTo(3),e.scrollDelta!==0){let t=this.currentIndex+Math.sign(e.scrollDelta);t<0&&(t=this.weapons.length-1),t>=this.weapons.length&&(t=0),this.switchTo(t)}e.isKeyDown("KeyR")&&this.current.reload()}fire(e,t){const i=this.current;if(!i.fire())return null;const n=[],s=new U;this.camera.three.getWorldPosition(s);const o=new U;if(this.camera.three.getWorldDirection(o),i.type==="hitscan"){const a=i.pellets||1;for(let l=0;l<a;l++){const c=o.clone();c.x+=(Math.random()-.5)*i.currentSpread,c.y+=(Math.random()-.5)*i.currentSpread,c.z+=(Math.random()-.5)*i.currentSpread,c.normalize(),this.raycaster.set(s,c);const h=this.raycaster.intersectObjects(e,!0);if(h.length>0)n.push({type:"hit",point:h[0].point,object:h[0].object,distance:h[0].distance,direction:c,damage:i.damage,isHeadshot:!1});else{const d=this.raycaster.intersectObjects(this.scene.children,!0);d.length>0?n.push({type:"world",point:d[0].point,direction:c}):n.push({type:"miss",direction:c,endPoint:s.clone().add(c.multiplyScalar(100))})}}}else i.type==="projectile"&&n.push({type:"projectile",origin:s.clone(),direction:o.clone(),speed:i.projectileSpeed,damage:i.damage,splashDamage:i.splashDamage,splashRadius:i.splashRadius});return this.camera.addRecoil(i.recoil),n}update(e,t,i){this.current.update(e,t,i)}reset(){for(const e of this.weapons)e.reset();this.weapons[this.currentIndex].holster(),this.currentIndex=0,this.weapons[0].equip()}}class us{constructor(e,t,i=0){this.factory=e,this.resetFn=t,this.pool=[],this.active=[];for(let n=0;n<i;n++)this.pool.push(this.factory())}get(){let e=this.pool.pop();return e||(e=this.factory()),this.active.push(e),e}release(e){const t=this.active.indexOf(e);t!==-1&&(this.active.splice(t,1),this.resetFn(e),this.pool.push(e))}releaseAll(){for(;this.active.length>0;){const e=this.active.pop();this.resetFn(e),this.pool.push(e)}}getActive(){return this.active}get activeCount(){return this.active.length}}const $e={IDLE:"IDLE",CHASE:"CHASE",ATTACK:"ATTACK",DYING:"DYING",DEAD:"DEAD"};class Es{constructor(e){this.config=e,this.name=e.name,this.maxHealth=e.health,this.health=e.health,this.damage=e.damage,this.speed=e.speed,this.points=e.points,this.state=$e.IDLE,this.attackCooldown=0,this.deathTimer=0,this.active=!1,this.healthScale=1,this.damageScale=1;const{x:t,y:i,z:n}=e.size,s=new Tt(t,i,n),o=new Rt({color:e.color,emissive:e.emissive,emissiveIntensity:.8,roughness:.3,metalness:.2,transparent:!0,opacity:1});this.mesh=new We(s,o),this.mesh.castShadow=!0,this.mesh.userData.enemy=this,this.mesh.userData.isEnemy=!0;const a=new Tt(t*.6,i*.12,n*.02),l=new $t({color:16777215});this.visor=new We(a,l),this.visor.position.set(0,i*.25,n/2+.01),this.mesh.add(this.visor),this.healthBarGroup=new ln;const c=new We(new qn(t*1.2,.1),new $t({color:1118481,transparent:!0,opacity:.7,side:Ft}));this.healthBarGroup.add(c),this.healthBarFill=new We(new qn(t*1.2,.08),new $t({color:e.color,side:Ft})),this.healthBarGroup.add(this.healthBarFill),this.healthBarGroup.position.y=i/2+.3,this.mesh.add(this.healthBarGroup),this.healthBarWidth=t*1.2,this.flashTimer=0,this.originalColor=e.color,this.originalEmissive=e.emissive,this.body=new le({mass:5,shape:new jn(new y(t/2,i/2,n/2)),fixedRotation:!0,linearDamping:.5}),this.body.userData={enemy:this}}activate(e,t=1,i=1){this.health=this.maxHealth*t,this.healthScale=t,this.damageScale=i,this.state=$e.CHASE,this.active=!0,this.deathTimer=0,this.attackCooldown=0,this.flashTimer=0,this.body.position.set(e.x,this.config.size.y/2,e.z),this.body.velocity.set(0,0,0),this.mesh.visible=!0,this.mesh.scale.set(1,1,1),this.mesh.material.opacity=1,this.mesh.material.transparent=!1,this.mesh.material.emissiveIntensity=.5,this.mesh.material.color.setHex(this.originalColor),this.mesh.material.emissive.setHex(this.originalEmissive),this.mesh.scale.set(.01,.01,.01),this.spawnTimer=.3}takeDamage(e){return this.state===$e.DYING||this.state===$e.DEAD?!1:(this.health-=e,this.flashTimer=.1,this.mesh.material.emissive.setHex(16777215),this.mesh.material.emissiveIntensity=2,this.health<=0?(this.die(),!0):!1)}die(){this.state=$e.DYING,this.deathTimer=.3,this.body.velocity.set(0,0,0),this.mesh.material.transparent=!0}update(e,t){if(!this.active)return;if(this.spawnTimer>0){this.spawnTimer-=e;const a=1-this.spawnTimer/.3;this.mesh.scale.setScalar(a);return}if(this.flashTimer>0&&(this.flashTimer-=e,this.flashTimer<=0&&(this.mesh.material.color.setHex(this.originalColor),this.mesh.material.emissive.setHex(this.originalEmissive),this.mesh.material.emissiveIntensity=.5)),this.state===$e.DYING){this.deathTimer-=e;const a=this.deathTimer/.3;this.mesh.scale.setScalar(Math.max(.01,a)),this.mesh.material.opacity=Math.max(0,a),this.deathTimer<=0&&(this.state=$e.DEAD,this.active=!1,this.mesh.visible=!1);return}this.attackCooldown-=e,this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion);const i=t.x-this.body.position.x,n=t.z-this.body.position.z,s=Math.atan2(i,n);this.mesh.rotation.y=s;const o=Math.max(0,this.health/(this.maxHealth*this.healthScale));this.healthBarFill.scale.x=o,this.healthBarFill.position.x=(o-1)*this.healthBarWidth*.5,this.healthBarGroup.rotation.y=-s}deactivate(){this.active=!1,this.state=$e.DEAD,this.mesh.visible=!1,this.body.velocity.set(0,0,0)}}class iv extends Es{constructor(){super(nt.GRUNT),this.leapCooldown=0}update(e,t){if(super.update(e,t),!this.active||this.state===$e.DYING||this.state===$e.DEAD||this.spawnTimer>0)return;const i=Ss(this.body.position,t),n=t.x-this.body.position.x,s=t.z-this.body.position.z,o=Math.sqrt(n*n+s*s)||1,a=(Math.random()-.5)*2,l=(Math.random()-.5)*2;return this.leapCooldown>0&&(this.leapCooldown-=e),i>4&&i<10&&this.leapCooldown<=0?(this.leapCooldown=ni(3,6),this.body.velocity.x=n/o*this.speed*2.5,this.body.velocity.z=s/o*this.speed*2.5,this.body.velocity.y=5):(this.body.velocity.x=(n/o+a*.1)*this.speed,this.body.velocity.z=(s/o+l*.1)*this.speed),i<nt.GRUNT.attackRange&&this.attackCooldown<=0?(this.state=$e.ATTACK,this.attackCooldown=nt.GRUNT.attackCooldown,{type:"melee",damage:this.damage*this.damageScale}):(this.state=$e.CHASE,null)}}class nv extends Es{constructor(){super(nt.SHOOTER),this.strafeDir=Math.random()>.5?1:-1,this.strafeTimer=0}update(e,t){if(super.update(e,t),!this.active||this.state===$e.DYING||this.state===$e.DEAD||this.spawnTimer>0)return;const i=Ss(this.body.position,t),n=t.x-this.body.position.x,s=t.z-this.body.position.z,o=Math.sqrt(n*n+s*s)||1,a=n/o,l=s/o;if(this.strafeTimer-=e,this.strafeTimer<=0&&(this.strafeDir*=-1,this.strafeTimer=ni(1,3)),i>nt.SHOOTER.preferredRange+3?(this.body.velocity.x=a*this.speed,this.body.velocity.z=l*this.speed):i<nt.SHOOTER.preferredRange-3?(this.body.velocity.x=-a*this.speed*.5,this.body.velocity.z=-l*this.speed*.5):(this.body.velocity.x=-l*this.strafeDir*this.speed*.7,this.body.velocity.z=a*this.strafeDir*this.speed*.7),this.attackCooldown<=0&&i<nt.SHOOTER.attackRange){this.state=$e.ATTACK,this.attackCooldown=nt.SHOOTER.attackCooldown;const c=t.y-this.body.position.y,h=Math.sqrt(n*n+c*c+s*s)||1;return{type:"projectile",origin:new U(this.body.position.x,this.body.position.y,this.body.position.z),direction:new U(n/h,c/h,s/h),speed:nt.SHOOTER.projectileSpeed,damage:this.damage*this.damageScale}}return this.state=$e.CHASE,null}}class sv extends Es{constructor(){super(nt.TANK),this.isCharging=!1,this.chargeTimer=0,this.telegraphTimer=0}update(e,t){if(super.update(e,t),!this.active||this.state===$e.DYING||this.state===$e.DEAD||this.spawnTimer>0)return;const i=Ss(this.body.position,t),n=t.x-this.body.position.x,s=t.z-this.body.position.z,o=Math.sqrt(n*n+s*s)||1,a=n/o,l=s/o;return this.telegraphTimer>0?(this.telegraphTimer-=e,this.mesh.material.emissiveIntensity=1+Math.sin(this.telegraphTimer*20)*.5,this.body.velocity.x*=.9,this.body.velocity.z*=.9,this.telegraphTimer<=0&&(this.isCharging=!0,this.chargeTimer=1,this.chargeDirection={x:a,z:l}),null):this.isCharging?(this.chargeTimer-=e,this.body.velocity.x=this.chargeDirection.x*nt.TANK.chargeSpeed,this.body.velocity.z=this.chargeDirection.z*nt.TANK.chargeSpeed,(this.chargeTimer<=0||i<nt.TANK.chargeDistance)&&(this.isCharging=!1,this.attackCooldown=nt.TANK.chargeCooldown,this.mesh.material.emissiveIntensity=.5,i<nt.TANK.chargeDistance)?{type:"melee",damage:this.damage*this.damageScale}:null):(this.body.velocity.x=a*this.speed,this.body.velocity.z=l*this.speed,i<nt.TANK.attackRange&&this.attackCooldown<=0?(this.telegraphTimer=.8,this.state=$e.ATTACK,null):i<nt.TANK.chargeDistance&&this.attackCooldown<=0?(this.attackCooldown=1.5,{type:"melee",damage:this.damage*this.damageScale*.5}):(this.state=$e.CHASE,null))}}class rv extends Es{constructor(){super(nt.EXPLODER),this.pulseTime=0}update(e,t){if(super.update(e,t),!this.active||this.state===$e.DYING||this.state===$e.DEAD||this.spawnTimer>0)return;const i=Ss(this.body.position,t),n=t.x-this.body.position.x,s=t.z-this.body.position.z,o=Math.sqrt(n*n+s*s)||1;this.pulseTime+=e*(3+(1-Math.min(i/15,1))*15),this.mesh.material.emissiveIntensity=.8+Math.sin(this.pulseTime)*.6;const a=1+Math.sin(this.pulseTime)*.08;return this.spawnTimer<=0&&this.mesh.scale.set(a,a,a),this.body.velocity.x=n/o*this.speed,this.body.velocity.z=s/o*this.speed,i<nt.EXPLODER.attackRange?(this.die(),{type:"explosion",position:new U(this.body.position.x,this.body.position.y,this.body.position.z),damage:this.damage*this.damageScale,radius:nt.EXPLODER.explosionRadius}):(this.state=$e.CHASE,null)}}class ov extends Es{constructor(){super(nt.TELEPORTER),this.teleportCooldown=2,this.flickerTimer=0,this.isTeleporting=!1,this.teleportPhase=0}update(e,t){if(super.update(e,t),!this.active||this.state===$e.DYING||this.state===$e.DEAD||this.spawnTimer>0)return;const i=Ss(this.body.position,t),n=t.x-this.body.position.x,s=t.z-this.body.position.z,o=Math.sqrt(n*n+s*s)||1;if(this.flickerTimer+=e,this.mesh.material.opacity=.7+Math.sin(this.flickerTimer*8)*.3,this.teleportCooldown>0&&(this.teleportCooldown-=e),this.isTeleporting){if(this.teleportPhase-=e,this.mesh.material.opacity=this.teleportPhase*2,this.teleportPhase<=0){const a=Math.atan2(n,s)+Math.PI+(Math.random()-.5)*1.5,l=ni(3,nt.TELEPORTER.teleportRange);this.body.position.x=t.x+Math.sin(a)*l,this.body.position.z=t.z+Math.cos(a)*l;const c=28;this.body.position.x=Math.max(-c,Math.min(c,this.body.position.x)),this.body.position.z=Math.max(-c,Math.min(c,this.body.position.z)),this.isTeleporting=!1,this.teleportCooldown=nt.TELEPORTER.teleportCooldown,this.mesh.material.opacity=1}return null}return i>6&&i<20&&this.teleportCooldown<=0?(this.isTeleporting=!0,this.teleportPhase=.4,this.body.velocity.set(0,0,0),null):(this.body.velocity.x=n/o*this.speed,this.body.velocity.z=s/o*this.speed,i<nt.TELEPORTER.attackRange&&this.attackCooldown<=0?(this.state=$e.ATTACK,this.attackCooldown=nt.TELEPORTER.attackCooldown,this.teleportCooldown=.5,{type:"melee",damage:this.damage*this.damageScale}):(this.state=$e.CHASE,null))}}class av{constructor(e,t){this.scene=e,this.world=t,this.enemies=[],this.enemyMeshes=[],this.pools={grunt:new us(()=>this._createEnemy("grunt"),i=>this._resetEnemy(i),20),shooter:new us(()=>this._createEnemy("shooter"),i=>this._resetEnemy(i),10),tank:new us(()=>this._createEnemy("tank"),i=>this._resetEnemy(i),5),exploder:new us(()=>this._createEnemy("exploder"),i=>this._resetEnemy(i),15),teleporter:new us(()=>this._createEnemy("teleporter"),i=>this._resetEnemy(i),8)}}_createEnemy(e){let t;switch(e){case"grunt":t=new iv;break;case"shooter":t=new nv;break;case"tank":t=new sv;break;case"exploder":t=new rv;break;case"teleporter":t=new ov;break}return this.scene.add(t.mesh),t.mesh.visible=!1,this.world.addBody(t.body),t.body.sleep(),t}_resetEnemy(e){e.deactivate(),e.body.sleep(),e.body.position.set(0,-10,0)}spawn(e,t=1,i=1){const n=this.pools[e].get(),s=this._getSpawnPosition();return n.activate(s,t,i),n.body.wakeUp(),this.enemies.push(n),this.enemyMeshes.push(n.mesh),n}_getSpawnPosition(){const e=St.SIZE/2-2,t=Math.floor(Math.random()*4);let i,n;switch(t){case 0:i=ni(-e,e),n=-e;break;case 1:i=ni(-e,e),n=e;break;case 2:i=-e,n=ni(-e,e);break;case 3:i=e,n=ni(-e,e);break}return{x:i,z:n}}update(e,t){const i=[];for(let n=this.enemies.length-1;n>=0;n--){const s=this.enemies[n],o=s.update(e,t);if(o&&i.push(o),!s.active){this.enemies.splice(n,1);const a=this.enemyMeshes.indexOf(s.mesh);a!==-1&&this.enemyMeshes.splice(a,1);const l=s.name.toLowerCase();this.pools[l].release(s)}}return i}getActiveCount(){return this.enemies.length}getEnemyMeshes(){return this.enemyMeshes}getEnemies(){return this.enemies}findEnemyByMesh(e){let t=e;for(;t;){if(t.userData&&t.userData.enemy)return t.userData.enemy;t=t.parent}return null}reset(){for(const e of[...this.enemies]){e.deactivate();const t=e.name.toLowerCase(),i=this.enemies.indexOf(e);i!==-1&&this.enemies.splice(i,1);const n=this.enemyMeshes.indexOf(e.mesh);n!==-1&&this.enemyMeshes.splice(n,1),this.pools[t].release(e)}this.enemies=[],this.enemyMeshes=[]}}class lv{constructor(e){this.enemyManager=e,this.currentWave=0,this.state="waiting",this.spawnQueue=[],this.spawnTimer=0,this.breatherTimer=0,this.waveAnnouncedCallback=null,this.waveClearCallback=null,this.totalEnemiesThisWave=0,this.enemiesKilledThisWave=0,this.waveType="normal"}onWaveAnnounced(e){this.waveAnnouncedCallback=e}onWaveClear(e){this.waveClearCallback=e}start(){this.currentWave=0,this.nextWave()}nextWave(){this.currentWave++,this.state="breather",this.breatherTimer=this.currentWave===1?1:Dt.BREATHER_TIME,this.enemiesKilledThisWave=0,this.currentWave%Dt.BOSS_WAVE_INTERVAL===0?this.waveType="boss":this.currentWave>2&&this.currentWave%3===0?this.waveType="rush":this.currentWave>4&&this.currentWave%4===1?this.waveType="elite":this.currentWave>3&&this.currentWave%7===0?this.waveType="swarm":this.waveType="normal",console.log(`[WaveManager] Wave ${this.currentWave} incoming — type: ${this.waveType}`),this.waveAnnouncedCallback&&this.waveAnnouncedCallback(this.currentWave)}_getWaveConfig(e){let t=Dt.BASE_GRUNTS+(e-1)*Dt.GRUNT_INCREMENT,i=e>=Dt.SHOOTER_UNLOCK_WAVE?Math.floor((e-1)*1.5):0,n=e>=Dt.TANK_UNLOCK_WAVE?Math.floor((e-3)*.8):0,s=e>=Dt.EXPLODER_UNLOCK_WAVE?Math.floor((e-2)*1.2):0,o=e>=Dt.TELEPORTER_UNLOCK_WAVE?Math.floor((e-4)*.6):0;const l=e%Dt.BOSS_WAVE_INTERVAL===0?Math.min(3,Math.floor(e/Dt.BOSS_WAVE_INTERVAL)):0,c=Math.max(0,e-Dt.HEALTH_SCALE_START_WAVE);let h=1+c*Dt.HEALTH_SCALE_PER_WAVE,d=1+c*Dt.HEALTH_SCALE_PER_WAVE*.5;switch(this.waveType){case"rush":t=Math.floor(t*2),s=Math.floor(s*1.5),i=Math.floor(i*.5),n=0,o=Math.floor(o*.5);break;case"elite":t=Math.floor(t*.3),i=Math.floor(i*.5),n=Math.max(n,Math.floor(e/2)),o=Math.floor(o*1.5),s=0,h*=1.5,d*=1.3;break;case"swarm":t=Math.floor(t*2.5),s=Math.floor(s*2),i=Math.floor(i*1.5),h*=.6;break}return{grunts:t,shooters:i,tanks:n,exploders:s,teleporters:o,bossCount:l,healthScale:h,damageScale:d}}_startSpawning(){const e=this._getWaveConfig(this.currentWave);this.spawnQueue=[];for(let t=0;t<e.grunts;t++)this.spawnQueue.push({type:"grunt",healthScale:e.healthScale,damageScale:e.damageScale});for(let t=0;t<e.shooters;t++)this.spawnQueue.push({type:"shooter",healthScale:e.healthScale,damageScale:e.damageScale});for(let t=0;t<e.tanks;t++)this.spawnQueue.push({type:"tank",healthScale:e.healthScale,damageScale:e.damageScale});for(let t=0;t<e.exploders;t++)this.spawnQueue.push({type:"exploder",healthScale:e.healthScale,damageScale:e.damageScale});for(let t=0;t<e.teleporters;t++)this.spawnQueue.push({type:"teleporter",healthScale:e.healthScale,damageScale:e.damageScale});for(let t=0;t<e.bossCount;t++)this.spawnQueue.push({type:"tank",healthScale:e.healthScale*3,damageScale:e.damageScale*1.5});for(let t=this.spawnQueue.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[this.spawnQueue[t],this.spawnQueue[i]]=[this.spawnQueue[i],this.spawnQueue[t]]}this.totalEnemiesThisWave=this.spawnQueue.length,this.spawnTimer=0,this.state="spawning"}onEnemyKilled(){this.enemiesKilledThisWave++}update(e){if(this.state==="breather"){this.breatherTimer-=e,this.breatherTimer<=0&&this._startSpawning();return}if(this.state==="spawning"){if(this.spawnTimer-=e,this.spawnTimer<=0&&this.spawnQueue.length>0){const t=this.spawnQueue.shift();this.enemyManager.spawn(t.type,t.healthScale,t.damageScale),this.spawnTimer=Dt.SPAWN_STAGGER}this.spawnQueue.length===0&&(this.state="active");return}this.state==="active"&&this.enemyManager.getActiveCount()===0&&(this.waveClearCallback&&this.waveClearCallback(this.currentWave),this.nextWave())}reset(){this.currentWave=0,this.state="waiting",this.spawnQueue=[],this.spawnTimer=0,this.breatherTimer=0,this.totalEnemiesThisWave=0,this.enemiesKilledThisWave=0,this.waveType="normal"}}class cv{constructor(){this.score=0,this.combo=1,this.comboTimer=0,this.highScore=parseInt(localStorage.getItem("arenaShooterHighScore")||"0",10),this.onScoreChange=null,this.onComboChange=null,this.onMultiKill=null,this.multiKillTimer=0,this.multiKillCount=0,this.totalKills=0,this.headshotStreak=0}addKill(e,t=!1){this.totalKills++,this.multiKillCount++,this.multiKillTimer=1.5;let i=e*this.combo;if(t?(i*=po.HEADSHOT_MULTIPLIER,this.headshotStreak++,this.headshotStreak>=3&&(i*=1.5)):this.headshotStreak=0,this.multiKillCount>=2){const n=1+(this.multiKillCount-1)*.5;if(i*=n,this.onMultiKill){const o=["","","DOUBLE KILL","TRIPLE KILL","QUAD KILL","RAMPAGE"][Math.min(this.multiKillCount,5)];this.onMultiKill(o,this.multiKillCount)}}this.score+=Math.round(i),this.combo+=po.COMBO_INCREMENT,this.comboTimer=po.COMBO_TIMEOUT,this.onScoreChange&&this.onScoreChange(this.score),this.onComboChange&&this.onComboChange(this.combo)}addWaveClearBonus(e){const t=Dt.WAVE_CLEAR_BONUS_MULTIPLIER*e;this.score+=t,console.log(`[ScoreManager] Wave ${e} clear bonus: +${t}`),this.onScoreChange&&this.onScoreChange(this.score)}update(e){this.comboTimer>0&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=1,this.onComboChange&&this.onComboChange(this.combo))),this.multiKillTimer>0&&(this.multiKillTimer-=e,this.multiKillTimer<=0&&(this.multiKillCount=0))}saveHighScore(){this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("arenaShooterHighScore",String(this.highScore)),console.log("[ScoreManager] New high score:",this.highScore))}reset(){this.score=0,this.combo=1,this.comboTimer=0,this.multiKillTimer=0,this.multiKillCount=0,this.totalKills=0,this.headshotStreak=0}}const jt={HEALTH:"health",AMMO:"ammo",SPEED:"speed",DAMAGE:"damage",SHIELD:"shield",TIMESLOW:"timeslow"},hv={[jt.HEALTH]:{color:2293538,emissive:17408,label:"+HP"},[jt.AMMO]:{color:16776994,emissive:4473856,label:"+AMMO"},[jt.SPEED]:{color:2263295,emissive:8772,label:"SPEED"},[jt.DAMAGE]:{color:16720418,emissive:4456448,label:"DMG"},[jt.SHIELD]:{color:4521983,emissive:17476,label:"SHIELD"},[jt.TIMESLOW]:{color:16755455,emissive:4456516,label:"SLOW-MO"}};class uv{constructor(e){this.scene=e,this.active=!1,this.type=null,this.lifeTimer=0;const t=new Tt(Ct.SIZE,Ct.SIZE,Ct.SIZE),i=new Rt({color:16777215,emissive:4473924,emissiveIntensity:1,roughness:.3});this.mesh=new We(t,i),this.mesh.castShadow=!0,this.mesh.userData.isPowerUp=!0,this.mesh.userData.powerup=this,this.mesh.visible=!1,e.add(this.mesh),this.baseY=Ct.FLOAT_HEIGHT,this.time=0}activate(e,t){this.type=e,this.active=!0,this.lifeTimer=15,this.time=Math.random()*Math.PI*2;const i=hv[e];this.mesh.material.color.setHex(i.color),this.mesh.material.emissive.setHex(i.emissive),this.mesh.position.set(t.x,this.baseY,t.z),this.mesh.visible=!0}update(e){this.active&&(this.time+=e,this.lifeTimer-=e,this.mesh.position.y=this.baseY+Math.sin(this.time*Ct.BOB_SPEED)*Ct.BOB_AMOUNT,this.mesh.rotation.y+=Ct.ROTATE_SPEED*e,this.lifeTimer<3&&(this.mesh.visible=Math.sin(this.lifeTimer*10)>0),this.lifeTimer<=0&&this.deactivate())}deactivate(){this.active=!1,this.mesh.visible=!1}}class dv{constructor(e){this.scene=e,this.powerups=[],this.activePowerUps=[],this.weaponManager=null;for(let t=0;t<20;t++)this.powerups.push(new uv(e));this.speedBoostTimer=0,this.damageBoostTimer=0,this.timeSlowTimer=0,this.timeSlowFactor=1,this.onCollect=null}trySpawn(e){if(Math.random()>Ct.DROP_CHANCE)return;const t=Object.values(jt),i=t[Math.floor(Math.random()*t.length)],n=this.powerups.find(s=>!s.active);n&&(n.activate(i,e),this.activePowerUps.push(n))}setWeaponManager(e){this.weaponManager=e}collect(e,t,i){if(!e.active)return;switch(e.type){case jt.HEALTH:t.heal(Ct.HEALTH_AMOUNT);break;case jt.AMMO:const s=this.weaponManager?this.weaponManager.current:null;if(!s)break;s.addAmmo(s.magSize*2);break;case jt.SPEED:this.speedBoostTimer=Ct.SPEED_DURATION,i.speedMultiplier=Ct.SPEED_MULTIPLIER;break;case jt.DAMAGE:this.damageBoostTimer=Ct.DAMAGE_DURATION,t.damageMultiplier=Ct.DAMAGE_MULTIPLIER;break;case jt.SHIELD:t.shield=(t.shield||0)+Ct.SHIELD_AMOUNT;break;case jt.TIMESLOW:this.timeSlowTimer=Ct.TIMESLOW_DURATION,this.timeSlowFactor=Ct.TIMESLOW_FACTOR;break}e.deactivate();const n=this.activePowerUps.indexOf(e);n!==-1&&this.activePowerUps.splice(n,1),this.onCollect&&this.onCollect(e.type)}update(e,t,i,n){for(let s=this.activePowerUps.length-1;s>=0;s--){const o=this.activePowerUps[s];if(o.update(e),!o.active){this.activePowerUps.splice(s,1);continue}const a=o.mesh.position.x-t.x,l=o.mesh.position.z-t.z;a*a+l*l<2.5&&this.collect(o,i,n)}this.speedBoostTimer>0&&(this.speedBoostTimer-=e,this.speedBoostTimer<=0&&(n.speedMultiplier=1)),this.damageBoostTimer>0&&(this.damageBoostTimer-=e,this.damageBoostTimer<=0&&(i.damageMultiplier=1)),this.timeSlowTimer>0&&(this.timeSlowTimer-=e,this.timeSlowTimer<=0&&(this.timeSlowFactor=1))}reset(){for(const e of this.activePowerUps)e.deactivate();this.activePowerUps=[],this.speedBoostTimer=0,this.damageBoostTimer=0,this.timeSlowTimer=0,this.timeSlowFactor=1}}class fv{constructor(e){this.scene=e,this.zones=[],this.spawnTimer=Ht.INTERVAL,this.currentWave=0}setWave(e){this.currentWave=e}update(e,t){if(this.currentWave<Ht.MIN_WAVE)return null;this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=Ht.INTERVAL-Math.min(this.currentWave*.3,4),this._spawnZone(t));let i=0;for(let n=this.zones.length-1;n>=0;n--){const s=this.zones[n];if(s.timer-=e,s.phase==="warning"){const o=1-s.timer/Ht.WARNING_TIME;s.ring.material.opacity=.15+Math.sin(o*20)*.1,s.ring.scale.setScalar(1+Math.sin(o*10)*.03),s.timer<=0&&(s.phase="active",s.timer=Ht.ACTIVE_TIME,s.ring.material.color.setHex(16720384),s.ring.material.emissive.setHex(16720384),s.ring.material.emissiveIntensity=2,s.ring.material.opacity=.5,s.light.intensity=8,s.light.color.setHex(16720384))}else if(s.phase==="active"){if(s.ring.material.opacity=.5*(s.timer/Ht.ACTIVE_TIME),s.light.intensity=8*(s.timer/Ht.ACTIVE_TIME),!s.damaged){const o=t.x-s.position.x,a=t.z-s.position.z;Math.sqrt(o*o+a*a)<Ht.RADIUS&&(i+=Ht.DAMAGE,s.damaged=!0)}s.timer<=0&&(this.scene.remove(s.ring),this.scene.remove(s.light),s.ring.geometry.dispose(),s.ring.material.dispose(),this.zones.splice(n,1))}}return i>0?i:null}_spawnZone(e){const t=St.SIZE/2-5;let i,n;do i=ni(-t,t),n=ni(-t,t);while(Math.sqrt((i-e.x)**2+(n-e.z)**2)<5||Math.sqrt((i-e.x)**2+(n-e.z)**2)>20);const s=new Xn(Ht.RADIUS-.3,Ht.RADIUS,32),o=new Rt({color:16737792,emissive:16729088,emissiveIntensity:1,transparent:!0,opacity:.2,side:Ft}),a=new We(s,o);a.rotation.x=-Math.PI/2,a.position.set(i,.05,n),this.scene.add(a);const l=new Yn(16737792,2,Ht.RADIUS*2);l.position.set(i,1,n),this.scene.add(l),this.zones.push({position:{x:i,z:n},ring:a,light:l,phase:"warning",timer:Ht.WARNING_TIME,damaged:!1})}reset(){for(const e of this.zones)this.scene.remove(e.ring),this.scene.remove(e.light),e.ring.geometry.dispose(),e.ring.material.dispose();this.zones=[],this.spawnTimer=Ht.INTERVAL,this.currentWave=0}}class pv{constructor(e){this.scene=e,this.maxParticles=Vi.PARTICLE_COUNT;const t=new fn(.03,4,4),i=new $t({color:16777215});this.instancedMesh=new $m(t,i,this.maxParticles),this.instancedMesh.instanceMatrix.setUsage(Gh),this.instancedMesh.frustumCulled=!1,e.add(this.instancedMesh),this.particles=[];for(let n=0;n<this.maxParticles;n++)this.particles.push({active:!1,position:new U,velocity:new U,life:0,maxLife:0,color:new Re,scale:1,gravity:!0});this.dummy=new ht,this.colorAttr=new To(new Float32Array(this.maxParticles*3),3),this.instancedMesh.instanceColor=this.colorAttr}emit(e,t,i={}){const{color:n=16746496,speed:s=5,life:o=.5,spread:a=1,gravity:l=!0,scale:c=1,direction:h=null}=i;let d=0;for(let u=0;u<this.maxParticles&&d<t;u++){const m=this.particles[u];m.active||(m.active=!0,m.position.copy(e),m.life=o+Math.random()*o*.5,m.maxLife=m.life,m.color.setHex(n),m.scale=c,m.gravity=l,h?(m.velocity.copy(h).multiplyScalar(s),m.velocity.x+=(Math.random()-.5)*a*s,m.velocity.y+=(Math.random()-.5)*a*s,m.velocity.z+=(Math.random()-.5)*a*s):m.velocity.set((Math.random()-.5)*s*a,Math.random()*s,(Math.random()-.5)*s*a),d++)}}update(e){for(let t=0;t<this.maxParticles;t++){const i=this.particles[t];if(!i.active){this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(t,this.dummy.matrix);continue}if(i.life-=e,i.life<=0){i.active=!1,this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(t,this.dummy.matrix);continue}i.gravity&&(i.velocity.y-=15*e),i.position.addScaledVector(i.velocity,e);const n=i.life/i.maxLife,s=i.scale*n;this.dummy.position.copy(i.position),this.dummy.scale.set(s,s,s),this.dummy.updateMatrix(),this.instancedMesh.setMatrixAt(t,this.dummy.matrix),this.colorAttr.setXYZ(t,i.color.r,i.color.g,i.color.b)}this.instancedMesh.instanceMatrix.needsUpdate=!0,this.colorAttr.needsUpdate=!0}reset(){for(const e of this.particles)e.active=!1}}class mv{constructor(e,t,i){this.scene=e,this.camera=t,this.particles=i,this.muzzleLight=new Yn(16755200,0,10),t.three.add(this.muzzleLight),this.muzzleLight.position.set(.3,-.2,-1),this.muzzleFlashTimer=0,this.trails=[],this.trailMaterial=new Sc({color:16777096,transparent:!0,opacity:.6}),this.explosions=[],this.damageVignetteEl=document.getElementById("damage-vignette"),this.hitMarkerEl=document.getElementById("hit-marker"),this.hitMarkerTimer=0,this.damageVignetteTimer=0,this.crosshairEl=document.getElementById("crosshair"),this.crosshairGap=4,this.targetGap=4,this.screenFlashEl=document.getElementById("screen-flash"),this.screenFlashTimer=0}muzzleFlash(){this.muzzleFlashTimer=Vi.MUZZLE_FLASH_DURATION,this.muzzleLight.intensity=3}bulletTrail(e,t){const i=new Bt().setFromPoints([e,t]),n=new Zm(i,this.trailMaterial.clone());this.scene.add(n),this.trails.push({line:n,timer:Vi.BULLET_TRAIL_DURATION})}impact(e,t=!1){const i=t?16729156:16746496;this.particles.emit(e,8,{color:i,speed:4,life:.3,spread:.8,scale:t?1.5:1})}explosion(e){const t=new fn(.5,8,8),i=new $t({color:16737792,transparent:!0,opacity:.8}),n=new We(t,i);n.position.copy(e),this.scene.add(n);const s=new Yn(16729088,5,15);s.position.copy(e),this.scene.add(s),this.explosions.push({sphere:n,light:s,timer:.4,maxTimer:.4}),this.particles.emit(e,30,{color:16729088,speed:10,life:.6,spread:1,scale:2}),this.particles.emit(e,15,{color:16755200,speed:6,life:.8,spread:1,scale:1.5}),this.camera.addShake(2,.3),this.camera.addFOVPunch(5)}hitMarker(e=!1){this.hitMarkerTimer=e?Vi.KILL_MARKER_DURATION:Vi.HIT_MARKER_DURATION,this.hitMarkerEl.classList.add("show"),e?this.hitMarkerEl.classList.add("kill"):this.hitMarkerEl.classList.remove("kill"),this.crosshairEl.classList.add("hit")}damageVignette(e=1){this.damageVignetteTimer=Vi.DAMAGE_VIGNETTE_DURATION,this.damageVignetteEl.style.opacity=Math.min(.6,e*.3)}setCrosshairSpread(e){this.targetGap=4+e*200}screenFlash(e=16777215){if(this.screenFlashEl){const t=new Re(e);this.screenFlashEl.style.backgroundColor=`rgba(${Math.round(t.r*255)}, ${Math.round(t.g*255)}, ${Math.round(t.b*255)}, 0.4)`,this.screenFlashEl.style.opacity="1",this.screenFlashTimer=.3}}update(e){this.muzzleFlashTimer>0&&(this.muzzleFlashTimer-=e,this.muzzleFlashTimer<=0&&(this.muzzleLight.intensity=0));for(let i=this.trails.length-1;i>=0;i--){const n=this.trails[i];n.timer-=e,n.line.material.opacity=n.timer/Vi.BULLET_TRAIL_DURATION,n.timer<=0&&(this.scene.remove(n.line),n.line.geometry.dispose(),n.line.material.dispose(),this.trails.splice(i,1))}for(let i=this.explosions.length-1;i>=0;i--){const n=this.explosions[i];n.timer-=e;const s=1-n.timer/n.maxTimer;n.sphere.scale.setScalar(1+s*8),n.sphere.material.opacity=1-s,n.light.intensity=5*(1-s),n.timer<=0&&(this.scene.remove(n.sphere),this.scene.remove(n.light),n.sphere.geometry.dispose(),n.sphere.material.dispose(),this.explosions.splice(i,1))}this.hitMarkerTimer>0&&(this.hitMarkerTimer-=e,this.hitMarkerTimer<=0&&(this.hitMarkerEl.classList.remove("show","kill"),this.crosshairEl.classList.remove("hit"))),this.damageVignetteTimer>0&&(this.damageVignetteTimer-=e,this.damageVignetteTimer<=0&&(this.damageVignetteEl.style.opacity=0)),this.crosshairGap+=(this.targetGap-this.crosshairGap)*e*15;const t=this.crosshairEl.querySelectorAll(".crosshair-line");t[0].style.bottom=`calc(50% + ${this.crosshairGap}px)`,t[1].style.top=`calc(50% + ${this.crosshairGap}px)`,t[2].style.right=`calc(50% + ${this.crosshairGap}px)`,t[3].style.left=`calc(50% + ${this.crosshairGap}px)`,this.screenFlashTimer>0&&(this.screenFlashTimer-=e,this.screenFlashEl&&(this.screenFlashEl.style.opacity=String(Math.max(0,this.screenFlashTimer/.3))))}reset(){for(const e of this.trails)this.scene.remove(e.line),e.line.geometry.dispose(),e.line.material.dispose();this.trails=[];for(const e of this.explosions)this.scene.remove(e.sphere),this.scene.remove(e.light);this.explosions=[],this.muzzleLight.intensity=0,this.damageVignetteEl.style.opacity=0,this.hitMarkerEl.classList.remove("show","kill"),this.crosshairEl.classList.remove("hit")}}class gv{constructor(){this.healthBar=document.getElementById("health-bar"),this.healthText=document.getElementById("health-text"),this.shieldBar=document.getElementById("shield-bar"),this.ammoText=document.getElementById("ammo-text"),this.ammoReserve=document.getElementById("ammo-reserve"),this.weaponName=document.getElementById("weapon-name"),this.waveText=document.getElementById("wave-text"),this.waveAnnounce=document.getElementById("wave-announce"),this.scoreText=document.getElementById("score-text"),this.comboText=document.getElementById("combo-text"),this.killFeed=document.getElementById("kill-feed"),this.speedIndicator=document.getElementById("speed-indicator"),this.damageIndicator=document.getElementById("damage-indicator"),this.hud=document.getElementById("hud"),this.dashBar=document.getElementById("dash-bar"),this.fpsCounter=document.getElementById("fps-counter"),this.shieldIndicator=document.getElementById("shield-indicator"),this.timeSlowIndicator=document.getElementById("timeslow-indicator"),this.ultimateBar=document.getElementById("ultimate-bar"),this.ultimateText=document.getElementById("ultimate-text"),this.screenFlashEl=document.getElementById("screen-flash"),this.waveAnnounceTimer=0,this.fpsFrames=0,this.fpsTime=0,this.fpsDisplay=0}updateHealth(e,t,i=0){const n=e/t*100;if(this.healthBar.style.width=n+"%",this.healthText.textContent=Math.round(e),n>60?(this.healthBar.style.background="linear-gradient(90deg, #00ff88, #22ffaa)",this.healthBar.style.boxShadow="0 0 8px rgba(0, 255, 136, 0.3)"):n>30?(this.healthBar.style.background="linear-gradient(90deg, #ffaa00, #ffcc00)",this.healthBar.style.boxShadow="0 0 8px rgba(255, 170, 0, 0.3)"):(this.healthBar.style.background="linear-gradient(90deg, #ff2255, #ff4466)",this.healthBar.style.boxShadow="0 0 12px rgba(255, 34, 85, 0.5)"),this.shieldBar)if(i>0){const s=Math.min(i/t*100,100);this.shieldBar.style.width=s+"%"}else this.shieldBar.style.width="0%"}updateAmmo(e,t,i){this.weaponName.textContent=i,e===1/0?(this.ammoText.textContent="∞",this.ammoReserve.textContent=""):(this.ammoText.textContent=e,this.ammoReserve.textContent=t===1/0?"":`/ ${t}`),e!==1/0&&e<=5?this.ammoText.classList.add("low"):this.ammoText.classList.remove("low")}updateWave(e){this.waveText.textContent=`Wave ${e}`}announceWave(e,t=""){this.waveAnnounce.textContent=`WAVE ${e}${t}`,this.waveAnnounce.classList.add("show"),this.waveAnnounceTimer=2.5}updateScore(e){this.scoreText.textContent=e.toLocaleString()}updateCombo(e){e>1?(this.comboText.textContent=`×${e.toFixed(1)}`,this.comboText.classList.add("active")):this.comboText.classList.remove("active")}addKillFeedItem(e){const t=document.createElement("div");for(t.className="kill-feed-item",t.textContent=e,this.killFeed.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.5s",setTimeout(()=>t.remove(),500)},3e3);this.killFeed.children.length>5;)this.killFeed.removeChild(this.killFeed.firstChild)}updatePowerUps(e,t,i,n){e>0?(this.speedIndicator.classList.add("active"),this.speedIndicator.querySelector(".timer").textContent=e.toFixed(1)+"s"):this.speedIndicator.classList.remove("active"),t>0?(this.damageIndicator.classList.add("active"),this.damageIndicator.querySelector(".timer").textContent=t.toFixed(1)+"s"):this.damageIndicator.classList.remove("active"),this.timeSlowIndicator&&(i>0?(this.timeSlowIndicator.classList.add("active"),this.timeSlowIndicator.querySelector(".timer").textContent=i.toFixed(1)+"s"):this.timeSlowIndicator.classList.remove("active")),this.shieldIndicator&&(n>0?(this.shieldIndicator.classList.add("active"),this.shieldIndicator.querySelector(".timer").textContent=Math.round(n)):this.shieldIndicator.classList.remove("active"))}updateUltimate(e,t,i){if(!this.ultimateBar)return;const n=e/t*100;this.ultimateBar.style.width=n+"%",i?(this.ultimateBar.style.background="linear-gradient(90deg, #00ccff, #00ffff)",this.ultimateBar.style.boxShadow="0 0 12px rgba(0, 200, 255, 0.6)",this.ultimateText&&(this.ultimateText.textContent="READY [F]"),this.ultimateText.style.color="#00ccff"):(this.ultimateBar.style.background="linear-gradient(90deg, #335577, #4488aa)",this.ultimateBar.style.boxShadow="none",this.ultimateText&&(this.ultimateText.textContent=`${e}/${t}`),this.ultimateText.style.color="rgba(255,255,255,0.4)")}updateDash(e,t){if(!this.dashBar)return;const i=e<=0,n=i?100:(t-e)/t*100;this.dashBar.style.width=n+"%",this.dashBar.style.opacity=i?"1":"0.5"}update(e){this.waveAnnounceTimer>0&&(this.waveAnnounceTimer-=e,this.waveAnnounceTimer<=0&&this.waveAnnounce.classList.remove("show")),this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=.5&&(this.fpsDisplay=Math.round(this.fpsFrames/this.fpsTime),this.fpsFrames=0,this.fpsTime=0,this.fpsCounter&&(this.fpsCounter.textContent=this.fpsDisplay+" FPS"))}show(){this.hud.style.display="block"}hide(){this.hud.style.display="none"}}class _v{constructor(){this.startMenu=document.getElementById("start-menu"),this.pauseMenu=document.getElementById("pause-menu"),this.gameoverMenu=document.getElementById("gameover-menu"),this.goScore=document.getElementById("go-score"),this.goHighscore=document.getElementById("go-highscore"),this.goWave=document.getElementById("go-wave"),this.onStart=null,this.onResume=null,this.onRestart=null,document.getElementById("start-button").addEventListener("click",()=>{this.onStart&&this.onStart()}),document.getElementById("resume-button").addEventListener("click",()=>{this.onResume&&this.onResume()}),document.getElementById("restart-button").addEventListener("click",()=>{this.onRestart&&this.onRestart()})}showStart(){this.startMenu.classList.remove("hidden"),this.pauseMenu.classList.add("hidden"),this.gameoverMenu.classList.add("hidden")}showPause(){this.startMenu.classList.add("hidden"),this.pauseMenu.classList.remove("hidden"),this.gameoverMenu.classList.add("hidden")}showGameOver(e,t,i){this.startMenu.classList.add("hidden"),this.pauseMenu.classList.add("hidden"),this.gameoverMenu.classList.remove("hidden"),this.goScore.textContent=e.toLocaleString(),this.goHighscore.textContent=`High Score: ${t.toLocaleString()}`,this.goWave.textContent=`Reached Wave ${i}`}hideAll(){this.startMenu.classList.add("hidden"),this.pauseMenu.classList.add("hidden"),this.gameoverMenu.classList.add("hidden")}}class vv{constructor(){this.canvas=document.getElementById("minimap"),this.ctx=this.canvas.getContext("2d"),this.size=150,this.scale=this.size/St.SIZE}update(e,t,i){const n=this.ctx,s=this.scale,o=this.size/2;n.fillStyle="rgba(10, 10, 30, 0.85)",n.fillRect(0,0,this.size,this.size),n.strokeStyle="rgba(0, 200, 255, 0.3)",n.lineWidth=1,n.strokeRect(1,1,this.size-2,this.size-2),n.strokeStyle="rgba(0, 200, 255, 0.06)",n.lineWidth=.5;for(let h=0;h<this.size;h+=this.size/6)n.beginPath(),n.moveTo(h,0),n.lineTo(h,this.size),n.stroke(),n.beginPath(),n.moveTo(0,h),n.lineTo(this.size,h),n.stroke();n.fillStyle="rgba(100, 100, 150, 0.4)";for(const h of i){const d=o+h.position.x*s,u=o+h.position.z*s;n.fillRect(d-2,u-2,4,4)}for(const h of t){if(!h.active)continue;const d=o+h.body.position.x*s,u=o+h.body.position.z*s;switch(h.name){case"Grunt":n.fillStyle="#ff2255";break;case"Shooter":n.fillStyle="#00ccff";break;case"Tank":n.fillStyle="#22ff88";break;case"Exploder":n.fillStyle="#ff6600";break;case"Teleporter":n.fillStyle="#aa44ff";break;default:n.fillStyle="#ff6688"}n.beginPath(),n.arc(d,u,2,0,Math.PI*2),n.fill()}const a=o+e.x*s,l=o+e.z*s,c=n.createRadialGradient(a,l,0,a,l,6);c.addColorStop(0,"rgba(0, 200, 255, 0.4)"),c.addColorStop(1,"rgba(0, 200, 255, 0)"),n.fillStyle=c,n.beginPath(),n.arc(a,l,6,0,Math.PI*2),n.fill(),n.fillStyle="#00ccff",n.beginPath(),n.arc(a,l,2.5,0,Math.PI*2),n.fill()}}class xv{constructor(){this.ctx=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.initialized=!1}init(){this.initialized||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.5,this.masterGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=.7,this.sfxGain.connect(this.masterGain),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=.15,this.musicGain.connect(this.masterGain),this.initialized=!0)}_ensureCtx(){this.initialized||this.init(),this.ctx.state==="suspended"&&this.ctx.resume()}_noiseBuffer(e){const t=this.ctx.sampleRate*e,i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=i.getChannelData(0);for(let s=0;s<t;s++)n[s]=Math.random()*2-1;return i}playPistolShot(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer(.1);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=3e3,i.Q.value=.5;const n=this.ctx.createGain();n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(i).connect(n).connect(this.sfxGain),t.start(e),t.stop(e+.1);const s=this.ctx.createOscillator();s.frequency.setValueAtTime(400,e),s.frequency.exponentialRampToValueAtTime(80,e+.1);const o=this.ctx.createGain();o.gain.setValueAtTime(.3,e),o.gain.exponentialRampToValueAtTime(.01,e+.1),s.connect(o).connect(this.sfxGain),s.start(e),s.stop(e+.12)}playShotgunShot(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer(.2);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=2e3;const n=this.ctx.createGain();n.gain.setValueAtTime(.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.2),t.connect(i).connect(n).connect(this.sfxGain),t.start(e),t.stop(e+.25);const s=this.ctx.createOscillator();s.frequency.setValueAtTime(200,e),s.frequency.exponentialRampToValueAtTime(40,e+.15);const o=this.ctx.createGain();o.gain.setValueAtTime(.5,e),o.gain.exponentialRampToValueAtTime(.01,e+.15),s.connect(o).connect(this.sfxGain),s.start(e),s.stop(e+.2)}playRifleShot(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer(.06);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=4e3;const n=this.ctx.createGain();n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(i).connect(n).connect(this.sfxGain),t.start(e),t.stop(e+.07)}playRocketShot(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sawtooth",t.frequency.setValueAtTime(100,e),t.frequency.exponentialRampToValueAtTime(50,e+.3);const i=this.ctx.createGain();i.gain.setValueAtTime(.4,e),i.gain.exponentialRampToValueAtTime(.01,e+.3),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.35)}playExplosion(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer(.5);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(1e3,e),i.frequency.exponentialRampToValueAtTime(100,e+.4);const n=this.ctx.createGain();n.gain.setValueAtTime(.8,e),n.gain.exponentialRampToValueAtTime(.01,e+.5),t.connect(i).connect(n).connect(this.sfxGain),t.start(e),t.stop(e+.55)}playHit(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.frequency.setValueAtTime(800,e),t.frequency.exponentialRampToValueAtTime(200,e+.05);const i=this.ctx.createGain();i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.06)}playEnemyHit(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.frequency.setValueAtTime(600,e),t.frequency.exponentialRampToValueAtTime(100,e+.08);const i=this.ctx.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.01,e+.08),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.1)}playEnemyDeath(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="square",t.frequency.setValueAtTime(300,e),t.frequency.exponentialRampToValueAtTime(30,e+.2);const i=this.ctx.createGain();i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.2),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.25)}playPlayerHit(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer(.15);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.value=800;const n=this.ctx.createGain();n.gain.setValueAtTime(.4,e),n.gain.exponentialRampToValueAtTime(.01,e+.15),t.connect(i).connect(n).connect(this.sfxGain),t.start(e),t.stop(e+.18)}playPowerUp(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(400,e),t.frequency.exponentialRampToValueAtTime(1200,e+.15);const i=this.ctx.createGain();i.gain.setValueAtTime(.2,e),i.gain.exponentialRampToValueAtTime(.01,e+.2),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.25)}playWaveStart(){this._ensureCtx();const e=this.ctx.currentTime;[400,500,600].forEach((t,i)=>{const n=this.ctx.createOscillator();n.type="sine",n.frequency.value=t;const s=this.ctx.createGain();s.gain.setValueAtTime(0,e+i*.1),s.gain.linearRampToValueAtTime(.15,e+i*.1+.05),s.gain.exponentialRampToValueAtTime(.01,e+i*.1+.2),n.connect(s).connect(this.sfxGain),n.start(e+i*.1),n.stop(e+i*.1+.25)})}playReload(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.frequency.value=200;const i=this.ctx.createGain();i.gain.setValueAtTime(.3,e),i.gain.exponentialRampToValueAtTime(.01,e+.05),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.06);const n=this.ctx.createOscillator();n.frequency.setValueAtTime(150,e+.3),n.frequency.linearRampToValueAtTime(300,e+.4);const s=this.ctx.createGain();s.gain.setValueAtTime(0,e+.28),s.gain.linearRampToValueAtTime(.2,e+.3),s.gain.exponentialRampToValueAtTime(.01,e+.45),n.connect(s).connect(this.sfxGain),n.start(e+.28),n.stop(e+.5)}playEmptyClick(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createOscillator();t.frequency.value=800;const i=this.ctx.createGain();i.gain.setValueAtTime(.15,e),i.gain.exponentialRampToValueAtTime(.01,e+.03),t.connect(i).connect(this.sfxGain),t.start(e),t.stop(e+.04)}playEnemyShoot(){this._ensureCtx();const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this._noiseBuffer(.08);const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=2e3;const n=this.ctx.createGain();n.gain.setValueAtTime(.2,e),n.gain.exponentialRampToValueAtTime(.01,e+.07),t.connect(i).connect(n).connect(this.sfxGain),t.start(e),t.stop(e+.1)}startMusic(){if(this._ensureCtx(),this._musicOsc)return;const e=this.ctx.currentTime;this._musicOsc=this.ctx.createOscillator(),this._musicOsc.type="sawtooth",this._musicOsc.frequency.value=55;const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=200,this._musicOsc.connect(t).connect(this.musicGain),this._musicOsc.start(e),this._lfo=this.ctx.createOscillator(),this._lfo.frequency.value=.2;const i=this.ctx.createGain();i.gain.value=10,this._lfo.connect(i).connect(this._musicOsc.frequency),this._lfo.start(e)}stopMusic(){this._musicOsc&&(this._musicOsc.stop(),this._musicOsc=null),this._lfo&&(this._lfo.stop(),this._lfo=null)}}class yv{constructor(e){console.log("[Game] Initializing..."),this._debugTimer=0,this._debugInterval=2,this.renderer=new Mc({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Wl,this.renderer.toneMapping=Xl,this.renderer.toneMappingExposure=1,this.renderer.outputColorSpace=Et,this.composer=new z_(this.renderer),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.three.aspect=window.innerWidth/window.innerHeight,this.camera.three.updateProjectionMatrix()}),this.scene=new jm,this.physicsWorld=new A_({gravity:new y(0,mo.GRAVITY,0)}),this.physicsWorld.broadphase=new Bn(this.physicsWorld),this.physicsWorld.allowSleep=!0,this.gameState=new V_,this.input=new k_,this.clock=new W_,this.camera=new q_,this.scene.add(this.camera.three),this.playerController=new X_(this.camera,this.physicsWorld,this.input),this.player=new Y_,this.arena=new j_(this.scene,this.physicsWorld),this.lighting=new K_(this.scene),this.skybox=new $_(this.scene),this.weaponManager=new tv(this.camera,this.scene),this.enemyManager=new av(this.scene,this.physicsWorld),this.waveManager=new lv(this.enemyManager),this.scoreManager=new cv,this.powerUpManager=new dv(this.scene),this.powerUpManager.setWeaponManager(this.weaponManager),this.particleSystem=new pv(this.scene),this.effects=new mv(this.scene,this.camera,this.particleSystem),this.dangerZoneManager=new fv(this.scene),this.ultimateCharge=0,this.ultimateReady=!1,this.audio=new xv,this.hud=new gv,this.menu=new _v,this.miniMap=new vv,this._ambientParticles=[],this._initAmbientParticles(),this.enemyProjectiles=[],this.rocketProjectiles=[],this._setupCallbacks(),this._setupInputHandlers();const t=new G_(this.scene,this.camera.three);this.composer.addPass(t);const i=new Kn(new Ae(window.innerWidth,window.innerHeight),.6,.4,.85);this.composer.addPass(i),console.log("[Game] Initialization complete. Systems ready.")}_setupCallbacks(){this.waveManager.onWaveAnnounced(e=>{const t=this.waveManager.waveType,i=t!=="normal"?` [${t.toUpperCase()}]`:"";this.hud.announceWave(e,i),this.hud.updateWave(e),this.audio.playWaveStart(),this.dangerZoneManager.setWave(e),console.log(`[Game] Wave ${e} announced${i}`)}),this.waveManager.onWaveClear(e=>{this.scoreManager.addWaveClearBonus(e)}),this.scoreManager.onScoreChange=e=>this.hud.updateScore(e),this.scoreManager.onComboChange=e=>this.hud.updateCombo(e),this.scoreManager.onMultiKill=(e,t)=>{this.hud.addKillFeedItem(e),this.camera.addShake(t*.3,.2),console.log(`[Game] Multi-kill: ${e} (${t}x)`)},this.powerUpManager.onCollect=e=>this.audio.playPowerUp(),this.menu.onStart=()=>this.startGame(),this.menu.onResume=()=>this.resumeGame(),this.menu.onRestart=()=>this.startGame()}_setupInputHandlers(){document.addEventListener("keydown",e=>{e.code==="Escape"&&(this.gameState.is(Hi.PLAYING)?this.pauseGame():this.gameState.is(Hi.PAUSED)&&this.resumeGame())})}startGame(){console.log("[Game] Starting game..."),this.audio.init(),this.audio.startMusic(),this.player.reset(),this.playerController.reset(),this.weaponManager.reset(),this.enemyManager.reset(),this.waveManager.reset(),this.scoreManager.reset(),this.powerUpManager.reset(),this.effects.reset(),this.particleSystem.reset(),this.dangerZoneManager.reset(),this.ultimateCharge=0,this.ultimateReady=!1;for(const t of this.enemyProjectiles)this.scene.remove(t.mesh);this.enemyProjectiles=[];for(const t of this.rocketProjectiles)this.scene.remove(t.mesh),this.physicsWorld.removeBody(t.body);this.rocketProjectiles=[],this.gameState.set(Hi.PLAYING),this.menu.hideAll(),this.hud.show(),this.playerController.lock(),this.waveManager.start(),this.hud.updateHealth(this.player.health,this.player.maxHealth,this.player.shield),this.hud.updateScore(0),this.hud.updateCombo(1);const e=this.weaponManager.current;this.hud.updateAmmo(e.currentAmmo,e.reserveAmmo,e.name)}pauseGame(){console.log("[Game] Pausing game"),this.gameState.set(Hi.PAUSED),this.menu.showPause(),this.playerController.unlock()}resumeGame(){console.log("[Game] Resuming game"),this.gameState.set(Hi.PLAYING),this.menu.hideAll(),this.playerController.lock()}gameOver(){console.log("[Game] Game over! Score:",this.scoreManager.score,"Wave:",this.waveManager.currentWave),this.gameState.set(Hi.GAMEOVER),this.scoreManager.saveHighScore(),this.menu.showGameOver(this.scoreManager.score,this.scoreManager.highScore,this.waveManager.currentWave),this.playerController.unlock(),this.audio.stopMusic()}update(e){if(this.input.update(),!this.gameState.is(Hi.PLAYING)){this.input.resetFrame();return}if(this._debugTimer+=e,this._debugTimer>=this._debugInterval){this._debugTimer=0;const h=this.playerController.getPosition(),d=this.playerController.body.velocity,u=this.playerController.body.sleepState,m=Object.entries(this.input.keys).filter(([,g])=>g).map(([g])=>g);console.log(`[Debug] Pos:(${h.x.toFixed(1)},${h.y.toFixed(1)},${h.z.toFixed(1)})`,`Vel:(${d.x.toFixed(1)},${d.y.toFixed(1)},${d.z.toFixed(1)})`,`Grounded:${this.playerController.isGrounded}`,`Sleep:${u}`,`Locked:${this.playerController.isLocked}`,`Keys:[${m.join(",")}]`,`Enemies:${this.enemyManager.getActiveCount()}`,`Wave:${this.waveManager.currentWave}(${this.waveManager.state})`)}this.physicsWorld.step(mo.FIXED_TIMESTEP,e,mo.MAX_SUB_STEPS);const t=this.powerUpManager.timeSlowFactor,i=e*t;this.playerController.update(e),this.player.update(e);const n=this.playerController.getPosition();if(this.playerController.isLocked&&this.weaponManager.handleInput(this.input),this.weaponManager.update(e,this.input.mouseDX,this.input.mouseDY),this.input.isMouseDown(0)&&this.playerController.isLocked){const h=this.weaponManager.current;if(h.auto||!h.hasFiredThisPress){const d=this.weaponManager.fire(this.enemyManager.getEnemyMeshes(),null);d?(this._handleFireResults(d,n),h.hasFiredThisPress=!0):!h.canFire()&&h.currentAmmo===0&&(h.reload(),this.audio.playReload())}}else this.weaponManager.current.hasFiredThisPress=!1;const s=this.input.isKeyDown("KeyW")||this.input.isKeyDown("KeyS")||this.input.isKeyDown("KeyA")||this.input.isKeyDown("KeyD"),o=this.input.isKeyDown("ShiftLeft")||this.input.isKeyDown("ShiftRight");this.effects.setCrosshairSpread(this.weaponManager.current.currentSpread+(s?o?.04:.02:0));const a=this.enemyManager.update(i,n);this._handleEnemyAttacks(a,n),this._updateEnemyProjectiles(e,n),this._updateRocketProjectiles(e);const l=this.dangerZoneManager.update(e,n);l&&(this.player.takeDamage(l),this.effects.damageVignette(.5),this.camera.addShake(1.5,.3),this.audio.playPlayerHit()),this.input.isKeyDown(tn.KEY)&&this.ultimateReady&&this.playerController.isLocked&&this._activateUltimate(n),this.hud.updateUltimate(this.ultimateCharge,tn.KILLS_TO_CHARGE,this.ultimateReady),this._updateAmbientParticles(e),this.waveManager.update(e),this.scoreManager.update(e),this.powerUpManager.update(e,n,this.player,this.playerController),this.hud.updateHealth(this.player.health,this.player.maxHealth,this.player.shield);const c=this.weaponManager.current;this.hud.updateAmmo(c.currentAmmo,c.reserveAmmo,c.name),this.hud.updatePowerUps(this.powerUpManager.speedBoostTimer,this.powerUpManager.damageBoostTimer,this.powerUpManager.timeSlowTimer,this.player.shield),this.hud.updateDash(this.playerController.dashCooldown,et.DASH_COOLDOWN),this.hud.update(e),this.effects.update(e),this.particleSystem.update(e),this.player.health<30&&this.player.health>0&&(this.effects.damageVignetteEl.style.opacity=(1-this.player.health/30)*.3),this.miniMap.update(n,this.enemyManager.getEnemies(),this.arena.coverObjects),this.player.isDead&&this.gameOver(),this.input.resetFrame(),this.input.lateUpdate()}_initAmbientParticles(){const e=new Bt,t=200,i=new Float32Array(t*3),n=new Float32Array(t*3);for(let o=0;o<t;o++){i[o*3]=(Math.random()-.5)*60,i[o*3+1]=Math.random()*8,i[o*3+2]=(Math.random()-.5)*60;const a=new Re().setHSL(.55+Math.random()*.1,.8,.5+Math.random()*.3);n[o*3]=a.r,n[o*3+1]=a.g,n[o*3+2]=a.b}e.setAttribute("position",new Zt(i,3)),e.setAttribute("color",new Zt(n,3));const s=new Ec({size:.06,vertexColors:!0,transparent:!0,opacity:.4,blending:rr,depthWrite:!1});this._ambientMesh=new Jm(e,s),this.scene.add(this._ambientMesh),this._ambientTime=0}_updateAmbientParticles(e){this._ambientTime+=e*.3;const t=this._ambientMesh.geometry.attributes.position;for(let i=0;i<t.count;i++)t.array[i*3+1]+=Math.sin(this._ambientTime+i)*.003,t.array[i*3]+=Math.cos(this._ambientTime*.7+i*.5)*.002,t.array[i*3+1]>8&&(t.array[i*3+1]=0),t.array[i*3+1]<0&&(t.array[i*3+1]=8);t.needsUpdate=!0}_activateUltimate(e){this.ultimateCharge=0,this.ultimateReady=!1;const t=new Xn(.5,1.5,32),i=new $t({color:52479,transparent:!0,opacity:.8,side:Ft}),n=new We(t,i);n.rotation.x=-Math.PI/2,n.position.set(e.x,.5,e.z),this.scene.add(n);const s=40;let o=0;const a=()=>{o+=.016;const l=o*s;n.scale.setScalar(l),n.material.opacity=Math.max(0,.8-o*2),o<.5?requestAnimationFrame(a):(this.scene.remove(n),n.geometry.dispose(),n.material.dispose())};requestAnimationFrame(a);for(const l of this.enemyManager.getEnemies()){const c=e.x-l.body.position.x,h=e.z-l.body.position.z,d=Math.sqrt(c*c+h*h);if(d<tn.RADIUS){const u=1-d/tn.RADIUS;l.takeDamage(tn.DAMAGE*u)&&(this.scoreManager.addKill(l.points,!1),this.waveManager.onEnemyKilled(),this.hud.addKillFeedItem(`${l.name} obliterated`),this.powerUpManager.trySpawn(l.mesh.position))}}this.camera.addShake(3,.5),this.camera.addFOVPunch(12),this.effects.screenFlash(52479),this.audio.playExplosion(),this.hud.addKillFeedItem("⚡ SHOCKWAVE ACTIVATED ⚡")}_handleFireResults(e,t){switch(this.weaponManager.current.name){case"Pistol":this.audio.playPistolShot();break;case"Shotgun":this.audio.playShotgunShot();break;case"Assault Rifle":this.audio.playRifleShot();break;case"Rocket Launcher":this.audio.playRocketShot();break}this.effects.muzzleFlash();for(const n of e)if(n.type==="hit"){const s=this.enemyManager.findEnemyByMesh(n.object);if(s){const a=s.mesh.position.y+s.config.size.y/2-s.config.size.y*.3,l=n.point.y>=a,c=n.damage*this.player.damageMultiplier,h=l?c*2:c,d=s.takeDamage(h);this.effects.impact(n.point,!0),this.effects.hitMarker(d),d?(this.audio.playEnemyDeath(),this.scoreManager.addKill(s.points,l),this.waveManager.onEnemyKilled(),this.hud.addKillFeedItem(`${s.name} eliminated${l?" (HEADSHOT)":""}`),this.powerUpManager.trySpawn(s.mesh.position),this.ultimateCharge=Math.min(this.ultimateCharge+1,tn.KILLS_TO_CHARGE),this.ultimateCharge>=tn.KILLS_TO_CHARGE&&!this.ultimateReady&&(this.ultimateReady=!0,this.hud.addKillFeedItem("⚡ ULTIMATE READY [F] ⚡"))):this.audio.playEnemyHit();const u=new U;this.camera.three.getWorldPosition(u),this.effects.bulletTrail(u,n.point)}}else if(n.type==="world"){this.effects.impact(n.point,!1);const s=new U;this.camera.three.getWorldPosition(s),this.effects.bulletTrail(s,n.point)}else if(n.type==="miss"){const s=new U;this.camera.three.getWorldPosition(s),this.effects.bulletTrail(s,n.endPoint)}else n.type==="projectile"&&this._spawnRocket(n)}_spawnRocket(e){const t=new fn(.15,6,6),i=new Rt({color:16729088,emissive:16720384,emissiveIntensity:1}),n=new We(t,i);n.position.copy(e.origin),this.scene.add(n);const s=new le({mass:1,shape:new Uc(.15)});s.position.copy(e.origin),s.velocity.set(e.direction.x*e.speed,e.direction.y*e.speed,e.direction.z*e.speed),s.collisionResponse=!1,this.physicsWorld.addBody(s);const o=new Yn(16729088,2,8);n.add(o),this.rocketProjectiles.push({mesh:n,body:s,damage:e.damage,splashDamage:e.splashDamage,splashRadius:e.splashRadius,life:5})}_updateRocketProjectiles(e){for(let t=this.rocketProjectiles.length-1;t>=0;t--){const i=this.rocketProjectiles[t];i.life-=e,i.mesh.position.copy(i.body.position),this.particleSystem.emit(i.mesh.position,1,{color:16729088,speed:1,life:.2,spread:.3,scale:.8});let n=!1;for(const s of this.enemyManager.getEnemies()){const o=i.body.position.x-s.body.position.x,a=i.body.position.y-s.body.position.y,l=i.body.position.z-s.body.position.z;if(Math.sqrt(o*o+a*a+l*l)<1.5){this._explodeRocket(i),n=!0;break}}!n&&(i.body.position.y<.2||i.life<=0||Math.abs(i.body.position.x)>30||Math.abs(i.body.position.z)>30)&&(this._explodeRocket(i),n=!0),n&&this.rocketProjectiles.splice(t,1)}}_explodeRocket(e){const t=new U().copy(e.body.position);this.effects.explosion(t),this.audio.playExplosion();for(const s of this.enemyManager.getEnemies()){const o=t.x-s.body.position.x,a=t.y-s.body.position.y,l=t.z-s.body.position.z,c=Math.sqrt(o*o+a*a+l*l);if(c<e.splashRadius){const h=1-c/e.splashRadius,d=(c<1.5?e.damage:e.splashDamage*h)*this.player.damageMultiplier;s.takeDamage(d)&&(this.audio.playEnemyDeath(),this.scoreManager.addKill(s.points,!1),this.waveManager.onEnemyKilled(),this.hud.addKillFeedItem(`${s.name} eliminated (EXPLOSION)`),this.powerUpManager.trySpawn(s.mesh.position))}}const i=this.playerController.getPosition(),n=t.distanceTo(i);if(n<e.splashRadius){const s=1-n/e.splashRadius;this.player.takeDamage(e.splashDamage*s*.3),this.effects.damageVignette(s)}this.scene.remove(e.mesh),this.physicsWorld.removeBody(e.body),e.mesh.geometry.dispose(),e.mesh.material.dispose()}_handleEnemyAttacks(e,t){for(const i of e)if(i.type==="melee")this.player.takeDamage(i.damage),this.audio.playPlayerHit(),this.effects.damageVignette(i.damage/30),this.camera.addShake(i.damage/15,.2);else if(i.type==="projectile")this._spawnEnemyProjectile(i),this.audio.playEnemyShoot();else if(i.type==="explosion"){this.effects.explosion(i.position),this.audio.playExplosion(),this.waveManager.onEnemyKilled(),this.scoreManager.addKill(150,!1),this.hud.addKillFeedItem("Exploder self-destructed!");const n=t.distanceTo(i.position);if(n<i.radius){const s=1-n/i.radius;this.player.takeDamage(i.damage*s),this.effects.damageVignette(s*.5),this.camera.addShake(2*s,.3)}for(const s of this.enemyManager.getEnemies()){const o=i.position.x-s.body.position.x,a=i.position.z-s.body.position.z,l=Math.sqrt(o*o+a*a);l<i.radius&&l>.5&&s.takeDamage(i.damage*(1-l/i.radius)*.5)}}}_spawnEnemyProjectile(e){const t=new fn(.12,4,4),i=new $t({color:16729224}),n=new We(t,i);n.position.copy(e.origin),this.scene.add(n),this.enemyProjectiles.push({mesh:n,direction:e.direction.clone(),speed:e.speed,damage:e.damage,life:5})}_updateEnemyProjectiles(e,t){for(let i=this.enemyProjectiles.length-1;i>=0;i--){const n=this.enemyProjectiles[i];n.life-=e,n.mesh.position.addScaledVector(n.direction,n.speed*e);const s=n.mesh.position.x-t.x,o=n.mesh.position.y-t.y,a=n.mesh.position.z-t.z;if(Math.sqrt(s*s+o*o+a*a)<1){this.player.takeDamage(n.damage),this.audio.playPlayerHit(),this.effects.damageVignette(n.damage/20),this.camera.addShake(.5,.15),this._removeEnemyProjectile(i);continue}(n.life<=0||Math.abs(n.mesh.position.x)>35||Math.abs(n.mesh.position.z)>35)&&this._removeEnemyProjectile(i)}}_removeEnemyProjectile(e){const t=this.enemyProjectiles[e];this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),this.enemyProjectiles.splice(e,1)}render(){this.composer.render()}}const Mv=document.getElementById("game-canvas"),sr=new yv(Mv);window._game=sr;function Oc(){const r=sr.clock.tick();sr.update(r),sr.render(),requestAnimationFrame(Oc)}requestAnimationFrame(Oc);
