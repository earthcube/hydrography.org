---
layout: page-fullwidth
classes: wide
title: "Hydropgraphy90m layers download script"
teaser: "Here is an overview of all the current layers of the Hydrography90m dataset. Please see the paper by [Amatulli et al. (2022)](https://essd.copernicus.org/preprints/essd-2022-9) for further details."
permalink: "/data/hydrography90m_download_script"
---
---




wget https://gitlab.com/selvaje74/hydrography.org/-/raw/main/pages/data/hydrography90m_download_script/tiles20d_list.txt


mkdir r.watershed
cd r.watershed

for dir in accumulation_tiles20d basin_tiles20d depression_tiles20d direction_tiles20d outlet_tiles20d regional_unit_tiles20d segment_tiles20d sub_catchment_tiles20d; do
mkdir $dir
filename=$(echo $dir | awk '{ gsub("_tiles20d"," ") ; print $1}')
for tile in $(cat ../tiles20d_list.txt) ; do
wget --no-check-certificate -O $dir/${filename}_${tile}.tif https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2F${filename}_tiles20d&files=${filename}_${tile}.tif
done
done


exit




dir=accumulation_tiles20d
filename=accumulation
tile=h30v08




     "https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2F${dir}&files=${filename}_${tile}.tif"
wget "https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h00v00.tif"

