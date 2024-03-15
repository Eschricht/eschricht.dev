export default defineEventHandler((event) => {
  // Add the Accept-CH header to responses to tell browsers we accept these client hints
  event.res.setHeader('Accept-CH', 'Sec-CH-Prefers-Color-Scheme')
})
