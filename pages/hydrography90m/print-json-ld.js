const baseUrls = [
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdepression_tiles20d&files=depression_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Faccumulation_tiles20d&files=accumulation_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fdirection_tiles20d&files=direction_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fbasin_tiles20d&files=basin_h${h}v${v}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsegment_tiles20d&files=segment_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Fsub_catchment_tiles20d&files=sub_catchment_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.watershed%2Foutlet_tiles20d&files=outlet_h${h}v${v}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_max_dw_cel_tiles20d&files=slope_curv_max_dw_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_curv_min_dw_cel_tiles20d&files=slope_curv_min_dw_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_elv_dw_cel_tiles20d&files=slope_elv_dw_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.slope%2Fslope_grad_dw_cel_tiles20d&files=slope_grad_dw_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_near_tiles20d&files=stream_dist_up_near_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_up_farth_tiles20d&files=stream_dist_up_farth_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_dw_near_tiles20d&files=stream_dist_dw_near_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_basin_tiles20d&files=outlet_dist_dw_basin_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_dist_dw_scatch_tiles20d&files=outlet_dist_dw_scatch_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_dist_proximity_tiles20d&files=stream_dist_proximity_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_near_tiles20d&files=stream_diff_up_near_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_up_farth_tiles20d&files=stream_diff_up_farth_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Fstream_diff_dw_near_tiles20d&files=stream_diff_dw_near_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_basin_tiles20d&files=outlet_diff_dw_basin_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.distance%2Foutlet_diff_dw_scatch_tiles20d&files=outlet_diff_dw_scatch_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_dw_seg_tiles20d&files=channel_grad_dw_seg_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_seg_tiles20d&files=channel_grad_up_seg_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_grad_up_cel_tiles20d&files=channel_grad_up_cel_h00v00.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_curv_cel_tiles20d&files=channel_curv_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_seg_tiles20d&files=channel_elv_dw_seg_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_seg_tiles20d&files=channel_elv_up_seg_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_up_cel_tiles20d&files=channel_elv_up_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_elv_dw_cel_tiles20d&files=channel_elv_dw_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_dw_seg_tiles20d&files=channel_dist_dw_seg_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_seg_tiles20d&files=channel_dist_up_seg_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.channel%2Fchannel_dist_up_cel_tiles20d&files=channel_dist_up_cel_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_strahler_tiles20d&files=order_strahler_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_shreve_tiles20d&files=order_shreve_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_horton_tiles20d&files=order_horton_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_hack_tiles20d&files=order_hack_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_topo_tiles20d&files=order_topo_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_point_h${h}v${v}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fr.stream.order%2Forder_vect_tiles20d&files=order_vect_segment_h${h}v${v}.gpkg',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fspi_tiles20d&files=spi_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fsti_tiles20d&files=sti_h${h}v${v}.tif',
    'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4/download?path=%2Fflow.index%2Fcti_tiles20d&files=cti_h${h}v${v}.tif'
];

const indexes = ['00', '02', '04', '06','08', '10','12','14','16','18','20','22','24','26','28','30','32','34'];
for (const h in indexes) {
    for (const v in indexes) {
        for (const baseUrl of baseUrls) {
            const specificUrl = baseUrl.replace(/\${h}/g, indexes[h]).replace(/\${v}/g, indexes[v]);
            console.log("{\n" +
                "  \"@type\": \"DataDownload\",\n" +
                "  \"contentUrl\": \"" + specificUrl + "\",");
            if (specificUrl.endsWith(".gpkg")) {
                console.log("  \"encodingFormat\": \"application/geopackage+vnd.sqlite3\"\n" +
                    "},");
            } else {
                console.log("  \"encodingFormat\": \"image/tiff\"\n" +
                    "},");
            }
        }
    }
}

