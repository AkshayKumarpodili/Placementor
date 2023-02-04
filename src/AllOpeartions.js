import { db } from "./firebase";

import { collection,getDocs } from "firebase/firestore";

const UserCollectionRef = collection(db, "TandPDb");

class UserDataService {

  getAllUsers = () => {
    return getDocs(UserCollectionRef);
  };

}


export default new UserDataService();