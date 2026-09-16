---
title: "Email deliverability and open rates: the complete guide"
topics: ["Email deliverability", "Cold email"]
description: "A complete guide to email deliverability and open rate: the provider rules now enforced, and the setup, data, and sending discipline behind them."
summary: "Email deliverability and high open rates are key to all email outreach and how it impacts campaign performance. Consider the following: any email that is not delivered into the inbox of the intended recipient will not be opened. Stronger even, the snippet of it will not be seen by the intended recipient. Effectively, those prospects are not part of the overall potential of the campaign."
publishedAt: 2026-04-14
coverImage: "https://assets.hubsell.com/insights/69cf990b35eec14d10440055_Everything-you-need-to-know-about-email-deliverability-and-open-rate.avif"
thumbnail: "https://assets.hubsell.com/insights/69cf9905afc275d6602621f8_Thumbnail-Everything-you-need-to-know-about-email-deliverability-and-open-rate.avif"
featured: true
sources: "<p>Featured image licensed under Unsplash License:</p><p><a href=\"https://unsplash.com/photos/black-laptop-computer-3Mhgvrk4tjM\" target=\"_blank\" rel=\"noopener\">https://unsplash.com/photos/black-laptop-computer-3Mhgvrk4tjM</a></p><p></p>"
draft: false
readTime: "18 min read"
author: "karan"
coAuthors: ["sebastian", "guido"]
---

<p>This is a long one. The contents list on the right jumps you to any section, so read it end to end or pick out what matters to you.</p>
<p>Before we start, a few words on why deliverability and open rate are the foundation of all email outreach. Any email that is not delivered into the inbox of the intended recipient will not be opened. Stronger still, even the subject line snippet will never be seen. Those prospects are effectively not part of the campaign at all.</p>

<h2>What email deliverability is</h2>
<p>Email deliverability is whether a sent email reaches the recipient's inbox, not just their mail server. The difference between delivery and deliverability matters. You may see a high delivery rate while your mail is quietly landing in spam, promotions, or junk. Inbox placement is what drives open rate, and open rate is what drives everything after it.</p>

<h2>The case for open rate</h2>
<p>Say you target 1000 prospects and your open rate is 30 percent, close to the industry average. Only 300 people read your content. The other 700 remain oblivious to who you are and what you do. Since only those 300 saw the message, every reply you get comes from that group.</p>
<p>Say 15 of them reply positively. Against the full list that is a prospect to positive reply rate of 1.5 percent. Expressed against opens, it is 5 percent.</p>
<p>Now make a set of improvements and push the open rate to 55 percent, near the middle of the 40 to 70 percent range. Assuming you did not use clickbait to get there, the open to positive reply rate holds at 5 percent, which gives you about 27 positive replies instead of 15. The open to positive reply rate did not move. Your prospect to positive reply rate nearly doubled.</p>
<p>Open rate is the first measure of success to keep in check, as long as you are not treating it as a vanity metric. Do not settle for 30 percent when 40 to 70 percent is common once the fundamentals are right.</p>

<h2>The case for high deliverability</h2>
<p>You may want 100 percent deliverability, but that is not realistic. Some causes are outside your control, such as a full mailbox or strict inbound security. Many are not, and those are the subject of this post.</p>
<p>Take the same 1000 prospects at a 30 percent open rate. That assumes perfect deliverability. Suppose instead you deliver 80 percent, with the other 20 percent going to spam, being blocked, or hitting invalid addresses. Actual opens become 800 x 0.3 = 240, and at the same 5 percent open to positive reply rate you get 12 positive replies instead of 15.</p>
<p>The gap looks small in one campaign. Multiply it across months and across every rep on the team and the lost revenue is significant, all from avoidable causes.</p>

<h2>The rules you have to meet now</h2>
<p>Since this was first written, the major providers turned deliverability from a best practice into a hard requirement. If you send to Gmail, Yahoo, or Outlook addresses, you now need to:</p>
<ul>
<li>Authenticate with SPF and DKIM, and publish a DMARC record, with your From domain aligned to one of them.</li>
<li>Offer one-click unsubscribe on marketing email and honour it within two days.</li>
<li>Keep your spam complaint rate under 0.3 percent, with under 0.1 percent as the real target. You can watch it in Google Postmaster Tools and Yahoo Sender Hub.</li>
</ul>
<p>These apply in full above 5000 emails a day to consumer inboxes, and the authentication parts are worth doing at any volume. Non-compliant mail is now rejected outright rather than filtered to spam. Everything below still applies. This is the floor you clear before any of it matters.</p>

<h2>Technical setup</h2>
<p>To protect recipients from spam, fraud, and spoofing, email authentication became critical to both security and deliverability. The recipient's mail server checks every incoming message against a range of factors to determine your sending reputation.</p>
<p><strong>SPF (Sender Policy Framework)</strong> defines which servers may send email using your domain. Without it, anyone can send mail using your domain in the From address. SPF is a DNS record listing authorised servers, which lets the recipient's server confirm the message came from an approved source.</p>
<p><strong>DKIM (DomainKeys Identified Mail)</strong> lets the receiver validate that a message really came from the domain owner and was not altered in transit. Two keys are created: a private key on your server, and a public key published on DNS. You sign outgoing mail with the private key, and the recipient's server validates it against the public one.</p>
<p><strong>DMARC</strong> ties the two together and tells receiving servers what to do when a message fails. Without all three, your mail is far more likely to be flagged or refused.</p>

<h2>Data quality</h2>
<p>Data is central to outbound, and the data you use directly influences both deliverability and open rate.</p>
<p><strong>Relevance.</strong> Targeting the right people at the right companies means correctly identifying your ideal customer profile. Sending a proposal to people with no need for your product is a reliable way to get marked as spam. Relevant data keeps open rates up and gives you something real to personalise with.</p>
<p><strong>Accuracy.</strong> Once the list is relevant, make sure it is correct and current. Validate addresses before any campaign starts. Sending to invalid addresses damages your domain reputation and your deliverability with it.</p>

<h2>Sender reputation</h2>
<p>Sender reputation is a score from 0 to 100 that an internet service provider assigns to your sending. The higher it is, the more likely your mail reaches the inbox. A low score sends you to spam or gets you rejected outright.</p>
<p><strong>Engagement.</strong> Opens and replies signal to the ISP that people want your mail, which strengthens your reputation. Poor data or irrelevant content does the opposite quickly.</p>
<p>Here are the campaign numbers we consider healthy:</p>
<ul>
<li><strong>Open rate.</strong> Between 40 and 70 percent. Below that is abnormal and should be fixed. Above is welcome but usually an outlier.</li>
<li><strong>Bounce rate.</strong> Under 5 percent. Anything higher is a bad sign and should be fixed immediately.</li>
<li><strong>Reply rate.</strong> Between 15 and 30 percent of emails sent, with positive replies between 0 and 7 percent.</li>
<li><strong>Reply to demo.</strong> One demo scheduled for every five non-negative replies.</li>
<li><strong>Demo to close.</strong> One deal for every four to six demos. Some industries convert lower.</li>
</ul>
<p><strong>Spam complaints.</strong> There are two kinds. An external complaint is someone manually marking your email as spam. An internal complaint is someone unsubscribing and selecting spam as the reason, which alerts the sender without the email provider counting it against you.</p>
<p><strong>Spam traps.</strong> ISPs run addresses that are either newly created or abandoned and taken over specifically to catch spammers. Sending to one signals that you are likely spamming and can get you blacklisted. Poor quality data is how these end up on your list without you knowing.</p>
<p><strong>Blacklists.</strong> A blacklist is a list of IP addresses, domains, and servers identified as sending spam. Landing on one means your mail hits junk or is not delivered at all. You do not have to be sending spam to get listed. You only have to look like it. Common triggers include a sudden spike in sending volume, no unsubscribe option, and a high bounce rate, which suggests a bought list.</p>

<h2>Bounce rate</h2>
<p>There are two kinds of bounce, and the difference matters.</p>
<p><strong>Soft bounces</strong> happen for reasons other than a wrong address: a domain rating too low, a full inbox, a rigid DMARC policy, or a server that auto-rejects or forwards on certain conditions. Less damaging than a hard bounce, but not harmless. Every bounce shrinks the reachable size of your list. Email 100 people, have 5 bounce, and your campaign's potential just dropped by 5 percent.</p>
<p><strong>Hard bounces</strong> are sends to wrong or non-existent addresses. They damage your domain health and the spam rating of everything you send afterwards. Mail 100 prospects with 15 wrong addresses and you lose 15 percent of your potential, plus your provider concludes your data quality is poor and removes points from your domain rating. Sustain a high bounce rate and the damage compounds.</p>
<p><strong>Bounce management.</strong> Three things to remember:</p>
<ul>
<li>Ask your data provider for their expected bounce rate. In hubsell's case it is under 5 percent. If a provider's number is too high, consider another one.</li>
<li>Monitor campaigns and pause if you pass 10 percent.</li>
<li>Make sure bounces are recorded correctly. Sending a follow-up to a bounced address is as damaging as the first send, and entirely avoidable.</li>
</ul>

<h2>The sender's email address</h2>
<p>There are three common setups, and they are not equivalent.</p>
<p><strong>Third-party servers</strong> are useful for newsletters, mass mailings, and e-commerce drip campaigns. They have limited value in cold outreach, for a simple reason: cold outreach needs to be, or at least appear to be, one to one. A mass mailer cannot do that. When you send through a third-party server, the message headers show it was mailed and signed by another domain, and the receiving server rates it lower than mail sent directly from your mailbox. A lower rating means a lower inbox rate.</p>
<p><strong>Aliases</strong> are addresses that share another mailbox rather than existing as separate users. Recipient servers do not treat them as full mailboxes. Less damaging than a third-party server, still worse than your primary mailbox.</p>
<p><strong>Your primary mailbox</strong> has two advantages. It has a longer history than an alias created for outreach, and it has real incoming mail from colleagues, prospects, and customers, so the traffic looks like a working mailbox rather than a sending machine.</p>

<h2>The recipient's email address</h2>
<p>There are three types you can target, and only one of them is a good idea.</p>
<p><strong>Role-based addresses</strong> like marketing@ or info@ are often managed by several people. If you are targeting a specific decision maker and someone else reads it, your personalisation does not fit. They also raise your soft bounce risk, and they carry the most noise because they are the easiest addresses to find.</p>
<p><strong>Private addresses</strong> on Gmail, Yahoo, or similar are worse. Recipients feel intruded upon, the content is not relevant to them personally, and under GDPR it is not legal in every EU country. People checking personal mail are also not in a work frame of mind, which cuts both ways but rarely in your favour.</p>
<p><strong>Direct corporate addresses</strong> are what we recommend to every customer. They are the most productive of the three and carry none of the problems above.</p>

<h2>Subject lines</h2>
<p>Say in a few words what your email says in a hundred, and do not bait anyone. You can do everything else right, with good data, clean authentication, and your own mailbox, and still undo it with a bad subject line.</p>
<p>Your goal is to get the target to open the email without tricking them into it. Clickbait inflates open rate without adding any value to those opens. Your open to positive reply rate falls and your unsubscribe and spam reporting rate rises. A good subject line earns the open against everything else in the inbox.</p>
<p>What to keep in mind:</p>
<ul>
<li>Around 60 characters. Most clients show 40 to 70 on desktop and tablet, and 30 to 60 on phones.</li>
<li>On desktop the character limit includes the start of your email body, so a 10-character subject means the first 30 to 60 characters of your body show in the preview. On phones the subject and body sit on separate rows, so subject length does not eat into the body preview.</li>
<li>No capitals, no exclamation marks, no more than one question mark.</li>
<li>Avoid spam words such as free, money, risk free, or apply now. The list is long and often contextual.</li>
<li>No numbers or symbols like #1.</li>
<li>Never fake a "FWD:" prefix to look like mail from someone they know.</li>
</ul>
<p>Things we are on the fence about, which we do not use but some customers do with mixed results: ellipses, capitalising every word, and generic short subjects like "quick question" or "feedback".</p>
<p>Two checks when writing one. First, does the subject line indicate what the email is about, consistently? If not, you are drifting into clickbait. It sounds simple and it is not, because compressing 100 words into 10 is hard. Second, check the length, and remember that a short subject pulls the opening of your body into the preview.</p>
<p><strong>Static versus dynamic subject lines.</strong> Personalisation in subject lines is usually limited to static placeholders such as first name, last name, and company name. At hubsell we use what we call dynamic placeholders, which apply if-this-then-that logic to personalise far more deeply.</p>
<p>A static example looks like this:</p>
<blockquote><p>{{firstName}}, quick question about {{companyName}}</p></blockquote>
<p>A dynamic one adjusts itself based on a property of the recipient. Using department as the condition, one subject line produces four variants:</p>
<ul>
<li>{{firstName}}, {{companyName}} // intro regarding <strong>roi</strong> driven sales</li>
<li>{{firstName}}, {{companyName}} // intro regarding <strong>data</strong> driven sales</li>
<li>{{firstName}}, {{companyName}} // intro regarding <strong>conversion</strong> driven sales</li>
<li>{{firstName}}, {{companyName}} // intro regarding <strong>process</strong> driven sales</li>
</ul>
<p>The difference here is one word, chosen because the department is the thing that changes what kind of sales process the reader cares about. You are not limited to one word.</p>

<h2>Message copy</h2>
<p>They opened the email. You have about 100 words to earn the reply.</p>
<p>A few basics before drafting:</p>
<ul>
<li>An opened email that goes unanswered did not deliver the result. The open is a step, not the finish.</li>
<li>Your message must not deviate from the subject line, or it reads as clickbait.</li>
<li>Avoid spam-associated words, same as in the subject line.</li>
<li>Personalise where you can, with a focus on giving the reader something of value: an insight, a useful resource, even humour.</li>
<li>Hypothesise what the message will cause and why. You do not have to be right. You need a structured approach so that what happens is measurable rather than random.</li>
</ul>
<p><strong>What the message is for.</strong> Too many sales developers try to move too fast. The single biggest mistake in cold outreach is trying to sell the product in the message. The message is not a selling channel. It is the opening of an early-stage dialogue.</p>
<p>When you try to close a deal, or even generate a qualified opportunity, off the back of a cold email, you are asking the prospect to do all the work. Make it easy instead. Ask only what is needed to move things forward, and give them only what they need to decide.</p>
<p><strong>Why buyers will not convert just because you contacted them.</strong> To experienced salespeople this is obvious, and plenty of marketers still try the opposite:</p>
<ul>
<li>There is a lot of money at stake.</li>
<li>Buying decisions affect other people, more so at higher ticket sizes.</li>
<li>Contracts are often long term, so buyers think carefully before committing.</li>
<li>Products have become complicated and need explaining.</li>
<li>Buyers second-guess themselves, and tend to decide badly when they have only seen a vendor's online presence and never spoken to a person.</li>
</ul>
<p>Trying to close a deal through outreach is a sub-par tactic in B2B. Starting a dialogue with an interested prospect is the best use of it. The result you want sits somewhere between marketing qualified and sales qualified.</p>
<p><strong>Static versus dynamic copy.</strong> Static variables such as first name, company name, or website each replace roughly one word. Ten static variables change about ten words in your message.</p>
<p>A dynamic variable changes whole phrases or sentences on if-this-then-that logic. Use department as the condition and you can show a completely different sentence to each department. That is roughly 10 to 15 words per placeholder, which is an order of magnitude more customisation than static placeholders give you.</p>
<p><strong>Why dynamic content performs better.</strong> It reads as manually written. Where one static message differs from another by about 5 percent, dynamically written messages differ by around 90 percent. All else equal, a more differentiated message gets a more favourable rating from email providers.</p>

<h2>Click tracking</h2>
<p>Tracking links tells you about prospects who are interested but not replying. It can also hurt your deliverability if you do it the usual way.</p>
<p><strong>The conventional method</strong> replaces your link with the tracking service's link, then redirects. The prospect may not notice, but redirected links look exactly like spam: links that do not go where they claim. Providers filter mail containing them, and in cold outreach it breaks the impression of a one-to-one email.</p>
<p>You can check this yourself by hovering a link and comparing the URL in the status bar against the link in the body.</p>
<p><strong>Branded links</strong> are the better approach. At hubsell we use a unique ID to track the click while sending the prospect straight to the destination. The receiving server sees a direct link from the sender rather than third-party tracking, which builds trust and makes an unsubscribe less likely.</p>

<h2>Sending schedule</h2>
<p>Once data and content are in shape, execution decides the result.</p>
<p><strong>How most people do it.</strong> Build a list, write one subject line and one template, send hundreds or thousands at once. Spray and pray is sub-par, and a lot can go wrong in ways that hurt you later.</p>
<p><strong>A better way.</strong> There is no single correct method, because it depends on industry, geography, and seniority. The principle we follow is to look like a person sending normal email. A human sends somewhere between 25 and 150 a day, and not on a fixed rhythm. The gap between the first and second email is not the same as between the second and third.</p>
<p>We built our software to vary the wait between sends for exactly this reason. Randomised intervals give you a much better chance of reaching the inbox without harming your domain.</p>

<h2>Sending volume</h2>
<p>Aim for 25 to 150 emails per day per mailbox. The point is to send like a person rather than a machine. You send less, but far more of it arrives, so conversions go up.</p>
<p><strong>How to scale anyway.</strong> The obvious question is whether 150 a day is the ceiling. Per mailbox, yes. To scale, add mailboxes. Ten mailboxes at 150 a day is 1500 sends without the volume signature that gets a domain flagged.</p>
<p>The rule of thumb is to send as many emails a day as you can without hurting conversions or domain health. As a principle we favour high conversion from low volume over low conversion from high volume. Volume is worthless if the addresses are bad, which is why we verify every prospecting address before it is used.</p>

<h2>Target market</h2>
<p>Here is a factor you cannot change much but should account for when planning. Different markets behave differently, and that explains a lot of the variance in results across industries and countries.</p>
<p><strong>Saturation.</strong> Some markets are more mature than others, and tactics that stopped working in one place still work elsewhere. A technique often starts in the US and reaches Europe later, so the same approach can keep working for years after it died at home. Less saturated markets mean higher open rates and more calls booked. The trade-off is translation and possibly hiring for that market.</p>
<p><strong>Time zones.</strong> Selling across a one to three hour gap is fine. Selling from Europe into Asia or the US is harder. As long as the working days overlap somewhere you can make it work, but some business models cannot, which rules out parts of the world.</p>
<p><strong>Country law.</strong> GDPR adherence matters, and the rules are not uniform. Germany is strict enough that cold email without prior consent is effectively not permitted. The UK is more liberal. Understand the rules where you are selling before you start.</p>
<p><strong>What this does to conversion.</strong> Your German conversion rate may be well below your UK one, because in Germany you often need to make contact through social first before you can legally email. That is another step for you and another point of resistance for the prospect.</p>

<h2>Multichannel</h2>
<p>Your prospects get a lot of email. Between other salespeople and their own colleagues, getting an email opened is a fight for attention. Other channels help.</p>
<p>People have preferred channels: email, phone, LinkedIn. A prospect who does not open or reply is not necessarily uninterested. A LinkedIn message or a call pointing them back to your email is often enough to restart the conversation there.</p>
<p>Used together, the channels reinforce one message rather than diluting it.</p>

<h2>Personalisation</h2>
<p>Automation does not have to mean robotic. Too much outbound is obviously templated, and mass-blast email only makes future inbox placement harder.</p>
<p>Personalisation shows the prospect the email was meant for them. Include something specific enough that it could not have been sent to anyone else and people tend to reciprocate by actually reading it.</p>
<p>A few things worth using:</p>
<ul>
<li><strong>Published content.</strong> People are proud of what they make. Check their LinkedIn for posts or articles and reference something you actually found useful.</li>
<li><strong>Personal detail.</strong> Many people write a considered bio. A specific phrase or achievement from it gets attention.</li>
<li><strong>Company news.</strong> If nothing personal turns up, look at their site: recent posts, case studies, funding, new hires.</li>
</ul>
<p>The research is manual, but the sending does not have to be.</p>

<h2>The takeaway</h2>
<p>Deliverability is the foundation everything else sits on. Get authentication, data, reputation, and sending discipline right and your open and reply rates follow. The providers now enforce the basics, so the cost of ignoring them is no longer a lower open rate. It is mail that never arrives.</p>
<p>At hubsell, prospecting data is verified at the point of use and outreach is sent in a way that protects your domain, so deliverability is handled for you rather than left to chance.</p>
