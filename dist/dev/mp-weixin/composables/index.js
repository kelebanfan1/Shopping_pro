"use strict";
const common_vendor = require("../common/vendor.js");
const useGuessList = () => {
  const guessRef = common_vendor.ref();
  const onSrolltolower = () => {
    var _a;
    (_a = guessRef.value) == null ? void 0 : _a.getMore();
  };
  return {
    guessRef,
    onSrolltolower
  };
};
exports.useGuessList = useGuessList;
//# sourceMappingURL=index.js.map
