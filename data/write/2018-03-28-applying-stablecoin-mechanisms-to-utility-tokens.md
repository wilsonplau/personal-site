---
path: "/write/applying-stablecoin-mechanisms-to-utility-tokens"
title: Applying Stablecoin Mechanisms to Utility Tokens
date: 2018-03-28
tags: [Blockchain]
collection: [Thoughtchains]
---

In a previous piece, I argued that single utility tokens are infeasible as investable instruments because of the effect of velocity, and that a two-token model would be helpful by separating speculation from utility and move us towards an investable token model.

Outside of security tokens that rely on traditional corporate structures as their foundation, there still doesn’t exist a viable token model that accurately captures value from the growth and usage of a cryptonetwork. Stablecoin mechanisms may be the solution.

This article presents a foundation for a vision of the world where cryptonetworks don’t necessarily need to depend on separate stablecoins like DAI or Stablecoin to operate, but instead, all utility tokens act as quasi-stablecoins.

## Background

Kyle Samani and I had a back and forth exploring some of the flaws in the GNOSIS / SPANKCHAIN model, concluding ultimately that: 1) the peg for the utility token was arbitrary and unreliable; and that 2) the token supply multiple method for determining utility token supply creates a lot of volatility when there is accelerating growth or decline. (I added these thoughts as an addendum to the end of that article.)

This conversation led me to think about applying stablecoin mechanisms to a utility / mint token pairing. Utility tokens benefit from having stable value anyways; the current volatile and arbitrary exchange rates are deterring further utility-based adoption. Could we use a mint token that generates an elastic supply to stabilized and peg the price of a utility token?

For background on the approaches and mechanisms behind non-asset backed stablecoins, I would recommend reading the following:

* Vitalik Buterin wrote about four approaches for stablecoins
* Myles Snider wrote a wonderful overview of stablecoins
* Robert Sams wrote one of the original papers on cryptocurrency stabilization
* Basecoin’s Whitepaper presents one of the applications of stablecoin mechanics

I would also recommend reading my previous piece on the velocity problem and the GNOSIS / SPANKCHAIN model since I reference it quite a bit.

## How does this mechanism work?

There would exist two classes of tokens: a utility token pegged at $1USD, and a mint token that creates tokens at a rate that is dependent on the utility token’s price deviations from the peg price. There is a capped number of mint tokens available.

The utility token could be used in any of the many cryptonetwork applications we’ve seen so far — from porn to file storage to game currencies – it just represents $1USD on the platform. The mint token could be staked or non-staked depending on how liquid the designers want the token to be.

Within the cryptonetwork, a fee would be charged on every transaction — say 1%. Those transaction fees are burned. As a result, there will always be a deflationary pressure on the utility token since the supply is constantly being reduced.

*(Note that this transaction fee will play a big part in dictating how valuable the network would be to investors – I don’t quite believe in 0 transaction fee networks for non-store-of-value tokens and relying on single utility token appreciation to generate value, despite the idealistic side of this community to create these fee-free networks. I’m quite convinced that story doesn’t end well.)*

Also note the difference here between this model and other stablecoin models. Since there are no transaction fees on those networks, most stablecoin tokens offer bonds or auctions to reduce supply. In this case, I don’t believe a mechanism to decrease supply is necessary because the transaction fees act as a natural sink.

Coins are minted every set period, and distributed to all of the mint token holders pro-rata. (Although token designers can play with this as well to incentivize certain behaviours) The amount of tokens minted any given period is dependent on the price of the token relative to the peg. For every X% increase in price over the pegged price, the mint tokens increase supply by X%. This increase in supply should push the price towards towards the peg price.

## What are the benefits of this token model?

### A. Separation of Speculation and Utility

By explicitly defining the utility token as a stablecoin, we should eliminate speculation on the utility token; it becomes purely functional and actually useful for users. There may be arbitrage opportunities, but that would only advantage the system and increase stability. The utility token value is not affected by speculation on the mint token.

For speculators, the value of the mint token reflects the growth and usage of the platform and serves as an investable instrument. And even if investors decide to speculate and are comfortable accepting extremely low ‘token yields’, that has no effect on the price of the utility token.

### B. Potential Store of Value Properties for Utility Token

A utility token with stabilized value may actually act as a store of value more that other single token utility tokens, as long as the peg is reliable and there is adequate liquidity. There are arguments on both sides as to whether or not this would lead to increased holding periods.

Alex Evans might argue that transaction cost is the primary driver for holding times for utility tokens; others might argue that it is simply opportunity cost, and a stable value doesn’t change these two variables. However, I think individuals may choose to hold tokens for longer simply because they don’t fear volatility in the price. Regardless, whether or not individuals choose to hold becomes less important in this model, as explained below.

### C. Lessened Impact of Velocity on Mint Token Value 

When thinking about this model, I was originally frustrated because the number of utility tokens minted would still be affected by velocity, which would affect the value of the mint token. It is true that high velocity on these tokens would decrease the utility token supply subsantially, and vice versa — but importantly, velocity does not have the same effect on mint token price as it would in a single utility token model.

In a single utility token model, velocity acts as the denominator for value. Any increase in velocity has a straightforward linear effect on the token price.

In this two-token model, velocity only indirectly affects price. Fluctuations in velocity (from holding, usage, etc) expand and contract the total utility token supply. When this happens, the mint tokens will temporarily generate more or fewer tokens to adjust, because the change in velocity has an impact on the utility token price. This adjustment then has an effect on the yield of the mint token temporarily. These adjustments will happen constantly.

However, over a longer period of time, I believe that the quantity of utility tokens generated for all mint tokens (‘token yield’) should approximate total transaction fees plus/minus the increase or decrease in total utility token supply over any given period.

This token yield, I believe, is a good proxy for the kind of value we’re looking to represent in cryptonetworks — something that directly and organically reflects the usage (transaction fees) and growth (total token supply) of the network. There will remain some contention around the fluctuations in total total utility token supply (we’re back to arguing about velocity again), but at least we’re only talking about how users are interacting with the token and using the platform and not how many HODLers there are and how that might affect value.