interface StringMap { 
  [key: string]: string[];
}

export const responses : StringMap = {
  //TODO: add all intents here
  saludo: [ "Hola" ],
  default: [ "Lo lamento, no comprendí tu mensaje. Por favor intentalo de nuevo." ]
}