const parseOptions = function(options){
    let optionsObject = {};
    if(typeof options === 'string'){
        options.trim().split(/\s+/).forEach(param=>{
            let paramPatterns = param.split("=");
            if(paramPatterns.length==2){
                let optionKeyName = paramPatterns[0].trim().replace(/^-+/, "");
                optionsObject[optionKeyName] = paramPatterns[1].trim();
            }
        });
    }
    return optionsObject;
}


function LessPluginRpxToRem(options) {
    this.defaultOptions = {
        width: 750
    };
    this.options = Object.assign(this.defaultOptions, parseOptions(options) );
}
LessPluginRpxToRem.prototype = {
    install: function(less, pluginManager) {

        let options = this.options;

        pluginManager.addPostProcessor({
			process : function(css, extra){

                const res = css.replace(/(\-|\+)?\d+(\.\d+)?rpx/gi,function ( $1 ){

                    return ( parseFloat($1.replace("rpx","")) / parseFloat((options.width/320*16)) ).toFixed(2) + "rem";
                });
				return res;
			}
		});
    },
    setOptions: function(options) { /* optional */
        this.options = Object.assign(this.defaultOptions, parseOptions(options) );
    },
    printUsage: function() { /* optional */
        console.log("");
        console.log("rpxtorem Plugin");
        console.log("specify plugin with --rpxtorem");
        console.log("You can set the 'width' option to control the ratio of rpx to rem (default 750).");
        console.log("eg. lessc --rpxtorem=\"width=750\" index.less index.css. ");
        console.log("");
    },
    minVersion: [2, 0, 0] /* optional */
}




module.exports = LessPluginRpxToRem;
