const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

class Scratch3MS72Blocks {
    
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
        
        this.drawablesNextIndex = 0;
        this.drawableIds = [];
        this.skinIds = [];
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
                    opcode: 'drawtext',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'ms72.block.drawtext.text',
                        default: 'draw[TEXT]x:[X]y:[Y]',
                        description: 'Name of the ms72.drawtext block. '
                    }),
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'ms72.block.drawtext.text.default',
                                default: 'Hello!',
                                description: 'Hello: the default text'
                            })
                        },
                        X: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                {
                     opcode: 'cleartext',
                     blockType: BlockType.COMMAND,
                     text: formatMessage({
                         id: 'ms72.block.cleartext.text',
                         default: 'Remove text',
                         description: 'Name of the ms72.cleartext block. '
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
                     opcode: 'ifthenelseboolean',
                     blockType: BlockType.BOOLEAN,
                     text: formatMessage({
                         id: 'ms72.block.ifthenelseboolean.text',
                         default: 'if [BOOLEAN] then [VALUE1] else [VALUE2]',
                         description: 'Name of the ms72.ifthenelse block. '
                     }),
                     arguments: {
                         BOOLEAN: {
                             type: ArgumentType.BOOLEAN
                         },
                         VALUE1: {
                             type: ArgumentType.BOOLEAN
                         },
                         VALUE2: {
                             type: ArgumentType.BOOLEAN
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
                     'gui.extension.ms72.description': 'Meine Test-Erweiterung.',
                     'ms72.block.drawtext.text': 'zeichne[TEXT]x:[X]y:[Y]',
                     'ms72.block.drawtext.text.default': 'Hallo!',
                     'ms72.block.cleartext.text': 'lösche Text',
                     'ms72.trueblock.text': 'wahr (ERSETZE DIESEM BLOCK)',
                     'ms72.falseblock.text': 'falsch (ERSETZE DIESEN BLOCK)',
                     'ms72.block.ifthenelse.text': 'falls [BOOLEAN] dann [STRING1] sonst [STRING2]',
                     'ms72.block.ifthenelse.then.default': 'Apfel',
                     'ms72.block.ifthenelse.else.default': 'Banane',
                     'ms72.block.ifthenelseboolean.text': 'falls [BOOLEAN] dann [VALUE1] sonst [VALUE2]',
                     'ms72.block.pi.text': 'Pi',
                     'ms72.block.text.text': '[STRING]',
                     'ms72.block.text.default': 'Hallo',
                     'ms72.block.math.text': '[NUMBER1][MENU][NUMBER2]'
                 }
             }
         };
     }
     drawtext(args){
         
         this.drawableId = this.runtime.renderer.createDrawable('pen');
         this.skinId = this.runtime.renderer.createSVGSkin('<svg height="20" width="100"><text x="' + args.X + '" y="' + args.Y * -1 + '">' + args.TEXT + '</text></svg>');
         this.runtime.renderer.updateDrawableProperties(this.drawableId, { skinId: this.skinId });
         
         this.drawableIds[this.drawablesNextIndex] = this.drawableId;
         this.skinIds[this.drawablesNextIndex] = this.skinId;
         this.drawablesNextIndex++;
     }
     cleartext(){
         
         var runtime = this.runtime;
         
         this.skinIds.forEach(function(item) {
          
          runtime.renderer.destroySkin(item);
         });
         this.drawableIds.forEach(function(item) {
          
          runtime.renderer.destroyDrawable(item, 'pen');
         });
         this.skinIds = [];
         this.drawableIds = [];
     }
     ifthenelse(args){
         
         if(args.BOOLEAN) return args.STRING1;
         else return args.STRING2;
     }
     ifthenelseboolean(args){
         
         if(args.BOOLEAN) return args.VALUE1;
         else return args.VALUE2;
     }
     trueblock(){
         
         return true;
     }
     falseblock(){
         
         return false;
     }
     booleanblock(args){
         
         if (args.BOOLEAN == 'true') return true;
         if (args.BOOLEAN == 'false') return false;
     }
     text(args){
         
         return args.STRING;
     }
     math(args){
         
         if (args.MENU == 'add') return Number(args.NUMBER1) + Number(args.NUMBER2);
         if (args.MENU == 'subtract') return Number(args.NUMBER1) - Number(args.NUMBER2);
         if (args.MENU == 'multiply') return Number(args.NUMBER1) * Number(args.NUMBER2);
         if (args.MENU == 'divide') return Number(args.NUMBER1) / Number(args.NUMBER2);
     }
}

module.exports = Scratch3MS72Blocks;

