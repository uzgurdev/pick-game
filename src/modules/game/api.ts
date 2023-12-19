import { http } from 'services';
import { IApi } from './types';

const Game = {
  list: () => http.get<IApi.Game.List.Response>('/'),

  single: ({ id }: IApi.Game.Single.Request) => http.get<IApi.Game.Single.Response>(`/${id}`),

  delete: ({ id }: IApi.Game.Delete.Request) => http.delete<IApi.Game.Delete.Response>(`/${id}`),

  create: ({ player1, player2 }: IApi.Game.Create.Request) => http.post<IApi.Game.Create.Response>('/', { player1, player2 }),

  roll: ({ id, currentPlayer }: IApi.Game.Roll.Request) => http.post<IApi.Game.Roll.Response>(`/dice/${id}`, { currentPlayer }),

  hold: ({ id, currentPlayer }: IApi.Game.Hold.Request) => http.post<IApi.Game.Hold.Response>(`/hold/${id}`, { currentPlayer }),

  reset: ({ id }: IApi.Game.Reset.Request) => http.post<IApi.Game.Reset.Response>(`/reset/${id}`)
};

export default Game;
