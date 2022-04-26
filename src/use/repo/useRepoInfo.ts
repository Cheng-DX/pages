import type { CloneInfo } from './types'

export async function useCloneInfo(repo: string, token: string) {
  const baseURL = 'https://api.github.com/repos/Cheng-DX/'
  const cloneURL = `${baseURL}${repo}/traffic/clones`
  const tokenHeader = {
    name: 'Authorization',
    value: `token ${token}`,
  }
  const res = await fetch(cloneURL, {
    headers: {
      [tokenHeader.name]: tokenHeader.value,
    },
  })
  return await res.json() as CloneInfo
}

