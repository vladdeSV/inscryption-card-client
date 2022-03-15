export function filterClassNames(cs: unknown[]): string {
  return cs.filter(filterClassName).map(String).join(' ')
}

function filterClassName(className: unknown): boolean {
  return !!className
}
