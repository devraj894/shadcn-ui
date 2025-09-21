"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

export default function UserOpinionModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const savedComment = localStorage.getItem("userComment");
    if (!savedComment) {
      const popupTimer = setTimeout(() => {
        setIsVisible(true);
      }, 4000); // Slightly longer delay for a fresh feel
      return () => clearTimeout(popupTimer);
    }
  }, []);

  const handleSave = () => {
    if (comment.trim()) {
      localStorage.setItem("userComment", comment.trim());
      setIsVisible(false);
    }
  };

  return (
    <AlertDialog open={isVisible} onOpenChange={setIsVisible}>
      <AlertDialogContent className="max-w-md bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-semibold text-indigo-700">
            Share Your Thoughts
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-600 mt-1">
            We’d love to hear your opinion! Your input helps us enhance your
            experience.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your message here..."
          className="w-full mt-5 p-4 border border-indigo-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
          rows={6}
        />

        <AlertDialogFooter className="mt-5 flex justify-end gap-3">
          <Button variant="ghost" onClick={() => setIsVisible(false)}>
            Dismiss
          </Button>
          <Button
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Send
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
