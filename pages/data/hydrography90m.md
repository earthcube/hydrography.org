---
layout: page-fullwidth
classes: wide
title: "hydropgraphy90m layers"
teaser: "This page supports the download of raster (*.tif) and vector (*.gpkg) layers developed from Amatulli et al. (2022) Hydrography90m: A new high-resolution global hydrographic dataset.  This work is part of the Global Freshwater Biodiversity, Biogeography and Conservation project (https://glowabio.org) funded in part by the Federal Ministry of Education and Research (BMBF grant agreement 555 number 033W034A) and the Leibniz Competition to S.D. (J45/2018)"
permalink: "/data/hydrography90m"
header:
   image_fullwidth: "data/dem_streamOrder1.jpg"
---

<style>
	table, th, td {border: 1px solid black; background-color: white;}
	
	.tiles {
		border: 2px red;
		background-image: 
			url("/hydrography.org/images/data/water-occurrence-map.png");
	}

	.tileDownloadBoundsTitle {
		padding-bottom: 5px;
	}
	.mapTileDownloadContainer {
		width: 685px;
		height: 267px;
		display: block;
		position: relative;
	}
	.mapTileDownloadBaseLayer {
		position: absolute;
		left:0;
		right:0;
	}
</style>

[//]: <> (Extracting data files)
[//]: <> (jquery library call is associated with the apperance of red box upon click)
[//]: <> (https://www.w3schools.com/jquery/jquery_get_started.asp)
[//]: <> (https://jquery.com/download/)
[//]: <> (<script src="data-visualization-tools/timemachine/js/jquery/jquery.min.js" type="text/javascript"></script>)

<script src="data-visualization-tools/timemachine/js/jquery/jquery.min.js" type="text/javascript"></script>
<script>
	var BASE_URL = 'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4';
	var FILES = ['r.stream.channel', 'r.stream.distance', 'r.stream.order', 'r.stream.slope', 'r.watershed'];
	var CHANNEL_FILE = ['channel_curv_cel', 'channel_dist_dw_seg', 'channel_dist_up_cel', 'channel_dist_up_seg', 'channel_elv_dw_cel', 'channel_elv_dw_seg', 'channel_elv_up_cel', 'channel_elv_up_seg', 'channel_grad_dw_seg', 'channel_grad_up_cel', 'channel_grad_up_seg']
	var DIST_FILE = ['outlet_diff_dw_basin', 'outlet_diff_dw_scratch', 'outlet_dist_dw_basin', 'outlet_dist_dw_scratch', 'stream_diff_dw_near', 'stream_diff_up_farth', 'stream_diff_up_near', 'stream_dist_dw_near', 'stream_dist_proximity', 'stream_dist_up_farth', 'stream_dist_up_near']
	var ORDER_FILE = ['order_hack', 'order_horton', 'order_shreve', 'order_strahler', 'order_topo', 'order_vect']
	var SLOPE_FILE = ['slope_curv_max_dw_cel', 'slope_curve_min_dw_cel', 'slope_elv_dw_cel', 'slope_grad_dw_cel']
	var WTRSHD_FILE = ['accumulation', 'basin', 'depression', 'direction', 'outlet', 'regional', 'segment', 'sub_catchment']

[//]: <> (Pseudo code for presenting data files)

[//]: <> ( for file-index in FILES list : )
[//]: <> ( variable URL = BASE_URL + FILES(file-index) + '%2F' + SUB_FILE(file_index) + '_tiles20d' + '&files=', SUB_FILE[file_index],'_h', lat, 'v', long,.tif.join(''))
[//]: <> ( if FILES = 'r.stream.channel')
[//]: <> 	(SUB_FILE = CHANNEL_FILE)
[//]: <> ( if FILES = 'r.stream.distance')
[//]: <> 	(SUB_FILE = DIST_FILE)
[//]: <> ( if FILES = 'r.stream.order')
[//]: <> 	(SUB_FILE = ORDER_FILE)
[//]: <> ( if FILES = 'r.stream.slope')
[//]: <> 	(SUB_FILE = SLOPE_FILE)
[//]: <> ( else SUB_FILE = WTRSHD_FILE)
[//]: <> (print FILES ":" SUB_FILE ":" URL)

	function set_paths(x, y) {
		var lat = Math.abs(y) + ((y < 0) ? 'S' : 'N');
		var lon = Math.abs(x) + ((x < 0) ? 'W' : 'E');
		var lines = ['<p>', '<div class="tileDownloadBoundsTitle">Granule with top-left corner at ' + lon + ', ' + lat + ':</div>'];
		for (var i = 0 ; i < FILES.length; ++i) {
			var url = [BASE_URL, FILES[i], '%2F', SUB_FILE[i], '_tiles20d','&files=', SUB_FILE[i],'_h', lat, 'v', long,.tif.join('');
			var dataset_name = FILES[i].split("/")[0];
			
			lines.push('<div class="url"><b>' + dataset_name.charAt(0).toUpperCase() + dataset_name.slice(1) + ": " + '</b><a href="' + url + '">' + url + '</a></div>');
		}
		lines.push('</p>');
		document.getElementById("tilepaths").innerHTML = lines.join('');
	};
	$(function() {
		$(".tile").on("click", function() {
			$(".tile").removeClass("selected");
			$(this).addClass("selected");
		});
	});
</script>


[comment]: page base on documentation.md
[//]: <> (for div grid layout SEE:)
[//]: <> (https://stackoverflow.com/questions/17394820/understanding-div-classes-in-foundation-4)
[//]: <> (https://get.foundation/sites/docs-v5/components/grid.html)



<div class="row">
<div class="medium-4 medium-push-8 columns" markdown="1">
<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->


<div class="medium-8 medium-pull-4 columns" markdown="1">

------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Grid map table trial

<table>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>

----------------------------------------------------------------------------------------------
# Grid map

<div class="mapTileDownloadContainer">
	<div class="mapTileDownloadBaseLayer"><img width="685" height="267" src="/hydrography.org/images/data/basins_noTiles.png" /></div>
	<div class="tile" style="left:0px;top:0px" title="70-80N, 170-180W" onclick="set_paths(-180,80)"></div>
	<div class="tile" style="left:19px;top:0px" title="70-80N, 160-170W" onclick="set_paths(-170,80)"></div>
	<div class="tile" style="left:38px;top:0px" title="70-80N, 150-160W" onclick="set_paths(-160,80)"></div>
	<div class="tile" style="left:57px;top:0px" title="70-80N, 140-150W" onclick="set_paths(-150,80)"></div>
	<div class="tile" style="left:76px;top:0px" title="70-80N, 130-140W" onclick="set_paths(-140,80)"></div>
	<div class="tile" style="left:95px;top:0px" title="70-80N, 120-130W" onclick="set_paths(-130,80)"></div>
	<div class="tile" style="left:114px;top:0px" title="70-80N, 110-120W" onclick="set_paths(-120,80)"></div>
	<div class="tile" style="left:133px;top:0px" title="70-80N, 100-110W" onclick="set_paths(-110,80)"></div>
	<div class="tile" style="left:152px;top:0px" title="70-80N, 90-100W" onclick="set_paths(-100,80)"></div>
	<div class="tile" style="left:171px;top:0px" title="70-80N, 80-90W" onclick="set_paths(-90,80)"></div>
	<div class="tile" style="left:190px;top:0px" title="70-80N, 70-80W" onclick="set_paths(-80,80)"></div>
	<div class="tile" style="left:209px;top:0px" title="70-80N, 60-70W" onclick="set_paths(-70,80)"></div>
	<div class="tile" style="left:228px;top:0px" title="70-80N, 50-60W" onclick="set_paths(-60,80)"></div>
	<div class="tile" style="left:247px;top:0px" title="70-80N, 40-50W" onclick="set_paths(-50,80)"></div>
	<div class="tile" style="left:266px;top:0px" title="70-80N, 30-40W" onclick="set_paths(-40,80)"></div>
	<div class="tile" style="left:285px;top:0px" title="70-80N, 20-30W" onclick="set_paths(-30,80)"></div>
	<div class="tile" style="left:304px;top:0px" title="70-80N, 10-20W" onclick="set_paths(-20,80)"></div>
	<div class="tile" style="left:323px;top:0px" title="70-80N, 0-10W" onclick="set_paths(-10,80)"></div>
	<div class="tile" style="left:342px;top:0px" title="70-80N, 0-10E" onclick="set_paths(0,80)"></div>
	<div class="tile" style="left:361px;top:0px" title="70-80N, 10-20E" onclick="set_paths(10,80)"></div>
	<div class="tile" style="left:380px;top:0px" title="70-80N, 20-30E" onclick="set_paths(20,80)"></div>
	<div class="tile" style="left:399px;top:0px" title="70-80N, 30-40E" onclick="set_paths(30,80)"></div>
	<div class="tile" style="left:418px;top:0px" title="70-80N, 40-50E" onclick="set_paths(40,80)"></div>
	<div class="tile" style="left:437px;top:0px" title="70-80N, 50-60E" onclick="set_paths(50,80)"></div>
	<div class="tile" style="left:456px;top:0px" title="70-80N, 60-70E" onclick="set_paths(60,80)"></div>
	<div class="tile" style="left:475px;top:0px" title="70-80N, 70-80E" onclick="set_paths(70,80)"></div>
	<div class="tile" style="left:494px;top:0px" title="70-80N, 80-90E" onclick="set_paths(80,80)"></div>
	<div class="tile" style="left:513px;top:0px" title="70-80N, 90-100E" onclick="set_paths(90,80)"></div>
	<div class="tile" style="left:532px;top:0px" title="70-80N, 100-110E" onclick="set_paths(100,80)"></div>
	<div class="tile" style="left:551px;top:0px" title="70-80N, 110-120E" onclick="set_paths(110,80)"></div>
	<div class="tile" style="left:570px;top:0px" title="70-80N, 120-130E" onclick="set_paths(120,80)"></div>
	<div class="tile" style="left:589px;top:0px" title="70-80N, 130-140E" onclick="set_paths(130,80)"></div>
	<div class="tile" style="left:608px;top:0px" title="70-80N, 140-150E" onclick="set_paths(140,80)"></div>
	<div class="tile" style="left:627px;top:0px" title="70-80N, 150-160E" onclick="set_paths(150,80)"></div>
	<div class="tile" style="left:646px;top:0px" title="70-80N, 160-170E" onclick="set_paths(160,80)"></div>
	<div class="tile" style="left:665px;top:0px" title="70-80N, 170-180E" onclick="set_paths(170,80)"></div>
	<div class="tile" style="left:0px;top:19px" title="60-70N, 170-180W" onclick="set_paths(-180,70)"></div>
	<div class="tile" style="left:19px;top:19px" title="60-70N, 160-170W" onclick="set_paths(-170,70)"></div>
	<div class="tile" style="left:38px;top:19px" title="60-70N, 150-160W" onclick="set_paths(-160,70)"></div>
	<div class="tile" style="left:57px;top:19px" title="60-70N, 140-150W" onclick="set_paths(-150,70)"></div>
	<div class="tile" style="left:76px;top:19px" title="60-70N, 130-140W" onclick="set_paths(-140,70)"></div>
	<div class="tile" style="left:95px;top:19px" title="60-70N, 120-130W" onclick="set_paths(-130,70)"></div>
	<div class="tile" style="left:114px;top:19px" title="60-70N, 110-120W" onclick="set_paths(-120,70)"></div>
	<div class="tile" style="left:133px;top:19px" title="60-70N, 100-110W" onclick="set_paths(-110,70)"></div>
	<div class="tile" style="left:152px;top:19px" title="60-70N, 90-100W" onclick="set_paths(-100,70)"></div>
	<div class="tile" style="left:171px;top:19px" title="60-70N, 80-90W" onclick="set_paths(-90,70)"></div>
	<div class="tile" style="left:190px;top:19px" title="60-70N, 70-80W" onclick="set_paths(-80,70)"></div>
	<div class="tile" style="left:209px;top:19px" title="60-70N, 60-70W" onclick="set_paths(-70,70)"></div>
	<div class="tile" style="left:228px;top:19px" title="60-70N, 50-60W" onclick="set_paths(-60,70)"></div>
	<div class="tile" style="left:247px;top:19px" title="60-70N, 40-50W" onclick="set_paths(-50,70)"></div>
	<div class="tile" style="left:266px;top:19px" title="60-70N, 30-40W" onclick="set_paths(-40,70)"></div>
	<div class="tile" style="left:285px;top:19px" title="60-70N, 20-30W" onclick="set_paths(-30,70)"></div>
	<div class="tile" style="left:304px;top:19px" title="60-70N, 10-20W" onclick="set_paths(-20,70)"></div>
	<div class="tile" style="left:323px;top:19px" title="60-70N, 0-10W" onclick="set_paths(-10,70)"></div>
	<div class="tile" style="left:342px;top:19px" title="60-70N, 0-10E" onclick="set_paths(0,70)"></div>
	<div class="tile" style="left:361px;top:19px" title="60-70N, 10-20E" onclick="set_paths(10,70)"></div>
	<div class="tile" style="left:380px;top:19px" title="60-70N, 20-30E" onclick="set_paths(20,70)"></div>
	<div class="tile" style="left:399px;top:19px" title="60-70N, 30-40E" onclick="set_paths(30,70)"></div>
	<div class="tile" style="left:418px;top:19px" title="60-70N, 40-50E" onclick="set_paths(40,70)"></div>
	<div class="tile" style="left:437px;top:19px" title="60-70N, 50-60E" onclick="set_paths(50,70)"></div>
	<div class="tile" style="left:456px;top:19px" title="60-70N, 60-70E" onclick="set_paths(60,70)"></div>
	<div class="tile" style="left:475px;top:19px" title="60-70N, 70-80E" onclick="set_paths(70,70)"></div>
	<div class="tile" style="left:494px;top:19px" title="60-70N, 80-90E" onclick="set_paths(80,70)"></div>
	<div class="tile" style="left:513px;top:19px" title="60-70N, 90-100E" onclick="set_paths(90,70)"></div>
	<div class="tile" style="left:532px;top:19px" title="60-70N, 100-110E" onclick="set_paths(100,70)"></div>
	<div class="tile" style="left:551px;top:19px" title="60-70N, 110-120E" onclick="set_paths(110,70)"></div>
	<div class="tile" style="left:570px;top:19px" title="60-70N, 120-130E" onclick="set_paths(120,70)"></div>
	<div class="tile" style="left:589px;top:19px" title="60-70N, 130-140E" onclick="set_paths(130,70)"></div>
	<div class="tile" style="left:608px;top:19px" title="60-70N, 140-150E" onclick="set_paths(140,70)"></div>
	<div class="tile" style="left:627px;top:19px" title="60-70N, 150-160E" onclick="set_paths(150,70)"></div>
	<div class="tile" style="left:646px;top:19px" title="60-70N, 160-170E" onclick="set_paths(160,70)"></div>
	<div class="tile" style="left:665px;top:19px" title="60-70N, 170-180E" onclick="set_paths(170,70)"></div>
	<div class="tile" style="left:0px;top:38px" title="50-60N, 170-180W" onclick="set_paths(-180,60)"></div>
	<div class="tile" style="left:19px;top:38px" title="50-60N, 160-170W" onclick="set_paths(-170,60)"></div>
	<div class="tile" style="left:38px;top:38px" title="50-60N, 150-160W" onclick="set_paths(-160,60)"></div>
	<div class="tile" style="left:57px;top:38px" title="50-60N, 140-150W" onclick="set_paths(-150,60)"></div>
	<div class="tile" style="left:76px;top:38px" title="50-60N, 130-140W" onclick="set_paths(-140,60)"></div>
	<div class="tile" style="left:95px;top:38px" title="50-60N, 120-130W" onclick="set_paths(-130,60)"></div>
	<div class="tile" style="left:114px;top:38px" title="50-60N, 110-120W" onclick="set_paths(-120,60)"></div>
	<div class="tile" style="left:133px;top:38px" title="50-60N, 100-110W" onclick="set_paths(-110,60)"></div>
	<div class="tile" style="left:152px;top:38px" title="50-60N, 90-100W" onclick="set_paths(-100,60)"></div>
	<div class="tile" style="left:171px;top:38px" title="50-60N, 80-90W" onclick="set_paths(-90,60)"></div>
	<div class="tile" style="left:190px;top:38px" title="50-60N, 70-80W" onclick="set_paths(-80,60)"></div>
	<div class="tile" style="left:209px;top:38px" title="50-60N, 60-70W" onclick="set_paths(-70,60)"></div>
	<div class="tile" style="left:228px;top:38px" title="50-60N, 50-60W" onclick="set_paths(-60,60)"></div>
	<div class="tile" style="left:247px;top:38px" title="50-60N, 40-50W" onclick="set_paths(-50,60)"></div>
	<div class="tile" style="left:266px;top:38px" title="50-60N, 30-40W" onclick="set_paths(-40,60)"></div>
	<div class="tile" style="left:285px;top:38px" title="50-60N, 20-30W" onclick="set_paths(-30,60)"></div>
	<div class="tile" style="left:304px;top:38px" title="50-60N, 10-20W" onclick="set_paths(-20,60)"></div>
	<div class="tile" style="left:323px;top:38px" title="50-60N, 0-10W" onclick="set_paths(-10,60)"></div>
	<div class="tile" style="left:342px;top:38px" title="50-60N, 0-10E" onclick="set_paths(0,60)"></div>
	<div class="tile" style="left:361px;top:38px" title="50-60N, 10-20E" onclick="set_paths(10,60)"></div>
	<div class="tile" style="left:380px;top:38px" title="50-60N, 20-30E" onclick="set_paths(20,60)"></div>
	<div class="tile" style="left:399px;top:38px" title="50-60N, 30-40E" onclick="set_paths(30,60)"></div>
	<div class="tile" style="left:418px;top:38px" title="50-60N, 40-50E" onclick="set_paths(40,60)"></div>
	<div class="tile" style="left:437px;top:38px" title="50-60N, 50-60E" onclick="set_paths(50,60)"></div>
	<div class="tile" style="left:456px;top:38px" title="50-60N, 60-70E" onclick="set_paths(60,60)"></div>
	<div class="tile" style="left:475px;top:38px" title="50-60N, 70-80E" onclick="set_paths(70,60)"></div>
	<div class="tile" style="left:494px;top:38px" title="50-60N, 80-90E" onclick="set_paths(80,60)"></div>
	<div class="tile" style="left:513px;top:38px" title="50-60N, 90-100E" onclick="set_paths(90,60)"></div>
	<div class="tile" style="left:532px;top:38px" title="50-60N, 100-110E" onclick="set_paths(100,60)"></div>
	<div class="tile" style="left:551px;top:38px" title="50-60N, 110-120E" onclick="set_paths(110,60)"></div>
	<div class="tile" style="left:570px;top:38px" title="50-60N, 120-130E" onclick="set_paths(120,60)"></div>
	<div class="tile" style="left:589px;top:38px" title="50-60N, 130-140E" onclick="set_paths(130,60)"></div>
	<div class="tile" style="left:608px;top:38px" title="50-60N, 140-150E" onclick="set_paths(140,60)"></div>
	<div class="tile" style="left:627px;top:38px" title="50-60N, 150-160E" onclick="set_paths(150,60)"></div>
	<div class="tile" style="left:646px;top:38px" title="50-60N, 160-170E" onclick="set_paths(160,60)"></div>
	<div class="tile" style="left:665px;top:38px" title="50-60N, 170-180E" onclick="set_paths(170,60)"></div>
	<div class="tile" style="left:0px;top:57px" title="40-50N, 170-180W" onclick="set_paths(-180,50)"></div>
	<div class="tile" style="left:19px;top:57px" title="40-50N, 160-170W" onclick="set_paths(-170,50)"></div>
	<div class="tile" style="left:38px;top:57px" title="40-50N, 150-160W" onclick="set_paths(-160,50)"></div>
	<div class="tile" style="left:57px;top:57px" title="40-50N, 140-150W" onclick="set_paths(-150,50)"></div>
	<div class="tile" style="left:76px;top:57px" title="40-50N, 130-140W" onclick="set_paths(-140,50)"></div>
	<div class="tile" style="left:95px;top:57px" title="40-50N, 120-130W" onclick="set_paths(-130,50)"></div>
	<div class="tile" style="left:114px;top:57px" title="40-50N, 110-120W" onclick="set_paths(-120,50)"></div>
	<div class="tile" style="left:133px;top:57px" title="40-50N, 100-110W" onclick="set_paths(-110,50)"></div>
	<div class="tile" style="left:152px;top:57px" title="40-50N, 90-100W" onclick="set_paths(-100,50)"></div>
	<div class="tile" style="left:171px;top:57px" title="40-50N, 80-90W" onclick="set_paths(-90,50)"></div>
	<div class="tile" style="left:190px;top:57px" title="40-50N, 70-80W" onclick="set_paths(-80,50)"></div>
	<div class="tile" style="left:209px;top:57px" title="40-50N, 60-70W" onclick="set_paths(-70,50)"></div>
	<div class="tile" style="left:228px;top:57px" title="40-50N, 50-60W" onclick="set_paths(-60,50)"></div>
	<div class="tile" style="left:247px;top:57px" title="40-50N, 40-50W" onclick="set_paths(-50,50)"></div>
	<div class="tile" style="left:266px;top:57px" title="40-50N, 30-40W" onclick="set_paths(-40,50)"></div>
	<div class="tile" style="left:285px;top:57px" title="40-50N, 20-30W" onclick="set_paths(-30,50)"></div>
	<div class="tile" style="left:304px;top:57px" title="40-50N, 10-20W" onclick="set_paths(-20,50)"></div>
	<div class="tile" style="left:323px;top:57px" title="40-50N, 0-10W" onclick="set_paths(-10,50)"></div>
	<div class="tile" style="left:342px;top:57px" title="40-50N, 0-10E" onclick="set_paths(0,50)"></div>
	<div class="tile" style="left:361px;top:57px" title="40-50N, 10-20E" onclick="set_paths(10,50)"></div>
	<div class="tile" style="left:380px;top:57px" title="40-50N, 20-30E" onclick="set_paths(20,50)"></div>
	<div class="tile" style="left:399px;top:57px" title="40-50N, 30-40E" onclick="set_paths(30,50)"></div>
	<div class="tile" style="left:418px;top:57px" title="40-50N, 40-50E" onclick="set_paths(40,50)"></div>
	<div class="tile" style="left:437px;top:57px" title="40-50N, 50-60E" onclick="set_paths(50,50)"></div>
	<div class="tile" style="left:456px;top:57px" title="40-50N, 60-70E" onclick="set_paths(60,50)"></div>
	<div class="tile" style="left:475px;top:57px" title="40-50N, 70-80E" onclick="set_paths(70,50)"></div>
	<div class="tile" style="left:494px;top:57px" title="40-50N, 80-90E" onclick="set_paths(80,50)"></div>
	<div class="tile" style="left:513px;top:57px" title="40-50N, 90-100E" onclick="set_paths(90,50)"></div>
	<div class="tile" style="left:532px;top:57px" title="40-50N, 100-110E" onclick="set_paths(100,50)"></div>
	<div class="tile" style="left:551px;top:57px" title="40-50N, 110-120E" onclick="set_paths(110,50)"></div>
	<div class="tile" style="left:570px;top:57px" title="40-50N, 120-130E" onclick="set_paths(120,50)"></div>
	<div class="tile" style="left:589px;top:57px" title="40-50N, 130-140E" onclick="set_paths(130,50)"></div>
	<div class="tile" style="left:608px;top:57px" title="40-50N, 140-150E" onclick="set_paths(140,50)"></div>
	<div class="tile" style="left:627px;top:57px" title="40-50N, 150-160E" onclick="set_paths(150,50)"></div>
	<div class="tile" style="left:646px;top:57px" title="40-50N, 160-170E" onclick="set_paths(160,50)"></div>
	<div class="tile" style="left:665px;top:57px" title="40-50N, 170-180E" onclick="set_paths(170,50)"></div>
	<div class="tile" style="left:0px;top:76px" title="30-40N, 170-180W" onclick="set_paths(-180,40)"></div>
	<div class="tile" style="left:19px;top:76px" title="30-40N, 160-170W" onclick="set_paths(-170,40)"></div>
	<div class="tile" style="left:38px;top:76px" title="30-40N, 150-160W" onclick="set_paths(-160,40)"></div>
	<div class="tile" style="left:57px;top:76px" title="30-40N, 140-150W" onclick="set_paths(-150,40)"></div>
	<div class="tile" style="left:76px;top:76px" title="30-40N, 130-140W" onclick="set_paths(-140,40)"></div>
	<div class="tile" style="left:95px;top:76px" title="30-40N, 120-130W" onclick="set_paths(-130,40)"></div>
	<div class="tile" style="left:114px;top:76px" title="30-40N, 110-120W" onclick="set_paths(-120,40)"></div>
	<div class="tile" style="left:133px;top:76px" title="30-40N, 100-110W" onclick="set_paths(-110,40)"></div>
	<div class="tile" style="left:152px;top:76px" title="30-40N, 90-100W" onclick="set_paths(-100,40)"></div>
	<div class="tile" style="left:171px;top:76px" title="30-40N, 80-90W" onclick="set_paths(-90,40)"></div>
	<div class="tile" style="left:190px;top:76px" title="30-40N, 70-80W" onclick="set_paths(-80,40)"></div>
	<div class="tile" style="left:209px;top:76px" title="30-40N, 60-70W" onclick="set_paths(-70,40)"></div>
	<div class="tile" style="left:228px;top:76px" title="30-40N, 50-60W" onclick="set_paths(-60,40)"></div>
	<div class="tile" style="left:247px;top:76px" title="30-40N, 40-50W" onclick="set_paths(-50,40)"></div>
	<div class="tile" style="left:266px;top:76px" title="30-40N, 30-40W" onclick="set_paths(-40,40)"></div>
	<div class="tile" style="left:285px;top:76px" title="30-40N, 20-30W" onclick="set_paths(-30,40)"></div>
	<div class="tile" style="left:304px;top:76px" title="30-40N, 10-20W" onclick="set_paths(-20,40)"></div>
	<div class="tile" style="left:323px;top:76px" title="30-40N, 0-10W" onclick="set_paths(-10,40)"></div>
	<div class="tile" style="left:342px;top:76px" title="30-40N, 0-10E" onclick="set_paths(0,40)"></div>
	<div class="tile" style="left:361px;top:76px" title="30-40N, 10-20E" onclick="set_paths(10,40)"></div>
	<div class="tile" style="left:380px;top:76px" title="30-40N, 20-30E" onclick="set_paths(20,40)"></div>
	<div class="tile" style="left:399px;top:76px" title="30-40N, 30-40E" onclick="set_paths(30,40)"></div>
	<div class="tile" style="left:418px;top:76px" title="30-40N, 40-50E" onclick="set_paths(40,40)"></div>
	<div class="tile" style="left:437px;top:76px" title="30-40N, 50-60E" onclick="set_paths(50,40)"></div>
	<div class="tile" style="left:456px;top:76px" title="30-40N, 60-70E" onclick="set_paths(60,40)"></div>
	<div class="tile" style="left:475px;top:76px" title="30-40N, 70-80E" onclick="set_paths(70,40)"></div>
	<div class="tile" style="left:494px;top:76px" title="30-40N, 80-90E" onclick="set_paths(80,40)"></div>
	<div class="tile" style="left:513px;top:76px" title="30-40N, 90-100E" onclick="set_paths(90,40)"></div>
	<div class="tile" style="left:532px;top:76px" title="30-40N, 100-110E" onclick="set_paths(100,40)"></div>
	<div class="tile" style="left:551px;top:76px" title="30-40N, 110-120E" onclick="set_paths(110,40)"></div>
	<div class="tile" style="left:570px;top:76px" title="30-40N, 120-130E" onclick="set_paths(120,40)"></div>
	<div class="tile" style="left:589px;top:76px" title="30-40N, 130-140E" onclick="set_paths(130,40)"></div>
	<div class="tile" style="left:608px;top:76px" title="30-40N, 140-150E" onclick="set_paths(140,40)"></div>
	<div class="tile" style="left:627px;top:76px" title="30-40N, 150-160E" onclick="set_paths(150,40)"></div>
	<div class="tile" style="left:646px;top:76px" title="30-40N, 160-170E" onclick="set_paths(160,40)"></div>
	<div class="tile" style="left:665px;top:76px" title="30-40N, 170-180E" onclick="set_paths(170,40)"></div>
	<div class="tile" style="left:0px;top:95px" title="20-30N, 170-180W" onclick="set_paths(-180,30)"></div>
	<div class="tile" style="left:19px;top:95px" title="20-30N, 160-170W" onclick="set_paths(-170,30)"></div>
	<div class="tile" style="left:38px;top:95px" title="20-30N, 150-160W" onclick="set_paths(-160,30)"></div>
	<div class="tile" style="left:57px;top:95px" title="20-30N, 140-150W" onclick="set_paths(-150,30)"></div>
	<div class="tile" style="left:76px;top:95px" title="20-30N, 130-140W" onclick="set_paths(-140,30)"></div>
	<div class="tile" style="left:95px;top:95px" title="20-30N, 120-130W" onclick="set_paths(-130,30)"></div>
	<div class="tile" style="left:114px;top:95px" title="20-30N, 110-120W" onclick="set_paths(-120,30)"></div>
	<div class="tile" style="left:133px;top:95px" title="20-30N, 100-110W" onclick="set_paths(-110,30)"></div>
	<div class="tile" style="left:152px;top:95px" title="20-30N, 90-100W" onclick="set_paths(-100,30)"></div>
	<div class="tile" style="left:171px;top:95px" title="20-30N, 80-90W" onclick="set_paths(-90,30)"></div>
	<div class="tile" style="left:190px;top:95px" title="20-30N, 70-80W" onclick="set_paths(-80,30)"></div>
	<div class="tile" style="left:209px;top:95px" title="20-30N, 60-70W" onclick="set_paths(-70,30)"></div>
	<div class="tile" style="left:228px;top:95px" title="20-30N, 50-60W" onclick="set_paths(-60,30)"></div>
	<div class="tile" style="left:247px;top:95px" title="20-30N, 40-50W" onclick="set_paths(-50,30)"></div>
	<div class="tile" style="left:266px;top:95px" title="20-30N, 30-40W" onclick="set_paths(-40,30)"></div>
	<div class="tile" style="left:285px;top:95px" title="20-30N, 20-30W" onclick="set_paths(-30,30)"></div>
	<div class="tile" style="left:304px;top:95px" title="20-30N, 10-20W" onclick="set_paths(-20,30)"></div>
	<div class="tile" style="left:323px;top:95px" title="20-30N, 0-10W" onclick="set_paths(-10,30)"></div>
	<div class="tile" style="left:342px;top:95px" title="20-30N, 0-10E" onclick="set_paths(0,30)"></div>
	<div class="tile" style="left:361px;top:95px" title="20-30N, 10-20E" onclick="set_paths(10,30)"></div>
	<div class="tile" style="left:380px;top:95px" title="20-30N, 20-30E" onclick="set_paths(20,30)"></div>
	<div class="tile" style="left:399px;top:95px" title="20-30N, 30-40E" onclick="set_paths(30,30)"></div>
	<div class="tile" style="left:418px;top:95px" title="20-30N, 40-50E" onclick="set_paths(40,30)"></div>
	<div class="tile" style="left:437px;top:95px" title="20-30N, 50-60E" onclick="set_paths(50,30)"></div>
	<div class="tile" style="left:456px;top:95px" title="20-30N, 60-70E" onclick="set_paths(60,30)"></div>
	<div class="tile" style="left:475px;top:95px" title="20-30N, 70-80E" onclick="set_paths(70,30)"></div>
	<div class="tile" style="left:494px;top:95px" title="20-30N, 80-90E" onclick="set_paths(80,30)"></div>
	<div class="tile" style="left:513px;top:95px" title="20-30N, 90-100E" onclick="set_paths(90,30)"></div>
	<div class="tile" style="left:532px;top:95px" title="20-30N, 100-110E" onclick="set_paths(100,30)"></div>
	<div class="tile" style="left:551px;top:95px" title="20-30N, 110-120E" onclick="set_paths(110,30)"></div>
	<div class="tile" style="left:570px;top:95px" title="20-30N, 120-130E" onclick="set_paths(120,30)"></div>
	<div class="tile" style="left:589px;top:95px" title="20-30N, 130-140E" onclick="set_paths(130,30)"></div>
	<div class="tile" style="left:608px;top:95px" title="20-30N, 140-150E" onclick="set_paths(140,30)"></div>
	<div class="tile" style="left:627px;top:95px" title="20-30N, 150-160E" onclick="set_paths(150,30)"></div>
	<div class="tile" style="left:646px;top:95px" title="20-30N, 160-170E" onclick="set_paths(160,30)"></div>
	<div class="tile" style="left:665px;top:95px" title="20-30N, 170-180E" onclick="set_paths(170,30)"></div>
	<div class="tile" style="left:0px;top:114px" title="10-20N, 170-180W" onclick="set_paths(-180,20)"></div>
	<div class="tile" style="left:19px;top:114px" title="10-20N, 160-170W" onclick="set_paths(-170,20)"></div>
	<div class="tile" style="left:38px;top:114px" title="10-20N, 150-160W" onclick="set_paths(-160,20)"></div>
	<div class="tile" style="left:57px;top:114px" title="10-20N, 140-150W" onclick="set_paths(-150,20)"></div>
	<div class="tile" style="left:76px;top:114px" title="10-20N, 130-140W" onclick="set_paths(-140,20)"></div>
	<div class="tile" style="left:95px;top:114px" title="10-20N, 120-130W" onclick="set_paths(-130,20)"></div>
	<div class="tile" style="left:114px;top:114px" title="10-20N, 110-120W" onclick="set_paths(-120,20)"></div>
	<div class="tile" style="left:133px;top:114px" title="10-20N, 100-110W" onclick="set_paths(-110,20)"></div>
	<div class="tile" style="left:152px;top:114px" title="10-20N, 90-100W" onclick="set_paths(-100,20)"></div>
	<div class="tile" style="left:171px;top:114px" title="10-20N, 80-90W" onclick="set_paths(-90,20)"></div>
	<div class="tile" style="left:190px;top:114px" title="10-20N, 70-80W" onclick="set_paths(-80,20)"></div>
	<div class="tile" style="left:209px;top:114px" title="10-20N, 60-70W" onclick="set_paths(-70,20)"></div>
	<div class="tile" style="left:228px;top:114px" title="10-20N, 50-60W" onclick="set_paths(-60,20)"></div>
	<div class="tile" style="left:247px;top:114px" title="10-20N, 40-50W" onclick="set_paths(-50,20)"></div>
	<div class="tile" style="left:266px;top:114px" title="10-20N, 30-40W" onclick="set_paths(-40,20)"></div>
	<div class="tile" style="left:285px;top:114px" title="10-20N, 20-30W" onclick="set_paths(-30,20)"></div>
	<div class="tile" style="left:304px;top:114px" title="10-20N, 10-20W" onclick="set_paths(-20,20)"></div>
	<div class="tile" style="left:323px;top:114px" title="10-20N, 0-10W" onclick="set_paths(-10,20)"></div>
	<div class="tile" style="left:342px;top:114px" title="10-20N, 0-10E" onclick="set_paths(0,20)"></div>
	<div class="tile" style="left:361px;top:114px" title="10-20N, 10-20E" onclick="set_paths(10,20)"></div>
	<div class="tile" style="left:380px;top:114px" title="10-20N, 20-30E" onclick="set_paths(20,20)"></div>
	<div class="tile" style="left:399px;top:114px" title="10-20N, 30-40E" onclick="set_paths(30,20)"></div>
	<div class="tile" style="left:418px;top:114px" title="10-20N, 40-50E" onclick="set_paths(40,20)"></div>
	<div class="tile" style="left:437px;top:114px" title="10-20N, 50-60E" onclick="set_paths(50,20)"></div>
	<div class="tile" style="left:456px;top:114px" title="10-20N, 60-70E" onclick="set_paths(60,20)"></div>
	<div class="tile" style="left:475px;top:114px" title="10-20N, 70-80E" onclick="set_paths(70,20)"></div>
	<div class="tile" style="left:494px;top:114px" title="10-20N, 80-90E" onclick="set_paths(80,20)"></div>
	<div class="tile" style="left:513px;top:114px" title="10-20N, 90-100E" onclick="set_paths(90,20)"></div>
	<div class="tile" style="left:532px;top:114px" title="10-20N, 100-110E" onclick="set_paths(100,20)"></div>
	<div class="tile" style="left:551px;top:114px" title="10-20N, 110-120E" onclick="set_paths(110,20)"></div>
	<div class="tile" style="left:570px;top:114px" title="10-20N, 120-130E" onclick="set_paths(120,20)"></div>
	<div class="tile" style="left:589px;top:114px" title="10-20N, 130-140E" onclick="set_paths(130,20)"></div>
	<div class="tile" style="left:608px;top:114px" title="10-20N, 140-150E" onclick="set_paths(140,20)"></div>
	<div class="tile" style="left:627px;top:114px" title="10-20N, 150-160E" onclick="set_paths(150,20)"></div>
	<div class="tile" style="left:646px;top:114px" title="10-20N, 160-170E" onclick="set_paths(160,20)"></div>
	<div class="tile" style="left:665px;top:114px" title="10-20N, 170-180E" onclick="set_paths(170,20)"></div>
	<div class="tile" style="left:0px;top:133px" title="0-10N, 170-180W" onclick="set_paths(-180,10)"></div>
	<div class="tile" style="left:19px;top:133px" title="0-10N, 160-170W" onclick="set_paths(-170,10)"></div>
	<div class="tile" style="left:38px;top:133px" title="0-10N, 150-160W" onclick="set_paths(-160,10)"></div>
	<div class="tile" style="left:57px;top:133px" title="0-10N, 140-150W" onclick="set_paths(-150,10)"></div>
	<div class="tile" style="left:76px;top:133px" title="0-10N, 130-140W" onclick="set_paths(-140,10)"></div>
	<div class="tile" style="left:95px;top:133px" title="0-10N, 120-130W" onclick="set_paths(-130,10)"></div>
	<div class="tile" style="left:114px;top:133px" title="0-10N, 110-120W" onclick="set_paths(-120,10)"></div>
	<div class="tile" style="left:133px;top:133px" title="0-10N, 100-110W" onclick="set_paths(-110,10)"></div>
	<div class="tile" style="left:152px;top:133px" title="0-10N, 90-100W" onclick="set_paths(-100,10)"></div>
	<div class="tile" style="left:171px;top:133px" title="0-10N, 80-90W" onclick="set_paths(-90,10)"></div>
	<div class="tile" style="left:190px;top:133px" title="0-10N, 70-80W" onclick="set_paths(-80,10)"></div>
	<div class="tile" style="left:209px;top:133px" title="0-10N, 60-70W" onclick="set_paths(-70,10)"></div>
	<div class="tile" style="left:228px;top:133px" title="0-10N, 50-60W" onclick="set_paths(-60,10)"></div>
	<div class="tile" style="left:247px;top:133px" title="0-10N, 40-50W" onclick="set_paths(-50,10)"></div>
	<div class="tile" style="left:266px;top:133px" title="0-10N, 30-40W" onclick="set_paths(-40,10)"></div>
	<div class="tile" style="left:285px;top:133px" title="0-10N, 20-30W" onclick="set_paths(-30,10)"></div>
	<div class="tile" style="left:304px;top:133px" title="0-10N, 10-20W" onclick="set_paths(-20,10)"></div>
	<div class="tile" style="left:323px;top:133px" title="0-10N, 0-10W" onclick="set_paths(-10,10)"></div>
	<div class="tile" style="left:342px;top:133px" title="0-10N, 0-10E" onclick="set_paths(0,10)"></div>
	<div class="tile" style="left:361px;top:133px" title="0-10N, 10-20E" onclick="set_paths(10,10)"></div>
	<div class="tile" style="left:380px;top:133px" title="0-10N, 20-30E" onclick="set_paths(20,10)"></div>
	<div class="tile" style="left:399px;top:133px" title="0-10N, 30-40E" onclick="set_paths(30,10)"></div>
	<div class="tile" style="left:418px;top:133px" title="0-10N, 40-50E" onclick="set_paths(40,10)"></div>
	<div class="tile" style="left:437px;top:133px" title="0-10N, 50-60E" onclick="set_paths(50,10)"></div>
	<div class="tile" style="left:456px;top:133px" title="0-10N, 60-70E" onclick="set_paths(60,10)"></div>
	<div class="tile" style="left:475px;top:133px" title="0-10N, 70-80E" onclick="set_paths(70,10)"></div>
	<div class="tile" style="left:494px;top:133px" title="0-10N, 80-90E" onclick="set_paths(80,10)"></div>
	<div class="tile" style="left:513px;top:133px" title="0-10N, 90-100E" onclick="set_paths(90,10)"></div>
	<div class="tile" style="left:532px;top:133px" title="0-10N, 100-110E" onclick="set_paths(100,10)"></div>
	<div class="tile" style="left:551px;top:133px" title="0-10N, 110-120E" onclick="set_paths(110,10)"></div>
	<div class="tile" style="left:570px;top:133px" title="0-10N, 120-130E" onclick="set_paths(120,10)"></div>
	<div class="tile" style="left:589px;top:133px" title="0-10N, 130-140E" onclick="set_paths(130,10)"></div>
	<div class="tile" style="left:608px;top:133px" title="0-10N, 140-150E" onclick="set_paths(140,10)"></div>
	<div class="tile" style="left:627px;top:133px" title="0-10N, 150-160E" onclick="set_paths(150,10)"></div>
	<div class="tile" style="left:646px;top:133px" title="0-10N, 160-170E" onclick="set_paths(160,10)"></div>
	<div class="tile" style="left:665px;top:133px" title="0-10N, 170-180E" onclick="set_paths(170,10)"></div>
	<div class="tile" style="left:0px;top:152px" title="0-10S, 170-180W" onclick="set_paths(-180,0)"></div>
	<div class="tile" style="left:19px;top:152px" title="0-10S, 160-170W" onclick="set_paths(-170,0)"></div>
	<div class="tile" style="left:38px;top:152px" title="0-10S, 150-160W" onclick="set_paths(-160,0)"></div>
	<div class="tile" style="left:57px;top:152px" title="0-10S, 140-150W" onclick="set_paths(-150,0)"></div>
	<div class="tile" style="left:76px;top:152px" title="0-10S, 130-140W" onclick="set_paths(-140,0)"></div>
	<div class="tile" style="left:95px;top:152px" title="0-10S, 120-130W" onclick="set_paths(-130,0)"></div>
	<div class="tile" style="left:114px;top:152px" title="0-10S, 110-120W" onclick="set_paths(-120,0)"></div>
	<div class="tile" style="left:133px;top:152px" title="0-10S, 100-110W" onclick="set_paths(-110,0)"></div>
	<div class="tile" style="left:152px;top:152px" title="0-10S, 90-100W" onclick="set_paths(-100,0)"></div>
	<div class="tile" style="left:171px;top:152px" title="0-10S, 80-90W" onclick="set_paths(-90,0)"></div>
	<div class="tile" style="left:190px;top:152px" title="0-10S, 70-80W" onclick="set_paths(-80,0)"></div>
	<div class="tile" style="left:209px;top:152px" title="0-10S, 60-70W" onclick="set_paths(-70,0)"></div>
	<div class="tile" style="left:228px;top:152px" title="0-10S, 50-60W" onclick="set_paths(-60,0)"></div>
	<div class="tile" style="left:247px;top:152px" title="0-10S, 40-50W" onclick="set_paths(-50,0)"></div>
	<div class="tile" style="left:266px;top:152px" title="0-10S, 30-40W" onclick="set_paths(-40,0)"></div>
	<div class="tile" style="left:285px;top:152px" title="0-10S, 20-30W" onclick="set_paths(-30,0)"></div>
	<div class="tile" style="left:304px;top:152px" title="0-10S, 10-20W" onclick="set_paths(-20,0)"></div>
	<div class="tile" style="left:323px;top:152px" title="0-10S, 0-10W" onclick="set_paths(-10,0)"></div>
	<div class="tile" style="left:342px;top:152px" title="0-10S, 0-10E" onclick="set_paths(0,0)"></div>
	<div class="tile" style="left:361px;top:152px" title="0-10S, 10-20E" onclick="set_paths(10,0)"></div>
	<div class="tile" style="left:380px;top:152px" title="0-10S, 20-30E" onclick="set_paths(20,0)"></div>
	<div class="tile" style="left:399px;top:152px" title="0-10S, 30-40E" onclick="set_paths(30,0)"></div>
	<div class="tile" style="left:418px;top:152px" title="0-10S, 40-50E" onclick="set_paths(40,0)"></div>
	<div class="tile" style="left:437px;top:152px" title="0-10S, 50-60E" onclick="set_paths(50,0)"></div>
	<div class="tile" style="left:456px;top:152px" title="0-10S, 60-70E" onclick="set_paths(60,0)"></div>
	<div class="tile" style="left:475px;top:152px" title="0-10S, 70-80E" onclick="set_paths(70,0)"></div>
	<div class="tile" style="left:494px;top:152px" title="0-10S, 80-90E" onclick="set_paths(80,0)"></div>
	<div class="tile" style="left:513px;top:152px" title="0-10S, 90-100E" onclick="set_paths(90,0)"></div>
	<div class="tile" style="left:532px;top:152px" title="0-10S, 100-110E" onclick="set_paths(100,0)"></div>
	<div class="tile" style="left:551px;top:152px" title="0-10S, 110-120E" onclick="set_paths(110,0)"></div>
	<div class="tile" style="left:570px;top:152px" title="0-10S, 120-130E" onclick="set_paths(120,0)"></div>
	<div class="tile" style="left:589px;top:152px" title="0-10S, 130-140E" onclick="set_paths(130,0)"></div>
	<div class="tile" style="left:608px;top:152px" title="0-10S, 140-150E" onclick="set_paths(140,0)"></div>
	<div class="tile" style="left:627px;top:152px" title="0-10S, 150-160E" onclick="set_paths(150,0)"></div>
	<div class="tile" style="left:646px;top:152px" title="0-10S, 160-170E" onclick="set_paths(160,0)"></div>
	<div class="tile" style="left:665px;top:152px" title="0-10S, 170-180E" onclick="set_paths(170,0)"></div>
	<div class="tile" style="left:0px;top:171px" title="10-20S, 170-180W" onclick="set_paths(-180,-10)"></div>
	<div class="tile" style="left:19px;top:171px" title="10-20S, 160-170W" onclick="set_paths(-170,-10)"></div>
	<div class="tile" style="left:38px;top:171px" title="10-20S, 150-160W" onclick="set_paths(-160,-10)"></div>
	<div class="tile" style="left:57px;top:171px" title="10-20S, 140-150W" onclick="set_paths(-150,-10)"></div>
	<div class="tile" style="left:76px;top:171px" title="10-20S, 130-140W" onclick="set_paths(-140,-10)"></div>
	<div class="tile" style="left:95px;top:171px" title="10-20S, 120-130W" onclick="set_paths(-130,-10)"></div>
	<div class="tile" style="left:114px;top:171px" title="10-20S, 110-120W" onclick="set_paths(-120,-10)"></div>
	<div class="tile" style="left:133px;top:171px" title="10-20S, 100-110W" onclick="set_paths(-110,-10)"></div>
	<div class="tile" style="left:152px;top:171px" title="10-20S, 90-100W" onclick="set_paths(-100,-10)"></div>
	<div class="tile" style="left:171px;top:171px" title="10-20S, 80-90W" onclick="set_paths(-90,-10)"></div>
	<div class="tile" style="left:190px;top:171px" title="10-20S, 70-80W" onclick="set_paths(-80,-10)"></div>
	<div class="tile" style="left:209px;top:171px" title="10-20S, 60-70W" onclick="set_paths(-70,-10)"></div>
	<div class="tile" style="left:228px;top:171px" title="10-20S, 50-60W" onclick="set_paths(-60,-10)"></div>
	<div class="tile" style="left:247px;top:171px" title="10-20S, 40-50W" onclick="set_paths(-50,-10)"></div>
	<div class="tile" style="left:266px;top:171px" title="10-20S, 30-40W" onclick="set_paths(-40,-10)"></div>
	<div class="tile" style="left:285px;top:171px" title="10-20S, 20-30W" onclick="set_paths(-30,-10)"></div>
	<div class="tile" style="left:304px;top:171px" title="10-20S, 10-20W" onclick="set_paths(-20,-10)"></div>
	<div class="tile" style="left:323px;top:171px" title="10-20S, 0-10W" onclick="set_paths(-10,-10)"></div>
	<div class="tile" style="left:342px;top:171px" title="10-20S, 0-10E" onclick="set_paths(0,-10)"></div>
	<div class="tile" style="left:361px;top:171px" title="10-20S, 10-20E" onclick="set_paths(10,-10)"></div>
	<div class="tile" style="left:380px;top:171px" title="10-20S, 20-30E" onclick="set_paths(20,-10)"></div>
	<div class="tile" style="left:399px;top:171px" title="10-20S, 30-40E" onclick="set_paths(30,-10)"></div>
	<div class="tile" style="left:418px;top:171px" title="10-20S, 40-50E" onclick="set_paths(40,-10)"></div>
	<div class="tile" style="left:437px;top:171px" title="10-20S, 50-60E" onclick="set_paths(50,-10)"></div>
	<div class="tile" style="left:456px;top:171px" title="10-20S, 60-70E" onclick="set_paths(60,-10)"></div>
	<div class="tile" style="left:475px;top:171px" title="10-20S, 70-80E" onclick="set_paths(70,-10)"></div>
	<div class="tile" style="left:494px;top:171px" title="10-20S, 80-90E" onclick="set_paths(80,-10)"></div>
	<div class="tile" style="left:513px;top:171px" title="10-20S, 90-100E" onclick="set_paths(90,-10)"></div>
	<div class="tile" style="left:532px;top:171px" title="10-20S, 100-110E" onclick="set_paths(100,-10)"></div>
	<div class="tile" style="left:551px;top:171px" title="10-20S, 110-120E" onclick="set_paths(110,-10)"></div>
	<div class="tile" style="left:570px;top:171px" title="10-20S, 120-130E" onclick="set_paths(120,-10)"></div>
	<div class="tile" style="left:589px;top:171px" title="10-20S, 130-140E" onclick="set_paths(130,-10)"></div>
	<div class="tile" style="left:608px;top:171px" title="10-20S, 140-150E" onclick="set_paths(140,-10)"></div>
	<div class="tile" style="left:627px;top:171px" title="10-20S, 150-160E" onclick="set_paths(150,-10)"></div>
	<div class="tile" style="left:646px;top:171px" title="10-20S, 160-170E" onclick="set_paths(160,-10)"></div>
	<div class="tile" style="left:665px;top:171px" title="10-20S, 170-180E" onclick="set_paths(170,-10)"></div>
	<div class="tile" style="left:0px;top:190px" title="20-30S, 170-180W" onclick="set_paths(-180,-20)"></div>
	<div class="tile" style="left:19px;top:190px" title="20-30S, 160-170W" onclick="set_paths(-170,-20)"></div>
	<div class="tile" style="left:38px;top:190px" title="20-30S, 150-160W" onclick="set_paths(-160,-20)"></div>
	<div class="tile" style="left:57px;top:190px" title="20-30S, 140-150W" onclick="set_paths(-150,-20)"></div>
	<div class="tile" style="left:76px;top:190px" title="20-30S, 130-140W" onclick="set_paths(-140,-20)"></div>
	<div class="tile" style="left:95px;top:190px" title="20-30S, 120-130W" onclick="set_paths(-130,-20)"></div>
	<div class="tile" style="left:114px;top:190px" title="20-30S, 110-120W" onclick="set_paths(-120,-20)"></div>
	<div class="tile" style="left:133px;top:190px" title="20-30S, 100-110W" onclick="set_paths(-110,-20)"></div>
	<div class="tile" style="left:152px;top:190px" title="20-30S, 90-100W" onclick="set_paths(-100,-20)"></div>
	<div class="tile" style="left:171px;top:190px" title="20-30S, 80-90W" onclick="set_paths(-90,-20)"></div>
	<div class="tile" style="left:190px;top:190px" title="20-30S, 70-80W" onclick="set_paths(-80,-20)"></div>
	<div class="tile" style="left:209px;top:190px" title="20-30S, 60-70W" onclick="set_paths(-70,-20)"></div>
	<div class="tile" style="left:228px;top:190px" title="20-30S, 50-60W" onclick="set_paths(-60,-20)"></div>
	<div class="tile" style="left:247px;top:190px" title="20-30S, 40-50W" onclick="set_paths(-50,-20)"></div>
	<div class="tile" style="left:266px;top:190px" title="20-30S, 30-40W" onclick="set_paths(-40,-20)"></div>
	<div class="tile" style="left:285px;top:190px" title="20-30S, 20-30W" onclick="set_paths(-30,-20)"></div>
	<div class="tile" style="left:304px;top:190px" title="20-30S, 10-20W" onclick="set_paths(-20,-20)"></div>
	<div class="tile" style="left:323px;top:190px" title="20-30S, 0-10W" onclick="set_paths(-10,-20)"></div>
	<div class="tile" style="left:342px;top:190px" title="20-30S, 0-10E" onclick="set_paths(0,-20)"></div>
	<div class="tile" style="left:361px;top:190px" title="20-30S, 10-20E" onclick="set_paths(10,-20)"></div>
	<div class="tile" style="left:380px;top:190px" title="20-30S, 20-30E" onclick="set_paths(20,-20)"></div>
	<div class="tile" style="left:399px;top:190px" title="20-30S, 30-40E" onclick="set_paths(30,-20)"></div>
	<div class="tile" style="left:418px;top:190px" title="20-30S, 40-50E" onclick="set_paths(40,-20)"></div>
	<div class="tile" style="left:437px;top:190px" title="20-30S, 50-60E" onclick="set_paths(50,-20)"></div>
	<div class="tile" style="left:456px;top:190px" title="20-30S, 60-70E" onclick="set_paths(60,-20)"></div>
	<div class="tile" style="left:475px;top:190px" title="20-30S, 70-80E" onclick="set_paths(70,-20)"></div>
	<div class="tile" style="left:494px;top:190px" title="20-30S, 80-90E" onclick="set_paths(80,-20)"></div>
	<div class="tile" style="left:513px;top:190px" title="20-30S, 90-100E" onclick="set_paths(90,-20)"></div>
	<div class="tile" style="left:532px;top:190px" title="20-30S, 100-110E" onclick="set_paths(100,-20)"></div>
	<div class="tile" style="left:551px;top:190px" title="20-30S, 110-120E" onclick="set_paths(110,-20)"></div>
	<div class="tile" style="left:570px;top:190px" title="20-30S, 120-130E" onclick="set_paths(120,-20)"></div>
	<div class="tile" style="left:589px;top:190px" title="20-30S, 130-140E" onclick="set_paths(130,-20)"></div>
	<div class="tile" style="left:608px;top:190px" title="20-30S, 140-150E" onclick="set_paths(140,-20)"></div>
	<div class="tile" style="left:627px;top:190px" title="20-30S, 150-160E" onclick="set_paths(150,-20)"></div>
	<div class="tile" style="left:646px;top:190px" title="20-30S, 160-170E" onclick="set_paths(160,-20)"></div>
	<div class="tile" style="left:665px;top:190px" title="20-30S, 170-180E" onclick="set_paths(170,-20)"></div>
	<div class="tile" style="left:0px;top:209px" title="30-40S, 170-180W" onclick="set_paths(-180,-30)"></div>
	<div class="tile" style="left:19px;top:209px" title="30-40S, 160-170W" onclick="set_paths(-170,-30)"></div>
	<div class="tile" style="left:38px;top:209px" title="30-40S, 150-160W" onclick="set_paths(-160,-30)"></div>
	<div class="tile" style="left:57px;top:209px" title="30-40S, 140-150W" onclick="set_paths(-150,-30)"></div>
	<div class="tile" style="left:76px;top:209px" title="30-40S, 130-140W" onclick="set_paths(-140,-30)"></div>
	<div class="tile" style="left:95px;top:209px" title="30-40S, 120-130W" onclick="set_paths(-130,-30)"></div>
	<div class="tile" style="left:114px;top:209px" title="30-40S, 110-120W" onclick="set_paths(-120,-30)"></div>
	<div class="tile" style="left:133px;top:209px" title="30-40S, 100-110W" onclick="set_paths(-110,-30)"></div>
	<div class="tile" style="left:152px;top:209px" title="30-40S, 90-100W" onclick="set_paths(-100,-30)"></div>
	<div class="tile" style="left:171px;top:209px" title="30-40S, 80-90W" onclick="set_paths(-90,-30)"></div>
	<div class="tile" style="left:190px;top:209px" title="30-40S, 70-80W" onclick="set_paths(-80,-30)"></div>
	<div class="tile" style="left:209px;top:209px" title="30-40S, 60-70W" onclick="set_paths(-70,-30)"></div>
	<div class="tile" style="left:228px;top:209px" title="30-40S, 50-60W" onclick="set_paths(-60,-30)"></div>
	<div class="tile" style="left:247px;top:209px" title="30-40S, 40-50W" onclick="set_paths(-50,-30)"></div>
	<div class="tile" style="left:266px;top:209px" title="30-40S, 30-40W" onclick="set_paths(-40,-30)"></div>
	<div class="tile" style="left:285px;top:209px" title="30-40S, 20-30W" onclick="set_paths(-30,-30)"></div>
	<div class="tile" style="left:304px;top:209px" title="30-40S, 10-20W" onclick="set_paths(-20,-30)"></div>
	<div class="tile" style="left:323px;top:209px" title="30-40S, 0-10W" onclick="set_paths(-10,-30)"></div>
	<div class="tile" style="left:342px;top:209px" title="30-40S, 0-10E" onclick="set_paths(0,-30)"></div>
	<div class="tile" style="left:361px;top:209px" title="30-40S, 10-20E" onclick="set_paths(10,-30)"></div>
	<div class="tile" style="left:380px;top:209px" title="30-40S, 20-30E" onclick="set_paths(20,-30)"></div>
	<div class="tile" style="left:399px;top:209px" title="30-40S, 30-40E" onclick="set_paths(30,-30)"></div>
	<div class="tile" style="left:418px;top:209px" title="30-40S, 40-50E" onclick="set_paths(40,-30)"></div>
	<div class="tile" style="left:437px;top:209px" title="30-40S, 50-60E" onclick="set_paths(50,-30)"></div>
	<div class="tile" style="left:456px;top:209px" title="30-40S, 60-70E" onclick="set_paths(60,-30)"></div>
	<div class="tile" style="left:475px;top:209px" title="30-40S, 70-80E" onclick="set_paths(70,-30)"></div>
	<div class="tile" style="left:494px;top:209px" title="30-40S, 80-90E" onclick="set_paths(80,-30)"></div>
	<div class="tile" style="left:513px;top:209px" title="30-40S, 90-100E" onclick="set_paths(90,-30)"></div>
	<div class="tile" style="left:532px;top:209px" title="30-40S, 100-110E" onclick="set_paths(100,-30)"></div>
	<div class="tile" style="left:551px;top:209px" title="30-40S, 110-120E" onclick="set_paths(110,-30)"></div>
	<div class="tile" style="left:570px;top:209px" title="30-40S, 120-130E" onclick="set_paths(120,-30)"></div>
	<div class="tile" style="left:589px;top:209px" title="30-40S, 130-140E" onclick="set_paths(130,-30)"></div>
	<div class="tile" style="left:608px;top:209px" title="30-40S, 140-150E" onclick="set_paths(140,-30)"></div>
	<div class="tile" style="left:627px;top:209px" title="30-40S, 150-160E" onclick="set_paths(150,-30)"></div>
	<div class="tile" style="left:646px;top:209px" title="30-40S, 160-170E" onclick="set_paths(160,-30)"></div>
	<div class="tile" style="left:665px;top:209px" title="30-40S, 170-180E" onclick="set_paths(170,-30)"></div>
	<div class="tile" style="left:0px;top:228px" title="40-50S, 170-180W" onclick="set_paths(-180,-40)"></div>
	<div class="tile" style="left:19px;top:228px" title="40-50S, 160-170W" onclick="set_paths(-170,-40)"></div>
	<div class="tile" style="left:38px;top:228px" title="40-50S, 150-160W" onclick="set_paths(-160,-40)"></div>
	<div class="tile" style="left:57px;top:228px" title="40-50S, 140-150W" onclick="set_paths(-150,-40)"></div>
	<div class="tile" style="left:76px;top:228px" title="40-50S, 130-140W" onclick="set_paths(-140,-40)"></div>
	<div class="tile" style="left:95px;top:228px" title="40-50S, 120-130W" onclick="set_paths(-130,-40)"></div>
	<div class="tile" style="left:114px;top:228px" title="40-50S, 110-120W" onclick="set_paths(-120,-40)"></div>
	<div class="tile" style="left:133px;top:228px" title="40-50S, 100-110W" onclick="set_paths(-110,-40)"></div>
	<div class="tile" style="left:152px;top:228px" title="40-50S, 90-100W" onclick="set_paths(-100,-40)"></div>
	<div class="tile" style="left:171px;top:228px" title="40-50S, 80-90W" onclick="set_paths(-90,-40)"></div>
	<div class="tile" style="left:190px;top:228px" title="40-50S, 70-80W" onclick="set_paths(-80,-40)"></div>
	<div class="tile" style="left:209px;top:228px" title="40-50S, 60-70W" onclick="set_paths(-70,-40)"></div>
	<div class="tile" style="left:228px;top:228px" title="40-50S, 50-60W" onclick="set_paths(-60,-40)"></div>
	<div class="tile" style="left:247px;top:228px" title="40-50S, 40-50W" onclick="set_paths(-50,-40)"></div>
	<div class="tile" style="left:266px;top:228px" title="40-50S, 30-40W" onclick="set_paths(-40,-40)"></div>
	<div class="tile" style="left:285px;top:228px" title="40-50S, 20-30W" onclick="set_paths(-30,-40)"></div>
	<div class="tile" style="left:304px;top:228px" title="40-50S, 10-20W" onclick="set_paths(-20,-40)"></div>
	<div class="tile" style="left:323px;top:228px" title="40-50S, 0-10W" onclick="set_paths(-10,-40)"></div>
	<div class="tile" style="left:342px;top:228px" title="40-50S, 0-10E" onclick="set_paths(0,-40)"></div>
	<div class="tile" style="left:361px;top:228px" title="40-50S, 10-20E" onclick="set_paths(10,-40)"></div>
	<div class="tile" style="left:380px;top:228px" title="40-50S, 20-30E" onclick="set_paths(20,-40)"></div>
	<div class="tile" style="left:399px;top:228px" title="40-50S, 30-40E" onclick="set_paths(30,-40)"></div>
	<div class="tile" style="left:418px;top:228px" title="40-50S, 40-50E" onclick="set_paths(40,-40)"></div>
	<div class="tile" style="left:437px;top:228px" title="40-50S, 50-60E" onclick="set_paths(50,-40)"></div>
	<div class="tile" style="left:456px;top:228px" title="40-50S, 60-70E" onclick="set_paths(60,-40)"></div>
	<div class="tile" style="left:475px;top:228px" title="40-50S, 70-80E" onclick="set_paths(70,-40)"></div>
	<div class="tile" style="left:494px;top:228px" title="40-50S, 80-90E" onclick="set_paths(80,-40)"></div>
	<div class="tile" style="left:513px;top:228px" title="40-50S, 90-100E" onclick="set_paths(90,-40)"></div>
	<div class="tile" style="left:532px;top:228px" title="40-50S, 100-110E" onclick="set_paths(100,-40)"></div>
	<div class="tile" style="left:551px;top:228px" title="40-50S, 110-120E" onclick="set_paths(110,-40)"></div>
	<div class="tile" style="left:570px;top:228px" title="40-50S, 120-130E" onclick="set_paths(120,-40)"></div>
	<div class="tile" style="left:589px;top:228px" title="40-50S, 130-140E" onclick="set_paths(130,-40)"></div>
	<div class="tile" style="left:608px;top:228px" title="40-50S, 140-150E" onclick="set_paths(140,-40)"></div>
	<div class="tile" style="left:627px;top:228px" title="40-50S, 150-160E" onclick="set_paths(150,-40)"></div>
	<div class="tile" style="left:646px;top:228px" title="40-50S, 160-170E" onclick="set_paths(160,-40)"></div>
	<div class="tile" style="left:665px;top:228px" title="40-50S, 170-180E" onclick="set_paths(170,-40)"></div>
	<div class="tile" style="left:0px;top:247px" title="50-60S, 170-180W" onclick="set_paths(-180,-50)"></div>
	<div class="tile" style="left:19px;top:247px" title="50-60S, 160-170W" onclick="set_paths(-170,-50)"></div>
	<div class="tile" style="left:38px;top:247px" title="50-60S, 150-160W" onclick="set_paths(-160,-50)"></div>
	<div class="tile" style="left:57px;top:247px" title="50-60S, 140-150W" onclick="set_paths(-150,-50)"></div>
	<div class="tile" style="left:76px;top:247px" title="50-60S, 130-140W" onclick="set_paths(-140,-50)"></div>
	<div class="tile" style="left:95px;top:247px" title="50-60S, 120-130W" onclick="set_paths(-130,-50)"></div>
	<div class="tile" style="left:114px;top:247px" title="50-60S, 110-120W" onclick="set_paths(-120,-50)"></div>
	<div class="tile" style="left:133px;top:247px" title="50-60S, 100-110W" onclick="set_paths(-110,-50)"></div>
	<div class="tile" style="left:152px;top:247px" title="50-60S, 90-100W" onclick="set_paths(-100,-50)"></div>
	<div class="tile" style="left:171px;top:247px" title="50-60S, 80-90W" onclick="set_paths(-90,-50)"></div>
	<div class="tile" style="left:190px;top:247px" title="50-60S, 70-80W" onclick="set_paths(-80,-50)"></div>
	<div class="tile" style="left:209px;top:247px" title="50-60S, 60-70W" onclick="set_paths(-70,-50)"></div>
	<div class="tile" style="left:228px;top:247px" title="50-60S, 50-60W" onclick="set_paths(-60,-50)"></div>
	<div class="tile" style="left:247px;top:247px" title="50-60S, 40-50W" onclick="set_paths(-50,-50)"></div>
	<div class="tile" style="left:266px;top:247px" title="50-60S, 30-40W" onclick="set_paths(-40,-50)"></div>
	<div class="tile" style="left:285px;top:247px" title="50-60S, 20-30W" onclick="set_paths(-30,-50)"></div>
	<div class="tile" style="left:304px;top:247px" title="50-60S, 10-20W" onclick="set_paths(-20,-50)"></div>
	<div class="tile" style="left:323px;top:247px" title="50-60S, 0-10W" onclick="set_paths(-10,-50)"></div>
	<div class="tile" style="left:342px;top:247px" title="50-60S, 0-10E" onclick="set_paths(0,-50)"></div>
	<div class="tile" style="left:361px;top:247px" title="50-60S, 10-20E" onclick="set_paths(10,-50)"></div>
	<div class="tile" style="left:380px;top:247px" title="50-60S, 20-30E" onclick="set_paths(20,-50)"></div>
	<div class="tile" style="left:399px;top:247px" title="50-60S, 30-40E" onclick="set_paths(30,-50)"></div>
	<div class="tile" style="left:418px;top:247px" title="50-60S, 40-50E" onclick="set_paths(40,-50)"></div>
	<div class="tile" style="left:437px;top:247px" title="50-60S, 50-60E" onclick="set_paths(50,-50)"></div>
	<div class="tile" style="left:456px;top:247px" title="50-60S, 60-70E" onclick="set_paths(60,-50)"></div>
	<div class="tile" style="left:475px;top:247px" title="50-60S, 70-80E" onclick="set_paths(70,-50)"></div>
	<div class="tile" style="left:494px;top:247px" title="50-60S, 80-90E" onclick="set_paths(80,-50)"></div>
	<div class="tile" style="left:513px;top:247px" title="50-60S, 90-100E" onclick="set_paths(90,-50)"></div>
	<div class="tile" style="left:532px;top:247px" title="50-60S, 100-110E" onclick="set_paths(100,-50)"></div>
	<div class="tile" style="left:551px;top:247px" title="50-60S, 110-120E" onclick="set_paths(110,-50)"></div>
	<div class="tile" style="left:570px;top:247px" title="50-60S, 120-130E" onclick="set_paths(120,-50)"></div>
	<div class="tile" style="left:589px;top:247px" title="50-60S, 130-140E" onclick="set_paths(130,-50)"></div>
	<div class="tile" style="left:608px;top:247px" title="50-60S, 140-150E" onclick="set_paths(140,-50)"></div>
	<div class="tile" style="left:627px;top:247px" title="50-60S, 150-160E" onclick="set_paths(150,-50)"></div>
	<div class="tile" style="left:646px;top:247px" title="50-60S, 160-170E" onclick="set_paths(160,-50)"></div>
	<div class="tile" style="left:665px;top:247px" title="50-60S, 170-180E" onclick="set_paths(170,-50)"></div>
</div>
<div id="tilepaths"></div>





--------------------------------------------------------------------------------------------
[//]: <> (Directory for: r.watershed)
# r.watershed
<p>Base and network layers of Hydrography90m: flow accumulation, flow direction, drainage basins, outlets, stream segments, subcatchments,
regional units and depression; Map reference corresponding to Figure 6 for raster visualisation and Figure 5 for vector visualisation;
Unit; Commands for computation and output file names. The asterisk stands for the regular tile ID for downloading the data, available
in 20<sup>o</sup>x 20<sup>o</sup> tiles at https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4</p>

<table style="width:100% background-image= none">
	<tr>
		<th colspan="2" style="font-size: 18px;">Flow Accumulation</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/flow-accumulation.png" alt="accumulation_*.tif" width="300"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Faccumulation_tiles20d" target="_blank"> accumulation_*.tif (raster)</a></li>
				<li><a href="">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Drainage Basin</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/drainage-basin.png" alt="Drainage Basin" width="280"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fbasin_tiles20d" target="_blank"> basin_*.tif (raster)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fbasin_tiles20d" target="_blank">basin_*.gpkg (vector)</a></li>
				<li><a href="https://geo.igb-berlin.de/layers/:geonode:hydrography90m_v1_basin_cog" target="blank">Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Flow Direction</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/flow-direction.png" alt="direction_*.tif" width="280"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fdirection_tiles20d" target="_blank"> direction_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/layers/:geonode:hydrography90m_v1_direction_cog" target="blank">Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Outlets</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/str-seg-outlet.png" alt="Outlets" width="280"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Foutlet_tiles20d" target="_blank"> outlet_*.tif (raster)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Foutlet_tiles20d" target="_blank">outlet_*.gpkg (vector)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Stream Segment</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/str-seg-outlet.png" alt="Stream Segment" width="280"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fsegment_tiles20d" target="_blank"> segment_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Sub-catchment</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/sub-catchment.png" alt="Sub-catchment" width="280"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fsub_catchment_tiles20d" target="_blank">sub_catchment_*.tif (raster)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fsub_catchment_tiles20d" target="_blank">sub_catchment_*.gpkg (vector)</a></li>
				<li><a href="https://geo.igb-berlin.de/layers/:geonode:hydrography90m_v1_sub_catchment_cog" target="blank">Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Depression</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig6/drainage-basin.png" alt="Drainage Basin" width="280"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fdepression_tiles20d" target="_blank"> Depression (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_order_strahler_cog&view=True" target="blank">Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
</table>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[//]: <> (Directory for: r.stream.slope)
# r.stream.slope

<p>Curvature, gradient (elevation difference divided by distance), and elevation difference raster maps computed with the r.stream.slope
GRASS GIS module; map reference corresponding to Figure 11; specific GRASS GIS command; and output layer name.</p>

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px; width: 40%;">Maximum curvature between highest upstream cell, focal cell and downstream cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig11/slope-curv-max-dw-cel.png" alt="slope_curv_max_dw_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_curv_max_dw_cel_tiles20d" target="_blank"> slope_curv_max_dw_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Minimum curvature between lowest upstream cell, focal cell and downstream cell.</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig11/slope-curv-min-dw-cel.png" alt="slope_curv_min_dw_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_curv_min_dw_cel_tiles20d" target="_blank"> slope_curv_min_dw_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal cell and downstream cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig11/slope-elv-dw-cel.png" alt="slope_elv_dw_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_elv_dw_cel_tiles20d" target="_blank"> slope_elv_dw_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Focal cell gradient</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig11/slope-grad-dw-cel.png" alt="slope_grad_dw_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_grad_dw_cel_tiles20d" target="_blank"> slope_grad_dw_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
</table>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[//]: <> (Directory for r.stream.distance)

# r.stream.distance

<p>    Stream/outlet distance and elevation difference raster maps computed with the r.stream.distance GRASS GIS module; map reference
corresponding to Figure 12; unit; GRASS GIS command; and output layer name.</p>

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Shortest upstream distance between focal grid cell and the nearest sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-dist-up-near.png" alt="Shortest upstream distance" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_up_near_tiles20d" target="_blank"> stream_dist_up_near_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Longest upstream distance between focal grid cell and the nearest sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-dist-up-farth.png" alt="Longest upstream distance" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_dw_near_tiles20d" target="_blank"> stream_dist_up_farth_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Distance between focal grid cell and its nearest downstream stream grid cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-dist-dw-near.png" alt="stream_dist_dw_near_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_up_farth_tiles20d" target="_blank"> stream_dist_dw_near_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Distance between focal grid cell and the outlet grid cell in the network</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/outlet-dist-dw-basin.png" alt="outlet_dist_dw_basin_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_dist_dw_basin_tiles20d" target="_blank"> outlet_dist_dw_basin_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Distance between focal grid cell and the downstream stream node grid cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/outlet-dist-dw-scratch.png" alt="outlet_dist_dw_scatch_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_dist_dw_scatch_tiles20d" target="_blank"> outlet_dist_dw_scatch_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Euclidean distance between focal grid cell and the stream network</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-dist-proximity.png" alt="stream_dist_proximity_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_proximity_tiles20d" target="_blank"> stream_dist_proximity_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference of the shortest path from focal grid cell to the sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-dist-up-near.png" alt="stream_diff_up_near_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_up_near_tiles20d" target="_blank"> stream_diff_up_near_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference of the longest path from focal grid cell to the sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-diff-up-farth.png" alt="stream_diff_up_farth_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d" target="_blank"> stream_diff_up_farth_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal grid cell and its nearest downstream stream pixel</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/stream-diff-dw-near.png" alt="stream_diff_dw_near_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_dw_near_tiles20d" target="_blank"> stream_diff_dw_near_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal grid cell and the outlet grid cell in the network</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/outlet-diff-dw-basin.png" alt="outlet_diff_dw_basin_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_diff_dw_basin_tiles20d" target="_blank"> outlet_diff_dw_basin_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal grid cell and the downstream stream node grid cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig12/outlet-diff-dw-scratch.png" alt="outlet_diff_dw_scatch_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_diff_dw_scatch_tiles20d" target="_blank"> outlet_diff_dw_scatch_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
</table>

------------------------------------------------------------------

[//]: <> (Directory for: r.stream.slope)

# r.stream.channel

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment downstream mean gradient between focal cell and the node/outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-grad-dw-seg.png" alt="channel_grad_dw_seg_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_grad_dw_seg_tiles20d" target="_blank"> channel_grad_dw_seg_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment upstream mean gradient between focal cell and the init/node</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-grad-up-seg.png" alt="channel_grad_up_seg_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_grad_up_seg_tiles20d" target="_blank"> channel_grad_up_seg_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Upstream gradient between focal cell and the next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-grad-up-cel.png" alt="channel_grad_up_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_grad_up_cel_tiles20d" target="_blank">channel_grad_up_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Cell stream course curvature of the focal cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-curv-cel.png" alt="channel_curv_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_curv_cel_tiles20d" target="_blank">channel_curv_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment downstream elevation difference between focal cell and the node/outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-elv-dw-seg.png" alt="channel_elv_dw_seg_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_dw_seg_tiles20d" target="_blank">channel_elv_dw_seg_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment upstream elevation difference between focal cell and the init/node</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-elv-up-seg.png" alt="channel_elv_up_seg_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_up_seg_tiles20d" target="_blank">channel_elv_up_seg_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Upstream elevation difference between focal cell and the next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-elv-up-cel.png" alt="channel_elv_up_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_up_cel_tiles20d" target="_blank">channel_elv_up_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Downstream elevation difference between focal cell and the next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-elv-dw-cel.png" alt="channel_elv_dw_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_dw_cel_tiles20d" target="_blank">channel_elv_dw_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment downstream distance between focal cell and the node/outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-dist-dw-seg.png" alt="channel_dist_dw_seg_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_dist_dw_seg_tiles20d" target="_blank">channel_dist_dw_seg_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment upstream distance between focal cell and the init/node</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-dist-up-seg.png" alt="channel_dist_up_seg_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_dist_up_seg_tiles20d" target="_blank">channel_dist_up_seg_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Upstream distance between focal cell and next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig13/channel-dist-up-cel.png" alt="channel_dist_up_cel_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_dist_up_cel_tiles20d" target="_blank">channel_dist_up_cel_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
</table>

------------------------------------------------------------------

[//]: <> (Directory for: r.stream.order)

# r.stream.order
<p>Stream order raster and vector files computed with the r.stream.order GRASS GIS module, the map reference corresponding to
Figure 14, the specific GRASS GIS command and the layer output name.</p>
<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Strahler’s stream order</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig14/stream-strahler.png" alt="stream_strahler_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_strahler_tiles20d" target="_blank">order_strahler_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Shreve’s stream magnitude</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig14/stream-shreve.png" alt="stream_shreve_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_shreve_tiles20d" target="_blank">order_shreve_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Horton’s stream order</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig14/stream-horton.png" alt="stream_horton_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_horton_tiles20d" target="_blank">order_horton_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Hack’s stream order</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig14/stream-hack.png" alt="stream_hack_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_hack_tiles20d" target="_blank">order_hack_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Topological dimension of streams</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig14/stream-topo.png" alt="stream_topo_*.tif" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_topo_tiles20d" target="_blank">order_topo_*.tif (raster)</a></li>
				<li><a href="" target="blank">**NEED** Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">All stream segments and nodes attributes</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/hydrography.org/images/data/hydrography90m/Fig14/vect.png" alt="" width="400"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_vect_tiles20d" target="_blank">order_vect_*.gpkg (vector)</a></li>
			</ul>
		</td>
	</tr>
</table>

## Focal cell gradient
bla bla for r.watershed 

### Straller

Download link

### Henke

Download link

</div>