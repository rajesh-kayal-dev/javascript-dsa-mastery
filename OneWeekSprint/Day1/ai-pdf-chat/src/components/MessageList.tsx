import { Message } from "@/types/chat";
import ChatMessage from "./ChatMessage";

interface MessageListProps {
    messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
    return (
        <div>
            {messages.map((message) => (
                <ChatMessage
                    key={message.id}
                    message={message}
                />
            ))}
        </div>
    )
}