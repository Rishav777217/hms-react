(this["webpackJsonphms-react"]=this["webpackJsonphms-react"]||[]).push([[0],{30:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(2),i=c.n(a),n=c(16),j=c.n(n),r=(c(40),c(18)),l=c(62),d=c(63),o=c(64),b=c(65),x=c(66),m=c(67),h=c(68),O=c(69),p=c(87),f=c(70),u=c(71),g=c(72),N=c(73),v=c(74),w=c(10),y=c.p+"static/media/medical-logo.26a5bc7d.png",k=(c(46),c.p+"static/media/staff.c96eacb4.webp"),S=c.p+"static/media/Patients.0b6f242a.webp",C=c(17),_=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=function(){return i(!c)};return Object(s.jsx)("div",{children:Object(s.jsxs)(l.a,{color:"white",light:!0,expand:"lg",children:[Object(s.jsx)("img",{alt:"logo",src:y,href:"#home",className:"logo"}),Object(s.jsx)(d.a,{className:"text-decoration-none title",children:Object(s.jsxs)(C.b,{to:"/",children:["RAYS ",Object(s.jsx)("span",{className:"text-danger font-weight-bold",children:"Hospitals"})]})}),Object(s.jsx)(o.a,{onClick:n}),Object(s.jsxs)(b.a,{isOpen:c,navbar:!0,className:"text-center",children:[Object(s.jsx)(x.a,{className:"mr-auto",navbar:!0,children:Object(s.jsx)(P,{toggle:n})}),Object(s.jsx)(x.a,{className:"text-center",navbar:!0,children:Object(s.jsx)(z,{})})]})]})})},P=function(e){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(m.a,{children:Object(s.jsx)(h.a,{href:"#home",id:"mitem",onClick:e.toggle,children:"Home"})}),Object(s.jsx)(m.a,{children:Object(s.jsx)(h.a,{href:"#features",id:"mitem",onClick:e.toggle,children:"Features"})}),Object(s.jsx)(m.a,{children:Object(s.jsx)(h.a,{href:"#about",id:"mitem",onClick:e.toggle,children:"About Us"})}),Object(s.jsx)(m.a,{children:Object(s.jsx)(h.a,{href:"#contact",id:"mitem",onClick:e.toggle,children:"Contact Us"})})]})},z=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(A,{buttonLabel:"Login"}),Object(s.jsx)(m.a,{children:Object(s.jsx)(h.a,{href:"#social",id:"mitem",children:Object(s.jsx)(w.a,{icon:["fab","facebook-f"],size:"1x"})})}),Object(s.jsx)(m.a,{children:Object(s.jsx)(h.a,{href:"#social",id:"mitem",children:Object(s.jsx)(w.a,{icon:["fab","twitter"],size:"1x"})})})]})},A=function(e){var t=Object(a.useState)(!1),c=Object(r.a)(t,2),i=c[0],n=c[1],j=function(){return n(!i)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(O.a,{outline:!0,color:"secondary",onClick:j,children:e.buttonLabel}),Object(s.jsxs)(p.a,{isOpen:i,toggle:j,className:"title",centered:!0,children:[Object(s.jsx)(f.a,{toggle:j,children:"Choose the login type"}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(g.a,{className:"text-center",children:[Object(s.jsxs)(N.a,{children:[Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)("img",{src:S,alt:"patients",className:"m-img"})}),Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)("img",{src:k,alt:"patients",className:"m-img"})})]}),Object(s.jsxs)(N.a,{children:[Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)(C.b,{to:"/patient_login",className:"btn btn-success",children:"Patients"})}),Object(s.jsx)(v.a,{size:"6",children:Object(s.jsx)(C.b,{to:"/staff_login",className:"btn btn-danger",children:"Staff"})})]})]})})]})]})},D=c(75),I=c(76),R=c(32),H=c(77),L=c(78),q=c.p+"static/media/Hospital.97afabd0.webp",M=c.p+"static/media/Doctors.17853b42.webp",E=c.p+"static/media/Ambulance.07dbdfda.webp",T=c.p+"static/media/Medicines.1ae0233a.webp",Y=c.p+"static/media/prescription.20eae949.webp",U=[{src:q,alt:"hospital",head:"Welcome To Hospital Management System!",text:"A Project By Group 56"},{src:M,alt:"doctors",head:"Doctor's Login Portal",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})},{src:E,alt:"ambulance",head:"Live Ambulance Tracker",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})},{src:T,alt:"medicine",head:"Online Medicine Booking",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})},{src:Y,alt:"prescription",head:"E-Prescription for Patients",text:Object(s.jsx)(O.a,{color:"primary",className:"mt-2",children:"Coming Soon!"})}],B=(c(56),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)(0),j=Object(r.a)(n,2),l=j[0],d=j[1],o=function(){if(!c){var e=l===U.length-1?0:l+1;d(e)}},b=function(){if(!c){var e=0===l?U.length-1:l-1;d(e)}};return Object(s.jsxs)(D.a,{activeIndex:l,next:o,previous:b,children:[Object(s.jsx)(I.a,{items:U,activeIndex:l,onClickHandler:function(e){c||d(e)}}),U.map((function(e){return Object(s.jsxs)(R.a,{onExiting:function(){return i(!0)},onExited:function(){return i(!1)},children:[Object(s.jsx)("img",{src:e.src,alt:e.alt,className:"cimage"}),Object(s.jsx)(H.a,{captionHeader:e.head,captionText:e.text})]},e.src)})),Object(s.jsx)(L.a,{direction:"prev",directionText:"Previous",onClickHandler:b}),Object(s.jsx)(L.a,{direction:"next",directionText:"Next",onClickHandler:o})]})}),F=c(79),G=c(80),J=c(81),W=c(82),K=c.p+"static/media/Rishav.b8158312.jpeg",Q=c.p+"static/media/Aditya.9b0ba92d.jpg",V=c.p+"static/media/Yash.012d197d.jpg",X=c.p+"static/media/Saurabh.0e570865.jpeg",Z=(c(57),function(){return Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)(g.a,{children:[Object(s.jsx)(N.a,{children:Object(s.jsxs)(v.a,{size:"12",className:"text-center title pt-5",children:[Object(s.jsx)("h1",{children:"About Us"}),Object(s.jsx)("hr",{})]})}),Object(s.jsxs)(N.a,{className:"mt-4",children:[Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)($,{img:K,init:"R",name:"ishav Bhardwaj",sap:"1000010909",roll:"180178012",mail:"mailto: bhardwajrishav89@gmail.com",tel:"tel: 06205109117"})}),Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)($,{img:Q,init:"A",name:"ditya Singh",sap:"1000010801",roll:"180178011",mail:"mailto: adiusingh127@gmail.com",tel:"tel: 08941847380"})})]}),Object(s.jsxs)(N.a,{className:"mb-4",children:[Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)($,{img:V,init:"Y",name:"ash Kushwaha",sap:"1000010515",roll:"180178045",mail:"mailto: yashkushwaha227@gmail.com",tel:"tel: 08630087043"})}),Object(s.jsx)(v.a,{sm:"12",lg:"6",children:Object(s.jsx)($,{img:X,init:"S",name:"aurabh Bhandari",sap:"1000010636",roll:"180178004",mail:"mailto: saurabh20bhandari@gmail.com",tel:"tel: 08192992759"})})]})]})})}),$=function(e){return Object(s.jsx)(F.a,{className:"mb-3",id:"cid",children:Object(s.jsxs)(N.a,{className:"no-gutters",children:[Object(s.jsx)(v.a,{xs:"5",className:"my-auto",children:Object(s.jsx)("img",{src:e.img,className:"card-img img-fluid rounded-circle p-3",alt:"profile-pic"})}),Object(s.jsx)(v.a,{xs:"7",className:"text-center my-auto",children:Object(s.jsxs)(G.a,{children:[Object(s.jsxs)(J.a,{className:"h4 title",children:[Object(s.jsx)("span",{className:"text-danger font-weight-bold",children:e.init}),e.name]}),Object(s.jsxs)(W.a,{className:"text-center ctext",children:[Object(s.jsx)("b",{children:"SAP ID:"})," ",e.sap,Object(s.jsx)("br",{}),Object(s.jsx)("b",{children:"Roll No:"})," ",e.roll]}),Object(s.jsx)("div",{className:"text-muted ctext",children:Object(s.jsxs)(W.a,{children:[Object(s.jsxs)("a",{href:e.mail,children:[Object(s.jsx)(w.a,{icon:["fas","envelope"]})," Email"," . "]})," ",Object(s.jsxs)("a",{href:e.tel,children:[Object(s.jsx)(w.a,{icon:["fas","phone-alt"]})," Call"]})]})})]})})]})})},ee=c(83),te=c(84),ce=c(85),se=(c(58),function(){return Object(s.jsxs)("section",{id:"contact",children:[Object(s.jsx)(g.a,{children:Object(s.jsx)(N.a,{children:Object(s.jsxs)(v.a,{size:"12",className:"text-center title py-5",children:[Object(s.jsx)("h1",{children:"Contact Us"}),Object(s.jsx)("hr",{})]})})}),Object(s.jsx)("iframe",{title:"loc",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.3326332707416!2d78.07292901512345!3d30.398303081754904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d70603f128a5%3A0x359bb8f9c7797984!2sDIT%20University!5e0!3m2!1sen!2sin!4v1600617569122!5m2!1sen!2sin",className:"cmap"}),Object(s.jsx)(g.a,{className:"my-5 text-center",children:Object(s.jsxs)(N.a,{children:[Object(s.jsx)(v.a,{xs:"12",lg:"4",children:Object(s.jsx)(ie,{})}),Object(s.jsx)(v.a,{xs:"12",lg:"8",children:Object(s.jsx)(ae,{})})]})})]})}),ae=function(){return Object(s.jsxs)(ee.a,{action:"forms/contact.php",method:"post",className:"php-email-form",children:[Object(s.jsxs)(N.a,{form:!0,children:[Object(s.jsx)(v.a,{md:"6",children:Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ce.a,{required:!0,type:"text",className:"inp",name:"name",id:"name",placeholder:"Your Name"}),Object(s.jsx)("div",{className:"validate"})]})}),Object(s.jsx)(v.a,{md:"6",children:Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ce.a,{required:!0,type:"email",className:"inp",name:"email",id:"email",placeholder:"Your Email"}),Object(s.jsx)("div",{className:"validate"})]})})]}),Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ce.a,{required:!0,type:"text",className:"inp",name:"subject",id:"subject",placeholder:"Subject"}),Object(s.jsx)("div",{className:"validate"})]}),Object(s.jsxs)(te.a,{children:[Object(s.jsx)(ce.a,{required:!0,type:"textarea",className:"tarea",name:"message",rows:"5",placeholder:"Message"}),Object(s.jsx)("div",{className:"validate"})]}),Object(s.jsxs)("div",{className:"mb-3",children:[Object(s.jsx)("div",{className:"loading",children:"Loading"}),Object(s.jsx)("div",{className:"error-message"}),Object(s.jsx)("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(O.a,{type:"submit",id:"sbt-button",className:"ctext",children:"Send Message"})})]})},ie=function(){return Object(s.jsxs)("div",{className:"info",children:[Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fas","map"]})}),Object(s.jsx)("h4",{className:"title font-weight-bold",children:"Location:"}),Object(s.jsx)("p",{className:"ctext",children:"Mussoorie, Diversion Road, Makka Wala, Uttarakhand 248009"})]}),Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fas","envelope"]})}),Object(s.jsx)("h4",{className:"title font-weight-bold",children:"Email:"}),Object(s.jsx)("p",{className:"ctext",children:"adiusingh127@gmail.com"})]}),Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fas","phone-alt"]})}),Object(s.jsx)("h4",{className:"title font-weight-bold",children:"Call:"}),Object(s.jsx)("p",{className:"ctext",children:"+91-8941847380"})]})]})},ne=(c(59),function(){return Object(s.jsx)("footer",{id:"footer",className:"mt-auto",children:Object(s.jsxs)(g.a,{className:"d-md-flex py-4",children:[Object(s.jsxs)("div",{className:"mr-md-auto text-center text-md-left",children:[Object(s.jsxs)("div",{className:"copyright",children:["\xa9 Copyright"," ",Object(s.jsx)("strong",{children:Object(s.jsx)("span",{children:"RAYSHopitals"})}),". All Rights Reserved"]}),Object(s.jsx)("div",{className:"credits",children:"Designed by Group 56"})]}),Object(s.jsxs)("div",{className:"social-links text-center text-md-right pt-3 pt-md-0",children:[Object(s.jsx)("a",{href:"#social",className:"twitter",children:Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fab","twitter"]})})}),Object(s.jsx)("a",{href:"#social",className:"facebook",children:Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fab","facebook-f"]})})}),Object(s.jsx)("a",{href:"#social",className:"instagram",children:Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fab","instagram"]})})}),Object(s.jsx)("a",{href:"#social",className:"google-plus",children:Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fab","skype"]})})}),Object(s.jsx)("a",{href:"#social",className:"linkedin",children:Object(s.jsx)("i",{children:Object(s.jsx)(w.a,{icon:["fab","linkedin-in"]})})})]})]})})}),je=c(19),re=c(33),le=c(34);je.b.add(re.a,le.a);var de=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(_,{}),Object(s.jsx)(B,{}),Object(s.jsx)(Z,{}),Object(s.jsx)(se,{}),Object(s.jsx)(ne,{})]})},oe=c(9),be=c(86),xe=(c(30),function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(ee.a,{className:"pt-4",method:"post",action:"forms/staff_login.php",children:[Object(s.jsxs)(te.a,{row:!0,children:[Object(s.jsx)(be.a,{for:"s_id",sm:{size:2,offset:1},children:"Staff ID:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(ce.a,{required:!0,type:"number",id:"s_id",name:"s_id",placeholder:"Staff ID"})})]}),Object(s.jsxs)(te.a,{row:!0,children:[Object(s.jsx)(be.a,{for:"s_pass",sm:{size:2,offset:1},children:"Password:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(ce.a,{required:!0,type:"password",id:"s_pass",name:"s_pass",placeholder:"Password"})})]}),Object(s.jsxs)(te.a,{row:!0,children:[Object(s.jsx)(be.a,{for:"role",sm:{size:2,offset:1},children:"Role:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsxs)(v.a,{sm:"8",children:[Object(s.jsx)(te.a,{check:!0,children:Object(s.jsxs)(be.a,{check:!0,children:[Object(s.jsx)(ce.a,{type:"radio",name:"role",id:"doctor",value:"doc"})," Doctor"]})}),Object(s.jsx)(te.a,{check:!0,children:Object(s.jsxs)(be.a,{check:!0,children:[Object(s.jsx)(ce.a,{type:"radio",name:"role",id:"reception",value:"rep",defaultChecked:!0})," Receptionist"]})}),Object(s.jsx)(te.a,{check:!0,children:Object(s.jsxs)(be.a,{check:!0,children:[Object(s.jsx)(ce.a,{type:"radio",name:"role",id:"admin",value:"adm"})," Admin"]})})]})})]}),Object(s.jsx)(te.a,{row:!0,className:"text-center",children:Object(s.jsx)(v.a,{xs:"12",children:Object(s.jsx)(O.a,{color:"primary",className:"rounded-pill",children:"Sign In"})})})]})})}),me=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(ee.a,{className:"pt-4",method:"post",action:"forms/patient_login.php",children:[Object(s.jsxs)(te.a,{row:!0,children:[Object(s.jsx)(be.a,{for:"p_id",sm:{size:2,offset:1},children:"Patient ID:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(ce.a,{required:!0,type:"number",id:"p_id",name:"p_id",placeholder:"Patient ID"})})]}),Object(s.jsxs)(te.a,{row:!0,children:[Object(s.jsx)(be.a,{for:"p_pass",sm:{size:2,offset:1},children:"Password:"}),Object(s.jsx)(v.a,{sm:"8",children:Object(s.jsx)(ce.a,{required:!0,type:"password",id:"p_pass",name:"p_pass",placeholder:"Password"})})]}),Object(s.jsx)(te.a,{row:!0,className:"text-center",children:Object(s.jsx)(v.a,{xs:"12",children:Object(s.jsx)(O.a,{color:"primary",className:"rounded-pill",children:"Sign In"})})})]})})},he=function(){return Object(s.jsxs)("div",{className:"ctext",children:[Object(s.jsx)("div",{className:"title_bar text-center bg-color text-white p-3 h1",children:"Staff Login"}),Object(s.jsx)("div",{className:"area",children:Object(s.jsx)(F.a,{id:"cust-cont",children:Object(s.jsx)(G.a,{children:Object(s.jsx)(xe,{})})})})]})},Oe=function(){return Object(s.jsxs)("div",{className:"ctext",children:[Object(s.jsx)("div",{className:"title_bar text-center bg-color text-white p-3 h1",children:"Patient Login"}),Object(s.jsx)("div",{className:"area",children:Object(s.jsx)(F.a,{id:"cust-cont",children:Object(s.jsx)(G.a,{children:Object(s.jsx)(me,{})})})})]})},pe=function(){return Object(s.jsx)(C.a,{children:Object(s.jsxs)(oe.d,{children:[Object(s.jsx)(oe.b,{exact:!0,path:"/",component:de}),Object(s.jsx)(oe.b,{path:"/staff_login",component:he}),Object(s.jsx)(oe.b,{path:"/patient_login",component:Oe}),Object(s.jsx)(oe.a,{exact:!0,to:"/"})]})})};c(60);j.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(pe,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.ef9a530c.chunk.js.map