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
      <div className="border border-blue-500/30 rounded-xl p-5 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/40 transition-all duration-300">
              <Upload className="w-5 h-5 text-blue-300" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-blue-100 truncate">{file.name}</p>
              <p className="text-xs text-blue-400/70">{(file.size / 1024).toFixed(2)} KB</p>
            </div>
          </div>
          <button
            onClick={onFileRemove}
            disabled={isDisabled}
            className="p-2 hover:bg-red-500/20 rounded-lg transition-all duration-300 disabled:opacity-50 hover:scale-110 active:scale-95"
            type="button"
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
        "relative border-2 border-dashed rounded-2xl p-12 transition-all duration-300 cursor-pointer",
        isDragging
          ? "border-blue-400 bg-blue-950/40 scale-105"
          : "border-slate-600 hover:border-slate-500 bg-slate-950/40 hover:bg-slate-950/60 hover:scale-102",
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
      />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
          <Upload className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <p className="text-base font-semibold text-slate-100">Drag & Drop CAD Files Here</p>
          <p className="text-sm text-slate-400 mt-1">Supported: STEP, STP (Max 50MB)</p>
        </div>
        <button
          type="button"
          disabled={isDisabled}
          className={cn(
            "px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300",
            isDisabled
              ? "bg-slate-700 text-slate-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-blue-500/50 active:scale-95 hover:scale-105"
          )}
        >
          Select Files
        </button>
      </div>
    </div>
  );
}
