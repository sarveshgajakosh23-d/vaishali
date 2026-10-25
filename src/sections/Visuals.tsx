import { Tilt } from "../components/Tilt";

const projects = [
  { title: "PPEVision", sub: "AI Worker Safety & PPE Compliance Detection", tech: ["Python", "YOLO11s", "PyTorch", "OpenCV", "FastAPI", "React", "Tailwind"],
    body: "Trained YOLO11s on the Construction-PPE dataset (1,416 images, 11 classes) to detect helmets, vests, gloves, boots, goggles and violations, reaching 80.3% precision, 45.5% recall and 52.0% mAP@50. A FastAPI API and React dashboard show boxes, confidence and SAFE / VIOLATION status.",
    href: "https://github.com/111-Vaishali/PPEVision" },
  { title: "Greenery Detection", sub: "Computer Vision & ML Pipeline", tech: ["Python", "OpenCV", "Scikit-learn", "KNN", "SVM"],
    body: "An OpenCV pipeline using HSV colour thresholding to quantify vegetation coverage in location-based images. KNN and SVM classifiers were compared with Stratified K-Fold Cross Validation to categorise greenery levels.", href: "" },
  { title: "WhatsApp Chat Analyzer", sub: "Flask web app", tech: ["Python", "Flask", "Pandas", "Matplotlib", "Seaborn"],
    body: "Parses exported WhatsApp chats with Pandas and shows user-wise activity, timelines, emoji statistics and word clouds. Deployed on Render.", href: "" },
];

export function Visuals() {
  return (
    <section id="projects" className="relative bg-(--color-canvas) px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal max-w-lg">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-(--color-ink) sm:text-5xl">
            projects.<br />models.<br /><span className="text-(--color-accent-deep)">things that run.</span>
          </h2>
        </div>
        <div className="reveal relative mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <Tilt key={p.title} className={`flex flex-col rounded-sm bg-(--color-surface) p-6 shadow-lg ${i === 1 ? "md:rotate-1" : i === 0 ? "md:-rotate-1" : ""}`}>
              <span data-stagger className="h-3 w-3 rounded-full bg-(--color-accent-deep)" />
              <h3 data-stagger className="mt-3 font-display text-2xl font-extrabold text-(--color-ink)">{p.title}</h3>
              <p className="font-body text-sm font-medium text-(--color-accent)">{p.sub}</p>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-(--color-ink)/80">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (<span key={t} className="pop rounded-full bg-(--color-accent-soft) px-2.5 py-1 font-body text-xs text-(--color-accent-deep)">{t}</span>))}
              </div>
              {p.href && (<a href={p.href} target="_blank" rel="noreferrer" className="link-underline btn-glow mt-5 inline-block self-start rounded-full bg-(--color-accent) px-5 py-2 font-body text-sm text-(--color-canvas)">View code &rarr;</a>)}
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
