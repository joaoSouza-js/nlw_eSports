export interface GameParms {
    id: string
}

export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            Home: undefined,
            Game: GameParms
        }
    }
}

