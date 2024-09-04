### DOM-2

we discussed about getElementById()---> we are targeting the html element.

innerText, innerHTML---> to get the content inside that html element.

input tag----> .value to get the value typed by the user.

- getElementByClassName()
  - method return a collection of element with specified class Name();
- getElementByTagName()

  - method return a collection of element with specified tag Name();

  they will return us an array.

  - alternative to targets elements in html

    tagName
    className
    id

    - these methods are know as

      - querySelector
      - querySelectorAll

    - querySelector()

      - this method returns the first element that matches a css selector.

    - querySelectorAll()
      - this method returns all the elements matching the selector and store in a form of an array.

## Events

- until now , we are using onClick event listener
  but we are using it inline to html element.

<button onClick="likeMe()">like</button>

- an improvised version to used event handler , we have a method called **addEventListener()**

## addEventListener(arg1, arg2);

- arg1
  here we use event name, but do not write **on**
  instead for onClick use **"click"**

- arg2
  we will pass a function which will run when the event is triggered.
