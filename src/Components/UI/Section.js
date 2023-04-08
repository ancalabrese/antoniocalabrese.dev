import React from "react";

const FullScreenSection = ({ children }) => {
  return (
    <div className="h-[94vh] overflow-hidden">
      {children}
    </div>
  )
}

export default FullScreenSection