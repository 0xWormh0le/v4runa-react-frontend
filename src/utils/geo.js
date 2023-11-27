export const getBoundsForMarkers = (markers = []) => {
  const sw = { lng: 179, lat: 89 }
  const ne = { lng: -179, lat: -89 }
  const bound = markers.reduce(
    ({ sw, ne }, alert) => {
      const lng = alert.longitude
      const lat = alert.latitude
      return {
        sw: { lng: Math.min(sw.lng, lng), lat: Math.min(sw.lat, lat) },
        ne: { lng: Math.max(ne.lng, lng), lat: Math.max(ne.lat, lat) }
      }
    },
    { sw, ne }
  )

  if (Math.abs(bound.sw.lng - bound.ne.lng) < 0.1 &&
      Math.abs(bound.sw.lat - bound.ne.lat) < 0.1) {
    return {
      sw: { lng: bound.sw.lng - 0.1, lat: bound.sw.lat - 0.1 },
      ne: { lng: bound.sw.lng + 0.1, lat: bound.sw.lat + 0.1 }
    }
  }

  return bound
}
