(this["webpackJsonpmurika-home"]=this["webpackJsonpmurika-home"]||[]).push([[4],{194:function(e,t,a){e.exports={Auth:"Auth_Auth__3lqiI",LinkText:"Auth_LinkText__2UH7u",Link:"Auth_Link__26g8S",Row:"Auth_Row__1UkDv",Gbgcolor:"Auth_Gbgcolor__3P1XY",active:"Auth_active__2FX51",PrimaryHeading:"Auth_PrimaryHeading__zmnju",Error:"Auth_Error__3-pcR",SectionAccount:"Auth_SectionAccount__1g-yi",Account:"Auth_Account__HjMAV",LoginHeight:"Auth_LoginHeight__3iUhe",AccountForm:"Auth_AccountForm__zWcuV"}},196:function(e,t,a){"use strict";a.r(t);var n=a(52),o=a(15),i=a(18),l=a(20),r=a(22),c=a(21),u=a(0),s=a.n(u),m=a(24),d=a(12),h=a(81),p=a(51),v=a(194),g=a.n(v),_=a(50),f=a(7),A=a(13),y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={controls:{firstName:{elementType:"input",elementConfig:{type:"text",placeholder:"First Name"},value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},lastName:{elementType:"input",elementConfig:{type:"text",placeholder:"Last Name"},value:"",validation:{required:!0,minLength:3},valid:!1,touched:!1},phoneNumber:{elementType:"input",elementConfig:{type:"text",placeholder:"Phone Number"},value:"",validation:{required:!0,minLength:10,maxLength:13},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:8,maxLength:20,isPass:!0},valid:!1,touched:!1},userType:{elementType:"select",elementConfig:{options:[{value:"landlord",displayValue:"Landlord"},{value:"tenant",displayValue:"Tenant"}]},value:"tenant",validation:{},valid:!0}}},e.inputChangedHandler=function(t,a){var i=Object(o.a)(Object(o.a)({},e.state.controls),{},Object(n.a)({},a,Object(o.a)(Object(o.a)({},e.state.controls[a]),{},{value:t.target.value,valid:Object(A.a)(t.target.value,e.state.controls[a].validation),touched:!0})));e.setState({controls:i})},e.submitHandler=function(t){t.preventDefault(),e.props.onSignup(e.state.controls.firstName.value,e.state.controls.lastName.value,e.state.controls.phoneNumber.value,e.state.controls.email.value,e.state.controls.password.value,e.state.controls.userType.value)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map((function(t){return s.a.createElement(h.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,required:t.config.validation.required,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})})),o=null;return this.props.error&&(o=s.a.createElement("p",{className:g.a.Error},"Some thing Went Wrong")),s.a.createElement("div",{className:g.a.Auth},s.a.createElement("div",{className:g.a.SectionAccount},s.a.createElement("div",{className:g.a.Account},s.a.createElement("div",{className:g.a.AccountForm},s.a.createElement("h2",{className:g.a.PrimaryHeading},"Welcome To Murika Home"),s.a.createElement("div",{className:g.a.Row},s.a.createElement(d.c,{to:"/login",activeClassName:g.a.active,className:g.a.Gbgcolor},"Login"),s.a.createElement(d.c,{to:"/auth",activeClassName:g.a.active,className:g.a.Gbgcolor},"New account")),s.a.createElement("form",{onSubmit:this.submitHandler},n,o,s.a.createElement(p.a,{btnType:"Success"}," ","SUBMIT ",this.props.loading?s.a.createElement(_.a,null):""," "),s.a.createElement("h4",{className:g.a.LinkText}," ",s.a.createElement(d.c,{to:"/login",className:g.a.Link},"Already have an account?"," ")," "))))))}}]),a}(u.Component);t.default=Object(m.b)((function(e){return{loading:e.signup.loading,error:e.signup.error,status:e.signup.status}}),(function(e){return{onSignup:function(t,a,n,o,i,l){return e(f.s(t,a,n,o,i,l))}}}))(y)}}]);
//# sourceMappingURL=4.d9ac6561.chunk.js.map