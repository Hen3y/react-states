export enum ActionType {
  'increment',
  'decrement',
  'toggle',
}

export type CounterState = { counter: number; showCounter: boolean };

export type CounterAction = { type: ActionType; payload?: any };
