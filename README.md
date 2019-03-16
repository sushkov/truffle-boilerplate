# Truffle boilerplate

> Simple boilerplate for smart-contracts development with using Truffle framework.

## Usage

### Requirements  

- Linux
- Node v10.14.1, NPM v6.9.0

### Install

```
npm i
```

### Compile contracts

```
npm run compile
```

### Run tests

```
npm run test
```

### Configure before deploy

For deploy contracts to Ropsten or Mainnet fill out the ```.env``` file as in ```.env.example```: configure Infura API key, mnenonic phrase for deployer wallet, limit and price of gas.


### Deploy contracts

```
npx truffle migrate --network <netName>
```

netNames:

```json
[
  "development",
  "ropsten",
  "mainnet"
]
```


### Flatten contracts code

Flattened contracts are needed for example for verification on Etherscan.  

Configure contracts for flatten in script   ```scripts/flatten.sh```.

```
npm run flatten
```
