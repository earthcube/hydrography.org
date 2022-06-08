---
layout: page-fullwidth
classes: wide
title: "Hydropgraphy90m layers tiles merging script"
permalink: "/data/hydrography90m_mergetile_script"
---

Here a bash scripiting procedure to merge tiled raster and vector files of the Hydrography90m dataset. Please see the paper by [Amatulli et al. (2022)](https://essd.copernicus.org/preprints/essd-2022-9) for further details."

---

##  Merge tiled raster files 

    gdalbuildvrt basin.vrt basin_h16v02.tif basin_h16v03.tif
    gdal_translate -co COMPRESS=DEFLATE -co ZLEVEL=9 basin.vrt  basin.tif

---

##  Merge tiled raster files 

   ogrmerge.py -single  -progress -skipfailures -overwrite_ds  -f GPKG  -o basin.gpkg  basin_h16v02.gpkg  basin_h16v03.gpkg
   rm -f basin_dissolved.gpkg  
   ogr2ogr  -dialect sqlite -sql "SELECT geom,"ID"  FROM merged  GROUP BY "ID" "   basin_dissolved.gpkg  basin.gpkg