import axios from 'axios'
import qs from 'qs'

const baseURL1 = '/'
// // const baseURL2 = '/'

// export const loading = {
//   start: () => {
//     let htmlLevel1 = '<div id="loadingContainer" class="loadingContainer" style="width: 100%;height: 100%;position: fixed;background: #E0E0E0;bottom: 0;text-align: center;opacity: 0.5;z-index:100">'
//     let hmtlLevel2 = '<img src=' + loadingImg + ' class="loadingImg" style="display: inline-block;width: 40px; height: 40px;position: absolute;top: 50%; left: 50%; margin-top: -20px; margin-left: -20px;"></div>'
//     if ($('#loadingContainer')) {
//       $('#loadingContainer').remove()
//       $('body').append(htmlLevel1 + hmtlLevel2)
//     }
//   },
//   end: () => {
//     if ($('#loadingContainer')) {
//       $('#loadingContainer').remove()
//     }
//     // setTimeout(() => {
//     //   if ($('#loadingContainer')) {
//     //     console.log('移除dom')
//     //     $('#loadingContainer').remove()
//     //   }
//     // }, 1)
//   },
//   timeout: (msg = '请求超时') => {
//     $('#timeout').remove()
//     let htmlLevel1 = `<div id="timeout" style="position: absolute;top: 1.96rem;line-height: 0.37rem;z-index: 20;display: flex;justify-content: center;width: 100%;">
//                         <span style="font-size: 0.16rem;color: #FFFFFF;letter-spacing: 0;background: rgba(0, 0, 0, 0.6);border-radius: 0.05rem;padding:0 0.1rem;">${msg}</span>
//                       </div>`
//     $('body').append(htmlLevel1)
//     setTimeout(() => {
//       $('#timeout').remove()
//     }, 1500)
//   }
// }

export default function ajax (url, options) {
  let baseURL = baseURL1
  let urlArr = url.split('%')
  console.log(url)
  console.log(urlArr)
  if (urlArr.length > 1) {
    let urlRes = urlArr.map((item, index, arr) => {
      return index % 2 === 0 ? (item = options[item] || '') : item
    })
    url = urlRes.join('')
  }
  let method = options.method || 'GET'
  let headers = {
    'Content-type': options.contentType === 'json' ? 'application/json' : 'application/x-www-form-urlencoded',
    'X-Session-Mode': 'header',
    'X-Session-Id': sessionStorage.getItem('X-Session-Id') || null,
    'Authorization': 'Bearer ' + sessionStorage.getItem('Authorization') || null
  }
  let data = options.data
  let params = qs.stringify(options.data)
  let ajaxObj = {
    baseURL,
    url,
    method,
    headers,
    timeout: 100000,
    data,
    params
  }
  console.log(ajaxObj)
  // return axios(ajaxObj).then(res)
  return new Promise((resolve, reject) => {
    axios(ajaxObj).then(res => {
      resolve(res.data)
    })
  })
}
