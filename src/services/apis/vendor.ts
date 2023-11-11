import { useDefineApi } from "@/stores/useDefineApi";
import type { BilibiliVideoInfos } from "@/types/Movie";

// 获取 哔哩哔哩 登录二维码
export const getBiliBiliQRCode = useDefineApi<
  {
    headers: { Authorization: string };
  },
  { url: string; key: string }
>({
  url: "/api/vendor/bilibili/login/qr",
  method: "GET"
});

// 验证 哔哩哔哩 登录二维码
export const veriBiliBiliQRCode = useDefineApi<
  {
    headers: { Authorization: string };
  },
  { status: string }
>({
  url: "/api/vendor/bilibili/login/qr",
  method: "POST"
});

// 获取 哔哩哔哩 人机验证
export const getBiliBiliCaptcha = useDefineApi<
  {
    headers: { Authorization: string };
  },
  {
    token: string;
    gt: string;
    challenge: string;
  }
>({
  url: "/api/vendor/bilibili/login/captcha",
  method: "GET"
});

// 获取 哔哩哔哩 手机验证码
export const getBiliBiliPhoneCode = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      token: string;
      challenge: string;
      validate: string;
      telephone: string;
    };
  },
  {
    captchaKey: string;
  }
>({
  url: "/api/vendor/bilibili/login/sms/send",
  method: "POST"
});

// 验证 哔哩哔哩 手机验证码
export const veriBiliBiliPhoneCode = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      telephone: string;
      captchaKey: string;
      code: string;
    };
  },
  any
>({
  url: "/api/vendor/bilibili/login/sms/login",
  method: "POST"
});

// 获取可用的解析接口
export const getBiliBiliVendors = useDefineApi<
  {
    headers: { Authorization: string };
  },
  string[]
>({
  url: "/api/vendor/bilibili/vendors",
  method: "GET"
});

// 解析 哔哩哔哩 视频
export const parseBiliBiliVideo = useDefineApi<
  {
    headers: { Authorization: string };
    data: {
      url: string;
    };
    params?: {
      vendor: string;
    };
  },
  {
    title: string;
    actors: string;
    videoInfos: BilibiliVideoInfos[];
  }
>({
  url: "/api/vendor/bilibili/parse",
  method: "POST"
});

// 获取 哔哩哔哩 账号信息
export const getBiliBiliAccountInfo = useDefineApi<
  {
    headers: { Authorization: string };
  },
  {
    isLogin: boolean;
    username: string;
    face: string;
    isVip: boolean;
  }
>({
  url: "/api/vendor/bilibili/me",
  method: "GET"
});

// 退出 哔哩哔哩 登录
export const logoutBiliBili = useDefineApi<{ headers: { Authorization: string } }, any>({
  url: "/api/vendor/bilibili/logout",
  method: "POST"
});
