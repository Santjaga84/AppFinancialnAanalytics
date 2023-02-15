// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDcznityP_IrXXP11rmk8uK8Z5uWzqMsws",
  authDomain: "financialn-analytics.firebaseapp.com",
  databaseURL: "https://financialn-analytics-default-rtdb.firebaseio.com",
  projectId: "financialn-analytics",
  storageBucket: "financialn-analytics.appspot.com",
  messagingSenderId: "1047974752302",
  appId: "1:1047974752302:web:8c9944d297e6b37f7eefbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// export function importData(){
//   data.Pages.map((page) => addDocToDBpage(page.id,{key:page.id,...page()}) )
// }

// export async function addDocToDBpage(id, object){
//   await setDoc(doc(db,"articles",id),object);
// }


export const db = getFirestore(app);