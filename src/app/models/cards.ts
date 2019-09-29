import { IUser } from './User';

export interface ICard {
  id: string;
  name: string;
  description: string;
  dueDate?: Date | string;
  assignee?: IUser;
}

export interface ICardList {
  id: string;
  name: string;
  cards: ICard[];
  isDoneSection: boolean;
}
