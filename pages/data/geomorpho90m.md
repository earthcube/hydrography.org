---
layout: page-fullwidth
title: "Theme Documentation"
subheadline: "How to use Feeling Responsive"
teaser: "The documentation is a work in progress..."
permalink: "/data/geomorpho90m"
header:
   image_fullwidth: "header_roadmap_2.jpg"
---

<style>

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
	.box {
	width: 100%; height: 80px;
	position: relative;
	border: 1px solid #BBB;
	background: #dff0faad;margin-top: 5px;
	}
	.ribbon span {
	font-size: 10px;
	font-weight: bold;
	color: #FFF;
	text-transform: uppercase;
	text-align: center;
	line-height: 20px;
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
	width: 100px;
	display: block;
	background: #79A70A;
	background: linear-gradient(#F70505 0%, #8F0808 100%);
	box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
	position: absolute;
	top: 19px; left: -21px;
	}
	.ribbon span::before {
	content: "";
	position: absolute; left: 0px; top: 100%;
	z-index: -1;
	border-left: 3px solid #8F0808;
	border-right: 3px solid transparent;
	border-bottom: 3px solid transparent;
	border-top: 3px solid #8F0808;
	}
	.ribbon span::after {
	content: "";
	position: absolute; right: 0px; top: 100%;
	z-index: -1;
	border-left: 3px solid transparent;
	border-right: 3px solid #8F0808;
	border-bottom: 3px solid transparent;
	
	border-top: 3px solid #8F0808;
	}
</style>


 <script src="data-visualization-tools/timemachine/js/jquery/jquery.min.js" type="text/javascript"></script>
    <script>
      var BASE_URL = 'https://public.igb-berlin.de/index.php/s/agciopgzXjWswF4';
      var FILES = ['occurrence/occurrence', 'change/change', 'seasonality/seasonality', 'recurrence/recurrence', 'transitions/transitions', 'extent/extent'];
    //var FILES = ['occurrence/occurrence', 'change/change', 'seasonality/seasonality', 'recurrence/recurrence','extent/extent'];

        function set_paths(x, y) {
        var lat = Math.abs(y) + ((y < 0) ? 'S' : 'N');
        var lon = Math.abs(x) + ((x < 0) ? 'W' : 'E');
        var lines = ['<p>', '<div class="tileDownloadBoundsTitle">Granule with top-left corner at ' + lon + ', ' + lat + ':</div>'];
        for (var i = 0 ; i < FILES.length; ++i) {
            var url = [BASE_URL, FILES[i], '_', lon, '_', lat,'v1_3_2020.tif'].join('');
            var dataset_name = FILES[i].split("/")[0];
            if (dataset_name == "seasonality") {
            dataset_name = "Seasonality 2020";
            }
            if (dataset_name == "extent") {
            dataset_name = "Maximum extent";
            }
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
    <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-88527603-1', 'auto');
        ga('send', 'pageview');
    </script>



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
{% include _improve_content.html %}



Testing Clickable Map:



 <div class="mapTileDownloadContainer">
      <div class="mapTileDownloadBaseLayer"><img width="685" height="267" src="/hydrography.org/images/data/water-occurrence-map.png" /></div>
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







## Edit Navigation   {#edit-navigation}

To customize the navigation of *Feeling Responsive*, you have to open the [YAML](https://jekyllrb.com/docs/datafiles/)-file `_data/navigation.yml`. Edit the data and adjust it to your own needs.

## Different Page/Posts Formats   {#formats}

*Feeling Responsive* supports you with different templates for your content. These are the actual page/post formats:

### Page/Post
The [page/post format]({{ site.url }}{{ site.baseurl }}/design/page/) has no sidebar by default, its content is centered and beneath the content the visitor gets some metadata like categories, tags, date and author if provided via data in front matter of the post.

use in front matter via: `layout: page`

### Page/Post with a left or right sidebar
If you want to show the sidebar, just enter `sidebar: left` or `sidebar: right` in front matter, and *whoops, there it is*! To customize the content of the sidebar, open `_includes/sidebar`.


### Page/Post with or without metadata
If you want to show metadata like categories, tags and date at the end of the page, just enter `show_meta: true`. It's on by default. You can change it via `_config.yml`. To turn of metadata just enter – *yes, you guessed right* – `show_meta: false`.



### Page Full Width
If you want full control of styling a page, then use the [page fullwidth template]({{ site.url }}{{ site.baseurl }}/design/page-fullwidth/). To set up a grid, just use the [foundation grid system](http://foundation.zurb.com/docs/components/grid.html).

use in front matter via: `layout: page-fullwidth`


### Frontpage
This template is special. It allows you to define three *widgets* which are displayed with a headline, image, description and a link to the content. It's used for the [homepage]({{ site.url }}{{ site.baseurl }}) of this website.

use in front matter via: `layout: frontpage`


### Video
If you're a video producer or cineast, you'll like the [video template]({{ site.url }}{{ site.baseurl }}/design/video/). It darkens the layout to black and lets the video stand out full-width.

use in front matter via: `layout: video`

<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }

## Style your content with   {#styling}

Feeling Responsive offers lots of possibilities to style your articles. You can style your content in different ways. There are elements like subheadlines, feature images, header images, homepage images, meta data like categories and tags and many more.


### subheadlines

If you need a subheadline for an article, just define a subheadline in front matter like this:

`subheadline:  "Subheadline"`

### Quotes

Quotes mix it up a little bit, if you write long articles. So use quotes:

> Age is an issue of mind over matter. If you don't mind, it doesn't matter.
<cite>Mark Twain</cite>

<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }

{% highlight html %}
> Age is an issue of mind over matter. If you don't mind, it doesn't matter.
<cite>Mark Twain</cite>
<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }
{% endhighlight %}

## Comments

You can use comments with *Feeling Responsive* by the way of Disqus. If you want to use Disqus-Comments just open `config.yml` and add your `disqus_shortname`. [More on how to use Disqus ›](https://disqus.com/websites/)

By default comments are turned off. You can customize the default behaviour in `config.yml`. To **turn on comments** just add `comments: true` to front matter using the page layout `layout: page`. 

<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }

## Responsive Videos

With foundation responsive videos are easy. [More ›](http://foundation.zurb.com/docs/components/flex_video.html)

<div class="flex-video">
        <iframe width="1280" height="720" src="//www.youtube.com/embed/WoHxoz_0ykI" frameborder="0" allowfullscreen></iframe>
</div>

### Code to use for flexible videos

{% highlight html %}
<div class="flex-video">
  <iframe with video />
</div>
{% endhighlight %}


<img class="t60" src="{{ site.urlimg }}header_homepage_13.jpg" alt="">

## Images: Title, Thumbnails, Homepage   {#images}

There are several types of images you can define via front matter. If you want to change the images used in the header have a look at [Style your Header]({{ site.url }}{{ site.baseurl }}/headers/). 


### Title Images

~~~
image:
    title: image.jpg
~~~


### Thumbnails

Thumbnails are used on archive pages like the [blog index][2]. They have a size of 150x150 pixels. Define them in front matter like this:

~~~
image:
    thumb: thumbnail_image.jpg
~~~


### Homepage Image

If you want to feature an article on the homepage with a huge image, then use the homepage image with a width of 970 pixels. If no homepage image is defined *Feeling Responsive* writes instead *New Blog Articles* over the blog entries. Define the homepage image like this:

~~~
image:
    homepage: header_homepage_13.jpg
~~~

### Captions with URL

Sometimes you want to give credit to the creator of your images, maybe with a link. Especially when you use Creative Commons-images like I do for this website. Just add the following front matter and *Feeling Responsive* does the rest:

~~~
image:
    title: header_image.jpg
    caption: Image by Phlow
    caption_url: "http://phlow.de/"
~~~

### Define all images for an article

~~~
image:
    title: title_image.jpg
    thumb: thumbnail_image.jpg
    homepage: header_homepage_13.jpg
    caption: Image by Phlow
    caption_url: "http://phlow.de/"
~~~


<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }


## Create a Table of Contents
{: .t60}

With the Kramdown parser for Markdown you can render a table of contents for your documents. Just insert the following HTML in your post before the actual content. More information on [»Automatic ›Table of Contents‹ Generation«][1].

### Bare Bones Version
{% highlight html %}
### Table of Contents
*  Auto generated table of contents
{:toc}
{% endhighlight %}

### Foundation panel version

{% highlight html %}
<div class="panel radius" markdown="1">
**Table of Contents**
{: #toc }
*  TOC
{:toc}
</div>
{% endhighlight %}
<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }

## Breadcrumbs

To turn on breadcrumbs, just use...

{% highlight html %}
breadcrumb: true
{% endhighlight %}


## Includes
{: .t60}

Includes can be very helpful to spice up your content. You can use includes in your Markdown-files with ease: Just call them with some Liquid code.

### list-posts.html

The `list-posts.html`-include is a loop to list posts. It's a helper to add some additional content fast and easy. You can use it in individual posts for example. Which parameters you use, depends on you.

Possible parameter for the loop:

- entries › define the number of entries to show
- offset › define the offset (number of entries to skip before displaying the first one)
- category › define **only one** category to display according entries

The loop looks like this when you use all parameters. Single parameters are possible of course.

~~~
{% raw %}{% include list-posts entries='3' offset='1' category='design' %}{% endraw %}
~~~

### next-previous-post-in-category.html

This include creates a next/previous link to a post of the same category using the first categories-variable in front matter.

~~~
{% raw %} {% include next-previous-post-in-category %}{% endraw %}
~~~

### improve_content

If your content is on Jekyll you can use this include to automatically generate a »Edit on GitHub Link« to give people a possibility to improve your content. Got the idea from [Ben Balters Blog](http://ben.balter.com/).

~~~
{% raw %}{% include _improve_content.html %}{% endraw %}
~~~

### list-collection

This include lets you loop through a collection to list all entries in that collection. If you set »published: false« in front matter of a collection page the page gots filtered out via unless. The following example loops through a collection called *wordpress*.

~~~
{% raw %}{% include list-collection collection='wordpress' %}{% endraw %}
~~~

### alert – Embed an alert in your content

This include lets you easily display an alert. To use the include no `.html` ending is necessary. You can use five different kinds of alerts: `warning`, `info`, `success`, `alert` and `text`. 

~~~
{% raw %}{% include alert warning='This is a warning.' %}
{% include alert info='An info box.' %}
{% include alert success='Yeah, you made it!' %}
{% include alert alert='Danger!' %}
{% include alert terminal='jekyll -serve' %}
{% include alert text='Just a note!' %}{% endraw %}
~~~

{% include alert warning='This is a warning.' %}
{% include alert info='An info box.' %}
{% include alert success='Yeah, you made it!' %}
{% include alert alert='Danger!' %}
{% include alert terminal='jekyll -serve' %}
{% include alert text='Just a note!' %}

You can even use `<html>`-tags inside the alert. Beware: Use " and ' properly.

~~~
{% raw %}{% include alert info='<em>Feeling Responsive</em> is listed on <a href="http://jekyllthemes.org/">http://jekyllthemes.org</a>' %}{% endraw %}
~~~

{% include alert info='<em>Feeling Responsive</em> is listed on <a href="http://jekyllthemes.org/">http://jekyllthemes.org</a>' %}

<small markdown="1">[Up to table of contents](#toc)</small>
{: .text-right }

## Javascript/Foundation modules

*Feeling Responsive* uses the foundation framework and some of its javascript components. I reduced the modules, to decrease page load and make the theme faster.

I only added one other javascript-module: [`backstretch`][3] by Scott Robbin. These modules are currently used by the theme and included in `javascript.min.js`. There is also a non-minified version, if you want to take a closer look: `javascript.js`.

~~~
/foundation/bower_components/foundation/js/vendor/jquery.js'
/foundation/bower_components/foundation/js/vendor/fastclick.js'
/foundation/bower_components/foundation/js/foundation.accordion.js'
/foundation/bower_components/foundation/js/foundation.clearing.js'
/foundation/bower_components/foundation/js/foundation.dropdown.js'
/foundation/bower_components/foundation/js/foundation.equalizer.js'
/foundation/bower_components/foundation/js/foundation.magellan.js'
/foundation/bower_components/foundation/js/foundation.topbar.js'
/foundation/js/jquery.backstretch.js'
~~~

{% include _improve_content.html %}

</div><!-- /.medium-8.columns -->
</div><!-- /.row -->

 [1]: http://kramdown.gettalong.org/converter/html.html#toc
 [2]: {{ site.url }}/blog/
 [3]: http://srobbin.com/jquery-plugins/backstretch/
 [4]: #
 [5]: #
 [6]: #
 [7]: #
 [8]: #
 [9]: #
 [10]: #
