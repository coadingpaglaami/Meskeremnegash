export interface ChatMessage {
  id: string;
  sender: "user" | "sender";
  text: string;
  timestamp: string;
  read?: boolean; // optional, tracks if user has seen this message
}

export interface Conversation {
  id: string;
  participants: {
    userName: string;
    senderName: string;
  };
  messages: ChatMessage[];
  userfrom: string;
  userto: string;
}
