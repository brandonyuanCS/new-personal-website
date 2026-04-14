import { FooterClock } from "@/components/FooterClock";
import { getCollegeStationWeather } from "@/lib/open-meteo";
import { cn } from "@/lib/utils";

export async function Footer() {
  const weather = await getCollegeStationWeather();

  return (
    <footer
      className={cn(
        "shrink-0 border-t border-zinc-200 dark:border-zinc-800",
        "text-xs text-zinc-500 dark:text-zinc-400",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-lg items-center justify-between gap-4 px-6 py-4",
          "min-w-0",
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span>college station, tx</span>
          <span className="text-zinc-300 dark:text-zinc-800">·</span>
          <FooterClock />
          {weather ? (
            <>
              <span className="text-zinc-300 dark:text-zinc-800">·</span>
              <span>
                {Math.round(weather.tempF)}°F, {weather.label}
              </span>
            </>
          ) : null}
        </div>
        <div className="shrink-0 tabular-nums">© 2026 brandon yuan</div>
      </div>
    </footer>
  );
}
