import React, {useState, useEffect} from 'react'
import { fireStore } from '../firebase/firebase-config';
import { doc, onSnapshot, orderBy, collection, query } from "firebase/firestore";

export default function useStore(data) {

    const [docs, setDocs] = useState([]);
    const db = fireStore;

    useEffect(() => {
        const q = query(collection(db, 'Images'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, 
            (snap) => {
                let document = [];
                snap.forEach(doc => {
                    document.push({...doc.data(), id: doc.id});
                });
                setDocs(document);
            });

            return () => unsub();

    },[data]);

  return ({ docs });
}
