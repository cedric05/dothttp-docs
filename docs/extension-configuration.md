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