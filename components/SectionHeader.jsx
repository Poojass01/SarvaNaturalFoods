export default function SectionHeader({ subtitle, title, description, centered = true }) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-6 md:mb-10 relative`}>
      {subtitle && (
       <div className="flex items-center justify-center gap-2 sm:gap-4 mb-5 animate-fade-in-up">
       <div className="w-6 sm:w-10 h-[1px] bg-[#e6b34a] hidden sm:block"></div>
     
       <svg
         className="w-3 h-3 sm:w-4 sm:h-4 text-[#e08a00]"
         viewBox="0 0 24 24"
         fill="currentColor"
       >
         <circle cx="12" cy="12" r="4"/>
       </svg>
     
       <span className="text-xs sm:text-sm font-semibold text-[#b66903] uppercase tracking-[0.2em] sm:tracking-[0.35em]">
         {subtitle}
       </span>
     
       <svg
         className="w-3 h-3 sm:w-4 sm:h-4 text-[#e08a00]"
         viewBox="0 0 24 24"
         fill="currentColor"
       >
         <circle cx="12" cy="12" r="4"/>
       </svg>
     
       <div className="w-6 sm:w-10 h-[1px] bg-[#e6b34a] hidden sm:block"></div>
     </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1b08] mb-4 animate-fade-in-up font-display">
        {title}
      </h2>
      {description && (
        <p className="text-[#5f4521] text-base sm:text-lg max-w-4xl mx-auto leading-relaxed animate-fade-in-up px-2 sm:px-0">
          {description}
        </p>
      )}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#f2b705] via-[#f4b124] to-[#ffd166] rounded-full mt-6"></div>
    </div>
  )
}