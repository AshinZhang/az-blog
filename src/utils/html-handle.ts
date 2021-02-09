type A = (html: string, para?: number) => string

export const getPartOfArticle: A = (html, para = 3) => {
  if (!html) {
    return ''
  }
  const re = RegExp('<.*>.*</.*>', 'g')
  let index = 0
  let count = 0
  let arr: RegExpExecArray
  while (arr = re.exec(html)) {
    if (count > para) {
      break
    }
    count += 1
    index = arr.index
  }
  return html.slice(0, index)
}
