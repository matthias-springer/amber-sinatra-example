(function(smalltalk,nil,_st){
smalltalk.addPackage('Examples');

smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.Counter.comment="This is a trivial Widget example mimicking the classic Counter example in Seaside.\x0aIn order to play with it, just evaluate the doit below in a workspace.\x0aThen take a look in the HTML document above the IDE.\x0a\x0a\x09\x09Counter new appendToJQuery: 'body' asJQuery";
smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{},smalltalk.Counter)})},
args: [],
source: "decrease\x0a\x09count := count - 1.\x0a\x09header contents: [:html | html with: count asString]",
messageSends: ["-", "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{},smalltalk.Counter)})},
args: [],
source: "increase\x0a\x09count := count + 1.\x0a\x09header contents: [:html | html with: count asString]",
messageSends: ["+", "contents:", "with:", "asString"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Counter.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Counter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09count := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._h1();
_st($1)._with_(_st(self["@count"])._asString());
$2=_st($1)._yourself();
self["@header"]=$2;
$3=_st(html)._button();
_st($3)._with_("++");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._increase();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$5=_st(html)._button();
_st($5)._with_("--");
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._decrease();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Counter)})},
args: ["html"],
source: "renderOn: html\x0a\x09header := html h1\x0a\x09with: count asString;\x0a\x09yourself.\x0a\x09html button\x0a\x09with: '++';\x0a\x09onClick: [self increase].\x0a\x09html button\x0a\x09with: '--';\x0a\x09onClick: [self decrease]",
messageSends: ["with:", "asString", "h1", "yourself", "button", "onClick:", "increase", "decrease"],
referencedClasses: []
}),
smalltalk.Counter);


smalltalk.addMethod(
smalltalk.method({
selector: "tryExample",
category: 'example',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{},smalltalk.Counter.klass)})},
args: [],
source: "tryExample\x0a\x09\x22In order to play with the Counter, just select the\x0a\x09doit below and press the Do it button. Then take a\x0a\x09look in the HTML document above the IDE.\x22\x0a\x0a\x09\x22Counter tryExample\x22\x0a\x09\x09self new appendToJQuery: 'body' asJQuery",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.Counter.klass);


smalltalk.addClass('Todo', smalltalk.Widget, ['tbody'], 'Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "allTodos",
category: 'model',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt("/todos"),"async".__minus_gt(false),"dataType".__minus_gt("json")])))._done_((function(result){
return smalltalk.withContext(function($ctx2) {
$1=result;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({result:result},$ctx1)})}));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"allTodos",{},smalltalk.Todo)})},
args: [],
source: "allTodos\x0a\x09\x22see http://api.jquery.com/jQuery.ajax/\x22\x0a\x09\x0a\x09(self ajax: #{\x0a\x09\x09'url' -> '/todos'.\x0a\x09\x09'async' -> false.\x0a\x09\x09'dataType' -> 'json'}) \x0a\x09\x09\x09done: [:result | ^ result].",
messageSends: ["done:", "ajax:", "->"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
category: 'rendering',
fn: function (html){
var self=this;
var textbox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
textbox=_st(html)._input();
$1=_st(html)._button();
_st($1)._with_("Add Todo Item");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._saveTodo_(_st(_st(textbox)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._with_("Update Table");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._updateItems();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html,textbox:textbox},smalltalk.Todo)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09|textbox|\x0a\x09textbox := html input.\x0a\x09html button\x0a\x09\x09with: 'Add Todo Item';\x0a\x09\x09onClick: [self saveTodo: textbox asJQuery val].\x0a\x09html button\x0a\x09\x09with: 'Update Table';\x0a\x09\x09onClick: [self updateItems].",
messageSends: ["input", "with:", "button", "onClick:", "saveTodo:", "val", "asJQuery", "updateItems"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderTableOn_(html);
self._renderFormOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Todo)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderTableOn: html.\x0a\x09self renderFormOn: html.",
messageSends: ["renderTableOn:", "renderFormOn:"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._table();
_st($1)._style_("border:1px solid black;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._thead();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._td())._with_("Item");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self["@tbody"]=_st(html)._tbody();
return self["@tbody"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderTableOn:",{html:html},smalltalk.Todo)})},
args: ["html"],
source: "renderTableOn: html\x0a\x09html table\x0a\x09\x09style: 'border:1px solid black;';\x0a\x09\x09with: [html thead\x0a\x09\x09\x09with: [html tr\x0a\x09\x09\x09\x09with: [html td\x0a\x09\x09\x09\x09\x09with: 'Item']];\x0a\x09\x09\x09with: [tbody := html tbody]].",
messageSends: ["style:", "table", "with:", "td", "tr", "thead", "tbody"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "saveTodo:",
category: 'model',
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt("/todo"),"async".__minus_gt(false),"data".__minus_gt(smalltalk.HashedCollection._from_(["item".__minus_gt(aTodo)])),"type".__minus_gt("put"),"dataType".__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"saveTodo:",{aTodo:aTodo},smalltalk.Todo)})},
args: ["aTodo"],
source: "saveTodo: aTodo\x0a\x09self ajax: #{\x0a\x09\x09'url' -> '/todo'.\x0a\x09\x09'async' -> false.\x0a\x09\x09'data' -> #{'item' -> aTodo}.\x0a\x09\x09'type' -> 'put'.\x0a\x09\x09'dataType' -> 'json'}",
messageSends: ["ajax:", "->"],
referencedClasses: []
}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateItems",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@tbody"])._asJQuery())._empty();
_st((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(self._allTodos())._do_((function(todoItem){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(_st(html)._td())._with_(todoItem);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({todoItem:todoItem},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}))._appendToBrush_(self["@tbody"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateItems",{},smalltalk.Todo)})},
args: [],
source: "updateItems\x0a\x09tbody asJQuery empty.\x0a\x09[:html |\x0a\x09\x09self allTodos do: [:todoItem |\x0a\x09\x09\x09html with: [\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html td with: todoItem]]]]\x0a\x09\x09appendToBrush: tbody.",
messageSends: ["empty", "asJQuery", "appendToBrush:", "do:", "with:", "td", "tr", "allTodos"],
referencedClasses: []
}),
smalltalk.Todo);


smalltalk.addMethod(
smalltalk.method({
selector: "runDemo",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"runDemo",{},smalltalk.Todo.klass)})},
args: [],
source: "runDemo\x0a\x09self new appendToJQuery: 'body' asJQuery.",
messageSends: ["appendToJQuery:", "asJQuery", "new"],
referencedClasses: []
}),
smalltalk.Todo.klass);

})(global_smalltalk,global_nil,global__st);
