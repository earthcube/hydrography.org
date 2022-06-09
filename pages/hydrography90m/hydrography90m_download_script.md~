---
layout: page-fullwidth
classes: wide
title: "Hydropgraphy90m layers download script"
permalink: "/data/hydrography90m_download_script"
---

Here a bash scripiting procedure to download tiled raster and vector files of the Hydrography90m dataset. Please see the paper by [Amatulli et al. (2022)](https://essd.copernicus.org/preprints/essd-2022-9) for further details."

---
##  Tile list 
Donwload the tile list files.

    wget https://gitlab.com/selvaje74/hydrography.org/-/raw/main/pages/data/hydrography90m_download_script/tiles20d_list.txt

Use the tiles20d_list.txt file to download the full list of raster and vector files. Change the *$(cat   ../tiles20d_list.txt)* to a tile label (e.g. h30v12) in case you want download only one tile.

---

## Base and network layers

```
mkdir r.watershed
cd r.watershed

# raster files
for dir in accumulation_tiles20d basin_tiles20d depression_tiles20d direction_tiles20d outlet_tiles20d regional_unit_tiles20d segment_tiles20d sub_catchment_tiles20d; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.tif  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2F${dir}\&files=${filename}_${tile}.tif
done
done

# vector files 
for dir in  basin_tiles20d outlet_tiles20d sub_catchment_tiles20d; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.gpkg   https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2F${dir}\&files=${filename}_${tile}.gpkg
done
done
```

---

# Stream slope layers

```
mkdir r.stream.slope 
cd r.stream.slope

for dir in slope_curv_max_dw_cel_tiles20d  slope_curv_min_dw_cel_tiles20d  slope_elv_dw_cel_tiles20d  slope_grad_dw_cel_tiles20d ; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.tif  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2F${dir}\&files=${filename}_${tile}.tif
done
done
```

---


# Stream distance layers 

```
mkdir r.stream.distance
cd r.stream.distance

for dir in  outlet_diff_dw_basin_tiles20d   outlet_dist_dw_basin_tiles20d   stream_diff_dw_near_tiles20d   stream_diff_up_near_tiles20d  stream_dist_proximity_tiles20d  stream_dist_up_near_tiles20d outlet_diff_dw_scatch_tiles20d  outlet_dist_dw_scatch_tiles20d  stream_diff_up_farth_tiles20d  stream_dist_dw_near_tiles20d  stream_dist_up_farth_tiles20d ; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.tif  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2F${dir}\&files=${filename}_${tile}.tif
done
done
```

---

# Stream segment properties layers

```
mkdir r.stream.channel
cd r.stream.channel

for dir in channel_curv_cel_tiles20d  channel_dist_up_cel_tiles20d  channel_elv_dw_cel_tiles20d  channel_elv_up_cel_tiles20d  channel_grad_dw_seg_tiles20d  channel_grad_up_seg_tiles20d 
channel_dist_dw_seg_tiles20d  channel_dist_up_seg_tiles20d  channel_elv_dw_seg_tiles20d  channel_elv_up_seg_tiles20d  channel_grad_up_cel_tiles20d ; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.tif  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2F${dir}\&files=${filename}_${tile}.tif
done
done
```

---

#  Stream order layers 

```
mkdir r.stream.order 
cd r.stream.order

# raster files
for dir in order_hack_tiles20d  order_horton_tiles20d  order_shreve_tiles20d  order_strahler_tiles20d  order_topo_tiles20d  order_vect_tiles20d ; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.tif  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2F${dir}\&files=${filename}_${tile}.tif
done
done

# vector files
for dir in order_vect_tiles20d ; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.gpkg https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2F${dir}\&files=${filename}_segment_${tile}.gpkg
wget --no-check-certificate -O ${dir}/${filename}_${tile}.gpkg  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2F${dir}\&files=${filename}_point_${tile}.gpkg
done
done
```

---

# Flow index layers

```
mkdir flow.index
cd flow.index

for dir in cti_tiles20d  spi_tiles20d  sti_tiles20d  ; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d","") ; print $1}')
for tile in $(cat   ../tiles20d_list.txt) ; do
wget --no-check-certificate -O ${dir}/${filename}_${tile}.tif  https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2F${dir}\&files=${filename}_${tile}.tif
done
done
```

---
