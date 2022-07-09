export const getParenRouter = (router) => {
  // console.log(router)
  return router.filter((item) => {
    return item.children && item.children.length > 0
  })
}
function isNull(data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
export const getMenus = (routes) => {
  const result = []
  routes.forEach((item) => {
    // eslint-disable-next-line
    if (isNull(item.meta) && isNull(item.children)) return
    // if (isNull(item.meta) && !isNull(item.children)) {
    //   result.push(...getMenus(item.children))
    //   return
    // }
    let router = result.find((val) => {
      return val.path === item.path
    })
    if (!router) {
      router = {
        ...item,
        children: []
      }
      // console.log(router)
      if (item.meta.title && item.meta.icon) {
        result.push(router)
      }
    }
    if (item.children) {
      router.children.push(...getMenus(item.children))
    }
  })
  // console.log(result)
  return result
}
