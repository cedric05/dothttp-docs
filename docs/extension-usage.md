---
title: Extension Usage

slug: dothttp-runner-usage
---

Dothttp as dsl is not much without extension. extension helps you run requests with ease, provides highlights, shows error message and many more. 


For installation of extension, please visit [installation-page](./getting-started.md) or go directly to marketplace via [dothttp-runner](https://marketplace.visualstudio.com/items?itemName=ShivaPrasanth.dothttp-code)


## Run Requests

Two types of execution
1. Run Gttp 
   > Creates http request and shows response in new splitted tab
2. Generate Curl
    > Generates curl definition of request defined. helpful for sharing requests


### Run in editor

Click `Run http` | `Generate curl` to view

![check here](/img/extension-run-request-showcase.jpg)


### Run from editor panel

Where request payload is super large, going to request beginning is itchy. In such case, go to editor top right corner. 
1. Rocket Button provides execution of request
2. Mirror Button provides curl definition of request

![check here](/img/extension-run-request-editor-showcase.jpg)





## Editor Panels
### Dothttp external Properties

Dothttp provides flexibility to send variables from command line. In extension users can define properties with ease.

![check here](/img/extension-properties-showcase.jpg)

Enabled meant, that property will be used. disabled meant property is defined but, will not be used.

Most icons and its actions are self explanatiory but when in need, User can hover and tooltip will be provided for ease of understanding.

1. Add new property
   > Once added, it will be enabled by default


   1. Copy Value
   2. Disable property
   3. Delete property
   4. Update Vaule
2. Disablity all properties
    > No value from properties will be used.


Properties are confined to particular file. if user wants to use it across multiple files visit [this](#dothttp-properties-json-file)


For more information on properties visit [here](./varibles.md)


### Dothttp Properties json file

Properties are volatile and defined for particular file. dothttp provides setting properties via defining environment. (create `.dothttp.json` file)

![check here](/img/extension-environmment-showcase.jpg). 

Each key in that json provides seperate environment (define multiple properties for each key).

1. Enable a Particualr Environment (section of properties defined in `.dothttp.json`)
2. Disable a Particualr Environment
3. Disable All Environments

### History

Users can view list of past requests made. (seperated by day to day.)

![check here](/img/dothttp-history.jpg). 


### Restart

Dothttp-runner provides ability to restart `dotextensions-build` (internal dothttp-cli build). Can be used for if extension misbehaves (mostly used for dothttp development)

![check here](/img/dothttp-restart.png). 