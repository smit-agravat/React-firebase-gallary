import { useState, useEffect } from "react";
import { fireStorage, fireStore } from "../firebase/firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function useStorage(file) {
  const [progresspercent, setProgresspercent] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const db = fireStore;

  useEffect(() => {
    const storageRef = ref(fireStorage, `Images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgresspercent(progress);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const imageUrl = await getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          addDoc(collection(db, 'Images'),{
            url: downloadUrl,
            createdAt: serverTimestamp()
          })
          setUrl(downloadUrl)
        });
      }
    );
  },[file]);

  return { progresspercent, url, error };
}
