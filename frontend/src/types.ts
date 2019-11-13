export interface ChatMessage {
  author: string;
  message: string;
}

export interface ChatState {
  input: string;
  message: ChatMessage[];
}