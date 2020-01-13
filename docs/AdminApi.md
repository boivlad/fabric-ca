# FabricCa.AdminApi

All URIs are relative to *https://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeUserStatus**](AdminApi.md#changeUserStatus) | **PUT** /user/{username}/{status} | Approve or decline users
[**deleteUser**](AdminApi.md#deleteUser) | **DELETE** /user/{username} | method to delete user
[**getApprovalList**](AdminApi.md#getApprovalList) | **GET** /user/list | Returns list of users for approval


<a name="changeUserStatus"></a>
# **changeUserStatus**
> changeUserStatus(username, status)

Approve or decline users

Changing user status

### Example
```javascript
var FabricCa = require('fabric_ca');

var apiInstance = new FabricCa.AdminApi();

var username = "username_example"; // String | The name of user that we will change

var status = "status_example"; // String | New status of user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changeUserStatus(username, status, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name of user that we will change | 
 **status** | **String**| New status of user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(username)

method to delete user

Delete User by name

### Example
```javascript
var FabricCa = require('fabric_ca');

var apiInstance = new FabricCa.AdminApi();

var username = "username_example"; // String | The name of user that we will delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The name of user that we will delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getApprovalList"></a>
# **getApprovalList**
> getApprovalList()

Returns list of users for approval

Returns a list of jsons

### Example
```javascript
var FabricCa = require('fabric_ca');

var apiInstance = new FabricCa.AdminApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getApprovalList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

