module.exports = {
  title: 'Vue2 Google Maps plugin',
  description: 'Documentation for vue2-google-maps plugin',
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {text: 'vue2-google-maps', link: '/'},
      {text: 'code examples', link: '/examples/'},
    ],
    sidebar: {
      '/examples/': [
        ['', 'Using a CDN'],
        ['basic-autocomplete', 'Autocomplete basic'],
        ['autocomplete', 'Autocomplete'],
        ['kml-layer', 'Kml layer'],
        ['map-functions', 'Map functions'],
        ['marker', 'Marker'],
        ['basic-marker-cluster', 'Marker cluster'],
        ['basic-marker-shape', 'Marker shape'],
        ['place-input', 'Place input'],
        ['place-default', 'Place default']
      ],
      '/': [
        ['', 'Getting started']
      ],
    }
  },
}