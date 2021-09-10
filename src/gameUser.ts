type AccountInfo = {
  id: number | string,
  name: string,
  email?: string,
}

type CharInfo = {
  nickname: string,
  level: number,
}

type PlayerInfo = AccountInfo & CharInfo; //Intersection

const account: AccountInfo = {
  id: "1",
  name: "Anderson",
}

const char: CharInfo = {
  nickname: "Alpin",
  level: 37
}

const player: PlayerInfo = {
  id: 1,
  name: "Anderson",
  email: "anderson@email.com",
  nickname: "Alpin",
  level: 37
}