---
layout: default
title: Semantic HTML
permalink: /class-notes/semantic-html
---

{% include_relative _back.md %}

{% include page-status.html statusLevel="working-draft" %}

# Semantic HTML

This is an important topic. Getting the [semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) of your HTML correct has many benefits. It means your HTML will leverage the way that the browser is designed to work and that when software attempts to understand your HTML it has a much better chance of doing so.

It also means that if your HTML is viewed without CSS, it has a better chance of being usable. And it can be less CSS for you to write, since the element you use already has default styling fur the intent that you have for it.

In other cases, it just makes sense. If you use an unordered list for what you want to be a paragraph, you’ll have to do more work to make it look how you want. Maybe even manipulating the DOM with JS.

It’s all semantics. The semantics of a `<dialog>` are that it identifies what the browser should handle as a modal or non-modal dialog box.

Read more at MDN: [&lt;dialog>: The Dialog Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

But when we talk about semantics specifically in HTML, rather than in a more general sense, we usually mean elements that are provided for little other than their semantics. Always along with grouping whatever is inside them - since it’s always a tree.

Not forgetting that with CSS and JS, any element can be basically anything to the user. But the HTML should also make sense when it stands alone. Because why not. It’s how the technology works. Why fight it? That seems to be reason enough although there are many other good ones.

So there are elements like `<nav>`, `<section>` and `<aside>`.

Read all about them below. Maybe starting with headings. Did you know that:

> Sections in HTML5 can be nested. Beside the main section, defined by the element, section limits are defined either explicitly or implicitly. Explicitly-defined sections are the content within <body>, <section>, <article>, <aside>, and <nav> tags.
> 
> Each section can have its own heading hierarchy. Therefore, even a nested section can have an <h1>.

Reference: [html - HTML5: Should I use h2’s or h3’s for content inside of an aside element? - Stack Overflow](https://stackoverflow.com/a/53937288)

When Stack Overflow shines, it really sparkles :) Much appreciation to “Luke” for that awesome reference dug out from the long MDN page.

## References

MDN Glossary: Semantics    
[Semantics - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

The HTML Section Heading Elements    
[The HTML Section Heading elements - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#The_HTML5_outline_algorithm)

MDN Curriculum: Semantic HTML    
[2. Semantic HTML | MDN Curriculum](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)

web.dev: Semantic HTML    
[Semantic HTML | web.dev](https://web.dev/learn/html/semantic-html/)

freeCodeCamp: Semantic HTML Guide    
[Semantic HTML Guide – 10 Alternatives to Using divs](https://www.freecodecamp.org/news/semantic-html-alternatives-to-using-divs/)

freeCodeCamp: Semantic HTML5 Elements Explained    
[Semantic HTML5 Elements Explained](https://www.freecodecamp.org/news/semantic-html5-elements/)

Semantic HTML: What It Is and How to Use It Correctly    
[Semantic HTML: What It Is and How to Use It Correctly](https://www.semrush.com/blog/semantic-html5-guide/)

MDN: HTML Elements Reference    
[HTML elements reference - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
