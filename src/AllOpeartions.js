import { db } from "./firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const UserCollectionRef = collection(db, "TandPDb");
class UserDataService {

  getAllUsers = () => {
    return getDocs(UserCollectionRef);
  };

}

export default new UserDataService();