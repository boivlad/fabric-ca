# FabricCa.UserApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user | Create user
[**downloadSertificate**](UserApi.md#downloadSertificate) | **GET** /user/{username}/download | download sertificate
[**loginUser**](UserApi.md#loginUser) | **POST** /user/login | Logs user into the system


<a name="createUser"></a>
# **createUser**
> createUser(body)

Create user

User registration

### Example
```javascript
var FabricCa = require('fabric_ca');

var apiInstance = new FabricCa.UserApi();

var body = new FabricCa.User(); // User | Created user object


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| Created user object | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="downloadSertificate"></a>
# **downloadSertificate**
> downloadSertificate(username)

download sertificate



### Example
```javascript
var FabricCa = require('fabric_ca');

var apiInstance = new FabricCa.UserApi();

var username = "username_example"; // String | The name that needs to download sertificate 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.downloadSertificate(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name that needs to download sertificate  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="loginUser"></a>
# **loginUser**
> loginUser(username, password)

Logs user into the system



### Example
```javascript
var FabricCa = require('fabric_ca');

var apiInstance = new FabricCa.UserApi();

var username = "username_example"; // String | The user name for login

var password = "password_example"; // String | The password for login in clear text


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginUser(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | 
 **password** | **String**| The password for login in clear text | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

