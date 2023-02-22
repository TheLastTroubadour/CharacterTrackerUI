import {User} from "./user";

export interface Character {
  id: number
  name: String
  server: String
  characterClass: String
  level: number
  aaSpent: number
  aaAvailable: number
  user: User
}
