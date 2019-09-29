import { Injectable } from '@angular/core';
import { ICardList } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
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
            firstName: 'User 1',
            lastName: 'User 1',
          }
        },
        {
          id: '2',
          name: 'Task 2',
          description: 'Task 2 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
          }
        },
        {
          id: '3',
          name: 'Task 3',
          description: 'Task 3 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
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
          name: 'Task 4',
          description: 'Task 4 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
          }
        },
        {
          id: '5',
          name: 'Task 5',
          description: 'Task 5 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
          }
        },
        {
          id: '6',
          name: 'Task 6',
          description: 'Task 6 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
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
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
          }
        },
        {
          id: '8',
          name: 'Task 8',
          description: 'Task 8 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
          }
        },
        {
          id: '9',
          name: 'Task 9',
          description: 'Task 9 description',
          dueDate: new Date(),
          assignee: {
            id: '1',
            firstName: 'User 1',
            lastName: 'User 1',
          }
        }
      ],
      isDoneSection: true,
    }
  ];

  constructor() { }
}
