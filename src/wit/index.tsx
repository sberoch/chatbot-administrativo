import Intent from "../types/Intent";
import Message from "../types/Message";
import { getResponsesForIntent } from "./responses";

export async function getResponsesFromIntents(witResponse: Intent[]): Promise<Message[]> {
  const intentName: string = witResponse[0] ? witResponse[0].name : 'default'
  const textMessages: string[] = await getResponsesForIntent(intentName)
  const messages: Message[] = textMessages.map(tm => ({ id: 'bot', text: tm }))
  return messages
}