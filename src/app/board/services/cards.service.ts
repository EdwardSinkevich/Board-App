import { Injectable } from '@angular/core';
import { ICardList, ICard } from '../models/cards';
import { IUser } from '../models/user';

@Injectable()
export class CardsService {
  public cardList: ICardList[] = [
    {
      id: '1',
      name: 'Backlog',
      cards: [
        {
          id: '1',
          name: 'Task 1',
          description: 'Task 1 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'FirstName 1',
            lastName: 'LastName 1',
          }
        },
        {
          id: '2',
          name: 'Task 2',
          description: 'Task 2 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'FirstName 1',
            lastName: 'LastName 1',
          }
        },
        {
          id: '3',
          name: 'Task 3',
          description: 'Task 3 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'FirstName 1',
            lastName: 'LastName 1',
          }
        }
      ],
      isDoneSection: false,
    },
    {
      id: '2',
      name: 'In Progress',
      cards: [
        {
          id: '4',
          name: 'Task 4 Test Long Long Long Long Name',
          description: 'Task 4 Test Long Long Long Long description',
          dueDate: new Date(Date.now() + -3 * 24 * 3600 * 1000),
          assignee: {
            id: '2',
            firstName: 'FirstName 2',
            lastName: 'LastName 2',
          }
        },
        {
          id: '5',
          name: 'Task 5',
          description: 'Task 5 description',
          dueDate: new Date(Date.now() + -3 * 24 * 3600 * 1000),
          assignee: {
            id: '2',
            firstName: 'FirstName 2',
            lastName: 'LastName 2',
          }
        },
        {
          id: '6',
          name: 'Task 6',
          description: 'Task 6 description',
          dueDate: new Date(Date.now() + -7 * 24 * 3600 * 1000),
          assignee: {
            id: '2',
            firstName: 'FirstName 2',
            lastName: 'LastName 2',
          }
        }
      ],
      isDoneSection: false,
    },
    {
      id: '3',
      name: 'Done',
      cards: [
        {
          id: '7',
          name: 'Task 7',
          description: 'Task 7 description',
          dueDate: new Date(Date.now() + -10 * 24 * 3600 * 1000),
          assignee: {
            id: '3',
            firstName: 'FirstName 3',
            lastName: 'LastName 3',
          }
        },
        {
          id: '8',
          name: 'Task 8',
          description: 'Task 8 description',
          dueDate: new Date(Date.now() + -17 * 24 * 3600 * 1000),
          assignee: {
            id: '3',
            firstName: 'FirstName 3',
            lastName: 'LastName 3',
          }
        },
        {
          id: '9',
          name: 'Task 9',
          description: 'Task 9 description',
          dueDate: new Date(Date.now() + -2 * 24 * 3600 * 1000),
          assignee: {
            id: '3',
            firstName: 'FirstName 3',
            lastName: 'LastName 3',
          }
        }
      ],
      isDoneSection: true,
    }
  ];

  constructor() { }

  public removeCard(listWithCard) {
    const index = listWithCard.cardList.cards.findIndex((item) => item.id === listWithCard.id);
    listWithCard.cardList.cards.splice(index, 1);
  }

  public getUsers(): IUser[] {
    const users = new Map();
    this.cardList.forEach(listItem => {
      listItem.cards.forEach(cardItem => {
        users.set(cardItem.assignee.id, cardItem.assignee);
      });
    });
    return Array.from(users.values());
  }

  public addCard(cardData) {
    const backlogList = this.cardList.find(item => item.name === 'Backlog');
    const nextCardId = backlogList.cards.length + 1;
    cardData.id = nextCardId.toString();
    backlogList.cards.push(cardData);
  }

  public getCardData(routeParams) {
    let card: ICard;
    for (const list of this.cardList) {
      if (list.id === routeParams.listId) {
        card = list.cards.find(item => item.id === routeParams.cardId);
        break;
      }
    }
    return card;
  }

  public editCard(cardData: ICard, routeParams) {
    const card = this.getCardData(routeParams);
    card.name = cardData.name;
    card.description = cardData.description;
    card.dueDate = cardData.dueDate;
    card.assignee = cardData.assignee;
  }

}
