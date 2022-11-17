const SmartChain = require("komodo-rpc-js");
export const ENV = {
 
    KomodoRPC: function (dmnData) {
        console.log(`dmon-rpccc-->`, dmnData)
        const {user,host,password,port} = dmnData;
        const config = {
            rpchost:host,rpcuser:user,rpcpassword:password,rpcport:port
        }
        const komodo = new SmartChain({config});
        const komodoRPC = komodo.rpc();
        komodoRPC
        .getinfo()
        .then(info =>{
            console.log(`info --->`,info);
            return info;
        })
        .catch(error => {
            console.log(`error --->`, error);
            return error;
        })
    },
}