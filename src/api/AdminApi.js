/*
 * Fabric CA
 * Specification for REST API Fabric CA
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.FabricCa) {
      root.FabricCa = {};
    }
    root.FabricCa.AdminApi = factory(root.FabricCa.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Admin service.
   * @module api/AdminApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AdminApi. 
   * @alias module:api/AdminApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the changeUserStatus operation.
     * @callback module:api/AdminApi~changeUserStatusCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve or decline users
     * Changing user status
     * @param {String} username The name of user that we will change
     * @param {String} status New status of user
     * @param {module:api/AdminApi~changeUserStatusCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.changeUserStatus = function(username, status, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling changeUserStatus");
      }

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling changeUserStatus");
      }


      var pathParams = {
        'username': username,
        'status': status
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/{username}/{status}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:api/AdminApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * method to delete user
     * Delete User by name
     * @param {String} username The name of user that we will delete
     * @param {module:api/AdminApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(username, callback) {
      var postBody = null;

      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUser");
      }


      var pathParams = {
        'username': username
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/{username}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApprovalList operation.
     * @callback module:api/AdminApi~getApprovalListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns list of users for approval
     * Returns a list of jsons
     * @param {module:api/AdminApi~getApprovalListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApprovalList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/list', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
