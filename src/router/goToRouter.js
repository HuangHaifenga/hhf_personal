import {useRouter} from "vue-router";

//跳转到首页
export function useGoToHome() {
    const router = useRouter();

    return function () {
        router.push("/");
    };
}

//跳转到404页面
export function useGoToNotFound() {
    const router = useRouter();

    return function () {
        router.push("/NotFound");
    };
}

// 跳转pdf页面

export function useGoToPdf() {
    const router = useRouter();

    return function () {
        router.push("/PDF");
    };
}