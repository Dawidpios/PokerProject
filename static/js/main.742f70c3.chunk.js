(this.webpackJsonppokersi=this.webpackJsonppokersi||[]).push([[0],{20:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var i,a,c,r,d,s,l,o,u,h,j,b,m,O,f,w,v,x,p,S,y,g,P,k=t(0),R=t.n(k),C=t(12),H=t.n(C),M=(t(20),t(2)),D=t(3),z=t.p+"static/media/tlo.a03f87e0.jpg",E=t(5),I=t(4),G=t(1),A=Object(k.createContext)(),B=function(e){var n=e.children,t=Object(k.useState)(),i=Object(I.a)(t,2),a=i[0],c=i[1],r=Object(k.useState)(),d=Object(I.a)(r,2),s=d[0],l=d[1],o=Object(k.useState)(),u=Object(I.a)(o,2),h=u[0],j=u[1],b=Object(k.useState)(),m=Object(I.a)(b,2),O=m[0],f=m[1],w=Object(k.useState)([]),v=Object(I.a)(w,2),x=v[0],p=v[1],S=Object(k.useState)(!1),y=Object(I.a)(S,2),g=y[0],P=y[1],R=Object(k.useState)([]),C=Object(I.a)(R,2),H=C[0],M=C[1],D=Object(k.useState)([]),z=Object(I.a)(D,2),B=z[0],N=z[1],W=Object(k.useState)([]),J=Object(I.a)(W,2),q=J[0],K=J[1],F=Object(k.useState)([]),Q=Object(I.a)(F,2),T=Q[0],L=Q[1],X=Object(k.useState)(),U=Object(I.a)(X,2),V=U[0],Y=U[1],Z=Object(k.useState)(),$=Object(I.a)(Z,2),_=$[0],ee=$[1],ne=Object(k.useState)(),te=Object(I.a)(ne,2),ie=te[0],ae=te[1],ce=Object(k.useState)(),re=Object(I.a)(ce,2),de=re[0],se=re[1],le=Object(k.useState)(),oe=Object(I.a)(le,2),ue=oe[0],he=oe[1],je=Object(k.useState)(!1),be=Object(I.a)(je,2),me=be[0],Oe=be[1],fe=Object(k.useState)(!0),we=Object(I.a)(fe,2),ve=we[0],xe=we[1],pe=Object(k.useState)(0),Se=Object(I.a)(pe,2),ye=Se[0],ge=Se[1],Pe=Object(k.useState)(!0),ke=Object(I.a)(Pe,2),Re=ke[0],Ce=ke[1],He=Object(k.useState)(!0),Me=Object(I.a)(He,2),De=Me[0],ze=Me[1],Ee=Object(k.useState)(!0),Ie=Object(I.a)(Ee,2),Ge=Ie[0],Ae=Ie[1],Be=Object(k.useState)(!0),Ne=Object(I.a)(Be,2),We=Ne[0],Je=Ne[1],qe=Object(k.useState)(!0),Ke=Object(I.a)(qe,2),Fe=Ke[0],Qe=Ke[1],Te=[{value:"2",id:0},{value:"3",id:1},{value:"4",id:2},{value:"5",id:3},{value:"6",id:4},{value:"7",id:5},{value:"8",id:6},{value:"9",id:7},{value:"0",id:8},{value:"J",id:9},{value:"Q",id:10},{value:"K",id:11},{value:"A",id:12}],Le=["C","D","S","H"],Xe=9,Ue=8,Ve=7,Ye=6,Ze=5,$e=4,_e=3,en=2,nn=1,tn=0,an={PlayerHand:[],SiHand:[],PlayerCards:[],SiCards:[],check:!1,checkOne:!0,FirstRiver:!1,checkResult:!1,checkSecond:!1,River:[],Pula:"",PlayerResultat:"",SiResult:"",PlayerHandPower:"",SiHandPower:"",PlayerWin:!1,SiWin:!1,Draw:!1},cn="",rn="",dn="",sn="",ln="",on="";Object(k.useEffect)((function(){fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52").then((function(e){if(e.ok)return e;console.log("err")})).then((function(e){return e.json()})).then((function(e){console.log(e),p(e.cards)}))}),[]);var un=function(){cn=Math.floor(Math.random()*Te.length),rn=Math.floor(Math.random()*Le.length),dn=Math.floor(Math.random()*Te.length),sn=Math.floor(Math.random()*Le.length),ln=Math.floor(Math.random()*Te.length),on=Math.floor(Math.random()*Le.length)},hn="",jn="",bn=0;function mn(e){var n=[],t=[],i=[];e=function(e){return i=(i=(i=Object(E.a)(e)).map((function(e){return e[1]}))).reduce((function(e,n){return e[n]=e[n]+1||1,e}),{}),e=e.map((function(e){return e[0]})),(e=Object(E.a)(e)).reduce((function(e,n){return e[n]=e[n]+1||1,e}),{})}(e),(n=Object(E.a)(Object.values(e))).filter((function(a){2===a&&(2===++bn?(jn="Dwie pary!",hn=en):1===bn&&(jn="Para",hn=nn)),n.includes(3)&&(n.includes(2)&&n.includes(3)?(jn="Full",hn=Ye):(jn="Tr\xf3jka",hn=_e)),4===a&&(jn="Kareta",hn=Ve),(t=Object(E.a)(Object.keys(e))).sort(),((t=t.join("")).includes("23456")||t.includes("34567")||t.includes("45678")||t.includes("56789")||t.includes("6789")&&t.includes("0")||t.includes("789")&&t.includes("0")&&t.includes("J")||t.includes("89")&&t.includes("0")&&t.includes("JQ")||t.includes("9")&&t.includes("0")&&t.includes("JKQ"))&&(jn="Strit",hn=$e),Object.values(i).filter((function(e){e>=5&&(jn="Kolor",hn=Ze,(t.includes("23456")||t.includes("34567")||t.includes("45678")||t.includes("56789")||t.includes("6789")&&t.includes("0")||t.includes("789")&&t.includes("0")&&t.includes("J")||t.includes("89")&&t.includes("0")&&t.includes("JQ")||t.includes("9")&&t.includes("0")&&t.includes("JKQ"))&&(jn="Poker",hn=Ue))})),t.includes("0AJKQ")&&"Kolor"===jn&&(jn="Poker kr\xf3lewski",hn=Xe)})),""===jn&&(jn="Wysoka karta",hn=tn),bn=""}var On=function(){an.PlayerCards=[],an.SiCards=[],an.River=[],an.PlayerHand=[],an.SiHand=[],an.check=!1,an.checkOne=!0,an.FirstRiver=!1,an.checkResult=!1,an.checkSecond=!1,an.River=[],an.PlayerResultat="",an.SiResult="",an.PlayerHandPower="",an.SiHandPower="",an.PlayerWin=!1,an.SiWin=!1,an.Draw=!1,j(),f(),P(!1),M([]),N([]),K([]),L([]),Y(),ee(),ae(),se(),he(),document.querySelectorAll(".ResetIMG").forEach((function(e){e.src="",e.remove()})),document.querySelectorAll(".SiCardsDiv").forEach((function(e){return e.style.opacity="0"})),document.getElementById("DrawCards").disabled=!1,Oe(!me),xe(!ve),Ce(!0),ze(!0),Ae(!0),Je(!0),ge(0)},fn=function(){ve?(ge(Math.trunc(.05*s+.03*a)),c(Math.trunc(a-.03*a)),l(Math.trunc(s-.05*s))):me&&(ge(Math.trunc(.05*a+.03*s)),c(Math.trunc(a-.05*a)),l(Math.trunc(s-.03*s)))};return s<=0?(alert("Gratulacje! Wygra\u0142e\u015b! "),On(),c(500),l(500)):a<=0&&(alert("Niestety przegra\u0142e\u015b, spr\xf3buj ponownie"),On(),c(500),l(500)),Object(G.jsx)(A.Provider,{value:{cash:a,cashSi:s,PlayerCard:h,SiCard:O,GameRiver:H,flag:g,check:function(){for(var e=document.querySelector(".River"),n=0;n<3;++n){var t=document.querySelector(".DivIMAGE-".concat(n)),i=document.createElement("img");i.classList.add("ResetIMG"),i.src=T[n],i.style.width="100%",e.appendChild(t),t.appendChild(i),c(Math.trunc(a-.5*ye)),ge(Math.trunc(ye+.5*ye)),ze(!1),Ce(!0)}},check2:function(){var e=document.querySelector(".River"),n=document.querySelector(".DivIMAGE-3"),t=document.createElement("img");t.classList.add("ResetIMG"),t.src=T[3],t.style.width="100%",e.appendChild(n),n.appendChild(t),c(Math.trunc(a-.5*ye)),ge(Math.trunc(ye+.5*ye)),Ae(!1),ze(!0)},check3:function(){var e=document.querySelector(".River"),n=document.querySelector(".DivIMAGE-4"),t=document.createElement("img");t.classList.add("ResetIMG"),t.src=T[4],t.style.width="100%",e.appendChild(n),n.appendChild(t),c(Math.trunc(a-.5*ye)),ge(Math.trunc(ye+.5*ye)),Ae(!0),setTimeout((function(){document.querySelectorAll(".SiCardsDiv").forEach((function(e){return e.style.opacity="1"})),de>ue?(an.PlayerWin="Gracz wygra\u0142 uk\u0142adem ".concat(V),ae(an.PlayerWin),c(a+ye),ge(0)):de==ue?(console.log("power ".concat(de," i ").concat(ue)),an.Draw="Remis uk\u0142adem ".concat(V),ae(an.Draw),c(a+ye/2),l(s+ye/2),ge(0)):(an.SiWin="Komputer wygra\u0142 uk\u0142adem ".concat(_),ae(an.SiWin),l(s+ye),ge(0)),setTimeout((function(){On()}),8e3)}),100)},newGame:function(){On(),Qe(!1),c(500),l(500)},DrawCards:function(e){e.target.disabled=!0,Je(!1),Ce(!1),fn();!function e(){for(var n="",t="",i=0;i<2;i++)un(),n=Le[rn],t=Te[cn].value+n,an.PlayerCards.push(t);an.PlayerHand=new Set(an.PlayerCards),2!==an.PlayerHand.size&&(n="","",t="",an.PlayerHand=[],an.PlayerCards=[],e())}();var n=function e(){for(var n="",t="",i=0;i<2;i++)un(),n=Le[sn],t=Te[dn].value+n,an.SiCards.push(t);an.SiHand=new Set(an.SiCards),2!==an.SiHand.size&&(n="","",t="",an.SiHand=[],an.SiCards=[],e())};n();var t=function e(){var n="";if(an.FirstRiver=!an.FirstRiver,an.FirstRiver)for(var t=0;t<5;t++)un(),n=Te[ln].value+Le[on],an.River.push(n);an.River=new Set(an.River),5!==an.River.size&&(an.River=[],e())};t(),an.River=Object(E.a)(an.River),an.PlayerHand=Object(E.a)(an.PlayerHand),an.SiHand=Object(E.a)(an.SiHand),an.PlayerHand.forEach((function(e){an.SiHand.includes(e)&&(n(),an.SiHand=Object(E.a)(an.SiHand))})),an.River.forEach((function(e){if(an.PlayerHand.includes(e)||an.SiHand.includes(e)){var n=an.River.indexOf(e);an.River.splice(n,1),t(),an.River=Object(E.a)(an.River)}})),an.PlayerHand=[].concat(Object(E.a)(an.PlayerHand),Object(E.a)(an.River)),an.SiHand=[].concat(Object(E.a)(an.SiHand),Object(E.a)(an.River)),M(H.concat(an.River)),setTimeout((function(){mn(an.PlayerHand),an.PlayerResultat=jn,an.PlayerHandPower=hn,se(an.PlayerHandPower),console.log("result to ".concat(hn)),console.log(" player power to ".concat(an.PlayerHandPower)),Y(an.PlayerResultat)}),100),setTimeout((function(){hn="",jn="",mn(an.SiHand),an.SiHandPower=hn,he(an.SiHandPower),console.log(" si power to ".concat(an.SiHandPower)),an.SiResult=jn,ee(an.SiResult)}),300);var i=Object.values(x);i.filter((function(e){an.PlayerCards.indexOf(e.code)>=0&&B.push(e.image)})),i.filter((function(e){an.SiCards.indexOf(e.code)>=0&&q.push(e.image)})),i.filter((function(e){an.River.indexOf(e.code)>=0&&T.push(e.image)}))},ImagesPlayer:B,ImagesSi:q,PlayerResult:V,SiResult:_,winner:ie,Pool:ye,BtnDisabled1:Re,BtnDisabled2:De,BtnDisabled3:Ge,Surrender:function(){ae(an.SiWin),l(s+ye),ge(0),On()},SurrenderBtnDisabled:We,DrawCardsButtonDisabled:Fe},children:n})},N=function(){var e=Object(k.useContext)(A).Pool;return Object(G.jsxs)(W,{children:[Object(G.jsxs)(q,{children:["Pula:",e]}),Object(G.jsxs)(J,{className:"River",children:[Object(G.jsx)(K,{className:"DivIMAGE-0"}),Object(G.jsx)(K,{className:"DivIMAGE-1"}),Object(G.jsx)(K,{className:"DivIMAGE-2"}),Object(G.jsx)(K,{className:"DivIMAGE-3"}),Object(G.jsx)(K,{className:"DivIMAGE-4"})]})]})},W=D.a.section(i||(i=Object(M.a)(["\nwidth:100%;\nheight:100%;\ndisplay:flex;\nflex-direction:column;\nalign-items:center;\njustify-content:center;\n\n"]))),J=D.a.section(a||(a=Object(M.a)(["\nwidth:100%;\nheight:35%;\n\ndisplay:flex;\nflex-direction:row-reverse;\n@media(min-width:500px){\nwidth:50%;\n};\n@media(min-width:1000px){\nwidth:40%;\n};\n@media(min-width:1200px){\nwidth:30%;\n};\n\n\n"]))),q=D.a.p(c||(c=Object(M.a)(["\nalign-self:flex-start;\nfont-size:1.4rem;\nmargin-bottom:.9rem;\n"]))),K=D.a.div(r||(r=Object(M.a)(["\nwidth:100%;\nalign-self:center;\n@media(min-width:500px){\nwidth:80%;\n}\n@media(min-width:1000px){\nwidth:50%;\n}\n@media(min-width:1200px){\nwidth:30%;\n}\n"]))),F=function(){var e=Object(k.useContext)(A),n=e.newGame,t=e.DrawCards,i=e.winner,a=e.DrawCardsButtonDisabled;return Object(G.jsxs)(Q,{children:[Object(G.jsx)(T,{onClick:n,children:"Nowa gra"}),Object(G.jsx)(T,{disabled:a,id:"DrawCards",onClick:t,children:"Nowe rozdanie"}),Object(G.jsxs)(L,{children:["Wynik rozdania: ",i&&i]})]})},Q=D.a.section(d||(d=Object(M.a)(["\nposition:relative;\nwidth:100%;\nheight:100%;\ndisplay:flex;\nflex-direction:column;\njustify-items:center;\nalign-items:center;\n\n\n"]))),T=D.a.button(s||(s=Object(M.a)(["\nwidth:55%;\n\nmargin:.3rem;\nalign-self:center;\nfont-size:1.2rem;\ntext-transform:uppercase;\ntext-align:center;\nbackground-color: hsla(345, 100%, 30%);\nfont-weight:bold;\ncolor:hsla(0, 78%, 93%);\n\n&:disabled{\n  background-color: hsla(345, 80%, 49%, .4);\n}\n@media(min-width:500px){\n  width:30%;\n}\n@media(min-width:800px){\n  width:25%;\n}\n@media(min-width:1000px){\n  width:20%;\n}\n@media(min-width:1200px){\n  width:15%;\n}\n"]))),L=D.a.p(l||(l=Object(M.a)(["\nwidth:100%;\nheight:30%;\nfont-size:1.2rem;\nheight:50%;\ntext-transform:uppercase;\nfont-weight:bold;\nalign-self:flex-start;\n\n"]))),X=function(){var e=Object(k.useContext)(A),n=e.cash,t=e.check,i=e.check2,a=e.check3,c=e.ImagesPlayer,r=e.BtnDisabled1,d=e.BtnDisabled2,s=e.BtnDisabled3,l=e.Pool,o=e.Surrender,u=e.SurrenderBtnDisabled;return Object(G.jsxs)(U,{children:[Object(G.jsxs)(_,{children:["\u017betony:",n]}),Object(G.jsxs)($,{children:[Object(G.jsx)(Y,{children:Object(G.jsx)(Z,{src:null===c||void 0===c?void 0:c[0]})}),Object(G.jsx)(Y,{children:Object(G.jsx)(Z,{src:null===c||void 0===c?void 0:c[1]})})]}),Object(G.jsxs)(V,{className:"PlayerButtons",children:[Object(G.jsx)(ee,{disabled:u,id:"Surrender",onClick:o,children:"Pasuje"}),Object(G.jsxs)(ee,{disabled:r,onClick:t,children:["Sprawdzam ",.5*l]}),Object(G.jsxs)(ee,{disabled:d,onClick:i,children:["Sprawdzam kolejn\u0105 karte ",.5*l]}),Object(G.jsxs)(ee,{disabled:s,onClick:a,children:["Karta st\xf3\u0142 ",.5*l]})]})]})},U=D.a.section(o||(o=Object(M.a)(["\nwidth:100%;\nheight:100%;\ndisplay:flex;\n/* flex-direction:column; */\nalign-items:flex-start;\njustify-content:center;\nposition:relative;\n\n"]))),V=D.a.section(u||(u=Object(M.a)(["\nposition:absolute;\nbottom:0;\nwidth:100%;\nheight: 25%;\ndisplay: flex;\n\n\n"]))),Y=D.a.div(h||(h=Object(M.a)(["\nwidth:40%;\n@media(min-width:500px){\nwidth:25%;\n};\n@media(min-width:800px){\nwidth:15%;\n};\n@media(min-width:1000px){\nwidth:12%;\n};\n@media(min-width:1200px){\nwidth:10%;\n};\n"]))),Z=D.a.img(j||(j=Object(M.a)(["\nwidth:100%;\n"]))),$=D.a.section(b||(b=Object(M.a)(["\nposition:absolute;\nbottom:85%;\nleft:50%;\ntransform: translateX(-50%);\ndisplay:flex;\nwidth:40%;\nheight:25%;\nmargin-top:10%;\n@media(min-width:500px){\n    left:60%;\n}\n\n\n"]))),_=D.a.p(m||(m=Object(M.a)(["\nposition:absolute;\nleft:0;\nfont-size:1.4rem;\nmargin:.4rem;\n\n"]))),ee=D.a.button(O||(O=Object(M.a)(["\nwidth:60%;\nheight: 100%;\nalign-self:center;\nfont-size:.8rem;\ntext-transform:uppercase;\nbackground-color: hsla(345, 100%, 30%);\nfont-weight:bold;\ncolor:hsla(0, 78%, 93%);\n&:disabled{\nbackground-color: hsla(345, 80%, 49%, .3);\n}\n@media(min-width:500px){\nfont-size:1rem;\n};\n@media(min-width:800px){\nfont-size:1.2rem;\n};\n@media(min-width:1000px){\nfont-size:1.4rem;\n};\n@media(min-width:1200px){\nfont-size:1.5rem;\n};\n"]))),ne=function(){var e=Object(k.useContext)(A),n=e.cashSi,t=(e.SiCard,e.ImagesSi);e.SiResult;return Object(G.jsxs)(te,{children:[Object(G.jsxs)(re,{children:["\u017betony:",n]}),Object(G.jsxs)(ae,{children:[Object(G.jsx)(ie,{className:"SiCardsDiv",children:Object(G.jsx)(ce,{src:null===t||void 0===t?void 0:t[0]})}),Object(G.jsx)(ie,{className:"SiCardsDiv",children:Object(G.jsx)(ce,{src:null===t||void 0===t?void 0:t[1]})})]})]})},te=D.a.section(f||(f=Object(M.a)(["\nwidth:100%;\nheight:100%;\ndisplay:flex;\nflex-direction:column;\njustify-items:center;\nalign-items:flex-start;\nposition:relative;\n"]))),ie=D.a.div(w||(w=Object(M.a)(["\nwidth:40%;\nopacity:0;\ntransition:.4s ease-out;\n\n@media(min-width:500px){\nwidth:25%;\n};\n@media(min-width:800px){\nwidth:15%;\n};\n@media(min-width:1000px){\nwidth:12%;\n};\n@media(min-width:1200px){\nwidth:10%;\n};\n}\n"]))),ae=D.a.section(v||(v=Object(M.a)(["\nposition:absolute;\nwidth:40%;\nheight:15%;\nbottom:0;\nleft:50%;\ntransform:translateX(-50%);\ndisplay:flex;\nalign-items:center;\n@media(min-width:500px){\n    left:60%;\n}\n\n"]))),ce=D.a.img(x||(x=Object(M.a)(["\nwidth:100%;\n"]))),re=D.a.p(p||(p=Object(M.a)(["\nfont-size:1.4rem;\nmargin:.4rem;"])));var de=function(){return Object(G.jsx)(B,{children:Object(G.jsxs)(se,{children:[Object(G.jsxs)(oe,{children:[Object(G.jsx)(F,{}),Object(G.jsx)(ne,{})]}),Object(G.jsx)(ue,{children:Object(G.jsx)(N,{})}),Object(G.jsx)(le,{children:Object(G.jsx)(X,{})})]})})},se=D.a.section(S||(S=Object(M.a)(["\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n      to right bottom,\n      rgba(000, 000, 000, 0.7),\n      rgba(000, 000, 255, 0.3)\n    ),url(",");\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  flex-direction:column;\n  font-size:4rem;\n"])),z),le=D.a.section(y||(y=Object(M.a)(["\nwidth:100%;\nheight: 25%;\n\n"]))),oe=D.a.section(g||(g=Object(M.a)(["\nwidth:100%;\nheight: 25%;\ndisplay: flex;\nflex-direction:column;\n/* flex-direction:row-reverse; */\n"]))),ue=D.a.section(P||(P=Object(M.a)(["\nwidth:100%;\nheight: 50%;\n\n"])));H.a.render(Object(G.jsx)(R.a.StrictMode,{children:Object(G.jsx)(de,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.742f70c3.chunk.js.map