const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const MathUtil = require('../../util/math-util');

class Scratch3MS72Blocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'ms72',
            name: formatMessage({
                id: 'ms72.categoryName',
                default: 'M_S_72',
                description: 'Label for the M_S_72 Test extension category'
            }),
            blocks: [
                {
                    opcode: 'ifthenelse',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'ms72.block.ifthenelse.text',
                        default: 'if [BOOLEAN] then [STRING1] else [STRING2]',
                        description: 'Name of the ms72.ifthenelse block. '
                    }),
                    arguments: {
                        BOOLEAN: {
                            type: ArgumentType.BOOLEAN
                        },
                        STRING1: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'ms72.block.ifthenelse.then.default',
                                default: 'apple',
                                description: 'apple: the default text'
                            })
                        },
                        STRING2: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'ms72.block.ifthenelse.else.default',
                                default: 'banana',
                                description: 'banana: the default text'
                            })
                        }

                    }
                },
                {
                    opcode: 'trueblock',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'ms72.trueblock.text',
                        default: 'true (REPLACE THIS BLOCK)',
                        description: 'Name of the ms72.trueblock block. '
                    }),
                    hideFromPalette: true
                },
                {
                    opcode: 'falseblock',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'ms72.falseblock.text',
                        default: 'false (REPLACE THIS BLOCK)',
                        description: 'Name of the ms72.falseblock block. '
                    }),
                    hideFromPalette: true
                },
                {
                    opcode: 'booleanblock',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'ms72.booleanblock',
                        default: '[BOOLEAN]',
                        description: 'Name of the ms72.booleanblock block. '
                    }),
                    arguments: {
                        BOOLEAN: {
                            type: ArgumentType.STRING,
                            menu: 'booleanMenu',
                            defaultValue: 'true'
                        }
                    }
                },
                {
                    opcode: 'text',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'ms72.block.text.text',
                        default: '[STRING]',
                        description: 'Name of the ms72.text block. '
                    }),
                    arguments: {
                        STRING: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'ms72.block.text.default',
                                default: 'Hello',
                                description: 'Hello: the default text'
                            })
                        }
                    }
               },
               {
                    opcode: 'math',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'ms72.block.math.text',
                        default: '[NUMBER1][MENU][NUMBER2]',
                        description: 'Name of the ms72.math block. '
                    }),
                    arguments: {
                        NUMBER1: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        MENU: {
                            type: ArgumentType.STRING,
                            menu: 'mathMenu',
                            defaultValue: 'add'
                        },
                        NUMBER2: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
               }

            ],
            menus: {
                mathMenu: [
                   {
                       value: 'add',
                       text: '+'
                   },
                   {
                       value: 'subtract',
                       text: '-'
                   },
                   {
                       value: 'multiply',
                       text: '*'
                   },
                   {
                       value: 'divide',
                       text: '/'
                   }
                ],
                booleanMenu: [
                    {
                        value: 'true',
                        text: formatMessage({
                            id: 'ms72.menus.booleanMenu.true',
                            default: 'true',
                            description: 'Text of the true value'
                        })
                    },
                    {
                        value: 'false',
                        text: formatMessage({
                            id: 'ms72.menus.booleanMenu.false',
                            default: 'false',
                            description: 'Text of the false value'
                        })
                    }
                ]
            },
            translation_map: {
                de: {
                    'extensionName': 'M_S_72 Test',
                    'ms72.categoryName': 'M_S_72',
                    'ms72.trueblock.text': 'wahr (ERSETZE DIESEM BLOCK)',
                    'ms72.falseblock.text': 'falsch (ERSETZE DIESEN BLOCK)',
                    'ms72.block.testblock1': 'Testblock 1',
                    'ms72.block.ifthenelse.text': 'falls [BOOLEAN], dann [STRING1], sonst [STRING2]',
                    'ms72.block.ifthenelse.then.default': 'Apfel',
                    'ms72.block.ifthenelse.else.default': 'Banane',
                    'ms72.block.pi.text': 'Pi',
                    'ms72.block.text.text': '[STRING]',
                    'ms72.block.text.default': 'Hallo',
                    'ms72.block.math.text': '[NUMBER1][MENU][NUMBER2]'
                }
            }
        };
    }
    ifthenelse (args) {
     
     if(args.BOOLEAN) return args.STRING1;
     else return args.STRING2;
    }
    trueblock () {
     
     return true;
    }
    falseblock () {
     
     return false;
    }
    booleanblock (args) {
     
     if (args.BOOLEAN == 'true') return true;
     if (args.BOOLEAN == 'false') return false;
    }
    text (args) {
     
     return args.STRING;
    }
    math (args) {
     
     if (args.MENU == 'add') return Number(args.NUMBER1) + Number(args.NUMBER2);
     if (args.MENU == 'subtract') return Number(args.NUMBER1) - Number(args.NUMBER2);
     if (args.MENU == 'multiply') return Number(args.NUMBER1) * Number(args.NUMBER2);
     if (args.MENU == 'divide') return Number(args.NUMBER1) / Number(args.NUMBER2);

    }
}

module.exports = Scratch3MS72Blocks;

