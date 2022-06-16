import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";

export default function ProgressBar({ file, setFile }) {
  const { url, progresspercent } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className="progress-bar"
      style={{ width: progresspercent + "%" }}
    ></div>
  );
}
