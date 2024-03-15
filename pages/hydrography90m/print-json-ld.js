const fs = require('fs')

const baseUrl = "https://earthcube.github.io/hydrography.org/"

const tileUrls = [
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdepression_tiles20d&files=depression_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Faccumulation_tiles20d&files=accumulation_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdirection_tiles20d&files=direction_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_${tile}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsegment_tiles20d&files=segment_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsub_catchment_tiles20d&files=sub_catchment_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_${tile}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_max_dw_cel_tiles20d&files=slope_curv_max_dw_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_min_dw_cel_tiles20d&files=slope_curv_min_dw_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_elv_dw_cel_tiles20d&files=slope_elv_dw_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_grad_dw_cel_tiles20d&files=slope_grad_dw_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_near_tiles20d&files=stream_dist_up_near_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_farth_tiles20d&files=stream_dist_up_farth_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_dw_near_tiles20d&files=stream_dist_dw_near_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_basin_tiles20d&files=outlet_dist_dw_basin_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_scatch_tiles20d&files=outlet_dist_dw_scatch_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_proximity_tiles20d&files=stream_dist_proximity_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_near_tiles20d&files=stream_diff_up_near_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d&files=stream_diff_up_farth_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_dw_near_tiles20d&files=stream_diff_dw_near_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_basin_tiles20d&files=outlet_diff_dw_basin_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_scatch_tiles20d&files=outlet_diff_dw_scatch_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_dw_seg_tiles20d&files=channel_grad_dw_seg_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_seg_tiles20d&files=channel_grad_up_seg_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_cel_tiles20d&files=channel_grad_up_cel_h00v00.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_curv_cel_tiles20d&files=channel_curv_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_seg_tiles20d&files=channel_elv_dw_seg_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_seg_tiles20d&files=channel_elv_up_seg_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_cel_tiles20d&files=channel_elv_up_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_cel_tiles20d&files=channel_elv_dw_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_dw_seg_tiles20d&files=channel_dist_dw_seg_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_seg_tiles20d&files=channel_dist_up_seg_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_cel_tiles20d&files=channel_dist_up_cel_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_strahler_tiles20d&files=order_strahler_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_shreve_tiles20d&files=order_shreve_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_horton_tiles20d&files=order_horton_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_hack_tiles20d&files=order_hack_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_topo_tiles20d&files=order_topo_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_point_${tile}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_segment_${tile}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fspi_tiles20d&files=spi_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fsti_tiles20d&files=sti_${tile}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fcti_tiles20d&files=cti_${tile}.tif'
];

const tiles = ["h00v00"
    , "h02v00"
    , "h04v00"
    , "h06v00"
    , "h08v00"
    , "h10v00"
    , "h12v00"
    , "h14v00"
    , "h16v00"
    , "h18v00"
    , "h20v00"
    , "h22v00"
    , "h24v00"
    , "h26v00"
    , "h28v00"
    , "h30v00"
    , "h32v00"
    , "h34v00"

    , "h00v02"
    , "h02v02"
    , "h04v02"
    , "h06v02"
    , "h08v02"
    , "h10v02"
    , "h12v02"
    , "h14v02"
    , "h16v02"
    , "h18v02"
    , "h20v02"
    , "h22v02"
    , "h24v02"
    , "h26v02"
    , "h28v02"
    , "h30v02"
    , "h32v02"
    , "h34v02"

    , "h00v04"
    , "h04v04"
    , "h06v04"
    , "h08v04"
    , "h10v04"
    , "h12v04"
    , "h14v04"
    , "h16v04"
    , "h18v04"
    , "h20v04"
    , "h22v04"
    , "h24v04"
    , "h26v04"
    , "h28v04"
    , "h30v04E"
    , "h32v04"

    , "h00v06"
    , "h02v06"
    , "h06v06"
    , "h08v06"
    , "h10v06"
    , "h12v06"
    , "h14v06"
    , "h16v06"
    , "h18v06"
    , "h20v06"
    , "h22v06"
    , "h24v06"
    , "h26v06"
    , "h28v06"
    , "h30v06"
    , "h32v06"
    , "h34v06"

    , "h02v08"
    , "h04v08"
    , "h08v08"
    , "h10v08"
    , "h12v08"
    , "h14v08"
    , "h16v08"
    , "h18v08"
    , "h20v08"
    , "h22v08"
    , "h24v08"
    , "h26v08"
    , "h28v08"
    , "h30v08"
    , "h32v08"
    , "h34v08"

    , "h00v10"
    , "h02v10"
    , "h04v10"
    , "h06v10"
    , "h08v10"
    , "h10v10"
    , "h12v10"
    , "h14v10"
    , "h16v10"
    , "h18v10"
    , "h20v10"
    , "h22v10"
    , "h24v10"
    , "h28v10"
    , "h30v10"
    , "h32v10"
    , "h34v10"

    , "h00v12"
    , "h10v12"
    , "h12v12"
    , "h14v12"
    , "h16v12"
    , "h18v12"
    , "h20v12"
    , "h22v12"
    , "h24v12"
    , "h28v12"
    , "h30v12"
    , "h32v12"
    , "h34v12"
]

let sitemapFiles = []

for (let tile in tiles) {
    const header = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "url": `https://earthcube.github.io/hydrography.org/jsonld/hydrograph_tile_${tiles[tile]}.json`,
        "name": `Datasets for hydrography.org tile code ${tiles[tile]}`,
        "description": `Datasets for hydrography.org tile code ${tiles[tile]}`,
        "isAccessibleForFree": true,
        "keywords": `hydrography`,
        "datePublished": `2015-03-17`,
        "dateModified": `2015-03-17`,
        "creator": {
            "@list": [
                {
                    "@type": "Person",
                    "@id": "https://orcid.org/0000-0002-8341-2830",
                    "name": "Giuseppe Amatulli",
                    "url": "https://orcid.org/0000-0002-8341-2830"
                }
            ]
        },
        "citation": "Amatulli, G., Garcia Marquez, J., Sethi, T., Kiesel, J., Grigoropoulou, A., Üblacker, M. M., Shen, L. Q., and Domisch, S.: Hydrography90m: a new high-resolution global hydrographic dataset, Earth Syst. Sci. Data, 14, 4525–4550, https://doi.org/10.5194/essd-14-4525-2022, 2022.",
        "version": "1",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "temporalCoverage": "2001-08-06/2002-09-09",
        "spatialCoverage": {
            "@type": "Place",
            "geo": {
                "@type": "GeoShape",
                "box": "-68.4817 -75.8183 -65.08 -68.5033"
            },
            "additionalProperty": [
                {
                    "@type": "PropertyValue",
                    "propertyID": "http://www.wikidata.org/entity/Q4018860",
                    "name": "well-known text (WKT) representation of geometry",
                    "value": "POLYGON ((-75.8183 -68.4817, -68.5033 -68.4817, -68.5033 -65.08, -75.8183 -65.08, -75.8183 -68.4817))"
                },
                {
                    "@type": "PropertyValue",
                    "propertyID": "http://www.wikidata.org/entity/Q161779",
                    "name": "Spatial Reference System",
                    "value": "http://www.opengis.net/def/crs/OGC/1.3/CRS84"
                }
            ]
        },
        "variableMeasured": [
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20860",
                "name": "cruiseid",
                "description": "cruise identification",
                "unitText": "text"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20861",
                "name": "year",
                "description": "year of experiment",
                "unitText": "calendar year"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20862",
                "name": "sample_id",
                "description": "sample identification: WBC=whole body clearance expt.; WBF=whole body fluorescence on collection"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20863",
                "name": "time_sample",
                "description": "Number of minutes between collection and sampling for pigment content; decline of pigment content with time was used to calculate time to clear the gut of pigment.",
                "unitText": "minutes"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20864",
                "name": "pigment_content",
                "description": "pigment content",
                "unitText": "micrograms total chl/grams wet weight"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20865",
                "name": "stage_id",
                "description": "stage development index of larvae in sample (furcilia = F1-6 = 1-6,  juvenile = J=7)"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20866",
                "name": "wet_weight",
                "description": "average wet weight/larvae in sample",
                "unitText": "mg"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20874",
                "name": "lat",
                "description": "latitude, in decimal degrees, North is positive, negative denotes South",
                "unitText": "decimal degrees"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20875",
                "name": "lon",
                "description": "longitude, in decimal degrees, East is positive, negative denotes West",
                "unitText": "decimal degrees"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20876",
                "name": "day_local",
                "description": "day of month, local time"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20877",
                "name": "month_local",
                "description": "month, local time"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20878",
                "name": "time_local",
                "description": "time of day, local time, using 2400 clock format"
            },
            {
                "@type": "PropertyValue",
                "propertyID": "http://lod.example-data-repository.org/id/dataset-parameter/20879",
                "name": "yrday_local",
                "description": "local day and decimal time, as 326.5 for the 326th day of the year, or November 22 at 1200 hours (noon)"
            }
        ],
        "funding": {
            "@id": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=9909933",
            "@type": "MonetaryGrant",
            "identifier": "9909933",
            "name": "GLOBEC: Winter Ecology of Larval Krill: Quantifying their Interaction with the Pack Ice Habitat",
            "url": "https://www.nsf.gov/awardsearch/showAward?AWD_ID=9909933",
            "funder": {
                "@id": "http://dx.doi.org/10.13039/100000001",
                "@type": "Organization",
                "name": "National Science Foundation",
                "identifier": [
                    "http://dx.doi.org/10.13039/100000001",
                    "https://ror.org/021nxhr62"
                ]
            }
        }
    }

    let dists = []
    for (const baseUrl of tileUrls) {
        const specificUrl = baseUrl.replace(/\${tile}/g, tiles[tile]);
        let dist = {
            '@type': "DataDownload",
            "contentUrl": specificUrl,
        }
        if (specificUrl.endsWith(".gpkg")) {
            dist["encodingFormat"] = "application/geopackage+vnd.sqlite3";
        } else {
            dist["encodingFormat"] = "image/tiff";
        }
        dists.push(dist)
        // console.log("{\n" +
        //     "  \"@type\": \"DataDownload\",\n" +
        //     "  \"contentUrl\": \"" + specificUrl + "\",");
        // if (specificUrl.endsWith(".gpkg")) {
        //     console.log("  \"encodingFormat\": \"application/geopackage+vnd.sqlite3\"\n" +
        //         "},");
        // } else {
        //     console.log("  \"encodingFormat\": \"image/tiff\"\n" +
        //         "},");
        // }
    }
    let jsonObj = header
    jsonObj["distributions"] = dists
    // const distribution = JSON.stringify(dists,undefined, 2)
    // const output = `${header} , "distributions": ${distribution}`
    //console.log(output)
    let output = JSON.stringify(jsonObj, undefined, 2)
    console.log(output)
    const filename = `jsonld/hydrograph_tile_${tiles[tile]}.json`
    sitemapFiles.push(filename)
    fs.writeFile(`../../${filename}`, output, (err) => {

        // In case of a error throw err.
        if (err) throw err;
    })
    const files = sitemapFiles.map(f => `<url>
    <loc>${baseUrl}${f}</loc>
  </url> `)

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${files.join("\n")}
</urlset>`

    fs.writeFile(`../../jsonld/sitemap_json.xml`, sitemap, (err) => {

        // In case of a error throw err.
        if (err) throw err;
    })
    const filesHtml = sitemapFiles.map(f => `<urlset>
    <loc>${baseUrl}${f}.html</loc>
  </urlset> `)

    const sitemapHtml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${filesHtml.join("\n")}
</urlset>`
    fs.writeFile(`../../jsonld/sitemap_html.xml`, sitemapHtml, (err) => {

        // In case of a error throw err.
        if (err) throw err;
    })
}


