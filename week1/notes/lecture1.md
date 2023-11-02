# VSCode Installation

Installing VSCode is generally pretty easy regardless of your operating system. We are going to go through the steps very breifly on a windows install as a large majority of people will be using Windows. If you are using another OS and run into issues with the installation please flag down either myself or a TA and we can help you out.

First we're going to head over to the VSCode download site: https://code.visualstudio.com/download, and grab the installer for Windows. We'll do some movie magic here and realize that I already have it downloaded.

Quick installation and we can open up VSCode. We can then open up folders to work within them, I'll open up the QWeb folder for this week as an example. The beauty of VSCode is it's customizability -> we won't go too in-depth into VSCode but suffice to say with a ton of online documentation you can complete a ton of tasks extremely quickly with keyboard shortcuts.
# HTML
Now that we've given you a brief introduction into QWeb, the Web, and Visual Studio Code we're going to jump right in and start with HTML!

First thing we're going to do is open up Visual Studio Code or VSCode, from here I'm going to open up a brand new folder here. On the right hand side we can open up the file explorer. From here we can use either File -> New File, or right click on the file explorer bar and create a new file. We're going to call this `club1.html`. The file extension will tell our computer what type of file this is!

We're going to open up `club1.html`. We have to do some setup in HTML to get our website going! Some of these things may seem a little cryptic, but I promise you they will make a bit more sense as we go forward and feel free to reach out to a TA or myself after for help.

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>

  <body></body>
</html>
```

Notice that HTML tags generally have an opening tag, and a closing tag (the closing tag uses the forward slash at the beginning of the name). We also declare that this is an HTML file at the top, just in case. We create an HTML tag in order to declare what language our website is using, that way things like google translate will be able to work -- we also include all of our HTML within this tag! We have these two separating _"blocks"_ in our code, one is the **head** which generally controls some of the metadata (information about what type of information this website stores -- we'll get further into this later!) and also the **body** which is where the majority of the website's content is stored.

From here, we now have a basic HTML file so we can open it in the web browser of our choice! We open it here andddd it's blank.  We haven't added any content to our site yet. Notice that the tab title is `club1.html` so at the very least we know we've opened the correct file.

We've pre-written some code for this lesson so let's first checkout `club2.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>People Watching Club</title>
  </head>

  <body>
    <h1>People Watching Club!</h1>
    <h3>We are the People watching club, we love Squirels.</h3>

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/A_group_of_men_stand_birdwatching.jpg/1200px-A_group_of_men_stand_birdwatching.jpg"
      width="400"
    />
  </body>
</html>
```

Let's first open up `club2.html` on our web browser and observe the changes. We've added a title to our **head** tag, this will change the title on the tab as you can see here. We've also added this comment of a charset being UTF-8, don't worry about this too much at the moment, let's accept that it's some metadata that makes sure text displays correctly on our page.

Within the **body** tag there are now two _headings_, this is just text that is larger than usual and has some extra spacing bult right into HTML! There are 6 heading tags 1-6, we are showing off 1 and 3 here.

We've also added an image. This is the first tag that doesn't have a closing tag, we only have to open it. This is also the first element that has some properties. First we've defined `src` also known as source. This is where the image actually comes from, it can be a URL like in this case but it can also be a file location on your computer. We have also set the **width** of this image, this makes it so that the image isn't too large. Notice how if we remove this width tag the image becomes massive -- in fact it's the original resolution of this image from wikipedia! We can use `width` and `height` tags in order to control images. Don't worry too much about memorizing this, our code will be available at the end and you can also look this up on documentation sites like w3schools.

We are now going to continue to show off some more HTML tags in `club3.html`.

```html
<p>
  <strong>Humans</strong> (<i>Homo sapiens</i>) are the most abundant and
  widespread <b>species of primate</b>, characterized by bipedalism and large,
  complex brains. This has enabled the development of advanced tools, culture,
  and language.
</p>

<br /><br />

<a
  href="https://www.natgeokids.com/uk/discover/science/general-science/15-facts-about-the-human-body/"
  >Cool Human facts!</a
>
```

First we use the **p** tag to define a paragraph. This is the basic tag for a bunch of text! Furthermore, we use the **strong** tag to define text that is important -> it also bolds it. The **i** tag will italizice text. The **b** tag will bolden text. As a note, the **b** tag and **strong** tag have no difference in their actual formatting, it's more of a code style choice.

We are also using **br** in order to insert line breaks. These are useful for formatting in HTML and are kind of similar to a `\n` in Python.

We also insert our first link! The **a** tag is used to define a hyperlink, we use the **href** property in order to set where the link is going. We also include text within the tag -- this is what the user will click on to be redirected.

Text formatting is the main benefit of using HTML, and even when we continue on later to React these basic HTML tags will be useful for styling and properly displaying the content on our site!

Let's move on to adding a list to our site. Let's make a new file, `club4.html` and copy over our previous site from `club3.html`. Underneath we are going to add two lists.

```html
<ul>
  <li>Humans are very social animals by design</li>
  <li>Enjoy touching grass</li>
  <li>Humans may lose 25 percent of their food to thieves (other humans)</li>
  <li>They run fast to escape predators</li>
</ul>
<br /><br /><br />
<h2>Rules for safe human watching:</h2>

<ol>
  <li>Do not harass the Humans</li>
  <li>Do not attempt to feed the Humans</li>
  <li>Do not disrupt the human's home</li>
  <li>Watch from a safe distance</li>
</ol>
```

First we defined a **ul**, ul standing for unordered list. We are going to open up that tag and indent inside of it. All of the HTML we write in here is going to be contained within this list. Unordered list just means that the list will have bullet points instead of numbers.

We'll add in some list items here, using the **li** tag. Each list item is essentially a new bullet point, if you think back to using a word processor to take notes.

We can now see this list on our website by opening up our HTML file!

From here we are going to add a new line and then add an ordered list by using a **ol** tag, meaning ordered list. This just means there will be numbering, 1, 2, 3... in order to display our points. We'll add some content using the **li** or list items tag. Then we'll return to our web browser only to see that our changes aren't there -- we forgot to refresh

> Having provided a brief introduction to HTML through the head & body tags as well as the implementation of lists, bolding, and new lines.  We're going to ask you to apply some of these concepts, open up the code editor of your choice, create a new HTML file, and try to create a small little portfolio website containing some basic information about you, some different sizes of text, and anything else you can think of.  Feel free to ask for help, or use online resources.  Our hope is that by having you play with what we're showing you for a few minuities it will make more sense and give you some time to make mistakes.

We are going to open up `club5.html` and have a quick look at tables. First let's have a peak at what the website actually looks like. The best way to understand our code is to look at the table in terms of rows, with the **titles** being bolded at the top.

```html
<table>
  <tr>
    <th>Item</th>
    <th>Stock</th>
    <th>price</th>
  </tr>
  <tr>
    <td>Shirts</td>
    <td>10+</td>
    <td>$19.99</td>
  </tr>
  <tr>
    <td>Pants</td>
    <td>9</td>
    <td>$24.99</td>
  </tr>
  <tr>
    <td>Hats</td>
    <td>10+</td>
    <td>$9.99</td>
  </tr>
  <tr>
    <td>Binoculars</td>
    <td>4</td>
    <td>$49.99</td>
  </tr>
</table>

<br /><br />
<p>Check out our blog post below!</p>
```

First we define an outer `<table>` tag to hold our entire table within. Then we create a `<tr>` tag, also known as table row. This will define a row in our table. Within the first table row we define a few `<th>` tags, also known as table headers -- essentially table titles. This is what makes the bolding.

From there we define `tr` tags -> table row tags. These are a generic table rows containing `td` tags, known as table data. Essentially the general table value.

We've also added a little paragraph at the bottom for later.

Let's create `club6.html` and carry over our code from `club5.html`. We are going to create an image that is clickable! It's become second nature to us that clicking an image on a website will often redirect to either another page or a larger view of that image.

First we are going to create an outer link tag. We are going to set the link's content (or what happens when we click) using the `href` tag.
Within our link we are going to define an image tag. We will use the `src` property in order to assign it an image from somewhere on the internet. We are also going to introduce the **alt** property, this is what a screen reader will read out when it finds this image on a page. For now we are going to leave it blank -- we just wish to introduce it. We are also going to set the width to 200 pixels so that it isn't massive.

```html
<a
  href="https://www.psychologytoday.com/us/blog/fulfillment-any-age/201504/the-experts-guide-people-watching"
>
  <img
    src="https://images.edrawsoft.com/articles/graphic-organizer-for-writing/blog-writing.jpg"
    alt=""
    width="200px"
  />
</a>
```

We now have a working clickable image!

> As a final example for this tutorial, attempt to make your very own clickable image on the portfolio website you've created.

We are now going to look at the final version of our file, `club7.html`.

```html
<div style="border: 1px solid;">
  <p>Thank you visiting! we'll miss you!</p>
</div>
```

In this file we are going to look forward a little bit to a new HTML element called a `div`. A `div` is generally used by programmers in order to group HTML elements together. They will also make styling easier once we get into writing some CSS (which is a language that let's us style our site. Think of styling as changing colours, text, and more!).

We've added the style tag to add a border to this div just to show you how they work.

It's important to note that HTML elements don't always take up the exact amount of space for lack of a better word that they appear to via their text on a website. We can use the developer tools on our browser to see our individual HMTL elements on our site. Right click and click inspect on Chrome to open up this tool -- Firefox has a similar one. You can actually see our written HTML on the right hand side there! Even more importantly we can click this selector at the top and use it to see the size of the different elements on our site.

That concludes all of our teaching for this lesson - thank you all for coming! I would like to stress that all of the code provided in this lesson are provided on our discord or you can come to me and I can email the files to you if that is easier! We have also included a polished version of the site written by Sky with comments, as well as a file containing some HTML documentation/sample tags which you can see here.

Please appraoch myself or a TA if you have any questions. I think this is now converted into a social!
