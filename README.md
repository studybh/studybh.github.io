<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>StudyBH – Study help for grades 10–12</title>
<style>
  :root {
    --ink: #17233f;
    --paper: #f5f7fa;
    --line: #d5dbe6;
    --red: #ce1126;
    --ok: #1d7a4a;
  }
  @media (prefers-color-scheme: dark) {
    :root { --ink: #e8ecf5; --paper: #121a2e; --line: #2d3a58; --ok: #4cc58a; }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; background: var(--paper); color: var(--ink);
    font: 17px/1.6 system-ui, -apple-system, "Segoe UI", sans-serif;
  }
  main { max-width: 760px; margin: 0 auto; padding: 56px 22px 80px; }
  h1 {
    font: 700 clamp(2.6rem, 8vw, 4.2rem)/1.05 Georgia, "Times New Roman", serif;
    margin: 0 0 14px; letter-spacing: -0.02em;
  }
  h1 span { border-bottom: 6px solid var(--red); }
  h2 { font: 700 1.5rem/1.2 Georgia, serif; margin: 52px 0 16px; }
  p.lead { font-size: 1.2rem; max-width: 34em; margin: 0; }
  ul.subjects { list-style: none; padding: 0; margin: 0; display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; }
  ul.subjects a {
    display: block; padding: 16px 18px; border: 1px solid var(--line);
    border-radius: 6px; color: inherit; text-decoration: none; font-weight: 600;
  }
  ul.subjects a:hover, ul.subjects a:focus-visible { border-color: var(--red); outline: none; }
  ul.subjects small { display: block; font-weight: 400; opacity: .7; }
  .quiz { border: 1px solid var(--line); border-radius: 6px; padding: 22px; }
  .quiz p { margin: 0 0 14px; font-weight: 600; }
  .quiz button {
    display: block; width: 100%; text-align: left; margin: 0 0 8px; padding: 12px 14px;
    font: inherit; color: inherit; background: transparent;
    border: 1px solid var(--line); border-radius: 6px; cursor: pointer;
  }
  .quiz button:hover:not(:disabled) { border-color: var(--red); }
  .quiz button:focus-visible { outline: 2px solid var(--red); outline-offset: 2px; }
  .quiz button.right { border-color: var(--ok); }
  .quiz button.wrong { border-color: var(--red); }
  #feedback { min-height: 1.6em; margin: 10px 0 0; font-weight: 600; }
  footer { margin-top: 64px; font-size: .9rem; opacity: .7; }
</style>
</head>
<body>
<main>
  <h1>Study<span>BH</span></h1>
  <p class="lead">Clear, free study notes for students in grades 10 to 12, written by students.</p>

  <h2>Pick a subject</h2>
  <ul class="subjects">
    <li><a href="#"><small>Grade 10–12</small>Mathematics</a></li>
    <li><a href="#"><small>Grade 10–12</small>Physics</a></li>
    <li><a href="#"><small>Grade 10–12</small>Chemistry</a></li>
    <li><a href="#"><small>Grade 10–12</small>Biology</a></li>
    <li><a href="#"><small>Grade 10–12</small>English</a></li>
    <li><a href="#"><small>Grade 10–12</small>Arabic</a></li>
  </ul>

  <h2>Try a question</h2>
  <div class="quiz">
    <p>What is the derivative of x²?</p>
    <button type="button" data-correct="false">x</button>
    <button type="button" data-correct="true">2x</button>
    <button type="button" data-correct="false">x³/3</button>
    <p id="feedback" role="status"></p>
  </div>

  <footer>Made by the StudyBH team. This is a test page, so replace the links and text with your own lessons.</footer>
</main>

<script>
  const buttons = document.querySelectorAll('.quiz button');
  const feedback = document.getElementById('feedback');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const correct = btn.dataset.correct === 'true';
      buttons.forEach(function (b) {
        b.disabled = true;
        if (b.dataset.correct === 'true') b.classList.add('right');
      });
      if (!correct) btn.classList.add('wrong');
      feedback.textContent = correct
        ? 'Correct. The power rule gives 2x.'
        : 'Not quite. The power rule gives 2x.';
    });
  });
</script>
</body>
</html>
