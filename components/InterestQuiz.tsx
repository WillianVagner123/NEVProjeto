"use client";

import { useMemo, useState } from "react";

const questions = [
  { label: "Qual seu perfil?", options: ["Estudante", "Profissional de saúde", "Pesquisador(a)", "Instituição"] },
  { label: "Qual tema mais te interessa?", options: ["NutEV", "GLP-1", "Obesidade", "Bariátrica", "Extensão"] },
  { label: "Como quer participar?", options: ["Eventos", "Liga", "Pesquisa", "Parceria", "Conteúdo"] },
];

export function InterestQuiz() {
  const [answers, setAnswers] = useState<string[]>([]);
  const step = answers.length;
  const result = useMemo(() => {
    if (answers.length < questions.length) return null;
    if (answers.includes("Pesquisa")) return "Trilha recomendada: Grupo de Pesquisa + Biblioteca científica.";
    if (answers.includes("Liga")) return "Trilha recomendada: Liga Acadêmica + eventos + clube do artigo.";
    if (answers.includes("Parceria")) return "Trilha recomendada: Contato institucional + projetos colaborativos.";
    return "Trilha recomendada: Eventos + conteúdos científicos + lista de interesse.";
  }, [answers]);

  return (
    <div className="card p-8">
      <div className="eyebrow">Diagnóstico rápido</div>
      <h3 className="mt-5 font-display text-4xl font-semibold text-petroleum dark:text-sand">Qual trilha combina com você?</h3>
      {!result ? (
        <div className="mt-7">
          <p className="font-bold text-petroleum dark:text-sand">{questions[step].label}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {questions[step].options.map((option) => (
              <button key={option} onClick={() => setAnswers([...answers, option])} className="rounded-full border border-petroleum/10 bg-sand px-4 py-2 text-sm font-bold text-petroleum transition hover:bg-petroleum hover:text-white dark:border-white/10 dark:bg-white/10 dark:text-sand">
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-7 rounded-3xl bg-sand p-6 dark:bg-white/10">
          <p className="text-lg font-bold text-petroleum dark:text-sand">{result}</p>
          <button onClick={() => setAnswers([])} className="mt-4 text-sm font-bold text-gold">Refazer diagnóstico</button>
        </div>
      )}
      <div className="mt-6 h-2 overflow-hidden rounded-full bg-sand dark:bg-white/10">
        <div className="h-full bg-gradient-to-r from-petroleum to-gold transition-all" style={{ width: `${(answers.length / questions.length) * 100}%` }} />
      </div>
    </div>
  );
}
