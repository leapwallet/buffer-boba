(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{2229:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/codec",function(){return n(6497)}])},6497:function(e,s,n){"use strict";n.r(s);var o=n(5893),r=n(8863),t=n(1151);function l(e){let s=Object.assign({p:"p",a:"a",h2:"h2",code:"code",h3:"h3",h4:"h4",pre:"pre",span:"span",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Proto Codec - short of Protocol Buffer codec is basically a mapping for supported message types. It is used to decode protocol buffer messages. It is used alongside ",(0,o.jsx)(s.a,{href:"./decoder",children:"DirectSignDecoder"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"protocodec",children:(0,o.jsx)(s.code,{children:"ProtoCodec"})}),"\n",(0,o.jsx)(s.h3,{id:"methods",children:(0,o.jsx)(s.code,{children:"Methods"})}),"\n",(0,o.jsx)(s.h4,{id:"registertype",children:"registerType"}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsx)(s.code,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"registerType"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(typeUrl: string"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" generatedType: GeneratedType): "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"})]})})}),"\n",(0,o.jsxs)(s.p,{children:["Registers a new message type to the codec. The ",(0,o.jsx)(s.code,{children:"typeUrl"})," is the type url of the message and ",(0,o.jsx)(s.code,{children:"generatedType"})," is a ",(0,o.jsx)(s.a,{href:"https://cosmos.github.io/cosmjs/latest/proto-signing/modules.html#GeneratedType",children:"GeneratedType"}),". It basically means, when a message with ",(0,o.jsx)(s.code,{children:"typeUrl"})," is received, the codec will use the ",(0,o.jsx)(s.code,{children:"generatedType"})," to decode the message."]}),"\n",(0,o.jsx)(s.h4,{id:"unpackany",children:"unpackAny"}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsx)(s.code,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"unpackAny"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(any: Any): AnyWithUnpacked"})]})})}),"\n",(0,o.jsxs)(s.p,{children:["Unpacks an ",(0,o.jsx)(s.code,{children:"Any"})," message. It will return an ",(0,o.jsx)(s.code,{children:"AnyWithUnpacked"})," object which contains the unpacked message and the ",(0,o.jsx)(s.code,{children:"typeUrl"})," of the message. You can access the unpacked message using ",(0,o.jsx)(s.code,{children:"message"})," property and the factory via the related factory property."]}),"\n",(0,o.jsxs)(s.p,{children:["This method will return an ",(0,o.jsx)(s.code,{children:"UnknownMessage"})," type if the message is not registered in the codec."]}),"\n",(0,o.jsx)(s.h2,{id:"protofactory",children:(0,o.jsx)(s.code,{children:"ProtoFactory"})}),"\n",(0,o.jsxs)(s.p,{children:["A ",(0,o.jsx)(s.code,{children:"ProtoFactory"})," is an interface that is expected by the ProtoCodec in order to decode a message successfully."]}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ProtoFactory"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"encode"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (message"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" writer"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Writer"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Writer"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"decode"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (r"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Reader"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Uint8Array"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" l"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"number"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fromJSON"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (object"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"toJSON"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (message"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"any"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(s.p,{children:"In order to register a new generated type in the default codec, you need to do the following -"}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { defaultProtoCode } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@leapwallet/buffer-boba'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { sdkName } "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'some-library'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"defaultProtoCodec"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".registerProtoFactory"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"sdkName"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"someMessage"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".typeUrl"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"sdkName"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"someMessage"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".generatedType);"})]})]})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"convertToProtoFactory"})," function will convert the generated message to a ",(0,o.jsx)(s.code,{children:"ProtoFactory"})," that is expected by the codec. Basically, it will add the ",(0,o.jsx)(s.code,{children:"fromJSON"})," and ",(0,o.jsx)(s.code,{children:"toJSON"})," methods to the object."]}),"\n",(0,o.jsxs)(s.p,{children:["Now this updated codec can be used in the ",(0,o.jsx)(s.a,{href:"./decoder",children:"DirectSignDecoder"})," to decode the messages in the following manner -"]}),"\n",(0,o.jsx)(s.pre,{"data-language":"ts","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"ts","data-theme":"default",children:[(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// signDoc is a SignDoc object"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// defaultProtoCodec is the updated defaultProtoCodec object"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"decoder"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"DirectSignDecoder"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(signDoc"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" defaultProtoCodec);"})]})]})}),"\n",(0,o.jsx)(s.p,{children:"You can use this decoder for your custom use-cases."}),"\n",(0,o.jsx)(s.h2,{id:"unknownmessage",children:"UnknownMessage"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"UnknownMessage"})," class is one that implements the Any interface. It represents an unknown message type that cannot be deserialized into a known message type."]}),"\n",(0,o.jsx)(s.h3,{id:"constructor",children:(0,o.jsx)(s.code,{children:"Constructor"})}),"\n",(0,o.jsx)(s.p,{children:"The UnknownMessage class has a constructor that takes two parameters:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"_typeUrl"}),": a string representing the URL of the message type."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"_value"}),": a Uint8Array representing the serialized message."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"getters",children:"Getters"}),"\n",(0,o.jsx)(s.p,{children:"The UnknownMessage class has two getters:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"typeUrl"}),": a string representing the URL of the message type."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"value"}),": a Uint8Array representing the serialized message."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"methods-1",children:"Methods"}),"\n",(0,o.jsx)(s.h4,{id:"tojson",children:"toJSON"}),"\n",(0,o.jsx)(s.p,{children:"The UnknownMessage class has a toJSON method that returns a JSON representation of the message. It returns an object with two properties:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"type_url"}),": a string representing the URL of the message type."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"value"}),": a base64-encoded string representing the serialized message."]}),"\n"]})]})}n(5675),s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/docs/codec.mdx",route:"/docs/codec",frontMatter:{title:"Proto Codec"},headings:[{depth:2,value:"ProtoCodec",id:"protocodec"},{depth:3,value:"Methods",id:"methods"},{depth:4,value:"registerType",id:"registertype"},{depth:4,value:"unpackAny",id:"unpackany"},{depth:2,value:"ProtoFactory",id:"protofactory"},{depth:2,value:"Usage",id:"usage"},{depth:2,value:"UnknownMessage",id:"unknownmessage"},{depth:3,value:"Constructor",id:"constructor"},{depth:3,value:"Getters",id:"getters"},{depth:3,value:"Methods",id:"methods-1"},{depth:4,value:"toJSON",id:"tojson"}],timestamp:1682839815e3,title:"Proto Codec"},pageNextRoute:"/docs/codec"})}},function(e){e.O(0,[863,774,888,179],function(){return e(e.s=2229)}),_N_E=e.O()}]);