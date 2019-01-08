
//根据用户信息,返回将要跳转的地址
export function getRedirectPath({type,avatar}){
  let url = (type==='boss') ? '/boss' : '/genius'
  if(!avatar){
    url += 'info'
  }
  return url
}

export function getChatId(userId,targetId){
  return [userId,targetId].sort().join('_')
}

// export const MengFei = 'haha/'
// export const MengFei = ''