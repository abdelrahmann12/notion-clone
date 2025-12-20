import { initializeApp, cert, App , getApp , getApps } from "firebase-admin/app";

import { getFirestore  } from "firebase-admin/firestore";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const serviceKey = require("@/service_key.json") ;
let app: App;

if (getApps().length === 0) {
  app = initializeApp({
    credential: cert(serviceKey),
  });
} else {
  app = getApp();
}

const adminDb = getFirestore(app);
export {adminDb as adminDb , app as adminApp}