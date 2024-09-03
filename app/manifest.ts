import type { MetadataRoute } from "next";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const url = isDev ? "http://localhost:3000" : "https://nxt-lms.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NXT LMS",
    short_name: "NXT LMS",
    description: "NXT LMS is a learning management system built with Next.js",
    start_url: url,
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/x-icon",
      },
      {
        src: `${url}/assets/apple-touch-icon-57x57.png`,
        sizes: "57x57",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-60x60.png`,
        sizes: "60x60",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-72x72.png`,
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-76x76.png`,
        sizes: "76x76",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-114x114.png`,
        sizes: "114x114",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-120x120.png`,
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-144x144.png`,
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: `${url}/assets/apple-touch-icon-152x152.png`,
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: `${url}/assets/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: `${url}/assets/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: `${url}/assets/favicon-96x96.png`,
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: `${url}/assets/favicon-128.png`,
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: `${url}/assets/favicon-196x196.png`,
        sizes: "196x196",
        type: "image/png",
      },
      {
        src: `${url}/assets/mstile-70x70.png`,
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: `${url}/assets/mstile-144x144.png`,
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: `${url}/assets/mstile-150x150.png`,
        sizes: "270x270",
        type: "image/png",
      },
      {
        src: `${url}/assets/mstile-310x150.png`,
        sizes: "558x270",
        type: "image/png",
      },
      {
        src: `${url}/assets/mstile-310x310.png`,
        sizes: "558x558",
        type: "image/png",
      },
    ],
    orientation: "portrait",
    protocol_handlers: [
      {
        protocol: "web+app",
        url: `${url}/?app=%s`,
      },
    ],
    screenshots: [
      {
        src: `${url}/screenshot-desktop.png`,
        sizes: "1916x914",
        type: "image/png",
      },
      {
        src: `${url}/screenshot-mobile.png`,
        sizes: "659x914",
        type: "image/png",
      },
    ],
    display_override: ["window-controls-overlay"],
  };
}
