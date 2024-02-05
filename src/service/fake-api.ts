export async function delayOneSecond() {
  return new Promise((resolve) => setTimeout(() => resolve({}), 1000));
}
