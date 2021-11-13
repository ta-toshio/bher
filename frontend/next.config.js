// import {
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_PRODUCTION_BUILD,
// } from 'next/constants'

module.exports = () => {
  const isDev = process.env.APP_ENV === 'dev'
  // when `next build` or `npm run build` is used
  const isProd = process.env.APP_ENV === 'prod'
  // when `next build` or `npm run build` is used
  const isStaging = process.env.APP_ENV === 'staging'

  return {
    env: {
      API_URI: (() => {
        if (isDev) return 'http://localhost:8400/query'
        if (isStaging) return 'http://localhost:8400/query'
        if (isProd) return 'http://localhost:8400/query'
        throw new Error("define API_URL, something went wrong")
      })(),
    },
  }
}
