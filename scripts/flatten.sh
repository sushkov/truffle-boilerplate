#!/usr/bin/env bash

OUTPUT_DIR="build/contracts-flattened"

# Add all needed contracts
npx truffle-flattener contracts/examples/SimpleToken.sol --output "$OUTPUT_DIR/examples/SimpleToken.sol"
