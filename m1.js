exports.st = " Hello All "  //var

exports.show = function()  //function
{
   console.log("Hello from module")
}

var log={
    info:function(info){
        console.log('Info :'+ info);
    },
    warning:function(warning){
        console.log('warning :'+ warning);
    },
    error:function(error){
        console.log('Error :'+ error);
    }
};
module.exports=log