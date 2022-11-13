import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function Fade({ visible, children }) {
  const [showChildren, setShowChildren] = useState(visible);

  useEffect(() => {
    if (visible) {
      setShowChildren(true);
    } else {
      const timer = setTimeout(() => {
        setShowChildren(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible]);
  let className = "fade";
  if (!visible) {
    className += " out";
  }
  return <div className={className}>{showChildren && children}</div>;
}
