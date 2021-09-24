require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rifle spider unusual hockey clock oil square'; 
let testAccounts = [
"0x9dcd704f5adb6818a2c472ac7b7c26eb822ef68598dd1d6f43e81e55d359ec3a",
"0x8c49179a7ca7353bd286ed173aadac0433317f213a623beb3bd0009b15409d52",
"0x5f5f88e8b0b368ee29dfdb2784815d28f7eb898624a4b6c0d765b6ebe31578dd",
"0x42d56f4a7f86761ac7286c0add834a7d0722d37152355846dc986b0190963f8b",
"0x032c2476857ee9be9fde397d0ebbbb9ecd9d74199b0375a19ba97fefda577a5a",
"0xc66bd1fcd78b8cad53dccca5e81274e1b1448eeb9f4b031dd4fa16ad2d8d7888",
"0xd303d0a57281f020703c42a8e6165be468cdce4c3f2c60024c908c3a765cc3be",
"0x9b65129c6b51ca684231590e6ffec649393ad9da0edc98d12c74e1cd8f025520",
"0x196bd91daa1dfb92e3f12a768236ff720209c096b54fcf2a1df60ec5831e8bd5",
"0x4c94ac13b46a534be462604330564c68504d32b24a1a48ecf9dcec93598f73ff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

