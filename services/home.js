import { http } from '@/utils/http.js'

/**
 * @param distributionSite 
 */
export function loginApi(data){
  return http({
    method: 'POST',
    url: '/remoteUnderwriting/login/loginApp',
    data:data
  })
}


