interface IGame {
    gameEngineTitle: string;
    
    start(): void;
}

class GamePC implements IGame {
    gameEngineTitle: string;

    constructor(gameEngineTitle: string) {
        this.gameEngineTitle = gameEngineTitle;
    }

    start() {
        console.log(`Запуск игры на ПК созданной на движке ${this.gameEngineTitle}`);
    }
}

class GameMobile implements IGame {
    gameEngineTitle: string;

    constructor(gameEngineTitle: string) {
        this.gameEngineTitle = gameEngineTitle;
    }

    start() {
        console.log(`Запуск игры на мобильном устройстве созданной на движке ${this.gameEngineTitle}`);
    }
}

//-----

interface IGameEngine {
    makeGamePC(): GamePC;
    makeGameMobile(): GameMobile;
}

class UnrealEngine implements IGameEngine {
    makeGamePC() {
        return new GamePC('Unreal Engine');
    }
    makeGameMobile() {
        return new GameMobile('Unreal Engine');
    }
}

class UnityEngine implements IGameEngine {
    makeGamePC() {
        return new GamePC('Unity Engine');
    }
    makeGameMobile() {
        return new GameMobile('Unity Engine');
    }
}

class CrysisEngine implements IGameEngine {
    makeGamePC() {
        return new GamePC('Crysis Engine');
    }
    makeGameMobile() {
        return new GameMobile('Crysis Engine');
    }
}

//-----

const ue4 = new UnrealEngine();
const unity = new UnityEngine();
const crysis = new CrysisEngine();

ue4.makeGamePC().start();
ue4.makeGameMobile().start();

unity.makeGamePC().start();
unity.makeGameMobile().start();

crysis.makeGamePC().start();
crysis.makeGameMobile().start();