import React from "react";
import useStore from "../Hooks/useStore";

export default function ImageGrid({ setSelectedImg }) {
  const { docs } = useStore("Images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
}
