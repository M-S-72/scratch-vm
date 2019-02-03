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
               }
            ],
            menus: {
            },
            translation_map: {
             de: {
                 'extensionName': 'M_S_72 Test',
                 'ms72.categoryName': 'M_S_72',
                 'ms72.block.testblock1': 'Testblock 1',
                 'ms72.block.text': '[STRING]',
                 'ms72.block.text.default': 'Hallo'
             }
            }
        };
    }
    testblock1 () {
     
    }
    text (args) {
     
     return args.STRING;
    }
}

module.exports = Scratch3MS72Blocks;

