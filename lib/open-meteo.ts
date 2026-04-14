import { collegeStationCoords, collegeStationTimezone } from "@/lib/college-station";

export type CollegeStationWeather = {
  tempF: number;
  label: string;
};

type OpenMeteoCurrent = {
  temperature_2m?: number;
  weather_code?: number;
};

type OpenMeteoResponse = {
  current?: OpenMeteoCurrent;
};

function weatherCodeLabel(code: number): string {
  if (code === 0) return "clear";
  if (code <= 3) return "clouds";
  if (code <= 48) return "fog";
  if (code <= 57) return "drizzle";
  if (code <= 67) return "rain";
  if (code <= 77) return "snow";
  if (code <= 82) return "showers";
  if (code <= 86) return "snow showers";
  if (code <= 99) return "storms";
  return "—";
}

export async function getCollegeStationWeather(): Promise<CollegeStationWeather | null> {
  const params = new URLSearchParams({
    latitude: String(collegeStationCoords.latitude),
    longitude: String(collegeStationCoords.longitude),
    current: "temperature_2m,weather_code",
    temperature_unit: "fahrenheit",
    timezone: collegeStationTimezone,
  });

  const url = `https://api.open-meteo.com/v1/forecast?${params.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 600 } });
    if (!res.ok) return null;

    const data = (await res.json()) as OpenMeteoResponse;
    const temp = data.current?.temperature_2m;
    const code = data.current?.weather_code;

    if (typeof temp !== "number" || typeof code !== "number") return null;

    return { tempF: temp, label: weatherCodeLabel(code) };
  } catch {
    return null;
  }
}
