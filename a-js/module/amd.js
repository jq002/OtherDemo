
(function(root){
    var CONFIG={
        baseUrl:'',
        charset:'',
        paths:{},
        shim:{}
    };
    var MODULES={};
    var cache={
        modules:MODULES,
        config:CONFIG
    };

    var define=function(id,deps,factory){};

    define.amd={};

    var require= function(ids,callback){};

    require.config=function(config){};

    root.define=define;
    root.require=require;
})(this)