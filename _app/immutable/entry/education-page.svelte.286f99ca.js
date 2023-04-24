import{S as ee,i as te,s as se,k as v,y as M,l as w,m as x,z as D,h as i,n as u,b as k,A,g as G,d as z,B as H,a as E,q as S,c as I,r as q,G as c,H as F,M as ae}from"../chunks/index.2e46d056.js";import{D as h,P as re,H as ne}from"../chunks/pageWrapper.df0ca1fe.js";import{T as K}from"../chunks/textBlock.456b3aaa.js";import{M as V}from"../chunks/myLink.6f973151.js";let j=h.languages,b=j.English,le=j.German;j.Persian;let L=new h,oe=new h;oe.setText(b,"Available in: ");L.setText(b,"Social Services Information");L.setText(le,"Informationen zu sozialen Diensten");let O=new h;O.setText(b,"Education");let Q=new h;Q.setText(b,"This Google Map (from Pro Asyl) contains locations of German Universities that offer ways for refugees to learn or study,                                 with more information about each location on the map. There are many sources of free informative videos and articles for refugees,                                 collected on sites such as ");let R=new h;R.setText(b," and ");let U=new h;U.setText(b,"Hochschulforum Digitalisierung");let N=new h;N.setText(b,"oncampus.de");let W=new h;W.setText(b,"Integration Courses");let Z=new h;Z.setText(b,"Information about integration courses in Germany can be found on ");let X=new h;X.setText(b," in multiple languages. Integration courses often include courses about language, history, and culture.");let Y=new h;Y.setText(b,"the BAMF website");function ie(T){let e,n=O.getText()+"",s;return{c(){e=v("p"),s=S(n),this.h()},l(t){e=w(t,"P",{slot:!0,class:!0});var a=x(e);s=q(a,n),a.forEach(i),this.h()},h(){u(e,"slot","title"),u(e,"class","svelte-140wd1r")},m(t,a){k(t,e,a),c(e,s)},p:F,d(t){t&&i(e)}}}function ce(T){let e,n,s,t,a,o,d=Q.getText()+"",p,$,l,f,r=R.getText()+"",m,y,g,C;return l=new V({props:{link:"https://hochschulforumdigitalisierung.de/de/blog/digital-education-and-information-resources-refugees",text:U.getText()}}),g=new V({props:{link:"https://"+N.getText(),text:N.getText()}}),{c(){e=v("div"),n=v("p"),s=v("iframe"),a=E(),o=v("p"),p=S(d),$=E(),M(l.$$.fragment),f=E(),m=S(r),y=E(),M(g.$$.fragment),this.h()},l(_){e=w(_,"DIV",{slot:!0,class:!0});var B=x(e);n=w(B,"P",{align:!0,class:!0});var J=x(n);s=w(J,"IFRAME",{class:!0,title:!0,src:!0}),x(s).forEach(i),J.forEach(i),a=I(B),o=w(B,"P",{class:!0});var P=x(o);p=q(P,d),$=I(P),D(l.$$.fragment,P),f=I(P),m=q(P,r),y=I(P),D(g.$$.fragment,P),P.forEach(i),B.forEach(i),this.h()},h(){u(s,"class","map svelte-140wd1r"),u(s,"title","Education Oppurtunities"),ae(s.src,t="https://www.google.com/maps/d/embed?mid=1dIJKbgjwdzyQCkMGI_Ezai8v06o&hl=de&ehbc=2E312F")||u(s,"src",t),u(n,"align","center"),u(n,"class","svelte-140wd1r"),u(o,"class","svelte-140wd1r"),u(e,"slot","body"),u(e,"class","svelte-140wd1r")},m(_,B){k(_,e,B),c(e,n),c(n,s),c(e,a),c(e,o),c(o,p),c(o,$),A(l,o,null),c(o,f),c(o,m),c(o,y),A(g,o,null),C=!0},p:F,i(_){C||(G(l.$$.fragment,_),G(g.$$.fragment,_),C=!0)},o(_){z(l.$$.fragment,_),z(g.$$.fragment,_),C=!1},d(_){_&&i(e),H(l),H(g)}}}function ue(T){let e,n=W.getText()+"",s;return{c(){e=v("p"),s=S(n),this.h()},l(t){e=w(t,"P",{slot:!0,class:!0});var a=x(e);s=q(a,n),a.forEach(i),this.h()},h(){u(e,"slot","title"),u(e,"class","svelte-140wd1r")},m(t,a){k(t,e,a),c(e,s)},p:F,d(t){t&&i(e)}}}function fe(T){let e,n=Z.getText()+"",s,t,a,o,d=X.getText()+"",p,$;return a=new V({props:{link:"https://www.bamf.de/EN/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/integrationskurse-node.html",text:Y.getText()}}),{c(){e=v("p"),s=S(n),t=E(),M(a.$$.fragment),o=E(),p=S(d),this.h()},l(l){e=w(l,"P",{slot:!0,class:!0});var f=x(e);s=q(f,n),t=I(f),D(a.$$.fragment,f),o=I(f),p=q(f,d),f.forEach(i),this.h()},h(){u(e,"slot","body"),u(e,"class","svelte-140wd1r")},m(l,f){k(l,e,f),c(e,s),c(e,t),A(a,e,null),c(e,o),c(e,p),$=!0},p:F,i(l){$||(G(a.$$.fragment,l),$=!0)},o(l){z(a.$$.fragment,l),$=!1},d(l){l&&i(e),H(a)}}}function me(T){let e,n,s,t,a,o,d,p,$,l,f;return e=new ne({}),p=new K({props:{$$slots:{body:[ce],title:[ie]},$$scope:{ctx:T}}}),l=new K({props:{$$slots:{body:[fe],title:[ue]},$$scope:{ctx:T}}}),{c(){M(e.$$.fragment),n=E(),s=v("div"),t=v("p"),a=S("Education"),o=E(),d=v("div"),M(p.$$.fragment),$=E(),M(l.$$.fragment),this.h()},l(r){D(e.$$.fragment,r),n=I(r),s=w(r,"DIV",{class:!0});var m=x(s);t=w(m,"P",{class:!0});var y=x(t);a=q(y,"Education"),y.forEach(i),m.forEach(i),o=I(r),d=w(r,"DIV",{class:!0});var g=x(d);D(p.$$.fragment,g),$=I(g),D(l.$$.fragment,g),g.forEach(i),this.h()},h(){u(t,"class","title svelte-140wd1r"),u(s,"class","title-wrapper svelte-140wd1r"),u(d,"class","blocks-wrapper svelte-140wd1r")},m(r,m){A(e,r,m),k(r,n,m),k(r,s,m),c(s,t),c(t,a),k(r,o,m),k(r,d,m),A(p,d,null),c(d,$),A(l,d,null),f=!0},p(r,m){const y={};m&1&&(y.$$scope={dirty:m,ctx:r}),p.$set(y);const g={};m&1&&(g.$$scope={dirty:m,ctx:r}),l.$set(g)},i(r){f||(G(e.$$.fragment,r),G(p.$$.fragment,r),G(l.$$.fragment,r),f=!0)},o(r){z(e.$$.fragment,r),z(p.$$.fragment,r),z(l.$$.fragment,r),f=!1},d(r){H(e,r),r&&i(n),r&&i(s),r&&i(o),r&&i(d),H(p),H(l)}}}function pe(T){let e,n,s;return n=new re({props:{$$slots:{default:[me]},$$scope:{ctx:T}}}),{c(){e=v("main"),M(n.$$.fragment),this.h()},l(t){e=w(t,"MAIN",{class:!0});var a=x(e);D(n.$$.fragment,a),a.forEach(i),this.h()},h(){u(e,"class","svelte-140wd1r")},m(t,a){k(t,e,a),A(n,e,null),s=!0},p(t,[a]){const o={};a&1&&(o.$$scope={dirty:a,ctx:t}),n.$set(o)},i(t){s||(G(n.$$.fragment,t),s=!0)},o(t){z(n.$$.fragment,t),s=!1},d(t){t&&i(e),H(n)}}}class _e extends ee{constructor(e){super(),te(this,e,null,pe,se,{})}}export{_e as default};
