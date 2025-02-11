import { Chain, Wallet } from "@rainbow-me/rainbowkit";
import type { InjectedConnectorOptions } from "@wagmi/core/connectors/injected";
import { InjectedConnector } from "wagmi/connectors/injected";

export interface LuksoUpWalletOptions {
  chains: Chain[];
}

declare global {
  interface Window {
    lukso: any;
  }
}

export const luksoUpWallet = ({ chains, ...options }: LuksoUpWalletOptions & InjectedConnectorOptions): Wallet => ({
  id: "lukso",
  name: "LUKSO UP!",
  iconBackground: "#ffffff",
  //iconUrl: async () => (await import("./luksoUpWallet.svg")).default,
  iconUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxkZXNjPkNyZWF0ZWQgd2l0aCBGYWJyaWMuanMgMy41LjA8L2Rlc2M+CjxkZWZzPgo8L2RlZnM+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmZmZmYiLz4KPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43MjczIDAgMCAwLjcyNzMgMjUwLjAwNzUgMjUwLjAwODIpIiBpZD0iODcyOTEwIj4KPGcgc3R5bGU9IiIgdmVjdG9yLWVmZmVjdD0ibm9uLXNjYWxpbmctc3Ryb2tlIj4KCQk8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDAgMCkiIGlkPSJFYmVuZV8xIj4KPHBhdGggc3R5bGU9InN0cm9rZTogbm9uZTsgc3Ryb2tlLXdpZHRoOiAxOyBzdHJva2UtZGFzaGFycmF5OiBub25lOyBzdHJva2UtbGluZWNhcDogYnV0dDsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiA0OyBpcy1jdXN0b20tZm9udDogbm9uZTsgZm9udC1maWxlLXVybDogbm9uZTsgZmlsbDogcmdiKDI1NCwwLDkxKTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxOyIgdHJhbnNmb3JtPSIgdHJhbnNsYXRlKC0yNzUsIC0zMDIpIiBkPSJNIDQ5OS41IDExNC42IEwgMzI1IDEzLjkgQyAyOTQuMSAtNCAyNTUuOSAtNCAyMjUgMTMuOSBMIDUwLjUgMTE0LjYgYyAtMzAuOSAxNy45IC01MCA1MC45IC01MCA4Ni42IHYgMjAxLjUgYyAwIDM1LjcgMTkuMSA2OC43IDUwIDg2LjYgTCAyMjUgNTkwLjEgYyAzMC45IDE3LjkgNjkuMSAxNy45IDEwMCAwIGwgMTc0LjUgLTEwMC44IGMgMzAuOSAtMTcuOSA1MCAtNTAuOSA1MCAtODYuNiBWIDIwMS4yIEMgNTQ5LjUgMTY1LjUgNTMwLjUgMTMyLjUgNDk5LjUgMTE0LjYgeiBNIDQxMy41IDMyMiBsIC01MS45IDg5LjkgYyAtNy4xIDEyLjQgLTIwLjMgMjAgLTM0LjYgMjAgSCAyMjMuMSBjIC0xNC4zIDAgLTI3LjUgLTcuNiAtMzQuNiAtMjAgTCAxMzYuNSAzMjIgYyAtNy4xIC0xMi40IC03LjEgLTI3LjYgMCAtNDAgbCA1MS45IC04OS45IGMgNy4xIC0xMi40IDIwLjMgLTIwIDM0LjYgLTIwIGggMTAzLjggYyAxNC4zIDAgMjcuNSA3LjYgMzQuNiAyMCBsIDUxLjkgODkuOSBDIDQyMC42IDI5NC40IDQyMC42IDMwOS42IDQxMy41IDMyMiB6IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9nPgoJCTxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgLTAuMDEyNCAwKSIgaWQ9IkViZW5lXzEiPgo8cGF0aCBzdHlsZT0ic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtZGFzaG9mZnNldDogMDsgc3Ryb2tlLWxpbmVqb2luOiBtaXRlcjsgc3Ryb2tlLW1pdGVybGltaXQ6IDQ7IGlzLWN1c3RvbS1mb250OiBub25lOyBmb250LWZpbGUtdXJsOiBub25lOyBmaWxsOiByZ2IoMjU1LDI0MSwyNDgpOyBmaWxsLXJ1bGU6IG5vbnplcm87IG9wYWNpdHk6IDE7IiB0cmFuc2Zvcm09IiB0cmFuc2xhdGUoLTI3NC45ODc2LCAtMzAyKSIgZD0iTSA0MTMuNSAzMjIgbCAtNTEuOSA4OS45IGMgLTcuMSAxMi40IC0yMC4zIDIwIC0zNC42IDIwIEggMjIzLjEgYyAtMTQuMyAwIC0yNy41IC03LjYgLTM0LjYgLTIwIEwgMTM2LjUgMzIyIGMgLTcuMSAtMTIuNCAtNy4xIC0yNy42IDAgLTQwIGwgNTEuOSAtODkuOSBjIDcuMSAtMTIuNCAyMC4zIC0yMCAzNC42IC0yMCBoIDEwMy44IGMgMTQuMyAwIDI3LjUgNy42IDM0LjYgMjAgbCA1MS45IDg5LjkgQyA0MjAuNiAyOTQuNCA0MjAuNiAzMDkuNiA0MTMuNSAzMjIgeiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwvZz4KPC9nPgo8L2c+Cjwvc3ZnPg==",
  downloadUrls: {
    chrome: "https://chromewebstore.google.com/detail/universal-profiles/abpickdkkbnbcoepogfhkhennhfhehfn",
    browserExtension: "https://lukso.network",
  },
  installed: typeof window !== "undefined" && typeof window.lukso !== "undefined" && window["lukso"] ? true : undefined,
  createConnector: () => ({
    connector: new InjectedConnector({
      chains,
      options: {
        name: "Lukso UP",
        getProvider: () => (typeof window !== "undefined" ? window.lukso : undefined),
      },
    }),
  }),
  //   createConnector: () => {
  //     return {
  //       connector: new InjectedConnector({
  //         chains,
  //         options: {
  //           getProvider: () => {
  //             const getLukso = (lukso?: any) => (lukso?.isUniversalProfileExtension ? lukso : undefined);
  //             if (typeof window === "undefined") return;
  //             return getLukso(window.lukso);
  //           },
  //           ...options,
  //         },
  //       }),
});
