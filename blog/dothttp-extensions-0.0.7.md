---
title: dothttp-runner 0.0.7
slug: dothttp-runner-0.0.7
---

## randomStr
Now Users can use ${randomStr} to generate randomStrings on the fly (no need to edit to new value file again)
![random show case](/img/randomshowcase.png)


## More fixes/improvements:

- [**Improvement**] run and curl generation initally runs first target in http file.
    - when user runs/trys two generate two options
    - if dothttp.conf.runrecent  to true (defaults to true)
        - runs most recently run target (optional)
    - if dothttp.conf.runrecent  to false
        - asks user for which target to run
- [**Improvement**] while updating properties, input box will prefills old value
- [**Improvement**] added option to disable all environments at a time.
- [**Bug**] History pane is loading too much data while page load fixed.
- [**Bug**] curl generation in editor title is not working fixed
- [**Bug**] linux installation has few glitches 