const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');

class Scratch3MS72Blocks {
    
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
        
        this.textDrawablesNextIndex = 0;
        this.textDrawableIds = [];
        this.textSkinIds = [];
        
        this.fillDrawableId = undefined;
        this.fillSkinId = undefined;
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
                },
                {
                     opcode: 'numbersystemWithMenu',
                     blockType: BlockType.REPORTER,
                     text: formatMessage({
                         id: 'ms72.block.numbersystemWithMenu.text',
                         default: '[NUMBER] in [BASE] system',
                         description: 'Name of the ms72.numbersystem block. '
                     }),
                     arguments: {
                         NUMBER: {
                             type: ArgumentType.NUMBER,
                             defaultValue: 1
                         },
                         BASE: {
                             type: ArgumentType.NUMBER,
                             menu: 'numberSystemMenu',
                             defaultValue: 2
                         }
                     }
                },
                {
                     opcode: 'numbersystem',
                     blockType: BlockType.REPORTER,
                     text: formatMessage({
                         id: 'ms72.block.numbersystem.text',
                         default: '[NUMBER] in [BASE] system',
                         description: 'Name of the ms72.numbersystem block. '
                     }),
                     arguments: {
                         NUMBER: {
                             type: ArgumentType.NUMBER,
                             defaultValue: 1
                         },
                         BASE: {
                             type: ArgumentType.NUMBER,
                             defaultValue: 2
                         }
                     }
                },
                {
                    opcode: 'drawtext',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'ms72.block.drawtext.text',
                        default: 'write[TEXT]x:[X]y:[Y]',
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
                    opcode: 'drawtext2',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'ms72.block.drawtext2.text',
                        default: 'write[TEXT]x:[X]y:[Y]font:[FONT]color:[COLOR]',
                        description: 'Name of the ms72.drawtext2 block. '
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
                        },
                        FONT: {
                            type: ArgumentType.STRING,
                            menu: 'fontMenu',
                            defaultValue: 'Helvetica'
                        },
                        COLOR: {
                            type: ArgumentType.COLOR
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
                     opcode: 'fill',
                     blockType: BlockType.COMMAND,
                     text: formatMessage({
                         id: 'ms72.block.fill.text',
                         default: 'fill with [COLOR]',
                         description: 'Name of the ms72.fill block. '
                     }),
                     arguments: {
				    COLOR: {
                             type: ArgumentType.COLOR
                         }
                     }
                },
                {
                     opcode: 'clearfill',
                     blockType: BlockType.COMMAND,
                     text: formatMessage({
                         id: 'ms72.block.clearfill.text',
                         default: 'Remove fill',
                         description: 'Name of the ms72.clearfill block. '
                     })
                },
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
                 ],
                 fontMenu: [
                     {
                         value: 'helvetica',
                         text: 'Helvetica'
                     },
                     {
                         value: 'arial',
                         text: 'Arial'
                     },
                     'sans-serif',
                     'serif'
                 ],
                 numberSystemMenu: [
                     {
                         value: 2,
                         text: formatMessage({
                             id: 'ms72.menus.numberSystemMenu.binary',
                             default: 'binary',
                             description: 'Text of the "binary" value'
                         })
                     },
                     {
                         value: 8,
                         text: formatMessage({
                             id: 'ms72.menus.numberSystemMenu.octal',
                             default: 'octal',
                             description: 'Text of the "octal" value'
                         })
                     },
                     {
                         value: 10,
                         text: formatMessage({
                             id: 'ms72.menus.numberSystemMenu.decimal',
                             default: 'decimal',
                             description: 'Text of the "decimal" value'
                         })
                     },
                     {
                         value: 16,
                         text: formatMessage({
                             id: 'ms72.menus.numberSystemMenu.hexadecimal',
                             default: 'hexadecimal',
                             description: 'Text of the "hexadecimal" value'
                         })
                     }
                 ]
             },
             translation_map: {
                 de: {
                     'extensionName': 'M_S_72 Test',
                     'ms72.categoryName': 'M_S_72',
                     'gui.extension.ms72.description': 'Meine Test-Erweiterung.',
                     'ms72.trueblock.text': 'wahr (ERSETZE DIESEM BLOCK)',
                     'ms72.falseblock.text': 'falsch (ERSETZE DIESEN BLOCK)',
                     'ms72.block.ifthenelse.text': 'falls [BOOLEAN] dann [STRING1] sonst [STRING2]',
                     'ms72.block.ifthenelse.then.default': 'Apfel',
                     'ms72.block.ifthenelse.else.default': 'Banane',
                     'ms72.block.ifthenelseboolean.text': 'falls [BOOLEAN] dann [VALUE1] sonst [VALUE2]',
                     'ms72.block.pi.text': 'Pi',
                     'ms72.block.text.text': '[STRING]',
                     'ms72.block.text.default': 'Hallo',
                     'ms72.block.math.text': '[NUMBER1][MENU][NUMBER2]',
                     'ms72.block.numbersystemWithMenu.text': '[NUMBER] im [BASE]-System',
                     'ms72.block.numbersystem.text': '[NUMBER] im [BASE]er-System',
                     'ms72.block.drawtext.text': 'schreibe[TEXT]x:[X]y:[Y]',
                     'ms72.block.drawtext.text.default': 'Hallo!',
                     'ms72.block.drawtext2.text': 'schreibe[TEXT]x:[X]y:[Y]Schrift:[FONT]Farbe:[COLOR]',
                     'ms72.block.cleartext.text': 'lösche Text',
                     'ms72.block.fill.text': 'mit [COLOR] füllen',
                     'ms72.block.clearfill.text': 'lösche Füllung',
                     
                     
                     'ms72.menus.booleanMenu.true': 'wahr',
                     'ms72.menus.booleanMenu.false': 'falsch',
                     
                     'ms72.menus.numberSystemMenu.binary': 'Binär',
                     'ms72.menus.numberSystemMenu.octal': 'Oktal',
                     'ms72.menus.numberSystemMenu.decimal': 'Dezimal',
                     'ms72.menus.numberSystemMenu.hexadecimal': 'Hexadezimal'
                 }
             }
         };
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
         
         if ('true'.localeCompare(args.BOOLEAN, undefined, { sensitivity: 'accent' }) === 0) return true;
         if ('false'.localeCompare(args.BOOLEAN, undefined, { sensitivity: 'accent' }) === 0) return false;
         return false;
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
     numbersystemWithMenu(args){
         
         return Number(args.NUMBER).toString(args.BASE);
     }
     numbersystem(args){
         
         return Number(args.NUMBER).toString(args.BASE);
     }
     drawtext(args){
         
         this.drawableId = this.runtime.renderer.createDrawable('pen');
         this.skinId = this.runtime.renderer.createSVGSkin('<svg height="20" width="100"><text x="' + args.X + '" y="' + args.Y * -1 + '" font-family="Helvetica">' + args.TEXT + '</text></svg>');
         this.runtime.renderer.updateDrawableProperties(this.drawableId, { skinId: this.skinId });
         
         this.textDrawableIds[this.textDrawablesNextIndex] = this.drawableId;
         this.textSkinIds[this.textDrawablesNextIndex] = this.skinId;
         this.textDrawablesNextIndex++;
     }
     drawtext2(args){
         
         const rgb = Cast.toRgbColorObject(args.COLOR);
         const color = '#' + (rgb.r <= 15? '0' + Number(rgb.r).toString(16) : Number(rgb.r).toString(16)) + (rgb.g <= 15? '0' + Number(rgb.g).toString(16) : Number(rgb.g).toString(16)) + (rgb.b <= 15? '0' + Number(rgb.b).toString(16) : Number(rgb.b).toString(16));
         
         const drawableId = this.runtime.renderer.createDrawable('pen');
         const skinId = this.runtime.renderer.createSVGSkin('<svg height="20" width="100"><text x="' + args.X + '" y="' + args.Y * -1 + '" font-family="' + args.FONT + '" fill="' + color + '">' + args.TEXT + '</text></svg>');
         this.runtime.renderer.updateDrawableProperties(drawableId, { skinId: skinId });
         
         this.textDrawableIds[this.textDrawablesNextIndex] = drawableId;
         this.textSkinIds[this.textDrawablesNextIndex] = skinId;
         this.textDrawablesNextIndex++;
     }
     cleartext(){
         
         var runtime = this.runtime;
         
         this.textSkinIds.forEach(function(item) {
          
          runtime.renderer.destroySkin(item);
         });
         this.textDrawableIds.forEach(function(item) {
          
          runtime.renderer.destroyDrawable(item, 'pen');
         });
         this.textSkinIds = [];
         this.textDrawableIds = [];
     }
     fill(args){
         
         const rgb = Cast.toRgbColorObject(args.COLOR);
         const color = '#' + (rgb.r <= 15? '0' + Number(rgb.r).toString(16) : Number(rgb.r).toString(16)) + (rgb.g <= 15? '0' + Number(rgb.g).toString(16) : Number(rgb.g).toString(16)) + (rgb.b <= 15? '0' + Number(rgb.b).toString(16) : Number(rgb.b).toString(16));
         
         if(this.fillDrawableId == undefined) {
             const drawableId = this.runtime.renderer.createDrawable('pen');
             const skinId = this.runtime.renderer.createSVGSkin('<svg width="960" height="720"><rect x="-240" y="-180" width="960" height="720" fill="' + color + '"/></svg>');
             this.runtime.renderer.updateDrawableProperties(drawableId, { skinId: skinId });
             this.runtime.renderer.setDrawableOrder(drawableId, 1, 'pen');
             
             this.fillDrawableId = drawableId;
             this.fillSkinId = skinId;
         }
         else {
             this.runtime.renderer.updateSVGSkin(this.fillSkinId, '<svg width="960" height="720"><rect x="-240" y="-180" width="960" height="720" fill="' + color + '"/></svg>');
         }
     }
     clearfill(){
         
         this.runtime.renderer.destroySkin(this.fillSkinId);
         this.runtime.renderer.destroyDrawable(this.fillDrawableId, 'pen');
         
         this.fillSkinId = undefined;
         this.fillDrawableId = undefined;
     }
}

module.exports = Scratch3MS72Blocks;

