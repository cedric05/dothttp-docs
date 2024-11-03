---
title: Authentication
slug: auth
---


Dothttp supports basic, digest and certificate auth inherently

For certificate  auth docs visit [this](./certificates.md)

Redefining authentication for each request is burden, with dothttp one can extend auth information from base request. check out more information on this [here](./extends.md)



## Basic Authentication

Basic authentication is nothing but setting header

`Authorization: <username:password with base64 encoded>`

dothttp provides simple way to set basic authentication

Syntax:

`basicauth(<username>, <password>)`


### Example:

```http
@name('basic auth')
GET http://httpbin.org/basic-auth/foo/bar
basicauth('foo','bar')

```


## Digest Authentication

Digest authentication is one of most used authentication mechanisms.

Syntax:

`digestauth(<username>, <password>)`

```http
@name(digest)
GET "https://httpbin.org/digest-auth/20202/username/password/md5"
digestauth("username", "password")
```

## Azure Auth

Azure supports multiple types of authentication mechanisms. dothttp supports three different types of version. 

### Azure Cli Auth

dothttp leverages azure cli for getting auth token

#### Azure CLI Authentication Issue

When using Azure CLI for authentication, it utilizes the 'az' command to generate an access token. However, in Windows environments, Azure CLI checks for updates to the azure-cli package. If an update is available, it prompts the user for input.

In Windows, when utilizing `cmd`, it opens a new terminal instance, which leads Azure CLI to believe that a tty is available. Consequently, it prompts the user for input, causing requests to hang.

To mitigate this issue, it's recommended to disable automatic updates by executing the following command:

`az config set auto-upgrade.enable=no`

Subsequently, ensure to manually update Azure CLI as needed to ensure smooth functionality with Dothttp.

#### Syntax

`azurecli(<scope>)`

`scope` here is optional

#### Example:

```http
@name(azurecli)
GET "https://management.azure.com/<azure-resource-id>/<operation>"
azurecli("scope")
```

### Azure Client Secret auth

#### Syntax

`azurespsecret(tenant_id, client_id, client_secret, scope)`

`scope` is optional here.

#### Example:

```http
@name("azure_sp")
GET "https://management.azure.com/"
azurespsecret(tenant_id, client_id, client_secret, scope)
```

### Azure Client Certificate Auth

#### Syntax

`azurespcert(tenant_id, client_id, certificate_path, scope)`

`Scope`` here is optional

#### Example:

```http
@name("azure_cert")
GET "https://management.azure.com/"
azurespcert(tenant_id="{{tenant_id}}", client_id="{{client_id}}", certificate_path="{{certificate_path}}", scope="{{scope}}")
```

`scope`` here is optional


## AWS Signature v4 Authentication

Aws signature v4 authentication is used for interacting with amazonaws apis

Syntax:
When both region and service decodeable from url: `awsauth(<accessId>, <secretKey>)`
            or
When region decodable from url but not service: `awsauth(<accessId>, <secretKey>, <service>)`
            or
When both region and service not decodable from url: `awsauth(<accessId>, <secretKey>, <service>, <region>)`
            or
When STS: `awsauth(<accessId>, <secretKey>, <service>, <region>, <session_token>)` 


```http
@name('simple s3, list buckets')
GET 'http://s3.amazonaws.com'
awsauth('dummy-access-id' , 'dummy-secret-token' , 's3', 'us-east-1')
# replace with correct values 
```


## NTLM Authentication

Windows NT LAN Manager (NTLM) is a challenge-response authentication protocol used to authenticate a client to a resource on an Active Directory domain.

Syntax:

`ntlmauth(<username>, <password>)`

```http
@name('ntlm auth')
GET http://localhost:5000/both
ntlmauth('username','password')
# replace with correct values 
```


## Hawk Authentication

It is an authentication scheme for HTTP, built around HMAC digests of requests and responses.

Every authenticated client request has an Authorization header containing a MAC (Message Authentication Code) and some additional metadata, then each server response to authenticated requests contains a Server-Authorization header thatauthenticates the response, so the client is sure it comes from the right server.



Syntax:

`hawkauth(<id>, <key>)`

(or)

`hawkauth(<id>, <key>, <algorithm like sha256...>)`

```http
@name('hawk auth')
GET https://postman-echo.com/auth/hawk
hawkauth('dh37fgj492je','werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn')
json({})
```
