import React, { useRef, useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};

export default function ReadImage({ src, defaultSrc, alt }) {
  const [ref, loaded, onLoad] = useImageLoaded();

  return (
    <>
      <img ref={ref} className={loaded? <Spinner/> : "d-none"} onLoad={onLoad} src={src} alt={alt} />
    </>
  );
}

