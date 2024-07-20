import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const suppliedPublickey = process.argv[2];
if (!suppliedPublickey) {
    throw new Error("provide a public key to view the balance")
}

const connection = new Connection(clusterApiUrl("devnet"));
// const address = new PublicKey('B3Z3EzUp9iT3QCLgvwMN3Guo4XhawaYRqgRFiCkGdwbR');
const publicKey = new PublicKey(suppliedPublickey);

const balanceLamports = await connection.getBalance(publicKey);
const balanceInSol = balanceLamports / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${publicKey} is ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)