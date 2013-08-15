Smalltalk current createPackage: 'Examples'!
Widget subclass: #Counter
	instanceVariableNames: 'count header'
	package: 'Examples'!
!Counter commentStamp!
This is a trivial Widget example mimicking the classic Counter example in Seaside.
In order to play with it, just evaluate the doit below in a workspace.
Then take a look in the HTML document above the IDE.

		Counter new appendToJQuery: 'body' asJQuery!

!Counter methodsFor: 'actions'!

decrease
	count := count - 1.
	header contents: [:html | html with: count asString]
!

increase
	count := count + 1.
	header contents: [:html | html with: count asString]
! !

!Counter methodsFor: 'initialization'!

initialize
	super initialize.
	count := 0
! !

!Counter methodsFor: 'rendering'!

renderOn: html
	header := html h1
	with: count asString;
	yourself.
	html button
	with: '++';
	onClick: [self increase].
	html button
	with: '--';
	onClick: [self decrease]
! !

!Counter class methodsFor: 'example'!

tryExample
	"In order to play with the Counter, just select the
	doit below and press the Do it button. Then take a
	look in the HTML document above the IDE."

	"Counter tryExample"
		self new appendToJQuery: 'body' asJQuery
! !

Widget subclass: #Todo
	instanceVariableNames: 'tbody'
	package: 'Examples'!

!Todo methodsFor: 'model'!

allTodos
	"see http://api.jquery.com/jQuery.ajax/"
	
	(self ajax: #{
		'url' -> '/todos'.
		'async' -> false.
		'dataType' -> 'json'}) 
			done: [:result | ^ result].
!

saveTodo: aTodo
	self ajax: #{
		'url' -> '/todo'.
		'async' -> false.
		'data' -> #{'item' -> aTodo}.
		'type' -> 'put'.
		'dataType' -> 'json'}
! !

!Todo methodsFor: 'rendering'!

renderFormOn: html
	|textbox|
	textbox := html input.
	html button
		with: 'Add Todo Item';
		onClick: [self saveTodo: textbox asJQuery val].
	html button
		with: 'Update Table';
		onClick: [self updateItems].
!

renderOn: html
	self renderTableOn: html.
	self renderFormOn: html.
!

renderTableOn: html
	html table
		style: 'border:1px solid black;';
		with: [html thead
			with: [html tr
				with: [html td
					with: 'Item']];
			with: [tbody := html tbody]].
!

updateItems
	tbody asJQuery empty.
	[:html |
		self allTodos do: [:todoItem |
			html with: [
				html tr with: [
					html td with: todoItem]]]]
		appendToBrush: tbody.
! !

!Todo class methodsFor: 'instance creation'!

runDemo
	self new appendToJQuery: 'body' asJQuery.
! !

