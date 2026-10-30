const flags: Record<string, string> = {
  China: '/flags/cn.svg',
  France: '/flags/fr.svg',
  'Hong Kong': '/flags/hk.svg',
  India: '/flags/in.svg',
  'South Korea': '/flags/kr.svg',
  'United Kingdom': '/flags/gb.svg',
  'United States': '/flags/us.svg',
}

export function countryFlagSrc(country: string): string | null {
  const trimmed = country.trim()
  if (!trimmed || trimmed === '—') return null
  return flags[trimmed] ?? null
}
