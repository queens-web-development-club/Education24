# Flexbox (CSS)

Today we're going to start by introducing you to flexbox. Developers use flex box in order to introduce a way of dynamically sizing their website. This makes it easier to create responsive designs, or to be able to create 1 website that can work on both a massive desktop monitor and a mobile screen. We use flexbox since it makes it easy to distribute space and align content on our site!

> [!todo] Next Slide

We'll need to define some syntax/words in order to work with flexbox easier. First we say that the entire flexbox item is within a container, and inside that container are some individual items.

> [!example] VSCode

By using these terms we can begin to look at our first example of flexbox. If we open up `club1` we'll find an example file called `flex.html`, within it we've defined some simple HTML syntax and created a div with the class of _container_ and some divs inside it with the class of _item_.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div class="container">
      <div class="item">Content!</div>
      <div class="item">Content!</div>
      <div class="item">Content!</div>
    </div>
  </body>
</html>
```

Notice we've also defined some styling within the `style.css` file and imported them. The most important line of styling within this file is:

```css
display: flex;
```

Which turns on the flexbox display type for that container.
If we open up this html file in our web browser we'll see our first example of flexbox. Notice how the items are placed beside eachother, with similar sizes. If we began to edit the content of one of the _items_ to become much larger we can see the true benefits of flexbox:

```html
<div class="item">
  Let's create some long form content and then make it longer by copying and
  pasting it Let's create some long form content and then make it longer by
  copying and pasting it Let's create some long form content and then make it
  longer by copying and pasting it Let's create some long form content and then
  make it longer by copying and pasting it.
</div>
```

> [!question] What do you think will happen?

Notice how the flexbox automatically makes more space for the additional text. If we grab our browser window and make it larger or smaller, we will also see this adjust. This is where the true power of flexbox comes from.

#### flex-direction

We can define the flex-direction, or the direction that each _item_ within the _container_ is placed. The main options are:

1. row (default)
2. row-reverse
3. column
4. column-reverse
   So if we were to add a `flex-direction` item to our _container_, and provide it with a value of `column`, we'd see our items become vertical:

```css
flex-direction: column;
```

#### flex-wrap

We can also allow our items to have the "wrap" ability. If you've ever used notepad this is similar to word wrap there. Essentially if one of the _items_ within your container will fill up the entire width, it will place the other items on to a new line.

```css
flex-wrap: wrap;
```

#### justify-content

We can define the `justify-content` item in ordeer to change how our flex items are spaced.

> [!todo] Show Slides

We can define the content as many values, some of the important ones are:

1. flex-end => `flex-end` won't immediately work due to that item with a massive amount of text, if we remove some of that text we'll see that the items are now placed at the end.
2. center => places the items in the center
3. space-between => items arae evenly distributed

```css
justify-content: flex-end;
```

Let's see what each of these do to our current flexbox implementation.

#### align-items

We can think of `align-items` as a vertical version of `justify-content`. We can define them with some similar items, for example:

1. flex-start (default) => stretches to fit the container
2. center => items are centered vertically
3. strech => items are all streched to the same length

```css
align-items: center;
```

## How to Center a div!

We can finally answer the age old question of "how to center a div"! We can create a flexbox, and define the container to have:

```css
justify-content: center;
align-items: center;
```

Yet we'll find with web development that this works _most_ of the time, yet suddenly you'll have that one instance where it doesn't in which case more divs and more stylings is probably the solution!

## Summary

You can do **so** much more with flexbox, but in the interest of not boring you we are going to stop here. Check out css-tricks, or flexboxfroggy if you would like to learn even more, or talk to one of the TAs. Flexbox, is well just like CSS in the way that we are going to be wanting to google how to do something with flexbox instead of memorizing them. Our goal with this flexbox section was to show you **why** it's so powerful, and why you as a developer should be using it as a solution to some of your problems.

#### Club Website

Now we're going to go back to our club website, and see an example of flexbox in design. If we open up `club2` and then `club.html`, we can then scroll down to our footer and notice that it is a flexbox!

```html
<footer class="footer">
  <!-- Flex Container 1 -->
  <div class="footer-container">
    <!-- Flex Container 2 (also Flex Container 1, Item 1 ) -->
    <a id="footer-container-item" href="https://instagram.com">Instagram</a>
    <a id="footer-container-item" href="https://linkedin.com">Linkedin</a>
    <a id="footer-container-item" href="email:contact@gmail.com"
      >contact@gmail.com</a
    >
    <!-- Flex Container 2, Item 1 -->
    <a id="footer-container-item" href="tel:123-456-7890">123-456-7890</a>
    <!-- Flex Container 2, Item 2 -->
  </div>
  <p>
    This site was written by the members of the Queen's People Watching Club.
  </p>
  <!-- Flex Container 1, Item 2 -->
  <p>copyright 2022&copy;</p>
  <!-- Flex Container 1, Item 3 -->
</footer>
```

We'll notice that the HTML is defined with `footer-container` and `footer-container-item` and we can check our CSS file to see that it is indeed using flexbox!

We have another example of flexbox on our site as well if you check out the human facts section on our `club.html` page.
