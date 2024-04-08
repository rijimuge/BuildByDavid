"use client";

import { useEffect } from "react";

const GradioComponent = ({ src }: { src: string }) => {
  useEffect(() => {
    // Ensure the script is only added once
    if (
      !document.querySelector(
        'script[src="https://gradio.s3-us-west-2.amazonaws.com/4.25.0/gradio.js"]',
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://gradio.s3-us-west-2.amazonaws.com/4.25.0/gradio.js";
      script.type = "module";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <gradio-app src={src}></gradio-app>
    </div>
  );
};

export default GradioComponent;
