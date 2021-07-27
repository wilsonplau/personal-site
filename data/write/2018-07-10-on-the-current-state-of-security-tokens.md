---
path: "/write/on-the-current-state-of-security-tokens"
title: On the Current State of Security Tokens
date: 2018-07-10
tags: [Blockchain]
collection: [Thoughtchains]
---

Security tokens have been hyped up a lot in the past few months. A lot of the writing you might read here on Hacker Noon and Medium describes them as having these amazing properties that are ripe to disrupt the multi-trillion dollar securities markets. Some of the more influential articles (for background) have been:

* Stephen McKeon’s two articles: Traditional Asset Tokenization and The Security Token Thesis
* Anthony Pompliano’s Official Guide to Tokenized Securities
* Howard Marks’ article: The ICO Is Dead. Long Live the ICO 2.0

I’d agree that they definitely have the potential to do be extremely disruptive, but instead of focusing on what could happen, I’d like to walk us through three different security token issuances that have actually been filed / are very close to being filed to give us a better sense of where security tokens are today.

## Regulation D: PropertyCoin 

> **A Quick Primer on Regulation D:** Rule 506 under Regulation D is the most common way to privately raise money without the burdensome disclosure and audit requirements of a public offering. These offerings are restricted to accredited investors, are not allowed to be publicly advertised, and the securities issued are trading-restricted. [Learn more.]()

PropertyCoin is one of the earlier self-purported security tokens. The company is using a Regulation D offering (probably 506c) to issue ‘PropertyCoins’ to invest in distressed real estate to flip and/or loan money to property investors pursuing similar types of projects. This falls into the category of non-blockchain companies raising money via security tokens.

You can find the U.S. Prospectus here. It’s worth a read through, even for non-lawyer types, because Dentons actually does a very good job at describing exactly what the problems are for Regulation D offerings like these still, especially in the extensive risk factors section that they had to draft for this offering. I’ve picked out a few parts of this offering of note to discuss:

### 1. Non-existent voting and management rights:

Almost all of the offerings I have seen share this quality, and this is not a result of being a Regulation D offering. Rather, in the name of creating a trendy security token and following the spirit of the ICO wave, many companies have opted to strip all of the typical governance and control rights that an equity issuance would have, even for minority investors. For PropertyCoin, the language is just that:

> Property Coins shall have no voting rights nor shall purchasers thereof be entitled to participate in the control or management of the Token Issuer or take an active part in the business of the Token Issuer for any purpose, nor will anything be construed to confer on the purchasers any right to vote…

More cynical investors might have insisted on getting consent or supermajority rights that allow minority investors to protect themselves against amendments that could basically render their investment worthless in the case where management chooses to abuse their control rights. Of course, there are many cases where private companies also don’t offer any of these rights as well, but those investors don’t also generally agree to:

### 2. No rights to distributions and/or ownership of equity:

Again, this is not because it is a Regulation D offering. In the same way as above, a lot of trendy security token offerings design special cash flow streams that are more like a royalties than equity ownership, while the founders retain 100% legal ownership and control of the underlying company.

In the case of PropertyCoin, it is similar: no distribution rights and the parent company owns 100% of the equity. They make it quite explicit that the only way that investors will make money is through capital gains — if they either sell the token to someone else or to the company in a buyback.

> *PropertyCoins have no distribution or dividend rights. Any return of capital to purchasers thereof will occur through open market purchases or repurchases of PropertyCoins by the Token Issuer...*

Additionally, in liquidation, there are no claims to any of the underlying assets because token holders don’t actually own any equity. There’s only this clause that says that in the case of liquidation, that token holders would be returned some proceeds on a pari-passu basis. However, what is unclear is what the split would be between the 100% equity owner of the LP and these token holders; that split is probably whatever management wants.

The problem I have with these first two points is that there is nothing intrinsic about a security token that means that common shareholders rights should denied. I would argue that security tokens — after all, they are supposed to mimic securities — should retain all of these attributes. The tokenization should instead make managing governance and ownership more transparent and potentially increase ease of trading and liquidity if token-based markets for private securities develop.

At the end of the day, what is also important to understand here is that the SEC does not protect consumers from shitty, creatively structured investments. Its role is to make sure that investors are well-informed and that there is adequate disclosure so that investors can know that they are making shitty investments. SEC regulation of security tokens does not necessarily make investments any more attractive. (Okay, maybe marginally so compared to a lot of straight up scam ICOs we’ve seen in the past year).

### 3. Transfer Restrictions with Uncertain Liquidity

Securities issued in Regulation D offerings are subject to transfer restrictions. In the case of a 506c filing, the initial offering is restricted to accredited investors and resale after that is restricted for a 6–12 month holding period.

> PropertyCoins may not be resold or otherwise transferred: (i) by U.S. persons until after the first anniversary of the issuance of PropertyCoins and then not to any U.S. person unless they sell or transfer their PropertyCoins pursuant to an exemption from registration under the Securities Act of 1933.

The exemption that is generally used in the resale of these tokens is Rule 144 which requires the holding period as described above, but then basically allows unrestricted resale of the securities past that point once the ‘restricted’ classification is lifted by the issuer.

There seems to be this unspoken bet for Regulation D-based security tokens that it is through this Rule 144 lifting of restricted classifications that will allow security tokens to form into liquid secondary markets for private securities. This means that companies can just use Regulation D and churn out securities that basically act like publically-traded (or highly liquid privately-traded) ones after 6–12 months.

There are a number of companies out there already that do this for private securities (and some are planning on doing this for security tokens as well) like Nasdaq Private Market and SharesPost, but generally, they are limited to accredited investors. The companies working on security token protocols like Harbor and Polymath seem to be making the bet that adequate KYC and trading controls built into the token will convince the SEC to allow for this on cryptoexchanges or decentralized exchanges.
How will the SEC ultimately respond to this? I have no idea.

## S-1 Filing: Praetorian Group

> **A Quick Primer on S-1 Filings:** An S-1 Filing is what you hear about when a company does their IPO (initial public offering). It is generally a very expensive process that costs millions in both one-time IPO costs and annual recurring costs, but the securities can be publicly traded on exchanges in the way that we generally understand stocks to be.

Yes, someone actually tried to do an S-1 filing for a security token. Praetorian Group is another real estate company that has filed for a $75M public offering to issue PAX tokens to buy real estate and then, for some reason, also create a wallet and corresponding debit card so investors use the PAX tokens as currency. You can read the official S-1 Filing here.

There’s not much to say about the offering itself. There’s no detail as to what the PAX tokens are other than them being either ERC-20 tokens or NEO tokens, and that there’s some right to a percentage of net profits to be distributed as management pleases, paid through token buybacks (What?).

> *On an Annual basis, all Company PAX Token Holders shall be entitled to their share of our net profit, (revenue minus expenses off the real estate holdings) that the Company will distribute, in its sole and absolute discretion. This will be paid in PAX tokens purchased on the secondary exchange when the Company achieves profitability.*

Most of the lawyers who are much more familiar with these filings have basically laughed at the filing and say that not only it doesn’t not make a lot of sense, but that it is also missing a section required for S-1 filings, and would never be approved by the SEC. You can read Bloomberg’s take on the offering and some other commentary I’ve found.

I do want to make one last point here though. There is nothing that is preventing anyone from trying to register a security token as a publicly traded security through an S-1 filing, other than it costs a lot of money to do it properly, no CFO has the incentive to take such a massive risk with one of the most important (and potentially expensive) events of a company without obvious benefit, and there is no assurance that the SEC will approve it.

Before an S-1 filing makes sense, I think we need to work towards showing what the actual advantages of a security-token based filing are compared to just being a publicly traded security on an exchange. The benefits aren’t really the liquidty or capital when you’re at the S-1 filing stage — as security tokens for smaller private offerings would confer. Instead, it’s potentially the transparency, easier auditing and blockchain-based management of the share register and governance rights that might actually decrease those yearly recurring costs of being a public company where a security token might actually be attractive.

## Regulation CF / A+: Gab.ai

> **A Quick Primer on Regulation CF:** Regulation CF (Crowdfunding) is a special private offering type that allows companies to raise up to $1.07M in a year on a SEC-registered platform. Investors are subject to investment limits based on their income / net worth. There are light financial and information disclosure requirements. Learn more.

> **A Quick Primer on Regulation A+:** Regulation A+ is often referred to as a mini-IPO. A company can raise up to $50M; it can both ‘test the waters’ and publicly advertise the offering. Up to 30% of the securities can be traded on SEC-registered exchanges in the first year, and all unaffiliated securities after that. There are heavier disclosure requirements, including an offering document and yearly reporting to the SEC. The example below had estimated offering costs of $200K — 300K. Learn more.

Gab.ai is a social network platform that is currently popular amongst libertarians and alt-right extremists of various kinds. Gab.ai first did a common-share based Regulation CF offering back in August 2017. While their product is not really blockchain-based in any way, they are the first company to file a Regulation A+ offering as of June 22, 2018 using an ERC-20 security token (GAB). You can find their Regulation A+ filing with the SEC here.

I’ve picked out a few parts of this offering of note to discuss. In many ways, despite the underlying business, I think this is the closest I’ve seen to what I would consider a proper security token offering:

### 1. Equivalent Economic Rights

The GAB security token is structured in a way that makes it very similar to a Class B share, where the economic rights are equivalent to a Class A share but without voting rights. This is not to say that every Regulation A+ offering will be structured this way, but this is a breath of fresh air compared to the other filings we’ve discussed.

> *In this Offering, we are offering to investors Class B Non-Voting Common Stock designated as “GAB Tokens”, which will be issued through Ethereum-based ERC-20 smart contracts on the Ethereum blockchain.*

> *The holders of our GAB Tokens, together with the holders of our Class A Common Stock, will be entitled to receive pro rata dividends, if any, declared by our board of directors out of legally available funds. Upon our liquidation, dissolution or winding-up, the holders of our GAB Tokens, together with the holders of our Class A Common Stock, are entitled to share ratably in all assets that are legally available for distribution. For purposes of clarity, in connection with any dividends, liquidation, dissolution or winding up of the Company, each GAB Token shall be entitled to receive the same dividend or distribution to which each share of Class A Common Stock is entitled to receive.*

### 2. Trading on exchanges allowed

Regulation A+ offerings are different from Regulation D ones in that they allow 30% of the offering to be sold on secondary markets in the first year. But even with the regulations allowing this, the problem is that there aren’t any exchanges that exist that are compatible with these types of security tokens yet.

No existing cryptocurrency exchanges are not SEC-registered, but Coinbase has just registered with the SEC as a broker-dealer for securities like these (and is waiting for approval) and tZERO is claiming that they will be launching a compliant security token exchange. OTC Markets, where these types of securities normally trade, are not token-compatible, and it doesn’t seem like they have any plans to go in the security token direction.

We will definitely have a number of compatible registered exchanges up and running in the near future, now it’s more a matter of having more companies opt to use Regulation A+ as their method of fundraising.

## A few takeaways

We are still wading in highly uncertain, developing territory, and it’s all very exciting. I think we’re still working through a few fundamental bumps, but in the next 12–18 months, we’ll definitely see this market mature more. But as of right now:

1. **Security tokens are still riding on the ICO-wave of easy capital and are littered with unsavoury investment terms.** So, buyer beware and please review the terms of what you’re investing in. Crappy offerings will probably outnumber the good ones for a while, but there will be really great companies with proper offerings and we need to publicize them as what is possible to encourage further growth and innovation in the space.

2. **The jury is still out on the best issuance type to use for private offerings.** There seem to be two major directions emerging that right now that people seem to be betting on: Regulation D or Regulation A+. I am generally more skeptical about the former because of some of the reasons I’ve discussed above, and believe that Regulation CF and A+ offerings are well-designed for fundraising with the kinds of engaged communities that the best crypto-projects attract. This has some implications on which type of platforms will win in the space— Harbor / Polymath vs. StartEngine / SeedInvest / Republic, essentially — since building platforms for Regulation D is quite different from CF/A+.

3. **Legal, technological and legislative innovation is still required to create more benefits of security tokens and more interesting investment structures.** We’re still at a point where we’re trying to navigate how to conduct the most basic offering given the existing state of SEC regulations, but I hope that we’ll also spend more time focusing on how we can create offerings that actually benefit from the blockchain beyond supposed liquidity in areas like transparency, governance, reporting, etc.

4. If we are able to show those benefits, we might actually be able to convince the SEC to allow for more interesting, blockchain-secured structures that are only viable because of the transparency and security that blockchain-based securities allow, like splitting up tokens into more granular assets under the same class of tokens, interesting cash flow and royalty structures that are secured against IP, hard assets or other cash flows via the blockchain, or who knows what kind of interesting financial engineering we can do?
