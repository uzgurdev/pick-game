export namespace IEntity {
  export namespace Game {
    export interface Main {
      id: string;
      player1: Player;
      player2: Player;
      currentPlayer: string;
      winner: string;
      max: number;
    }

    export interface Player {
      id: string;
      name: string;
      currentScore: number;
      totalScore: number;
    }

    export interface Mini extends Pick<Main, 'id' | 'winner' | 'max'> {
      player1: string;
      player2: string;
    }
  }
}

export namespace IApi {
  export namespace Game {
    export namespace List {
      export interface Request {}
      export type Response = IEntity.Game.Mini[];
    }

    export namespace Single {
      export interface Request extends Pick<IEntity.Game.Mini, 'id'> {}
      export type Response = IEntity.Game.Main;
    }

    export namespace Create {
      export interface Request extends Pick<IEntity.Game.Mini, 'player1' | 'player2' | 'max'> {}
      export type Response = IEntity.Game.Main;
    }

    export namespace Delete {
      export interface Request extends Pick<IEntity.Game.Mini, 'id'> {}
      export type Response = IEntity.Game.Main;
    }

    export namespace Roll {
      export interface Request extends Pick<IEntity.Game.Main, 'id'> {
        currentPlayer: string;
      }
      export type Response = { dice: number; game: IEntity.Game.Main };
    }

    export namespace Hold {
      export interface Request extends Pick<IEntity.Game.Main, 'id'> {
        currentPlayer: string;
      }
      export type Response = IEntity.Game.Main;
    }

    export namespace Reset {
      export interface Request extends Pick<IEntity.Game.Main, 'id'> {}
      export type Response = IEntity.Game.Main;
    }
  }
}
