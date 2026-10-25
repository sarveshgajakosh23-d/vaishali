# Portfolio Website Template - Dreamy Scrapbook Artist & Illustrator Portfolio

Dreamy mauve/dusty-rose scrapbook portfolio for a fine artist and illustrator (Emily Carter) with a scrolling marquee of disciplines (Fine Art, Illustration, Graphic Design, Photography), a moody portrait hero with a 'meet the ARTIST' headline, big star shapes, film grain and sticker labels. Includes an About My Work collage, an interactive word-search grid that jumps to sections, a Style moodboard, Visuals photography, an Art Gallery, a Behind the Scenes process section with studio notes, a services list and a Thank You contact footer. Fully phone responsive.

> Generated from this template's own files. Read THIS instead of exploring the tree — it already says where everything is.

## Where the copy lives

This template has **no content module** — the copy is inline in the section components below. Read the sections you will rewrite in **one parallel batch** (several `Read` calls in the same turn cost one round trip), then edit them. Do not read them one per turn, and skip any section the brief does not change.

## Imagery — 16 file(s) shipped

### Photos of a person — ASK before you do anything with these

These show the template's sample model, not the user. "Reuse the imagery" does NOT apply to a face: a portfolio or personal brand site showing someone else is the one place silent reuse fails them. Ask **once** (AskUser) whether to:

1. use their own photo — they can attach it in the chat (recommended)
2. generate a portrait for them
3. keep the template's photo

Do not silently keep someone else's face, and do not silently generate one.

- `public/img/hero.jpg`
- `public/img/photobooth-strip.jpg`

### All other imagery

These ARE the design the user picked. **Reuse them.** Generating a replacement set is the most expensive thing in this workflow and makes the result look nothing like the preview they chose. Generate at most 2, only when the brief names a subject the existing art plainly cannot show, and keep the filename.

Never `Read` an image: it returns base64 and tells you nothing the filename does not.

| file | bytes |
| --- | ---: |
| `public/favicon.svg` | 239 |
| `public/img/gallery-1.jpg` | 220,790 |
| `public/img/gallery-2.jpg` | 158,847 |
| `public/img/gallery-3.jpg` | 109,138 |
| `public/img/gallery-4.jpg` | 128,680 |
| `public/img/gallery-5.jpg` | 246,426 |
| `public/img/hero.jpg` | 297,389 |
| `public/img/photobooth-strip.jpg` | 194,703 |
| `public/img/process-1.jpg` | 87,085 |
| `public/img/process-2.jpg` | 252,925 |
| `public/img/style-collage.jpg` | 301,714 |
| `public/img/visuals-1.jpg` | 134,363 |
| `public/img/visuals-2.jpg` | 199,518 |
| `public/img/visuals-3.jpg` | 75,498 |
| `public/img/visuals-4.jpg` | 249,480 |
| `public/og-image.jpg` | 106,536 |

## Sections (10)

Open only what you change.

- `src/components/MagneticButton.tsx` (1,175 B)
- `src/components/Star.tsx` (408 B)
- `src/sections/About.tsx` (3,202 B)
- `src/sections/FindYourWay.tsx` (2,484 B)
- `src/sections/Gallery.tsx` (1,809 B)
- `src/sections/Hero.tsx` (5,414 B)
- `src/sections/Process.tsx` (2,307 B)
- `src/sections/Style.tsx` (1,186 B)
- `src/sections/ThankYou.tsx` (3,577 B)
- `src/sections/Visuals.tsx` (1,734 B)

## Placeholder brand: "Emily Carter" — 15 occurrence(s) in 4 file(s)

It is hardcoded outside the content module too, in several spellings:

- `Emily Carter` ×11
- `emilycarter` ×4

Replace **every spelling in ONE command** (fill each `<…>`; order matters — longest first), then confirm with the grep, which must print nothing:

```
grep -rlE 'Emily Carter|emilycarter' src index.html | xargs sed -i -e 's/Emily Carter/<Full Name>/g' -e 's/emilycarter/<fullname, lowercase, no spaces>/g'
grep -rniE 'emily|carter' src index.html
```

Never replace it occurrence by occurrence, or one spelling per turn — that is a tool call each.

- `index.html` ×6
- `src/sections/ThankYou.tsx` ×5
- `src/sections/Hero.tsx` ×2
- `src/sections/About.tsx` ×2

## How to edit

- **One change per file per turn.** Rewrite a section with ONE Edit covering all its copy, or `Write` the whole file — these are small.
- Several Edits to the **same** file in one turn conflict: the first lands, the rest fail as "modified since last read" and must be retried.
- Editing **different** files in parallel is fine, and the fast way.

## Keep

- The palette, type scale, spacing and layout — that is what was chosen.
- The shipped imagery and its framing.

## Replace

- Every visible string: names, headings, body copy, stats, contact details.
- The placeholder brand this template was built around — a site still carrying it has failed.
- `index.html` title/description and `public/og-image.*` so the page does not advertise the template's own subject.
