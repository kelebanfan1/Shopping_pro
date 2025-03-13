"use strict";
const common_vendor = require("../../common/vendor.js");
const services_login = require("../../services/login.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
require("../../stores/index.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "login",
  setup(__props) {
    let code = "";
    common_vendor.onLoad(async () => {
      const res = await common_vendor.wx$1.login();
      code = res.code;
    });
    const onGetPhoneNumber = async (ev) => {
      //!非空断言 ! 对前面的参数使用
      const encryptedData = ev.detail.encryptedData;
      const iv = ev.detail.iv;
      const res = await services_login.postLoginWxMinAPI({
        code,
        encryptedData,
        iv
      });
      loginSuccess(res.result);
    };
    const getphoneNumberSimple = async () => {
      const res = await services_login.postLoginWxMinSimple("18088845335");
      console.log(res);
      loginSuccess(res.result);
    };
    const loginSuccess = (profile) => {
      const memberStore = stores_modules_member.useMemberStore();
      memberStore.setProfile(profile);
      common_vendor.index.showToast({ icon: "success", title: "模拟登录成功" });
      setTimeout(() => {
        common_vendor.index.navigateBack();
      }, 200);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onGetPhoneNumber),
        b: common_vendor.o(getphoneNumberSimple)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/uniapp-pro/heima-shop/src/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=login.js.map
