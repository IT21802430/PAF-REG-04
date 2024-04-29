import packageJson from "../../package.json" 

//Environments 
export const IS_PRODUCTION = process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"; 
export const IS_PREVIEW = process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"; 

// Application
export const APP_NAME = "FitnessGram";
export const DESCRIPTION = `${APP_NAME}.xyz is a decentralized, and permissionless social media app built with React & Spring 🌿`;
export const APP_VERSION = packageJson.version;
export const BRAND_COLOR = "#FB3A5D"; 

// Git
export const GIT_COMMIT_SHA = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7); 

// URLs
export const STATIC_ASSETS_URL = "https://hey-assets.b-cdn.net";
export const STATIC_IMAGES_URL = `${STATIC_ASSETS_URL}/images`;
export const DEFAULT_OG = `${STATIC_IMAGES_URL}/og/cover.png`;
export const PLACEHOLDER_IMAGE = `${STATIC_IMAGES_URL}/placeholder.webp`; 

// Tokens / Keys
export const WALLETCONNECT_PROJECT_ID = "cd542acc70c2b548030f9901a52e70c8";
export const GIPHY_KEY = "yNwCXMKkiBrxyyFduF56xCbSuJJM8cMd";
export const GITCOIN_PASSPORT_KEY = "xn9e7AFv.aEfS0ioNhaVtww1jdwnsWtxnrNHspVsS";
export const LIVEPEER_KEY = "70508bf8-2e16-4594-852d-5aed798f6403";
export const ALCHEMY_API_KEY = "Xx-4a1SyWtS9U4h0cEuRmvgYtGeVOlv7";
export const THIRDWEB_CLIENT_ID = "0e8fa22aa33b3da60c593b4864a2e2d1";
export const CRISP_WEBSITE_ID = "37355035-47aa-4f42-ad47-cffc3d1fea16"; 

// Named transforms for ImageKit
export const AVATAR = "tr:w-350,h-350";
export const EXPANDED_AVATAR = "tr:w-1000,h-1000";
export const COVER = "tr:w-1350,h-350";
export const VIDEO_THUMBNAIL = "tr:h-1000";
export const ATTACHMENT = "tr:w-1000"; 

// S3 bucket
export const S3_BUCKET = {
    HEY_MEDIA: "hey-media",
  }; 

// Feature Flags
export const VERIFIED_FEATURE_ID = "a0d6d247-50ef-419f-a045-54fa96054922";
export const STAFF_PICK_FEATURE_ID = "73d2f48d-0291-4a36-adc2-9737057ad2b7"; 

// Known Lens Protocol Attributes
export const KNOWN_ATTRIBUTES = {
    HIDE_OEMBED: "hideOembed",
    POLL_ID: "pollId",
    SWAP_OA_DEFAULT_AMOUNT: "swapOADefaultAmount",
  };