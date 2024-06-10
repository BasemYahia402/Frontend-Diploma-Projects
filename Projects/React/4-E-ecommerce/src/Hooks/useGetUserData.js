import { useEffect, useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";
const UseGetUserData = () => {
  const { userId } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", `${userId}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          setErrorMessage("No such document!");
          console.log("inside else");
        }
      } catch (error) {
        setErrorMessage(error);
        console.log(error);
      }
    };

    fetchData();
  }, [userData]);
  return { userData, errorMessage };
};

export default UseGetUserData;
