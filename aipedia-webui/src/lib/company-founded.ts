/** Display founding year with age, e.g. `2015 (11 years ago)`. */
export function formatFounded(year: number | null | undefined): string {
  if (year == null) return '—'
  const age = new Date().getFullYear() - year
  const unit = age === 1 ? 'year' : 'years'
  return `${year} (${age} ${unit} ago)`
}
