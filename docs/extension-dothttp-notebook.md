---
title: Extension Notebook

slug: dothttp-runner-notebook
---

<iframe width="720" height="480" src="https://www.youtube.com/embed/pSgwQUJS1l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Dothttp-runner provides notebook functionality recently introduced by vscode team. For using notebooks create a file with `httpbook` extension.

By default as for performance reasons, notebook output just is highlighted according to language. for more support you would want to install [dotbook](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dotbook) and change presentation by clicking three dots near left top of notebook output.

By using notebook, one can see response in same place as request. gives you option to save response for future purpose. 

provides a way to inspect headers and also inspect generated request

options in response
![check here](/img/dothttp-notebook-explore.png)
1. response
2. headers
![check here](/img/dothttp-notebook-headers.png )
3. request sent
![check here](/img/dothttp-notebook-request-sent.png)
4. response filter 
![check here](/img/dothttp-notebook-response-filter.png)



## Import http file as Dothttp


Import http file as notebook with ease. 

Steps: 
1. open httpfile 
2. open submenu (right click on editor file)
3. select `Dothttp: Open as HttpBook`

![check here](/img/OpenAsHttpBook.png)


## Convert HttpBook to httpfile

Import http file as notebook with ease. 

Steps: 
1. open httpbook
2. Go to Right top editor title 
3. click `Dothttp: Notebook to Httpfile`

![check here](/img/OpenAsHttpFile.png)

