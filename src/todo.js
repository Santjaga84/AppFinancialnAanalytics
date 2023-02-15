import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import data from "./api/db-firebase.json";


// export function importData(){

//   data.Pages.map((page) => addDocToDBpage(page.id,{key:page.id,...page}));
// }


// export async function addDocToDBpage(id, object){
//   await setDoc(doc(db,"pages",id),object);
// }