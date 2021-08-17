---
title: UnixSocket
slug: unix
---


Dohttp provides feasibility to make requests to server exposed via unix socket.

What is unix socket?

for more information visit [here](https://www.tutorialspoint.com/unix_sockets/socket_quick_guide.htm#:~:text=A%20Unix%20Socket%20is%20used%20in%20a%20client-server,client%20and%20server%20and%20then%20for%20exchanging%20data.)


For supporting unix socket url has to be encoded to some thing like this

`http+unix://%2Fvar%2Frun%2Fdocker.sock`
--^----------------^-------------------
protocal         path (actual path is `/var/run/docker.sock`, slashes are encoded to set in hostname)

protocal has to be `http+unix`

hostname has to be urlencoded or replace `/` with `%2F` (this is requried as dothttp has to figure out url path, having both same confuses)



```http
@name("docker base")
# docker base
GET "http+unix://%2Fvar%2Frun%2Fdocker.sock"


@name("docker info"): "simple"
# info
GET "info"


@name("list images") : "simple"
# url extend should work
GET "/images/json"
?timestamp=true
```