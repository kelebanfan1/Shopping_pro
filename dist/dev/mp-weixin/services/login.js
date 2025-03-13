"use strict";
const utils_http = require("../utils/http.js");
const postLoginWxMinAPI = (data) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin",
    data
  });
};
const postLoginWxMinSimple = (phoneNumber) => {
  return utils_http.http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber
    }
  });
};
exports.postLoginWxMinAPI = postLoginWxMinAPI;
exports.postLoginWxMinSimple = postLoginWxMinSimple;
//# sourceMappingURL=login.js.map
