"use client";

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
interface GalleryModalProps {
  open: boolean;
  images: string[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}
const GalleryModal: React.FC<GalleryModalProps> = ({
  open,
  images,
  index,
  onClose,
  onNext,
  onPrev
}) => {
  if (!open) return null;
  return <div className="
          fixed inset-0 
          bg-black/80 
          flex items-center justify-center 
          z-50 p-4
        ">
        {/* Close Button */}
        <button onClick={onClose} className="
            absolute top-4 right-4 
            text-white bg-black/50 
            p-2 rounded-full 
            backdrop-blur-sm 
            hover:bg-black/70 
            transition
          ">
          <X size={26} />
        </button>

        {/* Left Arrow */}
        <button onClick={onPrev} className="
            absolute left-3 
            text-white bg-black/50 
            p-3 rounded-full 
            backdrop-blur-sm 
            hover:bg-black/70 
            transition 
            hidden sm:block
          ">
          <ChevronLeft size={38} />
        </button>

        {/* Image */}
        <img key={index} src={images[index]} className="
            rounded-lg shadow-lg
            max-w-full 
            max-h-[80vh] 
            object-contain
          " />

        {/* Right Arrow */}
        <button onClick={onNext} className="
            absolute right-3 
            text-white bg-black/50 
            p-3 rounded-full 
            backdrop-blur-sm 
            hover:bg-black/70 
            transition 
            hidden sm:block
          ">
          <ChevronRight size={38} />
        </button>

        {/* Mobile Arrows */}
        <div className="
            absolute bottom-6 
            flex gap-6 sm:hidden
          ">
          <button onClick={onPrev} className="text-white bg-black/50 p-3 rounded-full">
            <ChevronLeft size={30} />
          </button>

          <button onClick={onNext} className="text-white bg-black/50 p-3 rounded-full">
            <ChevronRight size={30} />
          </button>
        </div>
      </div>;
};
export default GalleryModal;