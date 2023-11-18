---
title: I Love The Idea of Gas on Ethereum
date: '2023-11-18'
---

Ethereum is a blockchain system with smart contract functionality. For those who have no idea what a blockchain and a smart contract are, just think of Ethereum as a computer whose state can only be changed through transactions, like sending ether from one address to another.

It takes computing resources to include a transaction on chain. For this reason, to avoid infinite loops and resources devour attack that could blocks the entire system, Ethereum introduces the concept of transaction gas. Transaction gas is essentially a measure of how much computing resources consumed by a transaction. Once a transaction is completed, transaction fee can be determined by multiplying the unit of gas used for the transaction and the gas price you've set. To be specific, if a transaction uses 10,000 units of gas with a 10 gwei gas price, the transaction fee is 0.0001 ether.

The idea of transaction gas is conterintuitive for me at first, sicne I've been accustomed to treating most Internet applications as free services. I don't need to pay when I write a post on twitter. I don't need to pay when I upload a video on youtube. As I became more familiar with Ethereum, I started to gradually appreciate the design of transaction gas because it reminds me of everything is not free. Twitter and youtube are not free in the sense that they sell your data for ads. Time is not free because humans are not immortal.

Another concept related to transaction gas is the gas limit. The gas limit is the maximum units of gas you are willing to spend for one transaction. Each time you send a transaction, one validation step is to check if the account has enough ether to cover the transaction fee, calculated by gasLimit * gasPrice. In simple terms, an account must have a sufficient balance to pay the transaction fee before initiating a transaction. This concept brings to mind a quote from Seneca's essay 'On the shortness of life': it is not that we have a short space of time, but that we waste much of it. Imagine if we take our life as seriously as Ethereum checks the balance for transaction fee. Every time before we take an action, we could consider how much time we have. Would this action save or wastes my time?

