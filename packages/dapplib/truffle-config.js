require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stool rice stereo smile guess kangaroo army giggle'; 
let testAccounts = [
"0x682cb67efcdbc58df46bf06f87ad27ee3e0e4b6f8982802c7f83348b81c403d8",
"0xd2dc0b19359ef8a7f2e21b7b7110c6201aa14a78957aa1b814a4a1ee71bdfab9",
"0x25986d661dcd0a4aeaf17f8f787e2b98da6b20d0449ea448294ec443eb08c359",
"0x0144db17a3ec6730f1dd13d153bb0f7e40f61e42665521c2807c5ada7df38965",
"0x706f91752a7b325a798942e5f894218bc8cfc6a930b6ab3ebe6ad59bedd70efc",
"0x17fb0257d9cfe65da68c494cdce8e80e6173275670367177ad480792d4221ad6",
"0x5146123903f259c7bd9e660a6c5e515077d9098219b76ef4cbd3bc29e3ab7c70",
"0xf5debbd0634044aa74c7dfd92015419f38c8a07046dedf8a0c8885a1c7bab481",
"0xe1d75404d60f6b0d0a6ab86f30242983f01bc98fed2436b3373f94abc9f389bd",
"0xd446d430f4f7fc3376d22578312496e0b49db8fd19c0b4a28b6656a35ce31cea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
