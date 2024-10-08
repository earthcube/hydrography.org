---
layout: page-fullwidth
classes: wide
title: "Hydrography90m layers tiles merging script"
permalink: "/hydrography90m/hydrography90m_mergetile_script"
---

Here is a bash scripiting procedure to merge tiled raster and vector files of the Hydrography90m dataset. Please see the paper by [Amatulli et al. (2022)](https://essd.copernicus.org/articles/14/4525/2022/essd-14-4525-2022.html) for further details.

---

##  Merge tiled raster files 

    gdalbuildvrt basin.vrt basin_h16v02.tif basin_h16v03.tif
    gdal_translate -co COMPRESS=DEFLATE -co ZLEVEL=9 basin.vrt  basin.tif

---

##  Merge tiled vector files 

    ogrmerge.py -single -progress -skipfailures -overwrite_ds -f GPKG -o basin.gpkg  basin_h16v02.gpkg basin_h16v03.gpkg
    rm -f basin_dissolved.gpkg  
    ogr2ogr  -nlt POLYGON -dialect sqlite -sql "SELECT ST_Union(ST_MakeValid(geom)),"ID" FROM merged GROUP BY "ID" " basin_dissolved.gpkg basin.gpkg


  
  
---

####  We will gradually add more functions for merging, masking etc. the layers in bash, Python and R.