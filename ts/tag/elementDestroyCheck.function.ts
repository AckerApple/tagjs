export function elementDestroyCheck<T>(
  nextSibling: Element & {ondestroy?: (event: Event) => T},
  stagger: number,
): T | undefined {
  const onDestroyDoubleWrap = nextSibling.ondestroy
  const onDestroyWrap = (onDestroyDoubleWrap as any).tagFunction
  if(!onDestroyWrap) {
    return
  }

  const onDestroy = onDestroyWrap.tagFunction

  const event = {
    target: nextSibling,
    stagger
  } as unknown as Event
  return onDestroy(event)
}
