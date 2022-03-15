export function filterClassNames(cs: unknown[]): string {
  return cs.filter(filterClassName).map(String).join(' ')
}

function filterClassName(className: unknown): boolean {
  return !!className
}

export async function blobTo64(blob: Blob) {
  const reader = new FileReader();
  await new Promise((resolve, reject) => {
    reader.onload = resolve;
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  return reader.result as string
}
