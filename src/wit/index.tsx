import Intent from "../types/Intent";
import Message from "../types/Message";
import { responses } from "./responses";

export function getResponsesFromIntents(witResponse: Intent[]): Message[] {
  const intentName: string = witResponse[0] ? witResponse[0].name : 'default'
  const textMessages: string[] = responses[intentName]

  const messages: Message[] = textMessages.map(tm => ({ id: 'bot', text: tm }))
  return messages
}