"use client";
import { useState } from "react";
import PDFUploadedr from "@/components/PDFUploader";
import { Message } from "@/types/chat";
import { UploadFile } from "@/types/file";
import { ApiResponse } from "@/types/api";
import MessageList from "@/components/MessageList";

export default function Home() {

  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "user",
      content: "Hello",
      createdAt: new Date(),
    },
    {
      id: "2",
      role: "ai",
      content: "Hi",
      createdAt: new Date(),
    },
    {
      id: "3",
      role: "user",
      content: "What is RAG?",
      createdAt: new Date(),
    },
  ]);

  const [selectedFile, setSelectedFile] = useState<UploadFile | null>(null)

  const [loading, setloading] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const files: UploadFile[] = [
    {
      id: "1",
      name: "resume.pdf",
      size: 2048,
      uploadedAt: new Date(),
    },
    {
      id: "2",
      name: "nodejs.pdf",
      size: 1048,
      uploadedAt: new Date(),
    },
    {
      id: "3",
      name: "typescript.pdf",
      size: 4048,
      uploadedAt: new Date(),
    },
  ];



  const uploadResponse: ApiResponse<UploadFile> = {
    success: true,
    data: {
      id: "1",
      name: "resume.pdf",
      size: 2048,
      uploadedAt: new Date(),
    },
    message: "File uploaded successfully",
  };

  return (
    <main>
      <h1> AI PDF Chat</h1>

      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <button
        onClick={() => {
          console.log(message);
        }}
      >
        Send
      </button>

      {
        files.map((file) => (
          <PDFUploadedr
            key={file.id}
            file={file}
          />
        ))
      }
      <h2>Chat Messages</h2>


      <MessageList messages={messages} />

    </main>
  );
}
