import localFont from "next/font/local";

export const gibson = localFont({
      src: [
            {
                  path: "../../public/fonts/Gibson-Light.ttf",
                  weight: "300"
            },
            {
                  path: "../../public/fonts/Gibson.ttf",
                  weight: "400"
            },
            {
                  path: "../../public/fonts/Gibson-SemiBold.ttf",
                  weight: "600"
            },
            {
                  path: "../../public/fonts/Gibson-Bold.ttf",
                  weight: "700"
            }
      ],
      variable: "--font-gibson"
})