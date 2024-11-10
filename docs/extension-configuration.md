---
title: Extension configuration

slug: dothttp-runner-configuration
---


## Request-Response


### For Http files


For http file there is no way to save response. below configurations specially made for pre notebook era. Start using notebooks easy configuration or no configuration.

#### Reuse old

set `dothttp.conf.run.reuseold` to `false`, when opening in new tab is required for each httpdef execution


#### Response Save

extension doesn't save any response from any requests but creates an untitled/unsaved editor for you to check and review. if saving is required, user can save right away.

`dothttp.conf.response.savedirectory` provides flexibility to choose directory.

#### Run Recent

while making requests with payload spans more than current editor, scrolling up to `run` itchy. 

set `dothttp.conf.runrecent` to `true` to run most recent request from editor panel.
set `dothttp.conf.runrecent` to `false` to run always choose request from editor panel.


#### Show headers

set `dothttp.conf.showheaders` to `true` to view response headers


#### Use Unstable
set `dothttp.conf.useunstable` to `true` to view use unstable builds for dothttp (mostly usefull for developer)

## Installation

### Dothttp pip package (advanced)

**Used for development of extension**

extension by default tries to download binaries from github. if user wants to move forward with pip approach, 

`dothttp.conf.pythonpath` provides flexibility to chose python virtual environment.

User will need to manually install dothttp via `python -m pip install dothttp-req` and update path for it to work seemlessly

### Dothttp native

**Used for development of extension**

set `dothttp.conf.path` to dotextensions cli path. for more information of this [visit](https://github.com/cedric05/dotextensions-build)


### Dothttp Agent

**Used in case of webextension**

Dothttp extension supports running requests in webextension with help agent. browser should be able to talk to agent. to run agent visit [here](./extension-web.md)

config: `dothttp.conf.agent` defaults to `http://localhost:5000/`. change this configuration only if agent is running on different port or host.

### Dothttp Open in Notebook 


although there is support notebook files, some devs want to use old `http` files for executing requests. extension suggests moving to notebook, which can be annoying. turnof those notifications via setting it to `true` 


config: `dothttp.conf.hideopennotebookfromfile` defaults to `false`


### Reponse History

The VSCode extension saves history in notebook mode, allowing users to view previously executed requests and their responses. 

Max number of requests to save is configurable via  `dothttp.conf.notebook.numofresponses` (defaults to `5`)

### Diagnostics

Dothttp Vscode Extension can save diagnostic information in output for debugging vscode extension. By default its set to false, can be enabled to share diagnostics.

config: `dothttp.conf.diagnostics` (defaults to `false`)