<script>
    import * as L from 'https://cdn.skypack.dev/leaflet';

    export let map;
    export let lat = 0;
    export let long = 0;
    export let button = true;
    const defaultMapZoom = 13;

    export function setMapCenter(center) {
        map.flyTo(center, defaultMapZoom)
    }

    function useCurrentLoacation() {
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            setMapCenter([lat, long])
        })
    }

    function createMap(container) {
        let m = L.map(container)
        m.setView([lat, long], 13);
        L.tileLayer(
            'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
            {
                attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
            &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
                subdomains: 'abcd',
                maxZoom: 20,
            }
        ).addTo(m);
        return m;
    }

    function mapAction(container) {
        map = createMap(container);
        return {
            destroy: () => {
                map.remove();
            },
        };
    }

</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.skypack.dev/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""/>
</svelte:head>

{#if button === true}
    <button on:click={useCurrentLoacation}>
        <strong>
            My Location
        </strong>
    </button>
{/if}

<div style="height:400px;width:100%" use:mapAction/>

<style>
    button {
        width: 20%;
        display: block;
        text-align: center;
        text-decoration: black;
        border: 3px solid black;
        border-radius: 0;
        margin-top: 1em;
        margin-left: auto;
        margin-right: auto;
        transition: width 0.4s ease-in-out;
        background: rgb(149, 65, 131, 0.3);
        background: linear-gradient(90deg, rgba(149, 65, 131, 0.3) 0%, rgba(191, 166, 227, 0.3) 25%, rgba(125, 185, 241, 0.3) 75%, rgba(68, 109, 137, 0.3) 100%);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    button:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px, rgba(0, 0, 0, 0.23) 0px 4px 8px;
    }
</style>
