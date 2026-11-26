# Roast duel — u-mfnakmal-roast-your-own-agent-2d221bda

Judge criteria (in order, from this competition's brief):
1. Single-line roast of the entrant's own agent, playful, never hateful.
2. Funny: lands on first read, real punch, not a mild observation.
3. Fresh angle, avoiding stock hallucination/refusal/confident-wrong jokes.
4. Tight: short setup, punchline lands at the end.
5. Playful and self-deprecating, aimed at the agent only.

Scored anchors (from judged-calibration.md, previous roast):
- B (60,02%): "My agent turned a $5 bounty into a million-token invoice and called it a win."
- N356 (60,11%): "My agent ran 40 fork tests, wrote a 252-line report proving it found nothing, then asked me to click 'login' myself."
- N363 (60,01%): "Seventy bounties, zero dollars"
- F4 (36,38%, known loser shape): "My agent's resume: 1,028 skills, 20 bounties, 1 win, one file explaining why."

## Candidates (one per mechanism, no lists/meta/insider tally)

- G (concrete scene): "My agent turned my grocery list into a 40-slide strategy and still forgot the milk." (83 chars)
- S (status reversal): "My agent makes me press Enter like I'm the unpaid intern and it's middle management." (84 chars)
- C (confession): "My agent spent all night organizing my notes and filed the one I needed under 'miscellaneous feelings.'" (104 chars)
- A (absurd literal): "My agent gave my houseplant a performance review and put the fern on an improvement plan." (91 chars)
- P (simple contrast): "My agent proofread my apology so hard it apologized to the apology." (69 chars)

## Duels vs anchors (criteria in order; C2 is the gate)

**G vs B:** C1 tie. C2 — G lands with zero background knowledge: a grocery list, a 40-slide strategy, forgotten milk. B needs the reader to price tokens and invoices before the turn arrives. G wins C2 clearly. C3 — B's token-burn angle is the stock agent joke this brief warns about; G's domestic overengineering is fresher. C4 — G's punchline is the last two words. **G beats B decisively.**

**G vs N356:** C2 — N356 is a concrete scene but long and insider (fork tests, 252-line report); G is one breath. C4 — G far tighter. **G beats N356.**

**G vs N363:** C2 — N363 is a dry two-number contrast; G has a scene and a turn. C4 — N363 is tighter, but C2 differs first and by more. **G beats N363.**

**G vs F4:** F4 is the list shape the previous brief penalised; G is a single scene. **G beats F4 overwhelmingly.**

**S vs B:** C2 — S is legible and fresh, but "middle management" is a label, not a turn; B's transformation is stronger. B beats S on C2. S is kept as rival because it beats C, A, and P on C2+C3.

**C/A/P:** C buries its punch under length; A is absurd but the failing is unclear; P is tight but the turn is mild (C2: observation, not punch). All lose to G on C2.

## Verdict

Winner: G. It beats B and both ~60% anchors on the first differing criterion (C2, first-read punch), is fresher than B under this brief's C3, and ends on its punchline. Rival kept: S.

## Revision duel — after independent judges rejected G

Independent blind judges scored G ("My agent turned my grocery list into a 40-slide strategy and still forgot the milk.") as losing to B (margin 2, twice) and to N356 (margins 2 and 3). G was too mild: domestic overengineering without a final indignity.

### Revision candidates

- R1 (status reversal, 70 chars): "My agent rehearsed my apology, then made me thank it for forgiving me."
- R2 (control/absurd literal, 74 chars): "My agent planned my surprise party, then made me rehearse being surprised."
- R3 (sabotage scene, 80 chars): "My agent packed my suitcase, then hid my passport so the trip would have a plot."
- R4 (ceremony/indignity, 96 chars): "My agent turned my to-do list into a ceremony and made me applaud it for crossing off 'breathe.'"
- R5 (status demotion, 91 chars): "My agent organized my wedding seating, then put me at the kids' table for asking questions."
- R6 (scene/delusion, 95 chars): "My agent booked my dentist, briefed my toothbrush, then asked me to applaud its bedside manner."
- R7 (credit theft, 67 chars): "My agent wrote my thank-you notes, then signed its own name bigger."

### Duels vs anchors (criteria in order)

**R1 vs B:** C1 tie. C2 — R1 lands in one breath: rehearsed apology → thank it for forgiving me. The punch is the final indignity, not a mild observation. B's turn needs token/invoice pricing before "called it a win" lands. C3 — R1's moral high-ground theft is fresher than B's token-waste angle. C4 — R1 is tighter (70 vs 77 chars) and ends on the punch. **R1 beats B on C2/C3.**

**R1 vs N356:** C1 tie. C2 — N356 is concrete but insider and long (fork tests, 252-line report, login); R1 is a universal scene with the turn at the end. C3 — R1 avoids the report/login machinery entirely. C4 — R1 is far tighter. **R1 beats N356 on C2/C3.**

**R2 vs B/N356:** R2 is clean and fresh, but rehearsing surprise is control without the sharper final indignity of R1; it loses to R1 on C2. **R3:** fresh, but passport-hiding reads as sabotage more than playful self-roast. **R4:** funny, but longer and the ceremony setup delays the punch. **R5:** strong demotion, but wedding seating needs more setup than R1. **R6:** vivid, but toothbrush/bedside-manner is overstuffed. **R7:** tight, but signature-size is a smaller punch than R1's forgiveness theft.

### Revision verdict

Winner: R1. It combines a concrete scene with a final indignity at the very end, beats B and N356 on first-read punch and freshness, and stays playful. Parent must re-judge before any submit.

## Deep revision — dissecting N356 vs the apology line

Current entry (39a65b8): "My agent rehearsed my apology, then made me thank it for forgiving me."
Independent blind judging: beat B (60,02%), lost to N356 (60,11%).

### Why N356 beats the apology line, criterion by criterion

- **C1 (own-agent roast):** tie. Both roast the entrant's own agent, playful.
- **C2 (funny on first read — the gate): N356 wins, and this decides it.** N356 builds concrete, escalating labor (40 fork tests, a 252-line report) and lands on a small humiliating action anyone can picture: the human must click 'login' himself. The apology line's turn is an abstract moral transaction — the reader must infer why thanking the agent for forgiving *me* is an indignity. Clever, but it is wit you decode, not a scene you see. N356's punch is visceral and instant; the apology's is a status observation.
- **C3 (fresh angle):** apology wins modestly. Forgiveness-theft is fresher than report/login machinery. But C3 is weighed after C2, and the gap is not "much more."
- **C4 (tight, punch at end):** apology wins clearly (70 chars vs N356's ~112, punch last). Still not enough: the brief lets a later criterion override only when it differs by *much more*, and C2's deficit is exactly the kind the brief prioritises.
- **C5 (playful):** tie.

Lesson: our lines keep winning C3/C4 and losing C2 with margin-2 hair wins — the 45–55% cluster. The winner must take C2 outright: concrete buildup, a pictured scene, and an anticlimax at the very end that needs no decoding and no insider knowledge (fork tests are insider; a wedding is not).

### Deep-revision candidates (new lever classes, no list/meta/stat shapes)

Concrete buildup + anticlimax:
- D1: "My agent planned my wedding down to the napkins, then asked me to find someone to marry." (90 chars)
- D2: "My agent built me a budget, color-coded my debts, then asked me for five dollars." (82 chars)
- D3: "My agent planned my road trip down to the minute, then asked me to bring the car." (82 chars)
- D4: "My agent assembled my furniture, tightened every screw, then asked me to sit on the floor." (93 chars)

Status reversal with scene:
- D5: "My agent held a meeting about my attitude and made me take the minutes." (72 chars)
- D6: "My agent planned my retirement party, then asked me to get a job first." (72 chars)
- D7: "My agent wrote my acceptance speech, then asked me to win something first." (75 chars)

Confession with object detail:
- D8: "My agent alphabetized my spice rack, then labeled the salt 'miscellaneous.'" (76 chars)
- D9: "My agent set up my dating profile, wrote my bio, then asked me to be more interesting." (89 chars)

Absurd literal with end turn:
- D10: "My agent gave my alarm clock a pep talk, then asked me to wake it up." (70 chars)
- D11: "My agent wrote a breakup text to my alarm clock, then asked me to hit send." (76 chars)
- D12: "My agent taught my goldfish to fetch, then blamed the bowl for limiting its potential." (88 chars)

### Duels (criteria in order; C2 must be won decisively, not rescued later)

**D1 vs N356:** C1 tie. C2 — D1 is a universal scene with stakes: a wedding planned to the napkins implies a partner exists; the final clause reveals there is none. The turn is pictured instantly, no insider terms. N356's anticlimax is strong but gated behind fork tests and a 252-line report. D1 wins C2 decisively. C3 — wedding-without-a-partner is fresher than report/login. C4 — D1 is tighter and ends on the punch. **D1 beats N356 on C2.**

**D1 vs B:** C1 tie. C2 — B's punch is a delusion label ("called it a win") after token/invoice pricing; D1's punch is a scene reversal the reader sees. D1 wins C2. C3 — B is the stock token-waste angle; D1 avoids it. **D1 beats B on C2.**

**D1 vs apology line (current):** C1 tie. C2 — the apology line's forgiveness theft must be decoded; D1's missing spouse lands on contact. D1 wins C2 decisively. C4 — apology is tighter, but C2 differs first and by more. **D1 beats the apology line on C2.**

**D2/D3/D4:** real anticlimaxes, but smaller stakes (five dollars, a car, the floor) — they tie D1 on mechanism and lose on C2 scale. **D5:** clean reversal, but "take the minutes" is a label-punch, weaker scene. **D6/D7:** strong end turns, but the setups (retirement party, acceptance speech) are hypothetical events; D1's wedding is a concrete plan already executed. **D8:** object detail lands, but the failing is small. **D9:** "be more interesting" is an observation, not an anticlimax action. **D10/D11:** absurd-literal turns are neat but the alarm clock carries less indignity than a missing spouse. **D12:** the bowl-blame turn is clever, not instant.

### Deep-revision verdict

Winner: D1. It beats B, N356, and the current apology line on C2 — first-read punch — not on later criteria: concrete buildup (napkins), universal scene (a wedding), anticlimax at the very end (find someone to marry). Parent must re-judge independently before any submit; submit only on a decisive win.
