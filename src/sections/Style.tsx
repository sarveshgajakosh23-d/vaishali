const groups = [
  ["ML & Computer Vision", ["Supervised Learning", "Classification", "Regression", "Clustering", "Object Detection (YOLO)", "Computer Vision", "Model Evaluation (Precision, Recall, mAP)"]],
  ["Languages", ["Python", "SQL", "C++", "JavaScript", "TypeScript"]],
  ["Libraries", ["NumPy", "Pandas", "Scikit-learn", "PyTorch (Ultralytics)", "OpenCV", "Matplotlib", "Seaborn", "TensorFlow (learning)"]],
  ["Backend & Databases", ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "JWT Auth"]],
  ["Frontend", ["React.js", "Vite", "Tailwind CSS", "HTML/CSS"]],
  ["Tools", ["Git", "GitHub", "Vercel", "Render", "VS Code", "Jupyter Notebook"]],
  ["CS Fundamentals", ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems"]],
] as const;

export function Style() {
  return (
    <section id="skills" className="relative bg-(--color-canvas) px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="reveal flex flex-col items-center text-center">
          <span className="stamp-rotate font-display text-6xl font-extrabold text-(--color-ink) sm:text-8xl">&ldquo;skills&rdquo;</span>
        </div>
        <div className="reveal mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map(([title, items], i) => (
            <div key={title} data-stagger className={`rounded-sm border border-(--c-border) bg-(--color-surface) p-6 shadow-lg ${i % 2 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"}`}>
              <h3 className="font-display text-xl font-extrabold text-(--color-accent-deep)">{title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((t) => (<span key={t} className="pop rounded-full bg-(--color-accent-soft) px-3 py-1 font-body text-sm text-(--color-accent-deep)">{t}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
