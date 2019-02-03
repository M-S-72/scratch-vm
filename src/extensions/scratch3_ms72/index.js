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
                    opcode: 'testblock1',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'ms72.block.testblock1',
                        default: 'Test block 1',
                        description: 'Name of the ms72.testblock1 block. '
                    })
                },
                {
                    opcode: 'text',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'ms72.block.text',
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
                    opcode: 'trueblock',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'ms72.true',
                        default: 'true',
                        description: 'Name of the ms72.true block. '
                    })
                },
                {
                    opcode: 'falseblock',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'ms72.false',
                        default: 'false',
                        description: 'Name of the ms72.false block. '
                    })
                },
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
                            type: ArgumentType.BOOLEAN,
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

                },{
                    opcode: 'pi',
                    blockType: BlockType.REPORTER, 
                    text: formatMessage({
                        id: 'ms72.block.pi.text',
                        default: 'Pi',
                        description: 'Name of the ms72.pi block. '
                    }),
                }
            ],
            menus: {
            },
            translation_map: {
             de: {
                 'extensionName': 'M_S_72 Test',
                 'ms72.categoryName': 'M_S_72',
                 'ms72.true': 'wahr',
                 'ms72.false': 'falsch',
                 'ms72.block.testblock1': 'Testblock 1',
                 'ms72.block.text': '[STRING]',
                 'ms72.block.text.default': 'Hallo',
                 'ms72.block.ifthenelse.text': 'falls [BOOLEAN], dann [STRING1], sonst [STRING2]',
                 'ms72.block.ifthenelse.then.default': 'Apfel',
                 'ms72.block.ifthenelse.else.default': 'Banane',
                 'ms72.block.pi.text': 'Pi'
             }
            }
        };
    }
    testblock1 () {
     
    }
    text (args) {
     
     return args.STRING;
    }
    trueblock () {
     
     return true;
    }
    falseblock () {
     
     return false;
    }
    ifthenelse (args) {
     
     if(args.BOOLEAN) return args.STRING1;
     else return args.STRING2;
    }
    pi () {
     
     return 3.1415926535897932384626433832795;
    }
}

module.exports = Scratch3MS72Blocks;

