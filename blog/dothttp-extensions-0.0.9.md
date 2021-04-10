---
title: dothttp-runner 0.0.9
slug: dothttp-runner-0.0.9
---
![github code spaces](/img/github-code-spaces.png)

More fixes/improvements:
- [**Announcement**] dothttp-runner can be run in remote wsl and containers.
- [**Improvement**] history item will now start showing time of executed for better reference.
- [**Improvement**] run http def (rerun last target disabled), will now start showing urls also (for ease picking).
- [**Improvement**] Configure response directory name (saving responses in request file itself is not suitable for all)  use/configure dothttp.conf.response.savedirectory to not save in current file's directory.
- [**Bug**] multipart (files payload) with content-type not specified is taking forever in windows platform.
- [**Bug**] busybox multipart decoder is considering upload text part as file (don't set content-type for normal)
- [**Bug**] don't set default python3 path (if user adds it, he has to install dothttp-req)
- [**Bug**] postman import is creating duplicate folder, use showOpenDialog rather than, showSaveDialog
- [**Bug**] history execute is not showing file extension/ file syntax
- [**Bug**] history item hove is showing 200 undefined fixed.

![history imp1](/img/history-imp2.png)
![history imp2](/img/history-imp2.png)