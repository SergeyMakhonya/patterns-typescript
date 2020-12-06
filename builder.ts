// Привет из Minecraft :)

interface Vector {
    r: number;
    g: number;
    b: number;
}

class Block {
    texturePath: string;        // путь к файлу текстуры
    stepSoundPath: string;      // путь к файлу звука шагов
    isFailing: boolean;         // может падать
    color: Vector;              // цвет RGB
    hardness: number;           // твёрдость (на сколько долго будем откапывать)
    providePower: boolean;      // может передавать ток

    constructor() {
        this.texturePath = '';
        this.stepSoundPath = '';
        this.isFailing = false;
        this.color = { r: 1, g: 1, b: 1 };
        this.hardness = 1;
        this.providePower = false;
    }

    setTexturePath(value: string): Block { this.texturePath = value; return this; }
    setStepSoundPath(value: string): Block { this.stepSoundPath = value; return this; }
    setFailing(value: boolean): Block { this.isFailing = value; return this; }
    setColor(value: Vector): Block { this.color = value; return this; }
    setHardness(value: number): Block { this.hardness = value; return this; }
    setProvidePower(value: boolean): Block { this.providePower = value; return this; }
}

//-----

// Травянной блок
const grass = new Block().setTexturePath('textures/blocks/grass.png').setStepSoundPath('sounds/steps/grass.ogg').setHardness(0.6);
console.log({grass});

// Камень
const stone = new Block().setTexturePath('textures/blocks/stone.png').setStepSoundPath('sounds/steps/stone.ogg').setHardness(1.5);
console.log({stone});

// Песок
const sand = new Block().setTexturePath('textures/blocks/sand.png').setStepSoundPath('sounds/steps/sand.ogg').setHardness(0.5).setFailing(true);
console.log({sand});

// Стекло
const glass = new Block().setTexturePath('textures/blocks/glass.png').setHardness(0.3);
console.log({glass});

// Красная пыль (токопроводящая красная пыль)
const redstoneWire = new Block().setTexturePath('textures/blocks/redstone-wire.png').setHardness(0).setProvidePower(true);
console.log({redstoneWire});