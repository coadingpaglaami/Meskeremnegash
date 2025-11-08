import { Conversation } from "@/interface/Message";

export const dummyConversations: Conversation[] = [
  {
    id: "conv1",
    participants: {
      userName: "Mehedy Hasan",
      senderName: "John Smith",
    },
    userfrom: "Dhaka",
    userto: "Sylhet",
    messages: [
      {
        id: "msg1",
        sender: "sender",
        text: "Hello! Are you available to carry my package tomorrow?",
        timestamp: "2025-11-08T10:00:00Z",
        read: false,
      },
      {
        id: "msg2",
        sender: "user",
        text: "Yes, I can do it. What’s the weight?",
        timestamp: "2025-11-08T10:05:00Z",
        read: true,
      },
      {
        id: "msg3",
        sender: "sender",
        text: "It’s around 12 kg.",
        timestamp: "2025-11-08T10:07:00Z",
        read: false,
      },
    ],
  },
  {
    id: "conv2",
    participants: {
      userName: "Mehedy Hasan",
      senderName: "Sarah Johnson",
    },
    userfrom: "Chittagong",
    userto: "Dhaka",
    messages: [
      {
        id: "msg1",
        sender: "user",
        text: "Hi Sarah! When do you want this delivered?",
        timestamp: "2025-11-07T15:30:00Z",
        read: true,
      },
      {
        id: "msg2",
        sender: "sender",
        text: "Can you deliver it by 20th Oct?",
        timestamp: "2025-11-07T15:35:00Z",
        read: true,
      },
      {
        id: "msg3",
        sender: "sender",
        text: "Please confirm ASAP.",
        timestamp: "2025-11-07T15:37:00Z",
        read: false,
      },
    ],
  },
  {
    id: "conv3",
    participants: {
      userName: "Mehedy Hasan",
      senderName: "Michael Chen",
    },
    userfrom: "Sylhet",
    userto: "Kolkata",
    messages: [
      {
        id: "msg1",
        sender: "sender",
        text: "Good morning! I have some clothes to deliver.",
        timestamp: "2025-11-06T09:00:00Z",
        read: true,
      },
      {
        id: "msg2",
        sender: "user",
        text: "Sure, I can handle that. When do you want me to start?",
        timestamp: "2025-11-06T09:10:00Z",
        read: true,
      },
      {
        id: "msg3",
        sender: "sender",
        text: "Tomorrow morning is best.",
        timestamp: "2025-11-06T09:15:00Z",
        read: false,
      },
      {
        id: "msg4",
        sender: "user",
        text: "Got it. I’ll be there.",
        timestamp: "2025-11-06T09:20:00Z",
        read: true,
      },
    ],
  },
  {
    id: "conv4",
    participants: {
      userName: "Mehedy Hasan",
      senderName: "Emily Davis",
    },
    userfrom: "Dhaka",
    userto: "Cox's Bazar",
    messages: [
      {
        id: "msg1",
        sender: "sender",
        text: "Hello! Can you carry my medical supplies?",
        timestamp: "2025-11-05T08:00:00Z",
        read: false,
      },
      {
        id: "msg2",
        sender: "user",
        text: "Yes, I can. How many packages?",
        timestamp: "2025-11-05T08:05:00Z",
        read: true,
      },
      {
        id: "msg3",
        sender: "sender",
        text: "Just one small box, around 5kg.",
        timestamp: "2025-11-05T08:10:00Z",
        read: false,
      },
    ],
  },
];
