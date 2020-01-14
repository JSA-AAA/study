# **Http Basic**

## **Required Topics**

>*Note: important topics are in **bold***

- methods, get, post, put, delete, options
- statusCode， 1xx, 2xx, 3xx, 4xx, 5xx. 200, 404, 500, 304
- restful(什么样算符合restful ，eg.这个API是否符合restful)

## **Goal**
- 发送请求的用户通过了身份验证，但是没有当前操作的权限时，应该返回什么状态码？
- 更新应该用什么method
- 以下API符合restful吗？为什么? 怎么改成符合restful
  - （更新用户信息） POST /users/1/updateUserDetail 
  - （获取用户详情） POST /users/1/getUserDetail

## **Question need to answer**

- usage of each method
- what are status code categories
- 发送请求的用户通过了身份验证，但是没有当前操作的权限时，应该返回什么状态码？
  - 1:请求收到,仍在进行.
  - 2xx:成功.
  - 3xx:重定向,需要进一步操作.（303重定向，304缓存）
  - 4xx:请求失败.
  - 5xx:服务端失败.
- 更新应该用什么method
- 以下API符合restful吗？为什么? 怎么改成符合restful
  - （更新用户信息） POST /users/1/updateUserDetail 
  - （获取用户详情） POST /users/1/getUserDetail

## **Key Concepts**

- http methods
- RESTful

## **Materials / Study Note**

- [MDN: HTTP requests methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [阮一峰：理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)
- [阮一峰：RESTful API 设计指南](http://www.ruanyifeng.com/blog/2014/05/restful_api.html)


## **Question Encountered**

>*Note: check after resolved by yourself or during discussion*


## **Discussion**

- 发送请求的用户通过了身份验证，但是没有当前操作的权限时，应该返回什么状态码？
  - A 403 error response indicates that the client’s request is formed correctly, but the REST API refuses to honor it, i.e. the user does not have the necessary permissions for the resource. A 403 response is not a case of insufficient client credentials; that would be 401 (“Unauthorized”).
- 更新应该用什么method
  - Put
- 以下API符合restful吗？为什么? 怎么改成符合restful
  - （更新用户信息） POST /users/1/updateUserDetail 
  - （获取用户详情） POST /users/1/getUserDetail
    - 不符合
    - 1. 选择的http method不当.
    - 2. api endpoint表达的方式不符合restful规则(不可以用动词).
    - 3. updateUserDetail和getUserDetail不需要.
- what does it mean when we say a http method is safe, indempotent, cacheable
  - 
- [ ] what kind of responses are safe
- [ ] what kind of responses are cachable

## **Exercises** ( Optional )
