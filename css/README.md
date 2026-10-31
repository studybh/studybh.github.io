# 🎨 StudyBH – CSS Guide

Welcome to the design section!

The `style.css` file controls how StudyBH looks. You can use it to change colors, fonts, buttons, cards, spacing and more.

Here's where to find everything.

---

## 🌈 1. Website Colors
**Lines 1–3**

Want to change the website's colors? Start here!

| Code | What it changes |
|---|---|
| `--bg` | 🌑 Main background |
| `--card` | 🃏 Cards and boxes |
| `--line` | ➖ Borders and lines |
| `--p` | 🟣 Main purple |
| `--p2` | Darker purple |
| `--acc` | 🟡 Yellow accent |
| `--acc2` | Darker yellow |
| `--ok` | 🟢 Correct answers |
| `--bad` | 🔴 Wrong answers |
| `--mut` | Secondary text |
| `--s` | Lesson path scaling |

**Example:** Change `--bg` to change the background of the website.

---

## 🔤 2. Fonts & General Settings
**Lines 4–6**

Controls:
- Website font and text color.
- General font sizes.
- Default button settings.
- Mathematical expressions.

Want to make the website text bigger? Look for `font-size`.

---

## 🧭 3. Navigation Bar
**Lines 7–9**

Controls the top part of the website:
- `#top` – Top navigation bar.
- `#top .logo` – StudyBH logo.
- `.pill` – XP, streak and sound indicators.

---

## 📐 4. Website Layout
**Lines 10–13**

Controls how the website is arranged.

- `.shell` – Main layout.
- `#side` – Sidebar.
- Desktop settings – Screens wider than 900px.
- Mobile settings – Screens narrower than 600px.

---

## 🏠 5. Homepage & Subject Cards
**Lines 14–20**

Controls the homepage design.

- `.hero` – Welcome section.
- `.hero .face` – Dolphin emoji.
- `.hero .t1` – Welcome heading.
- `.sc` – Statistics cards.
- `.goal` – Progress bar.
- `.grid` – Subject card arrangement.
- `.card` – Individual subject cards.
- `.tag` – "قريبًا" labels.

---

## 🔘 6. Buttons
**Lines 21–25**

Want to change how buttons look?

- `.btn` – Main buttons.
- `.btn:active` – When a button is pressed.
- `.btn.gold` – Yellow buttons.
- `.btn.off` – Disabled buttons.
- `.back` – Back buttons.

You can change their colors, size, spacing and shape.

---

## 📚 7. Units & Lesson Map
**Lines 26–36**

Controls the lesson selection screen.

- `.unit` – Unit headings.
- `.u0`, `.u1`, `.u2` – Unit colors.
- `.path` – Lesson path.
- `.node` – Circular lesson buttons.
- `.node.done` – Completed lessons.
- `.node.lock` – Locked lessons.
- `.node.test` – Unit tests.
- `.node .lbl` – Lesson names.

---

## 📖 8. Lessons & Popups
**Lines 37–52**

Controls what students see when they open a lesson.

- `.ov` – Full-screen lesson window.
- `.dim` – Dark background behind popups.
- `.sheet` – Lesson popup.
- `.bar` – Top bar.
- `.x` – Close button.
- `.prog` – Progress bar.
- `.body` – Lesson content.
- `.ttl` – Titles.
- `.box` – Explanation boxes.
- `.row` – Horizontal rows.
- `.chip` – Small colored boxes.
- `details.ex` – Expandable examples.

---

## 📊 9. Tables
**Lines 53–55**

Controls tables inside lessons.

- `table` – Whole table.
- `th` – Table headings.
- `td` – Table cells.

---

## 📝 10. Quizzes & Answers
**Lines 56–64**

Controls the quiz experience.

- `.foot` – Feedback area.
- `.foot.good` – Correct answer feedback.
- `.foot.bad` – Wrong answer feedback.
- `.opt` – Answer choices.
- `.opt.sel` – Selected answer.
- `.opt.right` – Correct choice.
- `.opt.wrong` – Incorrect choice.

---

## ✨ 11. Animations & Effects
**Lines 65–73**

Controls the little animations that make StudyBH interactive.

- `.shake` – Shake effect.
- `@keyframes sh` – Shake animation.
- `@keyframes pop` – Pop animation.
- `.combo` – Consecutive correct answers.
- `.center` – Centered content.
- `.stats` – Statistics.
- `.cf` – Confetti.
- `@keyframes fall` – Falling confetti.

---

## 🔔 12. Notifications
**Final lines**

- `#toast` – Small messages that appear at the bottom of the screen.

---

## 💡 Before You Edit

A few things to remember:

1. **Find anything quickly:** Press `Ctrl + F` and search for its name.
2. **Change colors:** Start with the variables in section 1.
3. **Keep things organized:** Add new CSS to the correct section.
4. **Test your changes:** Check both mobile and desktop screens.
5. **Be careful:** CSS changes appearance, not website functionality.

**Have fun designing StudyBH! 🚀**
