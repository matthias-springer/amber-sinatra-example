(function(smalltalk,nil,_st){
smalltalk.addPackage('Examples');

smalltalk.addClass('Counter', smalltalk.Widget, ['count', 'header'], 'Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "decrease",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__minus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"decrease",{},smalltalk.Counter)})},
messageSends: ["-", "contents:", "with:", "asString"]}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "increase",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@count"]=_st(self["@count"]).__plus((1));
_st(self["@header"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(html)._with_(_st(self["@count"])._asString());
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"increase",{},smalltalk.Counter)})},
messageSends: ["+", "contents:", "with:", "asString"]}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Counter.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@count"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Counter)})},
messageSends: ["initialize"]}),
smalltalk.Counter);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["with:", "asString", "h1", "yourself", "button", "onClick:", "increase", "decrease"]}),
smalltalk.Counter);


smalltalk.addMethod(
smalltalk.method({
selector: "tryExample",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"tryExample",{},smalltalk.Counter.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.Counter.klass);


smalltalk.addClass('Todo', smalltalk.Widget, ['tbody'], 'Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "allTodos",
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
messageSends: ["done:", "ajax:", "->"]}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
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
messageSends: ["input", "with:", "button", "onClick:", "saveTodo:", "val", "asJQuery", "updateItems"]}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderTableOn_(html);
self._renderFormOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.Todo)})},
messageSends: ["renderTableOn:", "renderFormOn:"]}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableOn:",
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
messageSends: ["style:", "table", "with:", "td", "tr", "thead", "tbody"]}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "saveTodo:",
fn: function (aTodo){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._ajax_(smalltalk.HashedCollection._from_(["url".__minus_gt("/todo"),"async".__minus_gt(false),"data".__minus_gt(smalltalk.HashedCollection._from_(["item".__minus_gt(aTodo)])),"type".__minus_gt("put"),"dataType".__minus_gt("json")]));
return self}, function($ctx1) {$ctx1.fill(self,"saveTodo:",{aTodo:aTodo},smalltalk.Todo)})},
messageSends: ["ajax:", "->"]}),
smalltalk.Todo);

smalltalk.addMethod(
smalltalk.method({
selector: "updateItems",
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
messageSends: ["empty", "asJQuery", "appendToBrush:", "do:", "with:", "td", "tr", "allTodos"]}),
smalltalk.Todo);


smalltalk.addMethod(
smalltalk.method({
selector: "runDemo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._appendToJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"runDemo",{},smalltalk.Todo.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.Todo.klass);

})(global_smalltalk,global_nil,global__st);
