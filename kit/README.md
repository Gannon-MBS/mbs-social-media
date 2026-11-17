# MBS render kit

Renders MBS Marketing Dashboard posts to images and animated videos.

    node render.js post.json out/mbs-topic            # out/mbs-topic.png
    node render.js post.json out/mbs-topic --video    # out/mbs-topic.mp4 + .png (7.5 s, 1080x1080, H.264)

`post.json` is the dashboard's `post` object (layout, eyebrow, headline, accent, points, ...).
`cards.js` and `anim.css` are the same templates the dashboard uses; keep them in sync.
Needs Node with Playwright, and ffmpeg.
