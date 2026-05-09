"use client";

import { useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  file: File | null;
  onFileSelect: (file: File) => void;
  onFileRemove: () => void;
  isDragging: boolean;
  onDragEnter: () => void;
  onDragLeave: () => void;
  isDisabled?: boolean;
}

export function UploadZone({
  file,
  onFileSelect,
  onFileRemove,
  isDragging,
  onDragEnter,
  onDragLeave,
  isDisabled,
}: UploadZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDragLeave();

    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.currentTarget.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleClick = () => {
    if (!isDisabled) {
      inputRef.current?.click();
    }
  };

  if (file) {
    return (
      <div className="border border-blue-900/50 rounded p-4 bg-blue-950/20 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-3 rounded-lg bg-blue-900/30 border border-blue-700/30">
              <Upload className="w-5 h-5 text-blue-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-mono text-blue-200 truncate">
                {file.name}
              </p>
              <p className="text-xs text-blue-400/70 font-mono">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <button
            onClick={onFileRemove}
            disabled={isDisabled}
            className="p-2 hover:bg-red-900/30 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            title="Remove file"
          >
            <X className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onClick={handleClick}
      className={cn(
        "relative border-2 border-dashed rounded-lg p-12 transition-all cursor-pointer",
        isDragging
          ? "border-blue-400 bg-blue-950/30"
          : "border-gray-600 hover:border-gray-500 bg-gray-950/50 hover:bg-gray-950/70",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".step,.stp"
        onChange={handleInputChange}
        disabled={isDisabled}
        className="hidden"
        aria-label="Upload STEP file"
      />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
          <Upload className="w-8 h-8 text-gray-400" />
        </div>
        <div>
          <p className="text-base font-mono font-semibold text-gray-100">
            DRAG & DROP CAD FILES
          </p>
          <p className="text-xs text-gray-500 font-mono mt-2 tracking-wide">
            SUPPORTED FORMATS: STEP, STP
          </p>
        </div>
        <button
          type="button"
          disabled={isDisabled}
          className={cn(
            "px-6 py-2 font-mono text-sm font-semibold uppercase tracking-wide rounded transition-all",
            isDisabled
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white active:scale-95"
          )}
        >
          SELECT FILES MANUALLY
        </button>
      </div>
    </div>
  );
}
