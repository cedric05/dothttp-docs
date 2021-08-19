---
title: Export and Import
slug: import-export
---

Dothttp provides import and export from various formats. 


Requires vscode and `dothttp-runner` extension installed

## Installation
please visit [installation-page](./getting-started.md) or go directly to marketplace via [dothttp-runner](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)



## Postman Collections

Postman is most used http client out there. importing or exporing a postman collection is supported in dothttp

### Import postman collection

do `ctrl+shift+p` and write `dothttp: import resource`


#### Step 1: 
pick postman from list of options
![check here](/img/postmanimport.png)

#### Step 2: 
select how you want to import. 
postman provides export via json file or via link generated from postman
![check here](/img//postman-pick-import-options.png)


#### Import 
##### Import step by link

paste link, it will ask which directory to save
![check here](/img/postman-import-by-link.png)


#### Import step by file

select postman collection json file
![check here](/img/postman-import-by-file.png)



### Export postman collection

For exporting to postman collection, open `http` file in vscode. click menu options in editor.

![check here](/img/postman-export.png)

select `dothttp export http to postman`  and select folder to save file.



## Openapi/Swagger

### Import

Follow same steps as [postman-import](#step-1), choose `swagger` over postman.

Support is availabile for both `2.0` and `3.0`



## Curl

### Import

Follow same steps as [postman-import](#step-1), choose `curl` over postman and paste curl

Support is availabile for both `2.0` and `3.0`


## Export http request to general purpose programming languages

Dothttp provides feasibility to export http definition to general programming lanugages like python, c, java, javascript, nodejs


### step-1 export

To export to `ctrl+shift+p` and select `>dothttp generate request programming languages`, click request to export, new file be generated with `.gen.[py/js/java]` extension


![check here](/img/export-general-programming.png)

### step-2 export

Pick language of your choice.

Few languages have
![check here](/img/export-pick-language.png)

Language sub options, pick if exists
![check here](/img/export-pick-sublanguage-if-exisits.png)

request will be generated and opened in new tab of vscode