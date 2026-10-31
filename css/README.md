Below is a guide explaining what each part does and how to edit it.

1. Colors (Lines 1–3)

Change all main website colors here.

Variable

What it controls

--bg

Main website background

--card

Background of cards and boxes

--line

Borders and dividers

--p

Main color (buttons, highlights)

--p2

Darker version of the main color

--acc

Accent color (rewards and highlights)

--acc2

Darker accent color

--ok

Correct answers and success messages

--bad

Wrong answers and error messages

--mut

Secondary text

--s

Lesson path scaling

Example:

Change --bg to change the overall background.

Change --p to change the main purple color.

Change --acc to change the yellow accent color.

2. General Settings (Lines 4–6)

* – Basic sizing settings for all elements.

html, body – Main font, text color, background and font size.

button – Default button behavior.

.m – Appearance of mathematical expressions.

To change the general font size, edit 17px inside html,body.

3. Navigation Bar (Lines 7–9)

#top – Top navigation bar.

#top .logo – StudyBH logo.

.pill – XP, streak and sound buttons.

You can change the bar's background, spacing, borders and logo size.

4. Website Layout (Lines 10–13)

.shell – Main website layout and width.

#side – Statistics sidebar.

@media(min-width:900px) – Desktop layout.

@media(max-width:600px) – Mobile layout.

Change these settings to adjust how the website looks on different screen sizes.

5. Homepage (Lines 14–20)

.sc – Statistics cards.

.goal – Progress bar.

.hero – Welcome banner.

.hero .face – Dolphin emoji.

.hero .t1 – Welcome heading.

.lab – Section headings.

.grid – Subject card arrangement.

.card – Individual subject cards.

.card:hover – Hover effect.

.card.on – Available subject card.

.tag – "قريبًا" label.

6. Buttons (Lines 21–25)

.btn – Main buttons.

.btn:active – Button when pressed.

.btn.gold – Yellow buttons.

.btn.off – Disabled buttons.

.back – Back buttons.

Change padding, font size, colors and border radius to customize buttons.

7. Units and Lessons (Lines 26–36)

.unit – Unit heading.

.u0 – First unit color.

.u1 – Second unit color.

.u2 – Third unit color.

.path – Lesson path layout.

.node – Circular lesson buttons.

.node:hover – Hover effect.

.node.done – Completed lessons.

.node.lock – Locked lessons.

.node.test – Unit assessment buttons.

.node .lbl – Lesson names.

.node.go – Available lesson animation.

8. Lesson Screens (Lines 37–52)

.ov – Full-screen lesson and quiz screens.

.dim – Background behind popups.

.sheet – Lesson introduction popup.

.bar – Top bar inside lessons.

.x – Close button.

.prog – Quiz progress bar.

.body – Main lesson content area.

.ttl – Titles and headings.

.box – Explanation boxes.

.row – Horizontal content rows.

.chip – Colored symbol boxes.

details.ex – Expandable examples.

9. Tables (Lines 53–55)

table – Table appearance.

th – Table headers.

td – Table cells.

10. Quiz Design (Lines 56–64)

.foot – Bottom quiz panel.

.foot.good – Correct-answer feedback.

.foot.bad – Wrong-answer feedback.

.foot .msg – Feedback heading.

.opt – Answer options.

.opt:hover – Hovered answer.

.opt.sel – Selected answer.

.opt.right – Correct answer.

.opt.wrong – Incorrect answer.

11. Animations (Lines 65–73)

.shake – Incorrect-answer shake effect.

@keyframes sh – Shake animation.

@keyframes pop – Pop animation.

.combo – Consecutive correct-answer indicator.

.center – Centered completion screen.

.stats – XP and streak statistics.

.cf – Celebration confetti.

@keyframes fall – Falling confetti animation.

prefers-reduced-motion – Reduces animations for users who prefer less motion.

12. Notifications (Final Lines)

#toast – Small notification messages appearing at the bottom of the screen.
