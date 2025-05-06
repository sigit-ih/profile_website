import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function PhotoFlip() {
  return (
    <div className="profile-circle size-auto">
			<div className="photo-main">

			</div>
			<div className="logo-main">
				
			</div>
      <img
        src={ProfileImage}
        alt="Profile"
        className="w-60 h-60 object-cover object-[center_30%] rounded-full"
      />
    </div>
  );
}
