---
path: "/write/2018-07-06-on-single-bonding-curves-for-continuous-token-models"
title: On Single Bonding Curves for Continuous Token Models
date: 2018-07-06
tags: [Blockchain]
collection: [Thoughtchains]
---

I’m a big admirer of all of the thinking that Simon de la Rouviere publishes here on Medium. I was especially excited by the concept of bonding curves that Scott Moore initially introduced me to.

Bonding curves have qualities of both debt and equity from an investors perspective, and are definitely interesting structures that can incentivize the kind of collective contribution / fundraising that can launch some exciting community-focused, open-sourced or even for-profit projects if the incentives are designed correctly.

However, I do think that the math of it all has been glossed over somewhat. The specifics of the math have a significant impact on both incentivization and scalability; if we incorrectly design these cryptoeconomic models, we risk creating some unsustainable projects or markets ripe for abuse and manipulation. Here are a few realities that I think we need contend with when designing these models:

- Contributors who bond their ETH want to make a good return, or else they don’t have an incentive to contribute. We generally know the scale that these contributor-cum-HODLers expect to make based on our experience in the cryptomarkets so far (definitely not 5% YoY). We also want to incentivize early adopters more than late adopters. And of course, we know that in crypto-markets, any opportunity for abuse or arbitrage will be taken advantage of.

- The growth of the underlying product is likely to follow some type of S-Curve, where growth accelerates towards a stage of maturity, then declerates after that to a stage of stability. We need to design the bonding curve based on that model of growth, and we should also generally expect tokens to scale up to 5, 6, 7, 8, maybe even 9 magnitudes from inception.

- There is some upward limit of the amount of capital that will be contributed over the lifetime of a project – that is, we don’t need to design for a scenario where the capital is in the trillion dollar range, but maybe in the millions – and returns have to be appropriately attractive across that reasonable range. Contrary to market capitalization, where an additional dollar going into the system might yield a $25 increase in market cap, the capital contributed into a bonding curve is dollar-for-dollar, which means we’re probably looking at figures that are a magnitude or two lower than current market capitalizations for the equivalent project. There isn’t this magical economic concept of ‘value’ being created when prices go up.

So, we know some of the parameters we need to design for. The models I present here will hopefully help us get a better understanding of the variables and functions that help us define a working bonding curve based on those parameters.

As a side note, this article will only cover single bonding curves, where buy price = sell price at every point in the curve. The math and incentives behind a two-curve model are very cool and get more complex, and I hope to cover it at a later date.

**One last warning:** This is a very technical article. Please start by reading at least some of the work that has inspired this thinking to get the background necessary to not be utterly confused by the rest of this:

- Tokens 2.0: Curved Token Bonding in Curation Markets by Simon de la Rouviere
- The Arcade Bazaar: Continuous, Multi-Party, Tokenized Funding Without Central Issuance by Simon de la Rouviere
- How to Make Bonding Curves for Continuous Token Models by Slava Balasanov
- Token Bonding Curves Explained by Justin Goro

The question we’re trying to answer in this article is straightforward:
How might we define the function behind a bonding curve?

## The Problem with Exponential Functions

Simon’s initial article proposed the use of exponential functions for bonding curves. While they sound good and make a lot of sense when we’re talking about technological growth, they’re impractical when we’re working with price, especially when we expect the underlying variable (number of tokens) to grow by magnitudes. An exponential function accelerates indefinitely as the underlying variable increases, so when we are designing curves that span several magnitudes, price tends to stay very low for 80% of the curve, then inevitably accelerates to unmanageable and unreasonable levels very quickly.

The problem is not necessarily the absolute price — especially since we can trade fractional tokens. The more significant problem is that the growth rate and gains accelerate as the number of tokens minted increases. You get a price that becomes more volatile with more speculative upside and downside as the project becomes more popular. This is possibly the worst speculative environment we could design for a token given the behaviour we’ve experienced in the cryptocurrency markets so far.

So, what if we manipulate the exponential function? There are basically two factors you can change — the base of the exponent or you can apply some kind of factor to the variable. But, unless you apply a factor that also declines at an exponential rate, you will always contend with the aggressive acceleration that basically defines an exponential curve. (We basically do this later).

You can play with these variables and how an exponential function might play out in the Exponential tab in the model I’ve created.

## The Thing with Linear Functions

Simon’s second suggestion was to use a linear function. A linear function is generally fine within this context, especially when you are comfortable with price increases being on the same magnitude as token supply increases — so a 10,000 token issuance would necessarily lead to a 10,000X gain in price from the first minted token. This is probably actually fine for a lot of projects — since the first three magnitudes in price increase will probably be shared between <10 people, but might become problematic if the project grows well beyond that.

You can’t really design a plain linear function where the magnitude change in price and tokens issued are not on the same level— that’s just also in the very nature of a linear function, that it grows linearly with the variable in question. This maybe be a problem when you expect to issue a million tokens, but don’t think that a 1,000,000x increase in price is also warranted. So, for projects that have real room to scale, a linear function probably rewards the first few token holders a bit too much.

The last problem is just the adaptability in the design of these bonding curves. y = mx + b doesn’t leave you with a lot to manipulate to design the bonding curve that you want.

You can play with these variables and how an linear function might play out in the Linear tab in the model I’ve created.

## An Alternative Rule-Based Function

When I was thinking through an alternative design of these curves, I thought that from an investor’s perspective, there’s one simple rule that I could define in the token model: A token should appreciate by X% for every doubling / tripling / 10X of the number of tokens issued / number of users on the platform.

We can represent this in a function, as seen below. It can either be superlinear, linear or sublinear depending on the variables used, and looks a bit like the curves below:

For example, if we were to define the rule as: Token A will appreciate by 25% for every doubling of the number of tokens issued, the equation would look like the one below. We could then use the m and b variables to adjust some of the other factors that help get to a target price or target amount bonded at certain levels of tokens issued.

The price chart would look somewhat like the one above, and you can see all of the details of the various factors in the model you can find here.

## Variations on this Model

If we were to define the rule as: Token A will appreciate by 100% for every doubling of the number of tokens issued (or in any case where A = C - 1) the equation would be equivalent to a linear function. Where A > C - 1, we define a superlinear function (not exponential) that accelerates as token supply increases. Where A < C - 1, we define a sublinear function that looks more like a logarithmic function. You can see the curves below.

A superlinear function might be helpful if the total token issuance is expected to stay small, and that additional growth is helpful for incentivizing users; it also might be best to represent the superlinear growth that network effects help projects achieve.

However, I think a sublinear function is generally the most useful for most applications because the logarithmic-like slowdown in price growth accurately incentivizes early adopters vs later adopters.
