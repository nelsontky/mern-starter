import * as firebase from "firebase/app";
import "firebase/auth";

import { firebaseConfig } from "../secrets.json";

firebase.initializeApp(firebaseConfig);

export default firebase;
