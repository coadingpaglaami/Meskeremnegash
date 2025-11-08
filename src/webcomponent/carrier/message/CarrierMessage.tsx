"use client";

import { useEffect, useRef, useState } from "react";
import { HeadingSection } from "@/webcomponent/reusable/HeadingSection";
import { ArrowRight, Send } from "lucide-react";
import { format } from "date-fns";
import { dummyConversations } from "@/lib/messageDummyData";

export const CarrierMessage = () => {
  const [conversations, setConversations] = useState(dummyConversations);
  const [selectedConvId, setSelectedConvId] = useState(dummyConversations[0].id);
  const [replyText, setReplyText] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const selectedConv = conversations.find((c) => c.id === selectedConvId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedConv?.messages]);

  const handleSend = () => {
    if (!replyText.trim() || !selectedConv) return;

    const newMessage = {
      id: Date.now().toString(),
      sender: "user" as const,
      text: replyText.trim(),
      timestamp: new Date().toISOString(),
    };

    setConversations(
      conversations.map((conv) =>
        conv.id === selectedConv.id
          ? { ...conv, messages: [...conv.messages, newMessage] }
          : conv
      )
    );
    setReplyText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="py-16 md:px-6 px-4">
      <HeadingSection
        heading="Messages"
        subheading="Chat securely with senders & travelers to coordinate delivery details."
      />

      <div
        className="mt-6 flex flex-col lg:flex-row gap-4"
        style={{ height: "calc(100vh - 85px - 72px)" }} // 64px = HeadingSection approx height
      >
        {/* --------------------- LEFT PANEL --------------------- */}
        <div className="shrink-0 w-full lg:w-[30%] border rounded-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b font-semibold text-lg">Conversations</div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => {
              const lastMsg = conv.messages[conv.messages.length - 1];
              const unreadCount = conv.messages.filter(
                (msg) => msg.sender === "sender" && !msg.read
              ).length;
              const isSelected = selectedConvId === conv.id;

              return (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConvId(conv.id)}
                  className={`cursor-pointer px-4 py-3 border-b hover:bg-gray-50 ${
                    isSelected ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                        {conv.participants.senderName[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">
                          {conv.participants.senderName}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm gap-1">
                          <span>{conv.userfrom}</span>
                          <ArrowRight className="w-3 h-3" />
                          <span>{conv.userto}</span>
                        </div>
                      </div>
                    </div>
                    {unreadCount > 0 && (
                      <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
                        {unreadCount}
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-gray-600 text-sm">
                    <span className="truncate max-w-[60%]">{lastMsg.text}</span>
                    <span className="text-xs">
                      {format(new Date(lastMsg.timestamp), "HH:mm")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --------------------- RIGHT PANEL --------------------- */}
        <div className="flex-1 border rounded-2xl flex flex-col overflow-hidden">
          {selectedConv && (
            <>
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 border-b">
                <div className="flex gap-2 items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-lg">
                    {selectedConv.participants.senderName[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-900">
                      {selectedConv.participants.senderName}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm gap-1">
                      <span>{selectedConv.userfrom}</span>
                      <ArrowRight className="w-3 h-3" />
                      <span>{selectedConv.userto}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {selectedConv.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`px-3 py-2 rounded-lg max-w-[70%] wrap-break-word flex-col flex ${
                        msg.sender === "user" 
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      {msg.text}
                      <span className="text-xs text-gray-400 mt-1 self-end">
                        {format(new Date(msg.timestamp), "HH:mm")}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Box */}
              <div className="border-t px-4 py-3 flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
                  placeholder="Type your message..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <button
                  onClick={handleSend}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
