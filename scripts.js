(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});


  const ludvika_Bounds = {
    north: 60.177859,
    south: 60.102313,
    west: 15.137800,
    east: 15.250177,
  };
  

  let map;

  async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
  
    map = new Map(document.getElementById("map"), {
      center: { lat: 60.14207561930419, lng: 15.186557925242006 },
      restriction: {
        latLngBounds: ludvika_Bounds,
        strictBounds: false,
      },
  
      zoom: 16,
      mapTypeId: 'satellite'
    });
    map.data.loadGeoJson(
        "https://raw.githubusercontent.com/TuNeLA/Grass/main/map.geojson",
      );
    // Set the global styles.
    map.data.setStyle({
    fillColor: 'green',
    strokeWeight: 3
     });
  
  // Set the fill color to red when the feature is clicked.
  // Stroke weight remains 3.
  map.data.addListener('click', function(event) {
        map.data.overrideStyle(event.feature, {fillColor: 'red'});
  });
  map.data.addListener('mouseover', function(event) {
        console.log(event.feature.getProperty('time'));
  });
    
    
  }

  
  window.initMap = initMap;
  
  initMap();