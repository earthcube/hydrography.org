---
layout: page-fullwidth
classes: wide
title: "Hydrography90m layers"
permalink: "/hydrography90m/hydrography90m_layers"
header:
   image_fullwidth: "hydrography90m/dem_streamOrder1.jpg"
---

Here is an overview of all the current layers of the Hydrography90m dataset.
Please see the paper by [Amatulli et al. (2022)](https://essd.copernicus.org/preprints/essd-2022-9) for further details.  

For each computed layer is reported:
* a figure sample
* the layer file name with an asterisk which stands for the tile ID. The layer file name is a hyperlink that leads to the sub-directory [download page](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4)
* the visualization [webgis link](https://geo.igb-berlin.de/maps/351/view)

---

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
<iframe src="https://geo.igb-berlin.de/maps/351/embed" min-width : 900px ; style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" title="Hydrography90m" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

---

<style>
	table, th, td {border: 0px solid black; background-color: white;}

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
.tile {
  width:34px;
  height:34px;
  border:1px solid #606060;
  display:block;
  position:absolute;
  background-color: rgba(128,128,128,0.01);
}

.tile:hover {
  border:2px solid red;
  z-index:2;
  background-color: rgba(128,128,128,0.01);
}

.tile.selected {
  border:1px solid red;
  opacity: 0.6;
  z-index:2;
  background-color: red;
}

#tilepaths a {
  font-family: monospace;
  font-size: 10px;
}

#tilepaths a:link {
  text-decoration: none;
}

#tilepaths a:visited {
  text-decoration: none;
}

#tilepaths a:hover {
  text-decoration: underline;
}

#tilepaths a:active {
  text-decoration: underline;
}

code {
  font-weight: bold;
}

</style>

<script src="../../pages/hydrography90m/jquery-3.6.0.js" type="text/javascript"></script>

<script>	
	function set_paths(h,v) {
		h = String("00" + h).slice(-2);
		v = String("00" + v).slice(-2);
		
		tile_code = 
		`<div>
			<p><br><b>
			&nbsp&nbsp&nbsp&nbsp&nbsp
			Tile code: h${h}v${v}</b></p>
		</div>`;
		$("#dynamic_tile_code").html(tile_code);

		depression_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdepression_tiles20d&files=depression_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdepression_tiles20d&files=depression_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_depression_link").html(depression_link);

		flow_accumulation_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Faccumulation_tiles20d&files=accumulation_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Faccumulation_tiles20d&files=accumulation_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_accumulation").html(flow_accumulation_link);
		
		flow_direction_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdirection_tiles20d&files=direction_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdirection_tiles20d&files=direction_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_direction").html(flow_direction_link);

drainage_basin_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h${h}v${v}.tif</a><br><br>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h${h}v${v}.gpkg">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h${h}v${v}.gpkg</a><br>
		</div>`;
		$("#dynamic_basin").html(drainage_basin_link);

		stream_segment_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsegment_tiles20d&files=segment_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsegment_tiles20d&files=segment_h${h}v${v}.tif
				</a><br>
		</div>`;
		$("#dynamic_stream_seg").html(stream_segment_link);

		sub_catch_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsub_catchment_tiles20d&files=sub_catchment_h${h}v${v}.tif">https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsub_catchment_tiles20d&files=sub_catchment_h${h}v${v}.tif</a><br><br>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsub_catchment_tiles20d&files=sub_catchment_h${h}v${v}.gpkg">https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsub_catchment_tiles20d&files=sub_catchment_h${h}v${v}.gpkg</a><br>
		</div>`;
		$("#dynamic_sub_catch").html(sub_catch_link);
	
		outlet_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_h${h}v${v}.tif</a><br><br>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_h${h}v${v}.gpkg">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_h${h}v${v}.gpkg</a><br>
		</div>`;
		$("#dynamic_outlet").html(outlet_link);

		slope_curv_max_dw_cel_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_max_dw_cel_tiles20d&files=slope_curv_max_dw_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_max_dw_cel_tiles20d&files=slope_curv_max_dw_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_slope_curv_max_dw_cel").html(slope_curv_max_dw_cel_link);

		slope_curv_min_dw_cel_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_min_dw_cel_tiles20d&files=slope_curv_min_dw_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_min_dw_cel_tiles20d&files=slope_curv_min_dw_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_slope_curv_min_dw_cel_link").html(slope_curv_min_dw_cel_link);

		slope_elv_dw_cel_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_elv_dw_cel_tiles20d&files=slope_elv_dw_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_elv_dw_cel_tiles20d&files=slope_elv_dw_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_slope_elv_dw_cel_link").html(slope_elv_dw_cel_link);

		slope_grad_dw_cel_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_grad_dw_cel_tiles20d&files=slope_grad_dw_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_grad_dw_cel_tiles20d&files=slope_grad_dw_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_slope_grad_dw_cel_link").html(slope_grad_dw_cel_link);

    	stream_dist_up_near_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_near_tiles20d&files=stream_dist_up_near_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_near_tiles20d&files=stream_dist_up_near_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_dist_up_near_link").html(stream_dist_up_near_link);

stream_dist_up_farth_link =
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_farth_tiles20d&files=stream_dist_up_farth_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_farth_tiles20d&files=stream_dist_up_farth_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_dist_up_farth_link").html(stream_dist_up_farth_link);

stream_dist_dw_near_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_dw_near_tiles20d&files=stream_dist_dw_near_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_dw_near_tiles20d&files=stream_dist_dw_near_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_dist_dw_near_link").html(stream_dist_dw_near_link);


outlet_dist_dw_basin_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_basin_tiles20d&files=outlet_dist_dw_basin_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_basin_tiles20d&files=outlet_dist_dw_basin_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_outlet_dist_dw_basin_link").html(outlet_dist_dw_basin_link);

		outlet_dist_dw_scatch_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_scatch_tiles20d&files=outlet_dist_dw_scatch_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_scatch_tiles20d&files=outlet_dist_dw_scatch_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_outlet_dist_dw_scatch_link").html(outlet_dist_dw_scatch_link);

		stream_dist_proximity_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_proximity_tiles20d&files=stream_dist_proximity_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_proximity_tiles20d&files=stream_dist_proximity_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_dist_proximity_link").html(stream_dist_proximity_link);

		stream_diff_up_near_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_near_tiles20d&files=stream_diff_up_near_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_near_tiles20d&files=stream_diff_up_near_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_diff_up_near_link").html(stream_diff_up_near_link);

		stream_diff_up_farth_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d&files=stream_diff_up_farth_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d&files=stream_diff_up_farth_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_diff_up_farth_link").html(stream_diff_up_farth_link);

		stream_diff_dw_near_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_dw_near_tiles20d&files=stream_diff_dw_near_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_dw_near_tiles20d&files=stream_diff_dw_near_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_stream_diff_dw_near_link").html(stream_diff_dw_near_link);

		outlet_diff_dw_basin_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_basin_tiles20d&files=outlet_diff_dw_basin_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_basin_tiles20d&files=outlet_diff_dw_basin_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_outlet_diff_dw_basin_link").html(outlet_diff_dw_basin_link);

		outlet_diff_dw_scatch_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_scatch_tiles20d&files=outlet_diff_dw_scatch_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_scatch_tiles20d&files=outlet_diff_dw_scatch_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_outlet_diff_dw_scatch_link").html(outlet_diff_dw_scatch_link);

		channel_grad_dw_seg_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_dw_seg_tiles20d&files=channel_grad_dw_seg_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_dw_seg_tiles20d&files=channel_grad_dw_seg_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_grad_dw_seg_link").html(channel_grad_dw_seg_link);

		channel_grad_up_seg_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_seg_tiles20d&files=channel_grad_up_seg_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_seg_tiles20d&files=channel_grad_up_seg_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_grad_up_seg_link").html(channel_grad_up_seg_link);

		channel_grad_up_cel_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_cel_tiles20d&files=channel_grad_up_cel_h00v00.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_cel_tiles20d&files=channel_grad_up_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_grad_up_cel_link").html(channel_grad_up_cel_link);

		channel_curv_cel_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_curv_cel_tiles20d&files=channel_curv_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_curv_cel_tiles20d&files=channel_curv_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_curv_cel_link").html(channel_curv_cel_link);

		channel_elv_dw_seg_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_seg_tiles20d&files=channel_elv_dw_seg_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_seg_tiles20d&files=channel_elv_dw_seg_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_elv_dw_seg_link").html(channel_elv_dw_seg_link);

		channel_elv_up_seg_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_seg_tiles20d&files=channel_elv_up_seg_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_seg_tiles20d&files=channel_elv_up_seg_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_elv_up_seg_link").html(channel_elv_up_seg_link);

		channel_elv_up_cel_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_cel_tiles20d&files=channel_elv_up_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_cel_tiles20d&files=channel_elv_up_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_elv_up_cel_link").html(channel_elv_up_cel_link);

		channel_elv_dw_cel_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_cel_tiles20d&files=channel_elv_dw_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_cel_tiles20d&files=channel_elv_dw_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_elv_dw_cel_link").html(channel_elv_dw_cel_link);

		channel_dist_dw_seg_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_dw_seg_tiles20d&files=channel_dist_dw_seg_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_dw_seg_tiles20d&files=channel_dist_dw_seg_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_dist_dw_seg_link").html(channel_dist_dw_seg_link);

		channel_dist_up_seg_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_seg_tiles20d&files=channel_dist_up_seg_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_seg_tiles20d&files=channel_dist_up_seg_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_dist_up_seg_link").html(channel_dist_up_seg_link);

		channel_dist_up_cel_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_cel_tiles20d&files=channel_dist_up_cel_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_cel_tiles20d&files=channel_dist_up_cel_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_channel_dist_up_cel_link").html(channel_dist_up_cel_link);

		order_strahler_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_strahler_tiles20d&files=order_strahler_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_strahler_tiles20d&files=order_strahler_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_order_strahler_link").html(order_strahler_link);

		order_shreve_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_shreve_tiles20d&files=order_shreve_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_shreve_tiles20d&files=order_shreve_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_order_shreve_link").html(order_shreve_link);

		order_horton_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_horton_tiles20d&files=order_horton_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_horton_tiles20d&files=order_horton_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_order_horton_link").html(order_horton_link);

		order_hack_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_hack_tiles20d&files=order_hack_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_hack_tiles20d&files=order_hack_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_order_hack_link").html(order_hack_link);

		order_topo_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_topo_tiles20d&files=order_topo_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_topo_tiles20d&files=order_topo_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_order_topo_link").html(order_topo_link);

		order_vect_point_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_h${h}v${v}.gpkg">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_h${h}v${v}.gpkg</a><br><br>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_h${h}v${v}.gpkg">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_h${h}v${v}.gpkg</a><br>
		</div>`;
		$("#dynamic_order_vect_point_link").html(order_vect_point_link);

		spi_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fspi_tiles20d&files=spi_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fspi_tiles20d&files=spi_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_spi_link").html(spi_link);

		sti_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fsti_tiles20d&files=sti_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fsti_tiles20d&files=sti_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_sti_link").html(sti_link);

		cti_link = 
		`<div>
			<a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fcti_tiles20d&files=cti_h${h}v${v}.tif">
				https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fcti_tiles20d&files=cti_h${h}v${v}.tif</a><br>
		</div>`;
		$("#dynamic_cti_link").html(cti_link);


	};

	$(function() {
		$(".tile").on("click", function() {
			$(".tile").removeClass("selected");
			$(this).addClass("selected");
		});
	});
</script>


<div class="row">
<div class="medium-4 medium-push-9 columns" markdown="1">
<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>
</div><!-- /.medium-4.columns -->

<div class="medium-8 medium-pull-4 columns" markdown="1">


# Tile map

Click below on the tiled map to get the download link or use the script [here](/hydrography90m/hydrography90m_download_script) to dowloand the full data archive.  
In case of downloading multiple tiles and you want merge them use the script [here](/hydrography90m/hydrography90m_mergetile_script) 

<div class="mapTileDownloadContainer">
	<div class="mapTileDownloadBaseLayer"><img width="750" height="300" src="../../images/hydrography90m/basins_noTiles.png" /></div>
	<!-- Row 0 -->
	<div class="tile" style="left:36px;top:32px" title="h00v00" onclick="set_paths(00,00)"></div>
	<div class="tile" style="left:70px;top:32px;width:35px" title="h02v00" onclick="set_paths(02,00)"></div>
	<div class="tile" style="left:104px;top:32px" title="h04v00" onclick="set_paths(04,00)"></div>
	<div class="tile" style="left:138px;top:32px" title="h06v00" onclick="set_paths(06,00)"></div>
	<div class="tile" style="left:172px;top:32px" title="h08v00" onclick="set_paths(08,00)"></div>
	<div class="tile" style="left:206px;top:32px" title="h10v00" onclick="set_paths(10,00)"></div>
	<div class="tile" style="left:240px;top:32px" title="h12v00" onclick="set_paths(12,00)"></div>	
	<div class="tile" style="left:274px;top:32px" title="h14v00" onclick="set_paths(14,00)"></div>	
	<div class="tile" style="left:308px;top:32px" title="h16v00" onclick="set_paths(16,00)"></div>
	<div class="tile" style="left:342px;top:32px" title="h18v00" onclick="set_paths(18,00)"></div>
	<div class="tile" style="left:376px;top:32px" title="h20v00" onclick="set_paths(20,00)"></div>
	<div class="tile" style="left:410px;top:32px" title="h22v00" onclick="set_paths(22,00)"></div>
	<div class="tile" style="left:444px;top:32px" title="h24v00" onclick="set_paths(24,00)"></div>
	<div class="tile" style="left:478px;top:32px" title="h26v00" onclick="set_paths(26,00)"></div>
	<div class="tile" style="left:512px;top:32px" title="h28v00" onclick="set_paths(28,00)"></div>
	<div class="tile" style="left:546px;top:32px" title="h30v00" onclick="set_paths(30,00)"></div>
	<div class="tile" style="left:580px;top:32px" title="h32v00" onclick="set_paths(32,00)"></div>
	<div class="tile" style="left:614px;top:32px;width:49px" title="h34v00" onclick="set_paths(34,00)"></div>
	<!-- Row 1 -->
	<div class="tile" style="left:36px;top:66px" title="h00v02" onclick="set_paths(00,02)"></div>
	<div class="tile" style="left:70px;top:66px;width:35px" title="h02v02" onclick="set_paths(02,02)"></div>
	<div class="tile" style="left:104px;top:66px" title="h04v02" onclick="set_paths(04,02)"></div>
	<div class="tile" style="left:138px;top:66px" title="h06v02" onclick="set_paths(06,02)"></div>
	<div class="tile" style="left:172px;top:66px" title="h08v02" onclick="set_paths(08,02)"></div>
	<div class="tile" style="left:206px;top:66px" title="h10v02" onclick="set_paths(10,02)"></div>
	<div class="tile" style="left:240px;top:66px" title="h12v02" onclick="set_paths(12,02)"></div>	
	<div class="tile" style="left:274px;top:66px" title="h14v02" onclick="set_paths(14,02)"></div>	
	<div class="tile" style="left:308px;top:66px" title="h16v02" onclick="set_paths(16,02)"></div>
	<div class="tile" style="left:342px;top:66px" title="h18v02" onclick="set_paths(18,02)"></div>
	<div class="tile" style="left:376px;top:66px" title="h20v02" onclick="set_paths(20,02)"></div>
	<div class="tile" style="left:410px;top:66px" title="h22v02" onclick="set_paths(22,02)"></div>
	<div class="tile" style="left:444px;top:66px" title="h24v02" onclick="set_paths(24,02)"></div>
	<div class="tile" style="left:478px;top:66px" title="h26v02" onclick="set_paths(26,02)"></div>
	<div class="tile" style="left:512px;top:66px" title="h28v02" onclick="set_paths(28,02)"></div>
	<div class="tile" style="left:546px;top:66px" title="h30v02" onclick="set_paths(30,02)"></div>
	<div class="tile" style="left:580px;top:66px" title="h32v02" onclick="set_paths(32,02)"></div>
	<div class="tile" style="left:614px;top:66px;width:49px" title="h34v02" onclick="set_paths(34,02)"></div>
	<!-- Row 2 -->
	<div class="tile" style="left:36px;top:100px" title="h00v04" onclick="set_paths(00,04)"></div>
	<div class="tile" style="left:104px;top:100px" title="h04v04" onclick="set_paths(04,04)"></div>
	<div class="tile" style="left:138px;top:100px" title="h06v04" onclick="set_paths(06,04)"></div>
	<div class="tile" style="left:172px;top:100px" title="h08v04" onclick="set_paths(08,04)"></div>
	<div class="tile" style="left:206px;top:100px" title="h10v04" onclick="set_paths(10,04)"></div>
	<div class="tile" style="left:240px;top:100px" title="h12v04" onclick="set_paths(12,04)"></div>	
	<div class="tile" style="left:274px;top:100px" title="h14v04" onclick="set_paths(14,04)"></div>	
	<div class="tile" style="left:308px;top:100px" title="h16v04" onclick="set_paths(16,04)"></div>
	<div class="tile" style="left:342px;top:100px" title="h18v04" onclick="set_paths(18,04)"></div>
	<div class="tile" style="left:376px;top:100px" title="h20v04" onclick="set_paths(20,04)"></div>
	<div class="tile" style="left:410px;top:100px" title="h22v04" onclick="set_paths(22,04)"></div>
	<div class="tile" style="left:444px;top:100px" title="h24v04" onclick="set_paths(24,04)"></div>
	<div class="tile" style="left:478px;top:100px" title="h26v04" onclick="set_paths(26,04)"></div>
	<div class="tile" style="left:512px;top:100px" title="h28v04" onclick="set_paths(28,04)"></div>
	<div class="tile" style="left:546px;top:100px" title="h30v04E" onclick="set_paths(30,04)"></div>
	<div class="tile" style="left:580px;top:100px" title="h32v04" onclick="set_paths(32,04)"></div>
	<!-- Row 3 -->
	<div class="tile" style="left:36px;top:134px" title="h00v06" onclick="set_paths(00,06)"></div>
	<div class="tile" style="left:70px;top:134px;width:35px" title="h02v06" onclick="set_paths(02,06)"></div>
	<div class="tile" style="left:138px;top:134px" title="h06v06" onclick="set_paths(06,06)"></div>
	<div class="tile" style="left:172px;top:134px" title="h08v06" onclick="set_paths(08,06)"></div>
	<div class="tile" style="left:206px;top:134px" title="h10v06" onclick="set_paths(10,06)"></div>
	<div class="tile" style="left:240px;top:134px" title="h12v06" onclick="set_paths(12,06)"></div>	
	<div class="tile" style="left:274px;top:134px" title="h14v06" onclick="set_paths(14,06)"></div>	
	<div class="tile" style="left:308px;top:134px" title="h16v06" onclick="set_paths(16,06)"></div>
	<div class="tile" style="left:342px;top:134px" title="h18v06" onclick="set_paths(18,06)"></div>
	<div class="tile" style="left:376px;top:134px" title="h20v06" onclick="set_paths(20,06)"></div>
	<div class="tile" style="left:410px;top:134px" title="h22v06" onclick="set_paths(22,06)"></div>
	<div class="tile" style="left:444px;top:134px" title="h24v06" onclick="set_paths(24,06)"></div>
	<div class="tile" style="left:478px;top:134px" title="h26v06" onclick="set_paths(26,06)"></div>
	<div class="tile" style="left:512px;top:134px" title="h28v06" onclick="set_paths(28,06)"></div>
	<div class="tile" style="left:546px;top:134px" title="h30v06" onclick="set_paths(30,06)"></div>
	<div class="tile" style="left:580px;top:134px" title="h32v06" onclick="set_paths(32,06)"></div>
	<div class="tile" style="left:614px;top:134px;width:33px" title="h34v06" onclick="set_paths(34,06)"></div>
	<!-- Row 4 -->
	<div class="tile" style="left:36px;top:168px" title="h00v08" onclick="set_paths(00,08)"></div>
	<div class="tile" style="left:70px;top:168px;width:35px" title="h02v08" onclick="set_paths(02,08)"></div>
	<div class="tile" style="left:104px;top:168px" title="h04v08" onclick="set_paths(04,08)"></div>
	<div class="tile" style="left:172px;top:168px" title="h08v08" onclick="set_paths(08,08)"></div>
	<div class="tile" style="left:206px;top:168px" title="h10v08" onclick="set_paths(10,08)"></div>
	<div class="tile" style="left:240px;top:168px" title="h12v08" onclick="set_paths(12,08)"></div>	
	<div class="tile" style="left:274px;top:168px" title="h14v08" onclick="set_paths(14,08)"></div>	
	<div class="tile" style="left:308px;top:168px" title="h16v08" onclick="set_paths(16,08)"></div>
	<div class="tile" style="left:342px;top:168px" title="h18v08" onclick="set_paths(18,08)"></div>
	<div class="tile" style="left:376px;top:168px" title="h20v08" onclick="set_paths(20,08)"></div>
	<div class="tile" style="left:410px;top:168px" title="h22v08" onclick="set_paths(22,08)"></div>
	<div class="tile" style="left:444px;top:168px" title="h24v08" onclick="set_paths(24,08)"></div>
	<div class="tile" style="left:478px;top:168px" title="h26v08" onclick="set_paths(26,08)"></div>
	<div class="tile" style="left:512px;top:168px" title="h28v08" onclick="set_paths(28,08)"></div>
	<div class="tile" style="left:546px;top:168px" title="h30v08" onclick="set_paths(30,08)"></div>
	<div class="tile" style="left:580px;top:168px" title="h32v08" onclick="set_paths(32,08)"></div>
	<div class="tile" style="left:614px;top:168px;width:33px" title="h34v08" onclick="set_paths(34,08)"></div>
	<!-- Row 5 -->
	<div class="tile" style="left:36px;top:202px" title="h00v10" onclick="set_paths(00,10)"></div>
	<div class="tile" style="left:70px;top:202px;width:35px" title="h02v10" onclick="set_paths(02,10)"></div>
	<div class="tile" style="left:104px;top:202px" title="h04v10" onclick="set_paths(04,10)"></div>
	<div class="tile" style="left:138px;top:202px" title="h06v10" onclick="set_paths(06,10)"></div>
	<div class="tile" style="left:172px;top:202px" title="h08v10" onclick="set_paths(08,10)"></div>
	<div class="tile" style="left:206px;top:202px" title="h10v10" onclick="set_paths(10,10)"></div>
	<div class="tile" style="left:240px;top:202px" title="h12v10" onclick="set_paths(12,10)"></div>	
	<div class="tile" style="left:274px;top:202px" title="h14v10" onclick="set_paths(14,10)"></div>	
	<div class="tile" style="left:308px;top:202px" title="h16v10" onclick="set_paths(16,10)"></div>
	<div class="tile" style="left:342px;top:202px" title="h18v10" onclick="set_paths(18,10)"></div>
	<div class="tile" style="left:376px;top:202px" title="h20v10" onclick="set_paths(20,10)"></div>
	<div class="tile" style="left:410px;top:202px" title="h22v10" onclick="set_paths(22,10)"></div>
	<div class="tile" style="left:444px;top:202px" title="h24v10" onclick="set_paths(24,10)"></div>
	<div class="tile" style="left:512px;top:202px" title="h28v10" onclick="set_paths(28,10)"></div>
	<div class="tile" style="left:546px;top:202px" title="h30v10" onclick="set_paths(30,10)"></div>
	<div class="tile" style="left:580px;top:202px" title="h32v10" onclick="set_paths(32,10)"></div>
	<div class="tile" style="left:614px;top:202px;width:33px" title="h34v10" onclick="set_paths(34,10)"></div>
	<!-- Row 6 -->
	<div class="tile" style="left:36px;top:236px;height:42px" title="h00v12" onclick="set_paths(00,12)"></div>
	<div class="tile" style="left:206px;top:236px;height:42px" title="h10v12" onclick="set_paths(10,12)"></div>
	<div class="tile" style="left:240px;top:236px;height:42px" title="h12v12" onclick="set_paths(12,12)"></div>	
	<div class="tile" style="left:274px;top:236px;height:42px" title="h14v12" onclick="set_paths(14,12)"></div>	
	<div class="tile" style="left:308px;top:236px;height:42px" title="h16v12" onclick="set_paths(16,12)"></div>
	<div class="tile" style="left:342px;top:236px;height:42px" title="h18v12" onclick="set_paths(18,12)"></div>
	<div class="tile" style="left:376px;top:236px;height:42px" title="h20v12" onclick="set_paths(20,12)"></div>
	<div class="tile" style="left:410px;top:236px;height:42px" title="h22v12" onclick="set_paths(22,12)"></div>
	<div class="tile" style="left:444px;top:236px;height:42px" title="h24v12" onclick="set_paths(24,12)"></div>
	<div class="tile" style="left:512px;top:236px;height:42px" title="h28v12" onclick="set_paths(28,12)"></div>
	<div class="tile" style="left:546px;top:236px;height:42px" title="h30v12" onclick="set_paths(30,12)"></div>
	<div class="tile" style="left:580px;top:236px;height:42px" title="h32v12" onclick="set_paths(32,12)"></div>
	<div class="tile" style="left:614px;top:236px;width:33px;height:42px" title="h34v12" onclick="set_paths(34,02)"></div>
</div>


<div id="tilepaths"></div>

 <div id="dynamic_tile_code"></div>


----------------------------------------------------------------------------------------------

# Input layers
Input layers to derive the Hydrography90m: MERIT HYDRO DEM, depression.
The [MERIT HYDRO DEM](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2019WR024873) can be directly download from the official [MERIT HYDRO webpage](http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_Hydro/)
The depression layer is stored at [r.watershed](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed) archive folder directory.

<table style="width:100% background-image= none">
	<tr>
		<th colspan="2" style="font-size: 25px;">Elevation</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig6/elevation.png" alt="elv_*.tif" width="320" />
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_Hydro/" target="_blank"> elv_*.tif (raster)</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 25px;">Depression</th>
	</tr>
	<tr>
		<th>Depression areas not present in the study area.</th>
		<td><br><br>
			<ul>
			      <li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fdepression_tiles20d" target="_blank"> depression_*.tif (raster)</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_depression_link"></div></td>
	</tr>

</table>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[//]: <> (Directory for: r.watershed)
# Base layers
Base layers of Hydrography90m: flow accumulation, flow direction maps computed with the *r.watershed* GRASS GIS module. 
These files are stored in the [r.watershed](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed) archive folder directory.
<br>


<table style="width:100% background-image= none">
	<tr>
		<th colspan="2" style="font-size: 25px;">Flow accumulation</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig6/flow-accumulation.png" alt="accumulation_*.tif" width="320" />
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Faccumulation_tiles20d" target="_blank"> accumulation_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_accumulation_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_accumulation"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 25px;">Flow direction</th>
	</tr>
	<tr>
		<td rowspan="1">
			<embed src="/images/hydrography90m/layer_images/Fig6/flow-direction.png" alt="direction_*.tif" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fdirection_tiles20d" target="_blank"> direction_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_direction_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_direction"></div></td>
	</tr>

</table>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[//]: <> (Directory for: r.watershed)
# Network layers
Network layers of Hydrography90m: drainage basins, stream segments, subcatchments, outlets maps computed with the *r.stream.extract* GRASS GIS module. 
These files are stored in the [r.watershed](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed) archive folder directory.

<table style="width:100% background-image= none">
	<tr>
		<th colspan="2" style="font-size: 25px;">Drainage basin</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig6/drainage-basin.png" alt="Drainage basin" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fbasin_tiles20d" target="_blank">basin_*.tif (raster)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fbasin_tiles20d" target="_blank">basin_*.gpkg (vector)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_basin_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_basin"></div></td>
	</tr>
    <tr>
		<th colspan="2" style="font-size: 25px;">Stream segment</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig6/str-seg-outlet.png" alt="Stream segment" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fsegment_tiles20d" target="_blank"> segment_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_segment_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_stream_seg"></div></td>
	</tr>
    <tr>
		<th colspan="2" style="font-size: 25px;">Sub-catchment</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig6/sub-catchment.png" alt="Sub-catchment" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fsub_catchment_tiles20d" target="_blank">sub_catchment_*.tif (raster)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Fsub_catchment_tiles20d" target="_blank">sub_catchment_*.gpkg (vector)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_sub_catchment_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_sub_catch"></div></td>
	</tr>
    <tr>
		<th colspan="2" style="font-size: 25px;">Outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig6/str-seg-outlet.png" alt="Outlet" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Foutlet_tiles20d" target="_blank"> outlet_*.tif (raster)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.watershed%2Foutlet_tiles20d" target="_blank"> outlet_*.gpkg (vector)</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_outlet"></div></td>
	</tr>

</table>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------


[//]: <> (Directory for: r.stream.slope)
# Stream slope layers

Stream slope of Hydrography90m: curvature, gradient (elevation difference divided by distance), and elevation difference raster maps computed with the *r.stream.slope* GRASS GIS module. 
These files are stored in the [r.stream.slope](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope) archive folder.

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Maximum curvature between highest upstream cell, focal cell and downstream cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig11/slope-curv-max-dw-cel.png" alt="slope_curv_max_dw_cel_*.tif" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_curv_max_dw_cel_tiles20d" target="_blank"> slope_curv_max_dw_cel_*.tif (raster)</a></li>
			<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_slope_curv_max_dw_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_slope_curv_max_dw_cel"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Minimum curvature between lowest upstream cell, focal cell and downstream cell.</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig11/slope-curv-min-dw-cel.png" alt="slope_curv_min_dw_cel_*.tif" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_curv_min_dw_cel_tiles20d" target="_blank"> slope_curv_min_dw_cel_*.tif (raster)</a></li>
			<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_slope_curv_min_dw_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_slope_curv_min_dw_cel_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal cell and downstream cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig11/slope-elv-dw-cel.png" alt="slope_elv_dw_cel_*.tif" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_elv_dw_cel_tiles20d" target="_blank"> slope_elv_dw_cel_*.tif (raster)</a></li>
			<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_slope_elv_dw_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_slope_elv_dw_cel_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Focal cell gradient</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig11/slope-grad-dw-cel.png" alt="slope_grad_dw_cel_*.tif" width="320"/>
		</td>
		<td><br><br><br><br>
			<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.slope%2Fslope_grad_dw_cel_tiles20d" target="_blank"> slope_grad_dw_cel_*.tif (raster)</a></li>
			<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_slope_grad_dw_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_slope_grad_dw_cel_link"></div></td>
	</tr>
</table>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------

[//]: <> (Directory for r.stream.distance)

# Stream distance layers
Stream/outlet distance of Hydrography90m: stream/outlet distance and elevation difference raster maps computed with the *r.stream.distance* GRASS GIS module. 
These files are stored in the [r.stream.distance](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance) archive folder.


<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Shortest upstream distance between focal grid cell and the nearest sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-dist-up-near.png" alt="Shortest upstream distance" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_up_near_tiles20d" target="_blank"> stream_dist_up_near_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_dist_up_near_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_stream_dist_up_near_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Longest upstream distance between focal grid cell and the nearest sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-dist-up-farth.png" alt="Longest upstream distance" width="330"/>
		</td>
		<td><br><br><br><br>
		<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d" target="_blank"> stream_dist_up_farth_*.tif (raster)</a></li>
			<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_dist_dw_near_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_stream_dist_up_farth_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Distance between focal grid cell and its nearest downstream stream grid cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-dist-dw-near.png" alt="stream_dist_dw_near_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_up_farth_tiles20d" target="_blank"> stream_dist_dw_near_*.tif (raster)</a></li>
        	<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_dist_up_farth_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>	
		<td colspan="2"><div id="dynamic_stream_dist_dw_near_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">****Distance between focal grid cell and the outlet grid cell in the network</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/outlet-dist-dw-basin.png" alt="outlet_dist_dw_basin_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_dist_dw_basin_tiles20d" target="_blank"> outlet_dist_dw_basin_*.tif (raster)</a></li>
                <li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_outlet_dist_dw_basin_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_outlet_dist_dw_basin_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Distance between focal grid cell and the downstream stream node grid cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/outlet-dist-dw-scratch.png" alt="outlet_dist_dw_scatch_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_dist_dw_scatch_tiles20d" target="_blank"> outlet_dist_dw_scatch_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_outlet_dist_dw_scatch_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_outlet_dist_dw_scatch_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Euclidean distance between focal grid cell and the stream network</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-dist-proximity.png" alt="stream_dist_proximity_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_dist_proximity_tiles20d" target="_blank"> stream_dist_proximity_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_outlet_dist_proximity_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_stream_dist_proximity_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference of the shortest path from focal grid cell to the sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-dist-up-near.png" alt="stream_diff_up_near_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_up_near_tiles20d" target="_blank"> stream_diff_up_near_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_outlet_dist_dw_scatch_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_stream_diff_up_near_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference of the longest path from focal grid cell to the sub-catchment drainage divide</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-diff-up-farth.png" alt="stream_diff_up_farth_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d" target="_blank"> stream_diff_up_farth_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_diff_up_farth_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_stream_diff_up_farth_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal grid cell and its nearest downstream stream pixel</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/stream-diff-dw-near.png" alt="stream_diff_dw_near_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Fstream_diff_dw_near_tiles20d" target="_blank"> stream_diff_dw_near_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_diff_dw_near_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_stream_diff_dw_near_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal grid cell and the outlet grid cell in the network</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/outlet-diff-dw-basin.png" alt="outlet_diff_dw_basin_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
			<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_diff_dw_basin_tiles20d" target="_blank"> outlet_diff_dw_basin_*.tif (raster)</a></li>
			<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_outlet_diff_dw_basin_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_outlet_diff_dw_basin_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Elevation difference between focal grid cell and the downstream stream node grid cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig12/outlet-diff-dw-scratch.png" alt="outlet_diff_dw_scatch_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.distance%2Foutlet_diff_dw_scatch_tiles20d" target="_blank"> outlet_diff_dw_scatch_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_outlet_diff_dw_scatch_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_outlet_diff_dw_scatch_link"></div></td>
	</tr>
</table>

------------------------------------------------------------------

[//]: <> (Directory for: r.stream.channel)

# Stream segment properties layers
Stream segment properties of Hydrography90m: curvature, gradient (elevation difference divided by distance), and elevation change
raster maps computed with the *r.stream.channel* GRASS GIS module. 
These files are stored in the [r.stream.channel](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel) archive folder.

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment downstream mean gradient between focal cell and the node/outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-grad-dw-seg.png" alt="channel_grad_dw_seg_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_grad_dw_seg_tiles20d" target="_blank"> channel_grad_dw_seg_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_grad_dw_seg_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	 <tr>
		<td colspan="2"><div id="dynamic_channel_grad_dw_seg_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment upstream mean gradient between focal cell and the init/node</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-grad-up-seg.png" alt="channel_grad_up_seg_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_grad_up_seg_tiles20d" target="_blank"> channel_grad_up_seg_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_grad_up_seg_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_grad_up_seg_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Upstream gradient between focal cell and the next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-grad-up-cel.png" alt="channel_grad_up_cel_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_grad_up_cel_tiles20d" target="_blank">channel_grad_up_cel_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_grad_up_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_grad_up_cel_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Cell stream course curvature of the focal cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-curv-cel.png" alt="channel_curv_cel_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_curv_cel_tiles20d" target="_blank">channel_curv_cel_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_curv_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_curv_cel_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment downstream elevation difference between focal cell and the node/outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-elv-dw-seg.png" alt="channel_elv_dw_seg_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_dw_seg_tiles20d" target="_blank">channel_elv_dw_seg_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_elv_dw_seg_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_elv_dw_seg_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment upstream elevation difference between focal cell and the init/node</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-elv-up-seg.png" alt="channel_elv_up_seg_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_up_seg_tiles20d" target="_blank">channel_elv_up_seg_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_elv_up_seg_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_elv_up_seg_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Upstream elevation difference between focal cell and the next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-elv-up-cel.png" alt="channel_elv_up_cel_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_up_cel_tiles20d" target="_blank">channel_elv_up_cel_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_elv_up_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_elv_up_cel_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Downstream elevation difference between focal cell and the next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-elv-dw-cel.png" alt="channel_elv_dw_cel_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_elv_dw_cel_tiles20d" target="_blank">channel_elv_dw_cel_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_elv_dw_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_elv_dw_cel_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment downstream distance between focal cell and the node/outlet</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-dist-dw-seg.png" alt="channel_dist_dw_seg_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_dist_dw_seg_tiles20d" target="_blank">channel_dist_dw_seg_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_dist_dw_seg_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_channel_dist_dw_seg_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Segment upstream distance between focal cell and the init/node</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-dist-up-seg.png" alt="channel_dist_up_seg_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_dist_up_seg_tiles20d" target="_blank">channel_dist_up_seg_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_dist_up_seg_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
    <tr>
		<td colspan="2"><div id="dynamic_channel_dist_up_seg_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Upstream distance between focal cell and next cell</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig13/channel-dist-up-cel.png" alt="channel_dist_up_cel_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
		<ul>
		<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.channel%2Fchannel_dist_up_cel_tiles20d" target="_blank">channel_dist_up_cel_*.tif (raster)</a></li>
		<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_channel_dist_up_cel_cog&view=True" target="_blank" > Raster layer visualization</a></li>
		</ul>
		</td>
	</tr>
    <tr>
		<td colspan="2"><div id="dynamic_channel_dist_up_cel_link"></div></td>
	</tr>
</table>

------------------------------------------------------------------

[//]: <> (Directory for: r.stream.order)

# Stream order layers
Stream order of Hydrography90m: stream order raster and vector files computed with the *r.stream.order* GRASS GIS module.
These files are stored in the [r.stream.order](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order) archive folder.

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Strahler’s stream order</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig14/stream-strahler.png" alt="stream_strahler_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_strahler_tiles20d" target="_blank">order_strahler_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_strahler_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_order_strahler_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Shreve’s stream magnitude</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig14/stream-shreve.png" alt="stream_shreve_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_shreve_tiles20d" target="_blank">order_shreve_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_shreve_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_order_shreve_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Horton’s stream order</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig14/stream-horton.png" alt="stream_horton_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_horton_tiles20d" target="_blank">order_horton_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_horton_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_order_horton_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Hack’s stream order</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig14/stream-hack.png" alt="stream_hack_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_hack_tiles20d" target="_blank">order_hack_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_hack_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	    <tr>
		<td colspan="2"><div id="dynamic_order_hack_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Topological dimension of streams</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig14/stream-topo.png" alt="stream_topo_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_topo_tiles20d" target="_blank">order_topo_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_stream_topo_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_order_topo_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">All stream segments and nodes attributes</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig14/vect.png" alt="" width="410"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_vect_tiles20d" target="_blank">order_vect_point_*.gpkg (vector)</a></li>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fr.stream.order%2Forder_vect_tiles20d" target="_blank">order_vect_segment_*.gpkg (vector)</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_order_vect_point_link"></div></td>
	</tr>
</table>

------------------------------------------------------------------

[//]: <> (Directory for: flow.index)

# Flow index layers
Flow index of Hydrography90m:  flow index computed using flow accumulation and terrain slope.
These files are stored in the [flow.index](https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fflow.index) archive folder.

<table style="width:100%">
	<tr>
		<th colspan="2" style="font-size: 18px;">Stream power index</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig15/spi.png" alt="spi_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fflow.index%2Fspi_tiles20d" target="_blank">spi_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_spi_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_spi_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Stream transportation index (sti)</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig15/sti.png" alt="sti_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fflow.index%2Fsti_tiles20d" target="_blank">sti_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_sti_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_sti_link"></div></td>
	</tr>
	<tr>
		<th colspan="2" style="font-size: 18px;">Compound topographic index</th>
	</tr>
	<tr>
		<td rowspan="1">
			<img src="/images/hydrography90m/layer_images/Fig15/cti.png" alt="cti_*.tif" width="325"/>
		</td>
		<td><br><br><br><br>
			<ul>
				<li><a href="https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4?path=%2Fflow.index%2Fcti_tiles20d" target="_blank">cti_*.tif (raster)</a></li>
				<li><a href="https://geo.igb-berlin.de/maps/new?layer=geonode:hydrography90m_v1_cti_cog&view=True" target="_blank" > Raster layer visualization</a></li>
			</ul>
		</td>
	</tr>
	<tr>
		<td colspan="2"><div id="dynamic_cti_link"></div></td>
	</tr>

</table>

