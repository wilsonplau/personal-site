---
path: "/write/on-bonding-curves-as-funding-mechanisms"
title: On Bonding Curves as Funding Mechanisms
date: 2018-09-15
tags: [Blockchain]
collection: [Thoughtchains]
---

# Approaches for extracting funds from bonding curves

Currently, most token bonding curve models require that money in = money out. This model is very attractive for a wide range of applications, as the core promise is to incentivize participation, and early participants will potentially reap financial gains for their early commitments to a project.

However, while these curves can incentivize participation, they are not designed to actually fund projects; the amount bonded is effectively locked in. I can imagine that there are many applications where funding would benefit supporters of a project by enabling development, marketing, or whatnot — so we’re left with a question: How might we use bonding curves to fund projects?

## Background

In my last article on single bonding curves for continuous token models, I alluded to Simon de la Rouviere’s initial writing on bonding curves that proposed a two-curve model where the buy price is different from the sell price. This article explores the use of this type of ‘two-curve model’ for fundraising.

Alex Van de Sande also recently published a piece on how to create revenue for members of TCRs (that use a bonding curve). In summary, he suggests a mechanism for allowing individuals / companies to donate to the curve without receiving any tokens, which would increase value for all of the token holders. This article actually explores the exact opposite process.

I generally also believe that the projects underlying bonding curves can be revenue-generating in addition to having this capital gain opportunity. I believe that that revenue should be distributed to token holders pari passu regardless of the price at which they purchased the token. This article alludes to revenue-generating projects funded by bonding curves.

I also refer to the equation I designed in my previous article a few times here, so I’ve copied it here as a reference:

![Bonding Curve Equation](./img/bonding-curve-equation.png)

## Funding Mechanisms for Single Bonding Curves

**1. Redemption Limits**

The simplest means of securing capital for a bonding curve is to set a redemption limit. Effectively, the last X tokens go to 0.

This is a bet on the curve being sustained over an indefinite period of time, and that at no point in time does the project expect its tokens to be fully redeemed. Therefore, an amount of capital can be safely removed from the system without major consequences.

This trades off the ability to guarantee the fully redeemed amount for some amoutn of capital while preserving a lot of the core characteristics of the bonding curve. This is what it would probably look like:

![Setting a redemption limit](./img/redemption-limit.png)

Ideally, the token holders would vote to ramp up this redemption limit over time relative to the total amount bonded. In my view, this amount should represent a fairly insignificant amount of the total amount bonded, but those with greater risk appetites may disagree. The caution is that setting a redemption limit unwisely could spur FUD and lead to a ‘bank run’ of sorts on the bonding curve.

**2. Discounting Curves**

Projects can also raise a target amount of money by discounting the curve over a range of tokens already distributed. The target amount can then be removed from the bonding curve and be used to fund projects. Effectively, this is a project’s bet that discounting the curve now to invest in the project will lead to more participation or revenue in the future. Individual token holders be incentivized by the price going up with more participation, and not necessarily the shape of the curve.

This involves calculating the target amount, and then changing a number of variables on the curve (lowering m/a, increasing c). Here’s a diagram to illustrate how it might work:

![Discounting a Curve](./img/discounting-curves.png)

**3. Staking / Loans**

Upon the release of Casper PoS on Ethereum, ETH can be staked and will receive interest / mining fees of some percentage. If we can build a mechanism for staking the ETH committed to a bonding curve, cash flow can be generated for the project in a way that is very similar to an endowment. Managing this may be difficult due to withdrawal delays, but I would hope that emerging staking pools like RocketPool may offer a good solution to make this easy and limit the issue of withdrawal delays.

Alternatively, there is potential to issue debt-like instruments so that the staked amounts can earn interest. The challenge will be in the automated, well-governed management of the bonded funds. Integrating with a project like Dharma may make sense here.

I find this concept especially interesting, largely because it combines characteristics of an endowment — an ability to fund development or other initiatives over a long period of time— with an underlying bonding curve that allows individuals to reap capital gains for their early commitment to the project, and potentially even ongoing cash flow if the underlying project is revenue-generating. The challenge is that debt-like returns means that a lot of capital would required to fund any meaningful work.

## Funding Mechanisms for Single Bonding Curves

In [Simon de la Rouviere’s initial article](https://medium.com/u/9afbf877fa2f), he proposes two options: one where buy price > sell price, and vice versa. I cannot think of a way that a curve where sell price > buy price could possibly exist without immediate abuse, but a curve where buy price > sell price is very useful.

Where buy price > sell price, the delta between the two curves can be withdrawn from the contract safely and be used to fund the project underlying the bonding curve.

### Looking at the options

There are effectively three categories for how the delta between these curves can be designed — one where the two curves converge, diverge, or remain consistently divergent. Each has slightly different outcomes:

![Increasingly Divergent Curves](./img/increasingly-diverent-curves.png)

An increasly divergent set of curves will continue to create more and more excess ‘delta’ that can be withdrawn from the curve. The relative difference between the two curves can remain consistent (for example, a 10% discount), but the absolute difference will continue to grow. A curve where relative difference is growing would be unadvisable simply because contributors will be taking increasingly large losses to even participate.

These curves can simply be designed by creating a base curve, and then applying a discount (m) to create the selling curve. I think this is a viable model, as it is not uncommon to immediately take a predictable loss for future potential. The project can then be funded with 10% of all total contributions made.
