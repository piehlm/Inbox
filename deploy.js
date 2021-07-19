const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
	'hover drum exercise cushion hood please ride leopard stay jazz patrol window',
	'https://rinkeby.infura.io/v3/7e19ccb6c0b3441dad97b0e89519f507'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('attempted to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode, arguments: ['Hi there!'] })
		.send({ gas: '1000000', from: accounts[0] });
	console.log('Contract address: ', result.options.address);
};
deploy();

//contract: 0xa53e714a5cB8B5Fc5bcA30f9316ac98F9Cc8BBcb