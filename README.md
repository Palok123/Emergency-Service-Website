question 01: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
<!-- answer of question : 01 -->
01. ans:-
<br>
 getElementById('id'): It select only One html elements and return it, its very faster.
<br>
 getElementsByClassName('class'): It gives the collection of all elements with same class name , its a live classlist and can update .
<br>
 querySelector('css selector') : select the first match any single element , it return the first match elemen.
<br>
querySelectorAll('css selector') : it selects multiple elements with same selector name . it returns static nodelist.
<br><br>


question 02: How do you create and insert a new element into the DOM?<br>
<!-- answer of question 02 -->
02.ans:-
<br>
steap1: I will selecet the Parent by: parent = document.getElementById().
<br>
steap2: create new element by: newElement =   document.createElement("div").
<br>
steap3: add content to the new element by :  newElement.innerText =" text ".
<br>
steap4: append the new element by  parent.appendChild(newElement) .
<br>

question 03: What is Event Bubbling and how does it work?<br> 
<!-- answer of question 03 -->
03.ans:-
<br>
Event Bubbling is a concept in the DOM event flow where an event starts from the target element  and then bubbles up through its parent elements until it reaches the top .
<br>
How it works : 
<br>
1.User interacts with a target element like clicks a button inside a div.
<br>
2.The event fires on the target button first.
<br>
3.Then it bubbles up to the parent div, then body, then html , and finally document.
<br><br>
question 04: What is Event Delegation in JavaScript? Why is it useful?<br>
<!-- answer of question 04 -->
04.ans:-
<br>
Event Delegation is a JavaScript technique where you add a single event listener on a parent element to handle events on its child elements, using event bubbling.
<br>
useful because :
<br>
Fewer event listeners and better performance for large DOM trees
<br><br>

question 05: What is the difference between preventDefault() and stopPropagation() methods?<br>
<!-- answer of question 05 -->
05.ans:-
<br>
preventDefault(): Prevents the default browser action from happening.
<br>
stopPropagation(): Stops the event from bubbling up to parent elements.