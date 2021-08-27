import Intent from "../types/Intent";
import Message from "../types/Message";
import api from "./axiosInstance";
import { getResponsesForIntent } from "./responses";

export async function getWitResponse(messageText: string): Promise<Intent[]> {
  const res = await api.get('/message', {
    params: { q: messageText },
  })
  const intents = res?.data?.intents as Intent[]
  return intents.filter(i => i.confidence >= 0.6)
}

export async function getResponsesFromIntents(intents: Intent[]): Promise<Message[]> {
  let intentName: string 
  if (!intents || intents.length === 0) {
    intentName = 'default'
  } else {
    intentName = intents[0].name
  }
  const textMessages: string[] = await getResponsesForIntent(intentName)
  const messages: Message[] = textMessages.map(tm => ({ id: 'bot', text: tm }))
  return messages
}