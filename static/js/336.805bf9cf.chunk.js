"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[336],{9143:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(4942),r=t(1413),c=t(9439),s=t(2791),o=t(9e3),i="ContactForm_form__dhl+T",u="ContactForm_label__-cVXI",l="ContactForm_button__eSwX9",m="ContactForm_input__Bl93P",d=t(9434),h=t(3634),f=t(3329),p=function(){var e=(0,s.useState)({name:"",number:""}),n=(0,c.Z)(e,2),t=n[0],p=n[1],x=function(e){var n=e.currentTarget,t=n.name,c=n.value;p((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},t,c))}))},b=(0,d.v9)((function(e){return e.contacts.data})),_=(0,d.I0)();return(0,f.jsxs)("form",{className:i,name:"contact_form",onSubmit:function(e){e.preventDefault();var n=e.target,t=n.elements.name.value,a=n.elements.number.value;b.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):(_((0,h.uK)({name:t,number:a})),p({name:"",number:""}))},autoComplete:"off",children:[(0,f.jsxs)("label",{className:u,children:["Name",(0,f.jsx)("input",{className:m,type:"text",value:t.name,name:"name",placeholder:"Enter contact name",onChange:x,pattern:"^[a-zA-Z\\s]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{className:u,children:["Number",(0,f.jsx)("input",{className:m,type:"tel",name:"number",value:t.number,placeholder:"Enter contact number",onChange:x,pattern:"^[0-9]+$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsxs)("button",{className:l,type:"submit",children:["Add contact",(0,f.jsx)(o.wpm,{style:{width:"24px",height:"24px"}})]})]})},x="ContactList_list__csErn",b="ContactList_item__EZYHO",_="Filter_input__N7T3z",j="Filter_label__vEd1E",v=function(e){var n=e.onChange,t=(0,d.v9)((function(e){return e.filter}));return(0,f.jsxs)("label",{className:j,children:["Find contacts by name",(0,f.jsx)("input",{type:" text",className:_,value:t,onChange:n})]})},C=t(4808),g=function(e){return e.contacts.isLoading},N=function(e){return e.contacts.error},y=t(4691),k="Contact_text__Wq-3f",w="Contact_button__F+kJb",F=function(e){var n=e.contact,t=(0,d.I0)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("p",{className:k,children:[n.name,": ",n.number]}),(0,f.jsxs)("button",{className:w,onClick:function(){return t((0,h.GK)(n.id))},children:["Delete",(0,f.jsx)(o.XHp,{style:{width:"24px",height:"24px"}})]})]})},E=function(){var e=(0,d.v9)((function(e){return e.contacts.data})),n=(0,d.v9)((function(e){return e.filter})),t=(0,d.I0)(),a=(0,d.v9)(g),r=(0,d.v9)(N),c=n.toLowerCase(),s=e.filter((function(e){return e.name.toLowerCase().includes(c)}));return(0,f.jsxs)(f.Fragment,{children:[e.length>0&&(0,f.jsx)(v,{onChange:function(e){t((0,C.xO)(e.currentTarget.value))}}),a&&!r&&(0,f.jsx)(y.ko,{}),(0,f.jsx)("ul",{className:x,children:s.map((function(e){return(0,f.jsx)("li",{className:b,children:(0,f.jsx)(F,{contact:e})},e.id)}))})]})},I=t.p+"static/media/sea.09f9bcade92c00a29340.jpg",L=t(4270);function Z(){var e=(0,d.I0)(),n=(0,d.v9)(g);return(0,s.useEffect)((function(){e((0,h.yF)())}),[e]),(0,f.jsxs)("div",{style:{backgroundImage:"url(".concat(I,")"),backgroundSize:"cover",width:"560px",height:"auto",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101",flexDirection:"column",borderRadius:"8px"},children:[(0,f.jsx)("div",{children:n&&"Request in progress..."}),(0,f.jsx)(L.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(p,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(E,{})]})}}}]);
//# sourceMappingURL=336.805bf9cf.chunk.js.map