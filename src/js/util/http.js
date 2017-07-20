'use strict';

module.exports = {
  /*
   * 基于fetch的get方法
   * @method get
   * @param {string} url
   * @param {function} callback 请求成功回调
   */
   get: function(uri, successCallback, failCallback){
     fetch(uri, {
       method: 'GET',
       headers: {
         'Content-Type': 'application/json'
       },
       mode: 'cors'
     })
     .then((response) => response.json())
     .then((result) => {
       successCallback(result);
     })
     .catch(function(err){
       failCallback && failCallback(err);
     })
   },
   /*
    * 基于fetch的post方法
    * @method post
    * @param {string} url
    * @param {function} callback 请求成功回调
    */
   post: function(uri, formData, successCallback, failCallback){
     fetch(uri, {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(formData)
     })
     .then((response) => response.text())
     .then((responseText) => {
       successCallback(JSON.parse(responseText));
     })
     .catch(function(err){
       failCallback && failCallback(err);
     })
   }
}
