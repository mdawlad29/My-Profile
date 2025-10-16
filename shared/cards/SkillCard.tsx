export const SkillCard = ({
  title,
  lineColor,
  bulletColor,
}: {
  title: string;
  lineColor?: string;
  bulletColor?: string;
}) => {
  return (
    <div className="group/skill relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10">
      <div className="mb-3 flex items-center gap-3">
        <div className={`h-3 w-3 rounded-full ${bulletColor} shadow-lg`} />
        <div className={`h-px flex-grow ${lineColor}`} />
      </div>

      <h3 className="font-medium text-white transition-colors duration-300 group-hover/skill:text-blue-300">
        {title}
      </h3>

      <div
        className={`absolute -bottom-2 -right-2 h-8 w-8 rounded-full ${bulletColor} opacity-0 blur-md transition-opacity duration-300 group-hover/skill:opacity-20`}
      />
      <div className="absolute inset-0 rounded-xl border border-white/0 transition-all duration-300 group-hover/skill:border-white/30" />
    </div>
  );
};
