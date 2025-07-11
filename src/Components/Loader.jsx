import { useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const Loader = () => {
  const { progress, total } = useProgress(); // Tracks 3D model loading
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  // Track all HTML <img> loading
  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad); // handle broken links too
      }
    });

    if (loadedCount === images.length) {
      setImagesLoaded(true);
    }

    // Clean up event listeners
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  // Animate loader away only after models + images are done
  useGSAP(() => {
    if (progress === 100 && total > 0 && imagesLoaded) {
      gsap.to(".loader-screen", {
        y: "-100%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setHideLoader(true),
      });
    }
  }, [progress, imagesLoaded]);

  // Remove loader from DOM after hiding animation
  if (hideLoader) return null;

  return (
    <div className="loader-screen bg-black-100 w-screen h-dvh fixed top-0 left-0 z-[100]">
      <div className="flex-center w-full h-full">
        <img src="/images/loader.gif" alt="loader" />
      </div>
      <div className="text-white-50 font-bold text-7xl leading-none gradient-title absolute bottom-10 right-10">
        {Math.floor(progress)}%
      </div>
    </div>
  );
};

export default Loader;
