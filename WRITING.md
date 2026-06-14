# Writing Contract — Report Kit

> Governs the **prose** in every report. Companion to `BRAND.md` (which governs
> the visuals). When writing or editing report copy, follow this. Distilled from
> the canon — Minto, Strunk & White, Zinsser, Williams, GOV.UK, Microsoft,
> Cochrane (see Provenance) — and tuned to the house voice already in
> `reports/`.

## The one rule

**Lead with the answer.** State the result, then support it. The reader should
get the takeaway from the first sentence of any section — body text only earns
its place by backing that takeaway up. Analysis is built bottom-up; writing is
delivered top-down.

> ✓ "The harness found a 19% cheaper model on GSM8K — a pretrained swap, not our
> own distillation."
> ✗ "We built a two-tier harness and ran a series of experiments. This report
> describes the setup and, eventually, the results."

---

## 1. Structure — answer first

- **Open with the governing thought.** The lead (and every section's first
  sentence) states the conclusion, not the preamble. If a reader read only the
  opening sentences, they should still get the story.
- **Headings state the takeaway, not the topic** ("action titles"). A reader
  should be able to skim only the `<h2>`s and follow the argument.
  > ✓ "Pretrained distills beat home-grown distillation"   ✗ "Distillation results"
  > ✓ "Deeper training breaks the buffer"   ✗ "V4 experiment"
- **One idea per paragraph**, and put that idea in the first sentence. If a
  paragraph needs two topic sentences, it's two paragraphs.
- **Put the takeaway above each figure/table** — tell the reader what to see
  before showing it. (Also in `BRAND.md`.)
- **State limitations crisply, once, near the end.** A tight bulleted list beats
  caveats sprinkled through the argument.

## 2. Voice — confident, direct, first person

- **First person is the house voice.** "I ran a multi-seed study…" is correct —
  don't launder it into "An experiment was conducted." First person *is* active
  voice; keep it.
- **Active voice; start sentences with the actor or the verb.** Cut `there is` /
  `there are` / `you can` openings.
  > ✓ "Contamination collapses diversity by 90%."   ✗ "There is a 90% collapse in
  > diversity that is caused by contamination."
- **Make definite assertions.** Reserve `may / might / could / should` for
  genuine uncertainty. If every sentence admits a doubt, the writing loses
  authority. Hedge the *claim's confidence honestly* — never hedge to sound
  cautious or to dodge committing.
- **Specific, concrete, definite over vague and abstract.** Name the thing, give
  the number, cite the mechanism.
  > ✓ "Standard-text log-prob rose from −5.73 to −5.04."   ✗ "Performance on
  > ordinary text generally improved somewhat."
- **The split that resolves the apparent contradiction:** be *confident in the
  prose*, *precise about uncertainty in the numbers*. Rhetorical confidence
  (assert the finding plainly) and statistical honesty (report the interval, the
  seed count, the n) operate on different layers and never conflict.

## 3. Concision — omit needless words

- **Every word tells.** A sentence has no unnecessary words; a paragraph no
  unnecessary sentences. Treat a first draft as ~2× too long and cut toward half
  (a Zinsser editing heuristic, not a hard target).
- **Kill nominalizations ("zombie nouns").** Put the action in a verb and the
  actor in the subject.
  > ✓ "They lacked evidence."   ✗ "There was a lack of evidentiary support."
  > ✓ "Contamination narrows the distribution."   ✗ "The occurrence of distributional
  > narrowing is attributable to contamination."
- **Swap inflated words for plain ones:**
  | bloated | plain |
  |---|---|
  | utilize, leverage | use |
  | in order to / for the purpose of | to |
  | due to the fact that / owing to the fact that | because / since |
  | the fact that | *(cut — rewrite the sentence)* |
  | facilitate | ease, help |
  | a number of / numerous | many *(or say how many)* |
  | in the event that | if |
  | at this point in time | now |
  | is able to / has the ability to | can |
- **Cut throat-clearing.** Delete announcement clauses and just say the thing.
  > ✗ "It is important to note that…", "It is interesting that…", "We can see
  > that…", "It should be pointed out that…" → *(delete; state the point directly)*
- **Cut weakeners.** `very, really, quite, fairly, somewhat, a bit, sort of, in a
  sense, basically, actually` rarely survive a re-read.
- **Sentences over ~25 words: check whether to split.** A soft threshold, not a
  cap — but long sentences usually hide two ideas.

## 4. Numbers — lead with magnitude, no false precision

- **Lead with magnitude and direction.** Put the effect size first; the
  apparatus second.
  > ✓ "Cost fell 19% ($0.072 → $0.058/Mtok)."   ✗ "There was a statistically
  > meaningful difference in cost between conditions."
- **Give absolute *and* relative change.** A bare relative number misleads.
  > ✓ "−19% ($0.072 → $0.058/Mtok)"   ✗ "19% cheaper" *(alone)*
- **Round to meaningful precision.** No false precision: `0.7523 → 0.75`,
  `−2.165 nat → −2.17 nat`. Carry only the digits the measurement supports.
- **Tie every number to a claim.** Don't dump statistics; each figure should do
  rhetorical work. If a number isn't load-bearing, cut it (see `BRAND.md` — no
  filler stat rows).
- **Report the effect even when it's noisy**, and report the uncertainty with
  it — seed count, n, interval. Don't collapse results into a binary
  "significant / not significant."
- **Absence of evidence ≠ evidence of absence.** Wide error bars or a null result
  at n=1 mean *"unknown,"* not *"no effect."* Say which.
  > ✓ "At n=1 per condition this is directional only; the gen-2 recovery may be
  > noise."   ✗ "Compounding had no effect."

## 5. Anti-patterns — the cut list

Re-read and delete on sight:

- **Buried lede** — the result shows up in paragraph three.
- **Throat-clearing** — "It is important to note that…", "In this report we…".
- **Qualifier stacking** — "it seems that this might possibly suggest…".
- **Passive evasion** — "mistakes were made," "it was observed that."
- **Jargon / buzzwords** where a plain word works; undefined acronyms on first use.
- **Vague abstraction** — "performance," "impact," "significant" with no number.
- **Naked relative numbers** — "30% better" with no baseline or absolute.
- **False precision** — six decimal places on a noisy metric.
- **Over-hedging** — caveating a claim you actually have the evidence for.
- **False balance** — "on one hand / on the other" when the evidence isn't even.

---

## The test (run before publishing)

Read only the title, the lead, and the first sentence of each section. If that
chain alone conveys the finding and its support, the structure is right. If it
doesn't, the takeaways are buried — fix the openers, not the body.

## Provenance

Compiled from a verified multi-source research pass (25/25 rules confirmed
against primary sources): Minto, *The Pyramid Principle* (answer-first, top-down,
grouping); Strunk & White, *The Elements of Style* (Rules 14–17: active voice,
definite assertions, specific/concrete, omit needless words); Zinsser, *On
Writing Well* (clutter, the 50% cut, word swaps); Williams, *Style: Lessons in
Clarity and Grace* (nominalizations, characters-as-subjects); GOV.UK content
style guide and the Microsoft Writing Style Guide (front-loading, active voice,
sentence length); Cochrane Handbook ch.15 and Cummins & Marks 2020 (effect sizes,
absolute + relative, no significance-thresholding). Where the canon diverges —
Strunk & White's "be definite" vs. Cochrane's "report the uncertainty" — the rule
is: **confident in voice, honest about uncertainty in numbers.**
