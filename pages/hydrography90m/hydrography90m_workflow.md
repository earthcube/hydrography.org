---
layout: page-fullwidth
classes: wide
title: "Hydrography90m workflow"
permalink: "/hydrography90m/hydrography90m_workflow"
header:
   image_fullwidth: "hydrography90m/dem_streamOrder1.jpg"
---
<style>
      code {
         color: black;
         display: block;
         background: none;
         white-space: pre;
         overflow: scroll;
         max-height: 400px;
         padding: 5px;
      }

      pre {
         border: 1px solid #BFC1C6;
      }
</style>

#### We provide the processing workflow of the Hydrography 90m layers [here](http://spatial-ecology.net/docs/build/html/GRASS/grass_hydro.html), and will transfer the code shortly to this site.


<br><br><br>



<h1 id="usinggrassforstreamnetworkextractionandbasinsdelineation">Using GRASS for stream-network extraction and basins delineation</h1>

<p>The first step towards modeling hydrological features is delineating a comprehensive hydrography network. DEMs at
different spatial resolutions allow for the identification of stream channels, using a variety of flow-routing algorithms. Such algorithms are based on the observation that water follows the steepest and shortest route along a relief, and accumulates in valleys, lowlands, flat areas and depressions. Several algorithms have been proposed for stream network routing. These algorithms proceed in several stages: determining flow directions, resolving depressions and flat areas, and finally, calculating flow accumulation. </p>

<p><img src="/images/workflow/grass_hydro1.png" alt="grass_hydro1.png" /></p>

<p><img src="/images/workflow/grass_hydro2.png" alt="grass_hydro2.png" /></p>

<p><img src="/images/workflow/grass_hydro3.png" alt="grass_hydro3.png" /></p>

<p>Below we describe how we will extract a new high-resolution hydrography (stream-network and basins) from the 1KM DEM. In this exercise we simulate a case that we can not run the full South America continent in one tile because we reach RAM limitation. Therefore we compute the analysis in 3 tiles and then we combine the results.</p>

<p>We are going to use 3 GRASS commands:  </p>

<ul>
<li><a href="https://grass.osgeo.org/grass79/manuals/r.watershed.html">r.watershed</a> to derive flow accumulation  </li>

<li><a href="https://grass.osgeo.org/grass78/manuals/r.stream.extract.html">r.stream.extract</a> to extract-stream network  </li>

<li><a href="https://grass.osgeo.org/grass78/manuals/addons/r.stream.basins.html">r.stream.basins</a> to delineate basins  </li>
</ul>

<p><strong>Flow direction algorithms</strong></p>

<p>In r.watershed there are 2 flow direction algorithms. </p>

<ul>
<li>SFD: single flow direction (O’Callaghan, 1984)</li>

<li>MFD: multiple flow direction (Holmgren, 1994)</li>
</ul>

<p>Lectures: <a href="http://spatial-ecology.net/docs/source/lectures/lect_20210518_flow_metrics.pdf">Flow Metrics</a></p>

<p><strong>Prepare GRASS for hydrography extraction</strong></p>

<p>Considering that GRASS can not working properly under  <em>/media/sf_LVM_shared/my_SE_data/</em>  therefore we create a working copy of the  <em>SE_data</em>  under  <em>/home/user/my_SE_data/</em></p>

<pre><code class="bash language-bash">%%bash

conda deactivate
mkdir -p /home/user/my_SE_data/exercise
cp -r /home/user/SE_data/exercise/grassdb /home/user/my_SE_data/exercise
cd /home/user/my_SE_data/exercise

# install the GRASS add-on r.stream.basins

grass76 -text grassdb/europe/PERMANENT/ &lt;&lt;EOF
g.extension extension=r.stream.basins
EOF
</code></pre><br>



<pre><code>CommandNotFoundError: Your shell has not been properly configured to use 'conda deactivate'.
To initialize your shell, run

    $ conda init &lt;SHELL_NAME&gt;

Currently supported shells are:
  - bash
  - fish
  - tcsh
  - xonsh
  - zsh
  - powershell

See 'conda init --help' for more information and options.

IMPORTANT: You may need to close and restart your shell after running 'conda init'.


Cleaning up temporary files...
Starting GRASS GIS...

          __________  ___   __________    _______________
         / ____/ __ \/   | / ___/ ___/   / ____/  _/ ___/
        / / __/ /_/ / /| | \__ \\_  \   / / __ / / \__ \
       / /_/ / _, _/ ___ |___/ /__/ /  / /_/ // / ___/ /
       \____/_/ |_/_/  |_/____/____/   \____/___//____/

Welcome to GRASS GIS 7.6.1
GRASS GIS homepage:                      https://grass.osgeo.org
This version running through:            Bash Shell (/bin/bash)
Help is available with the command:      g.manual -i
See the licence terms with:              g.version -c
See citation options with:               g.version -x
Start the GUI with:                      g.gui wxpython
When ready to quit enter:                exit

WARNING: Extension &lt;r.stream.basins&gt; already installed. Re-installing...
Fetching &lt;r.stream.basins&gt; from GRASS GIS Addons repository (be patient)...
Compiling...
Installing...
Updating addons metadata file...
Installation of &lt;r.stream.basins&gt; successfully finished
Cleaning up temporary files...
Done.

Goodbye from GRASS GIS
</code></pre>

<p><strong>Inputs dataset</strong></p>

<p>We are going to use the following dataset:</p>

<ul>
<li>DEM at 1km resolution</li>

<li>A raster grid-cell area. Each grid-cell reports the values in km^2 </li>

<li>A raster land-sea mask labeled as 1-0 </li>

<li>A raster depression labeles as 1-0 </li>

<li>A shapefile reporting the 3 tiles</li>
</ul>


<pre><code class="python language-python"># sea-land mask
import rasterio
from matplotlib import pyplot
src = rasterio.open("geodata/mask/msk_1km.tif")
pyplot.imshow(src.read(1), cmap='terrain', vmin=0, vmax=1)
pyplot.show()
</code></pre>

<p><img src="/images/workflow/output_8_0.png" alt="png" /></p>



<pre><code class="python language-python">from rasterio.plot import show
# digital elevation model
dem = rasterio.open("geodata/dem/SA_elevation_mn_GMTED2010_mn_msk.tif")
show(dem)
</code></pre>

<p><img src="/images/workflow/output_9_0.png" alt="png" /></p>

<pre><code>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd2efd08f98&gt;
</code></pre>

<pre><code class="python language-python"># area grid-cell in km^2
area = rasterio.open("geodata/dem/SA_are_1km_msk.tif")
show(area)
</code></pre>

<p><img src="/images/workflow/output_10_0.png" alt="png" /></p>

<pre><code>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd31c9a37b8&gt;
</code></pre>

<pre><code class="python language-python"># tiles
import geopandas as gpd
gdf = gpd.read_file('geodata/shp/tilesComp.shp')
print (gdf)
gdf.plot(edgecolor="purple", facecolor="None")
</code></pre>





<pre><code>   id dimension Continent  CropW  CropS  CropE  CropN  \
0   1     30x49        SA    0.6    0.0    2.0    2.0   
1   2     40x37        SA    2.8    2.8    0.0    2.8   
2   3     40x37        SA    0.3    2.8    2.8    0.0   

                                            geometry  
0  POLYGON ((-76.40000000000001 -12, -43 -12, -43...  
1  POLYGON ((-73.90000000000001 1, -34.6 1, -34.6...  
2  POLYGON ((-81.7 12.7, -41.7 12.7, -41.7 -24.5,...  



&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd302b579e8&gt;




</code></pre>

<p><img src="/images/workflow/output_11_2.png" alt="png" /></p>

<p><strong>First run: compute MFD flow accumulation for each tile</strong></p>


<pre><code class="bash language-bash">%%bash

cd /media/sf_LVM_shared/my_SE_data/exercise

# use the --tmp-location option to store a temporal location in the /tmp folder 

grass76  -f -text --tmp-location  -c  geodata/dem/SA_elevation_mn_GMTED2010_mn_msk.tif  &lt;&lt;'EOF'

g.gisenv set="GRASS_VERBOSE=-1","DEBUG=0"

## import the layers
r.external input=geodata/dem/SA_elevation_mn_GMTED2010_mn_msk.tif output=elv --o --q # dem 
r.external input=geodata/dem/SA_all_dep_1km.tif                   output=dep --o --q # depression
r.external input=geodata/dem/SA_are_1km_msk.tif                   output=are --o --q # area-pixel
r.external input=geodata/mask/msk_1km.tif                         output=msk --o --q # land-ocean mask 

g.region  -m 

for tile in 1 2 3  ; do     # loop for each tile 
r.mask raster=msk --o --q   # usefull to mask the flow accumulation 

# extract tile extent from the  tilesComp.shp
wL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $2 }')
nL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $3 }')
eL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $4 }')
sL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $7 }')

g.region w=$wL  n=$nL  s=$sL  e=$eL  res=0:00:30   --o 
g.region -m

### maximum ram 66571M  for 2^63 -1   (2 147 483 647 cell)  / 1 000 000  * 31 M   
####  -m  Enable disk swap memory option: Operation is slow   
####  -b Beautify flat areas
####   threshold=1  = ~1 km2 = 0.9  m2 

echo "############# compute the flow accumulation using MFD for tile $tile ##############"
r.watershed  -b  elevation=elv  depression=dep  accumulation=flow drainage=dir_rw flow=are   memory=2000 --o --q

echo "############# extract stream ##################"
r.stream.extract elevation=elv accumulation=flow depression=dep threshold=8 direction=dir_rs stream_raster=stream  memory=2000 --o --q

echo "############# delineate basin  ##################"
r.stream.basins -l  stream_rast=stream direction=dir_rs   basins=lbasin  memory=2000 --o  --q
r.colors -r stream --q ; r.colors -r lbasin --q ; r.colors -r flow --q

echo "###### create a small zone flow binary for later use ###########"
r.mapcalc " small_zone_flow =   if( !isnull(flow) &amp;&amp; isnull(lbasin) , 1 , null()) " --o  --q

echo "##### create a smaller box ########"
CropW=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropW" | awk '{  print $4 }' )
CropE=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropE" | awk '{  print $4 }' )
CropS=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropS" | awk '{  print $4 }' )
CropN=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropN" | awk '{  print $4 }' )

nS=$(g.region -m  | grep ^n= | awk -F "=" -v CropN=$CropN  '{ printf ("%.14f\n" , $2 - CropN ) }' )
sS=$(g.region -m  | grep ^s= | awk -F "=" -v CropS=$CropS  '{ printf ("%.14f\n" , $2 + CropS ) }' )
eS=$(g.region -m  | grep ^e= | awk -F "=" -v CropE=$CropE  '{ printf ("%.14f\n" , $2 - CropE ) }' )
wS=$(g.region -m  | grep ^w= | awk -F "=" -v CropW=$CropW  '{ printf ("%.14f\n" , $2 + CropW ) }' )

g.region w=$wS  n=$nS  s=$sS  e=$eS  res=0:00:30  save=smallext --o  --q # smaller region 
g.region region=smallext --o --q
g.region  -m

echo "######## left stripe ########"
eST=$(g.region -m  | grep ^e= | awk -F "=" '{ print $2 }')
wST=$(g.region -m  | grep ^e= | awk -F "=" '{ printf ("%.14f\n" , $2 - ( 1 *  0.00833333333333 )) }' )

g.region n=$nS s=$sS     e=$eST w=$wST  res=0:00:30 --o
r.mapcalc " lbasin_wstripe = lbasin " --o --q
g.region region=smallext --o --q 

echo "######## right stripe  ########"
wST=$(g.region -m  | grep ^w= | awk -F "=" '{ print $2   }' )
eST=$(g.region -m  | grep ^w= | awk -F "=" '{ printf ("%.14f\n" , $2 + ( 1 *  0.00833333333333 )) }' )

g.region n=$nS s=$sS  e=$eST w=$wST  res=0:00:30 --o
r.mapcalc " lbasin_estripe    = lbasin " --o --q

g.region region=smallext --o --q 
echo "######## top stripe   ########"
nST=$(g.region -m  | grep ^n= | awk -F "=" '{ print $2   }' )
sST=$(g.region -m  | grep ^n= | awk -F "=" '{ printf ("%.14f\n" , $2 - ( 1 *  0.00833333333333 )) }' )

g.region e=$eS w=$wS n=$nST s=$sST res=0:00:30  --o
r.mapcalc " lbasin_nstripe    = lbasin " --o --q
g.region region=smallext --o --q 

echo "######## bottom stripe ########"  
sST=$(g.region -m  | grep ^s= | awk -F "=" '{ print $2   }' )
nST=$(g.region -m  | grep ^s= | awk -F "=" '{ printf ("%.14f\n" , $2 + ( 1 *  0.00833333333333 )) }' )

g.region   e=$eS  w=$wS  n=$nST  s=$sST  res=0:00:30 --o
r.mapcalc " lbasin_sstripe    = lbasin " --o --q
g.region region=smallext   --o --q 

echo "######## remove incompleate basins  ########"
    cat &lt;(r.report -n -h units=c map=lbasin_estripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin_wstripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin_sstripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin_nstripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin         | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } ' ) \
      | sort  | uniq -c | awk '{ if($1==1) {print $2"="$2 } else { print $2"=NULL"}  }' &gt;  /tmp/lbasin_${tile}_reclass.txt 

r.reclass input=lbasin  output=lbasin_rec   rules=/tmp/lbasin_${tile}_reclass.txt   --o --q
rm -f /tmp/lbasin_${tile}_reclass.txt 

r.mapcalc  " lbasin_clean = lbasin_rec" --o --q
g.remove -f  type=raster name=lbasin_rec,lbasin_estripe,lbasin_wstripe,lbasin_nstripe,lbasin_sstripe --q

echo "############  export basin only for visual inspection  ############"

r.mask raster=lbasin_clean --o --q
r.out.gdal --o -c -m  createopt="COMPRESS=DEFLATE,ZLEVEL=9" type=UInt32 format=GTiff nodata=0 input=lbasin_clean  output=geodata/dem/lbasinTmp_$tile.tif

echo "############ output the flow accumulation  ############"
r.mask raster=msk --o --q

r.mapcalc  " lbasin_flow_clean  = if ( !isnull(lbasin_clean ) || !isnull(small_zone_flow) , 1 , null()  ) " --o --q
r.grow  input=lbasin_flow_clean  output=lbasin_flow_clean_grow  radius=4  --o --q
r.mask  raster=lbasin_flow_clean_grow   --o --q 

r.out.gdal --o -f -c -m createopt="COMPRESS=DEFLATE,ZLEVEL=9"  nodata=-9999999  type=Float32 format=GTiff input=flow  output=geodata/dem/flow_${tile}.tif 

gdal_edit.py -a_ullr  $wS $nS $eS $sS  geodata/dem/flow_${tile}.tif 
gdal_edit.py -tr 0.00833333333333333333333333333333333 -0.00833333333333333333333333333333333  geodata/dem/flow_${tile}.tif 

done 

EOF
</code></pre>
123
<br>


<pre><code>
zone=0
n=14
s=-56
w=-83
e=-34
nsres=923.44150551
ewres=703.7149865
rows=8400
cols=5880
cells=49392000
projection=3
zone=0
n=-12
s=-56
w=-76.4
e=-43
nsres=924.52244935
ewres=710.89449752
rows=5280
cols=4008
cells=21162240
############# compute the flow accumulation using MFD for tile 1 ##############
############# extract stream ##################
############# delineate basin  ##################
###### create a small zone flow binary for later use ###########
##### create a smaller box ########
projection=3
zone=0
n=-14
s=-56
w=-75.8
e=-45
nsres=924.64630106
ewres=707.62000721
rows=5040
cols=3696
cells=18627840
######## left stripe ########
######## right stripe  ########
######## top stripe   ########
######## bottom stripe ########
######## remove incompleate basins  ########
############  export basin only for visual inspection  ############
############ output the flow accumulation  ############
projection=3
zone=0
n=1
s=-38
w=-73.9
e=-34.6
nsres=922.66504302
ewres=826.93226998
rows=4680
cols=4716
cells=22070880
############# compute the flow accumulation using MFD for tile 2 ##############
############# extract stream ##################
############# delineate basin  ##################
###### create a small zone flow binary for later use ###########
##### create a smaller box ########
projection=3
zone=0
n=-1.8
s=-35.2
w=-71.1
e=-34.6
nsres=922.59157279
ewres=840.84791606
rows=4008
cols=4380
cells=17555040
######## left stripe ########
######## right stripe  ########
######## top stripe   ########
######## bottom stripe ########
######## remove incompleate basins  ########
############  export basin only for visual inspection  ############
############ output the flow accumulation  ############
projection=3
zone=0
n=12.7
s=-24.5
w=-81.7
e=-41.7
nsres=921.8619211
ewres=872.86703289
rows=4464
cols=4800
cells=21427200
############# compute the flow accumulation using MFD for tile 3 ##############
############# extract stream ##################
############# delineate basin  ##################
###### create a small zone flow binary for later use ###########
##### create a smaller box ########
projection=3
zone=0
n=12.7
s=-21.7
w=-81.4
e=-44.5
nsres=921.77907927
ewres=882.26518613
rows=4128
cols=4428
cells=18278784
######## left stripe ########
######## right stripe  ########
######## top stripe   ########
######## bottom stripe ########
######## remove incompleate basins  ########
############  export basin only for visual inspection  ############
############ output the flow accumulation  ############


Cleaning up temporary files...
Starting GRASS GIS...
Creating new GRASS GIS location &lt;tmploc&gt;...

          __________  ___   __________    _______________
         / ____/ __ \/   | / ___/ ___/   / ____/  _/ ___/
        / / __/ /_/ / /| | \__ \\_  \   / / __ / / \__ \
       / /_/ / _, _/ ___ |___/ /__/ /  / /_/ // / ___/ /
       \____/_/ |_/_/  |_/____/____/   \____/___//____/

Welcome to GRASS GIS 7.6.1
GRASS GIS homepage:                      https://grass.osgeo.org
This version running through:            Bash Shell (/bin/bash)
Help is available with the command:      g.manual -i
See the licence terms with:              g.version -c
See citation options with:               g.version -x
Start the GUI with:                      g.gui wxpython
When ready to quit enter:                exit

WARNING: Color table of raster map &lt;stream&gt; not found
   0   0   0   0   0   3   3   3   3   3   6   6   6   6   6   9   9   9   9  12   9  12  12  12  12  15  15  18  15  15  18  15  18  18  18  21  21  21  21  21  24  24  27  24  24  27  27  27  24  27  30  33  30  30  30  33  33  33  30  36  36  33  36  36  36  39  42  39  42  39  39  42  42  45  39  42  48  45  45  45  48  48  48  51  45  51  48  51  51  54  57  54  54  51  57  54  57  57  60  63  54  60  60  57  63  60  63  63  66  66  69  60  66  66  69  69  69  63  72  72  72  72  66  69  75  78  75  75  75  78  72  78  78  81  81  84  81  84  81  84  75  84  78  87  87  87  87  81  90  84  90  90  90  93  93  93  93  96  87  99  96  96  96  99  99  99 100
  90  93 100 100

 100
  96  99 100
WARNING: MASK already exists and will be overwritten
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/lbasinTmp_1.tif&gt; created.
WARNING: MASK already exists and will be overwritten
WARNING: MASK already exists and will be overwritten
WARNING: Precision loss: Float32 can not preserve the DCELL precision of
         raster &lt;flow&gt;. This can be avoided by using Float64
WARNING: Forcing raster export
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;Float32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/flow_1.tif&gt; created.
WARNING: MASK already exists and will be overwritten
WARNING: Color table of raster map &lt;stream&gt; not found
   0   0   0   0   0   3   3   3   3   3   6   6   6   6   6   9   9   9   9  12  12   9  12  12  12  15  15  15  18  15  18  18  18  21  15  21  21  21  18  21  24  24  24  24  27  27  24  27  27  27  30  30  30  30  33  33  33  33  30  33  36  36  36  36  39  39  39  39  36  39  42  42  42  45  42  45  45  45  42  48  48  48  48  51  45  51  51  51  48  54  54  54  54  57  57  57  51  57  60  60  63  60  54  60  63  63  63  57  66  66  69  69  66  66  69  60  63  72  69  72  72  72  75  75  75  75  78  78  66  69  78  78  72  81  81  81  81  84  84  84  75  84  78  87  87  87  87  90  90  90  90  81  84  93  93  93  93  96  96  96  96  87  90  99  99  99 100 100  99

 100 100

  93  96  99 100
WARNING: MASK already exists and will be overwritten
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/lbasinTmp_2.tif&gt; created.
WARNING: MASK already exists and will be overwritten
WARNING: MASK already exists and will be overwritten
WARNING: Precision loss: Float32 can not preserve the DCELL precision of
         raster &lt;flow&gt;. This can be avoided by using Float64
WARNING: Forcing raster export
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;Float32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/flow_2.tif&gt; created.
WARNING: MASK already exists and will be overwritten
WARNING: Color table of raster map &lt;stream&gt; not found
   0   0   0   0   0   3   3   3   3   3   6   6   6   6   6   9   9   9   9   9  12  12  12  12  12  15  15  15  15  18  18  18  18  15  21  18  21  21  24  24  24  21  24  21  24  27  27  27  27  30  30  30  30  27  30  33  33  33  33  36  36  36  36  33  36  39  39  39  39  42  42  42  42  39  42  45  45  45  45  48  48  48  48  45  51  51  51  51  54  54  54  48  54  57  51  57  57  60  60  54  57  60  60  63  63  63  63  66  57  66  60  66  66  69  72  69  69  72  69  72  72  63  66  75  75  75  75  78  78  78  78  69  81  72  81  81  81  75  84  84  84  84  87  87  87  78  87  81  90  90  90  93  90  93  93  93  84  87  96  96  96  99  96  99  99  99  90 100
  93 100 100

 100
  96  99 100
WARNING: MASK already exists and will be overwritten
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/lbasinTmp_3.tif&gt; created.
WARNING: MASK already exists and will be overwritten
WARNING: MASK already exists and will be overwritten
WARNING: Precision loss: Float32 can not preserve the DCELL precision of
         raster &lt;flow&gt;. This can be avoided by using Float64
WARNING: Forcing raster export
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;Float32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/flow_3.tif&gt; created.
Cleaning up temporary files...
Done.

Goodbye from GRASS GIS
</code></pre>

<p>At this point the flow accumulation for each has been computed ond saved only for the entire basins.</p>

<pre><code class="python language-python"># basins tile 1 
basin1 = rasterio.open("geodata/dem/lbasinTmp_1.tif")
show(basin1)
</code></pre>

<p><img src="/images/workflow/output_15_0.png" alt="png" /></p>

<pre><code>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd302b20898&gt;
</code></pre>

<pre><code class="python language-python"># flow accumualtion tile 1 
src = rasterio.open("geodata/dem/flow_1.tif")
pyplot.imshow(src.read(1), cmap='terrain', vmin=-4000, vmax=4000 )
pyplot.show()
</code></pre>

<p><img src="/images/workflow/output_16_0.png" alt="png" /></p>

<pre><code class="python language-python"># basins tile 2
basin2 = rasterio.open("geodata/dem/lbasinTmp_2.tif")
show(basin2)
</code></pre>

<p><img src="/images/workflow/output_17_0.png" alt="png" /></p>

<pre><code>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd302a994a8&gt;
</code></pre>

<pre><code class="python language-python"># flow accumualtion tile 2
src = rasterio.open("geodata/dem/flow_2.tif")
pyplot.imshow(src.read(1), cmap='terrain', vmin=-4000, vmax=4000 )
pyplot.show()
</code></pre>

<p><img src="/images/workflow/output_18_0.png" alt="png" /></p>

<pre><code class="python language-python"># basins tile 3
basin3 = rasterio.open("geodata/dem/lbasinTmp_3.tif")
show(basin3)
</code></pre>

<p><img src="/images/workflow/output_19_0.png" alt="png" /></p>

<pre><code>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd2fe31cc50&gt;
</code></pre>

<pre><code class="python language-python"># flow accumualtion tile 3
src = rasterio.open("geodata/dem/flow_3.tif")
pyplot.imshow(src.read(1), cmap='terrain', vmin=-4000, vmax=4000 )
pyplot.show()
</code></pre>

<p><img src="/images/workflow/output_20_0.png" alt="png" /></p>

<p><strong>Merge the flow accumulation tiles</strong></p>

<pre><code class="bash language-bash">%%bash
gdalbuildvrt     -srcnodata -9999999 -vrtnodata -9999999 geodata/dem/flow_all.vrt    geodata/dem/flow_?.tif
gdal_translate   -co COMPRESS=DEFLATE -co ZLEVEL=9  geodata/dem/flow_all.vrt     geodata/dem/flow_all.tif
</code></pre>

<pre><code>0...10...20...30...40...50...60...70...80...90...100 - done.
Input file size is 5616, 8244
0...10...20...30...40...50...60...70...80...90...100 - done.
</code></pre>

<pre><code class="python language-python"># flow accumualtion all South America
src = rasterio.open("geodata/dem/flow_all.tif")
pyplot.imshow(src.read(1), cmap='gist_earth', vmin=-4000, vmax=4000 )
pyplot.show()
</code></pre>

<p><img src="/images/workflow/output_23_0.png" alt="png" /></p>

<p><strong>Second run: copute stream and basin using the seamless South America Flow Accumulation</strong></p>



<pre><code class="bash language-bash">%%bash

grass76  -f -text --tmp-location  -c  geodata/dem/flow_all.tif   &lt;&lt;'EOF'

## import the layers
r.external input=geodata/dem/flow_all.tif                         output=flow --o --q # flow accumulation
r.external input=geodata/dem/SA_elevation_mn_GMTED2010_mn_msk.tif output=elv  --o --q # dem 
r.external input=geodata/dem/SA_all_dep_1km.tif                   output=dep  --o --q # depression
r.external input=geodata/mask/msk_1km.tif                         output=msk  --o --q # land-ocean mask 

g.region  -m 

for tile in 1 2 3  ; do  # loop for each tile 
r.mask raster=msk --o # usefull to mask the flow accumulation 

wL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $2 }')
nL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $3 }')
eL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $4 }')
sL=$(ogrinfo -al -where  " id  = '$tile' " geodata/shp/tilesComp.shp | grep POLYGON | awk '{ gsub(/[(()),]/," ",$0 ); print $7 }')

g.region w=$wL  n=$nL  s=$sL  e=$eL  res=0:00:30   --o 
g.region -m

### maximum ram 66571M  for 2^63 -1   (2 147 483 647 cell)  / 1 000 000  * 31 M   
####  -m  Enable disk swap memory option: Operation is slow   
####  -b Beautify flat areas
####   threshold=1  = ~1 km2 = 0.9  m2 

echo "############# extract stream ##################"
r.stream.extract elevation=elv accumulation=flow depression=dep threshold=8 direction=dir_rs stream_raster=stream  memory=2000 --o --q

echo "############# delineate basin and sub-basin  ##################"
r.stream.basins -l  stream_rast=stream direction=dir_rs   basins=lbasin  memory=2000 --o --q
r.colors -r stream --q; r.colors -r lbasin --q ; r.colors -r flow --q

echo "###### create a small zone flow binary for later use ###########"
r.mapcalc " small_zone_flow =   if( !isnull(flow) &amp;&amp; isnull(lbasin) , 1 , null()) " --o --q

echo "##### create a smaller box ########"
CropW=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropW" | awk '{  print $4 }' )
CropE=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropE" | awk '{  print $4 }' )
CropS=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropS" | awk '{  print $4 }' )
CropN=$( ogrinfo -al   -where  " id  = '$tile' " geodata/shp/tilesComp.shp  | grep " CropN" | awk '{  print $4 }' )

nS=$(g.region -m  | grep ^n= | awk -F "=" -v CropN=$CropN  '{ printf ("%.14f\n" , $2 - CropN ) }' )
sS=$(g.region -m  | grep ^s= | awk -F "=" -v CropS=$CropS  '{ printf ("%.14f\n" , $2 + CropS ) }' )
eS=$(g.region -m  | grep ^e= | awk -F "=" -v CropE=$CropE  '{ printf ("%.14f\n" , $2 - CropE ) }' )
wS=$(g.region -m  | grep ^w= | awk -F "=" -v CropW=$CropW  '{ printf ("%.14f\n" , $2 + CropW ) }' )

g.region w=$wS  n=$nS  s=$sS  e=$eS  res=0:00:30  save=smallext --o --q # smaller region 
g.region region=smallext --o --q
g.region  -m --q

echo "######## left stripe ########"
eST=$(g.region -m  | grep ^e= | awk -F "=" '{ print $2 }')
wST=$(g.region -m  | grep ^e= | awk -F "=" '{ printf ("%.14f\n" , $2 - ( 1 *  0.00833333333333 )) }' )

g.region n=$nS s=$sS     e=$eST w=$wST  res=0:00:30 --o --q
r.mapcalc " lbasin_wstripe = lbasin " --o --q
g.region region=smallext --o --q

echo "######## right stripe  ########"
wST=$(g.region -m  | grep ^w= | awk -F "=" '{ print $2   }' )
eST=$(g.region -m  | grep ^w= | awk -F "=" '{ printf ("%.14f\n" , $2 + ( 1 *  0.00833333333333 )) }' )

g.region n=$nS s=$sS  e=$eST w=$wST  res=0:00:30 --o --q
r.mapcalc " lbasin_estripe    = lbasin " --o --q

g.region region=smallext --o --q
echo "######## top stripe   ########"
nST=$(g.region -m  | grep ^n= | awk -F "=" '{ print $2   }' )
sST=$(g.region -m  | grep ^n= | awk -F "=" '{ printf ("%.14f\n" , $2 - ( 1 *  0.00833333333333 )) }' )

g.region e=$eS w=$wS n=$nST s=$sST res=0:00:30  --o --q
r.mapcalc " lbasin_nstripe    = lbasin " --o --q
g.region region=smallext --o --q

echo "######## bottom stripe ########"  
sST=$(g.region -m  | grep ^s= | awk -F "=" '{ print $2   }' )
nST=$(g.region -m  | grep ^s= | awk -F "=" '{ printf ("%.14f\n" , $2 + ( 1 *  0.00833333333333 )) }' )

g.region   e=$eS  w=$wS  n=$nST  s=$sST  res=0:00:30 --o --q
r.mapcalc " lbasin_sstripe    = lbasin " --o --q
g.region region=smallext   --o --q

echo "######## remove incompleate basins  ########"
    cat &lt;(r.report -n -h units=c map=lbasin_estripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin_wstripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin_sstripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin_nstripe | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } '   ) \
        &lt;(r.report -n -h units=c map=lbasin         | awk  '{ gsub ("\\|"," " ) ; { print $1 }   } ' | awk  '$1 ~ /^[0-9]+$/ { print $1 } ' ) \
      | sort  | uniq -c | awk '{ if($1==1) {print $2"="$2 } else { print $2"=NULL"}  }' &gt;  /tmp/lbasin_${tile}_reclass.txt 

r.reclass input=lbasin  output=lbasin_rec   rules=/tmp/lbasin_${tile}_reclass.txt   --o --q
rm -f /tmp/lbasin_${tile}_reclass.txt 

r.mapcalc  " lbasin_clean = lbasin_rec" --o --q
g.remove -f  type=raster name=lbasin_rec,lbasin_estripe,lbasin_wstripe,lbasin_nstripe,lbasin_sstripe  --q

echo "############  export basin sub-basin and stream  ############"

r.mask raster=lbasin_clean --o --q
r.out.gdal --o -c -m  createopt="COMPRESS=DEFLATE,ZLEVEL=9" type=UInt32 format=GTiff nodata=0 input=lbasin  output=geodata/dem/lbasin_$tile.tif
r.out.gdal --o -c -m  createopt="COMPRESS=DEFLATE,ZLEVEL=9" type=UInt32 format=GTiff nodata=0 input=stream  output=geodata/dem/stream_$tile.tif

done 

EOF
</code></pre>
<br>123<br>


<pre><code>
zone=0
n=12.7
s=-56
w=-81.4
e=-34.6
nsres=923.4698013
ewres=706.8356204
rows=8244
cols=5616
cells=46298304
projection=3
zone=0
n=-12
s=-56
w=-76.4
e=-43
nsres=924.52244935
ewres=710.89449752
rows=5280
cols=4008
cells=21162240
############# extract stream ##################
############# delineate basin and sub-basin  ##################
###### create a small zone flow binary for later use ###########
##### create a smaller box ########
projection=3
zone=0
n=-14
s=-56
w=-75.8
e=-45
nsres=924.64630106
ewres=707.62000721
rows=5040
cols=3696
cells=18627840
######## left stripe ########
######## right stripe  ########
######## top stripe   ########
######## bottom stripe ########
######## remove incompleate basins  ########
############  export basin sub-basin and stream  ############
projection=3
zone=0
n=1
s=-38
w=-73.9
e=-34.6
nsres=922.66504302
ewres=826.93226998
rows=4680
cols=4716
cells=22070880
############# extract stream ##################
############# delineate basin and sub-basin  ##################
###### create a small zone flow binary for later use ###########
##### create a smaller box ########
projection=3
zone=0
n=-1.8
s=-35.2
w=-71.1
e=-34.6
nsres=922.59157279
ewres=840.84791606
rows=4008
cols=4380
cells=17555040
######## left stripe ########
######## right stripe  ########
######## top stripe   ########
######## bottom stripe ########
######## remove incompleate basins  ########
############  export basin sub-basin and stream  ############
projection=3
zone=0
n=12.7
s=-24.5
w=-81.7
e=-41.7
nsres=921.8619211
ewres=872.86703289
rows=4464
cols=4800
cells=21427200
############# extract stream ##################
############# delineate basin and sub-basin  ##################
###### create a small zone flow binary for later use ###########
##### create a smaller box ########
projection=3
zone=0
n=12.7
s=-21.7
w=-81.4
e=-44.5
nsres=921.77907927
ewres=882.26518613
rows=4128
cols=4428
cells=18278784
######## left stripe ########
######## right stripe  ########
######## top stripe   ########
######## bottom stripe ########
######## remove incompleate basins  ########
############  export basin sub-basin and stream  ############


Cleaning up temporary files...
Starting GRASS GIS...
Creating new GRASS GIS location &lt;tmploc&gt;...

          __________  ___   __________    _______________
         / ____/ __ \/   | / ___/ ___/   / ____/  _/ ___/
        / / __/ /_/ / /| | \__ \\_  \   / / __ / / \__ \
       / /_/ / _, _/ ___ |___/ /__/ /  / /_/ // / ___/ /
       \____/_/ |_/_/  |_/____/____/   \____/___//____/

Welcome to GRASS GIS 7.6.1
GRASS GIS homepage:                      https://grass.osgeo.org
This version running through:            Bash Shell (/bin/bash)
Help is available with the command:      g.manual -i
See the licence terms with:              g.version -c
See citation options with:               g.version -x
Start the GUI with:                      g.gui wxpython
When ready to quit enter:                exit

All subsequent raster operations will be limited to the MASK area. Removing
or renaming raster map named 'MASK' will restore raster operations to
normal.
WARNING: Color table of raster map &lt;stream&gt; not found
   0   0   0   0   0   3   3   3   3   3   6   6   6   6   6   9   9   9   9  12  12   9  12  12  12  15  15  15  15  18  18  15  18  18  18  21  21  21  21  21  24  24  27  24  24  27  27  27  24  30  30  27  30  33  30  33  33  33  30  33  36  36  36  36  36  39  39  42  42  39  42  39  42  39  45  45  45  48  45  48  42  48  48  51  45  51  51  51  48  54  54  54  57  57  57  54  57  51  60  60  60  63  60  63  54  63  63  57  66  66  66  66  69  69  69  69  60  63  72  72  72  72  75  66  75  75  75  78  78  69  78  78  81  81  81  72  81  84  84  84  84  75  87  87  78  87  87  90  81  90  90  93  93  90  93  84  93  96  96  96  99  99  99  96  87  99 100 100

 100
 100
  90  93  96  99 100
WARNING: MASK already exists and will be overwritten
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/lbasin_1.tif&gt; created.
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/stream_1.tif&gt; created.
WARNING: MASK already exists and will be overwritten
All subsequent raster operations will be limited to the MASK area. Removing
or renaming raster map named 'MASK' will restore raster operations to
normal.
WARNING: Color table of raster map &lt;stream&gt; not found
WARNING: Color table of raster map &lt;flow&gt; not found
   0   0   0   0   0   3   3   3   3   3   6   6   6   6   6   9   9   9   9  12  12   9  12  12  12  15  15  15  15  18  18  18  18  21  15  21  21  21  18  21  24  24  24  24  27  27  24  27  27  27  30  30  30  30  33  33  33  33  30  33  36  36  36  36  39  39  39  39  36  42  42  42  39  45  42  45  45  45  48  42  48  48  48  45  51  51  51  51  54  54  48  54  54  57  51  57  57  57  60  60  63  60  60  63  54  63  63  57  66  69  66  66  69  66  69  72  60  72  69  72  72  63  75  75  75  78  75  78  66  69  78  78  81  81  72  81  84  84  81  84  84  75  87  78  87  90  87  90  87  90  90  81  93  84  93  93  93  96  96  96  96  87  99 100  99
  99  90  99 100 100

 100
  93  96  99 100
WARNING: MASK already exists and will be overwritten
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/lbasin_2.tif&gt; created.
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/stream_2.tif&gt; created.
WARNING: MASK already exists and will be overwritten
All subsequent raster operations will be limited to the MASK area. Removing
or renaming raster map named 'MASK' will restore raster operations to
normal.
WARNING: Color table of raster map &lt;stream&gt; not found
WARNING: Color table of raster map &lt;flow&gt; not found
   0   0   0   0   0   3   3   3   3   6   6   3   6   6   6   9   9   9   9  12  12  12  12   9  12  15  15  15  15  18  18  18  18  15  18  21  21  21  21  24  24  24  24  21  24  27  27  27  27  30  30  30  30  27  33  33  33  33  36  36  36  30  36  39  33  39  39  42  39  42  42  42  36  45  45  45  48  45  39  48  48  48  42  51  51  51  54  54  54  51  54  45  48  57  57  60  57  60  60  57  60  51  54  63  66  63  66  63  66  63  66  57  60  69  72  69  72  69  72  69  75  75  75  72  75  63  66  78  78  78  81  81  78  81  81  69  72  84  84  84  75  87  87  84  87  87  90  90  78  93  81  90  90  93  93  93  96  84  96  99  99  96  96  99  87  99 100
 100
 100  90
  93 100
  96  99 100
WARNING: MASK already exists and will be overwritten
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/lbasin_3.tif&gt; created.
Checking GDAL data type and nodata value...
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
Using GDAL data type &lt;UInt32&gt;
Exporting raster data to GTiff format...
WARNING: Too many values, color table cut to 65535 entries
   2   5   8  11  14  17  20  23  26  29  32  35  38  41  44  47  50  53  56  59  62  65  68  71  74  77  80  83  86  89  92  95  98 100
r.out.gdal complete. File &lt;geodata/dem/stream_3.tif&gt; created.
Cleaning up temporary files...
Done.

Goodbye from GRASS GIS
</code></pre>


<p><strong>Final step: combine the tiled basins and streams</strong></p>

<pre><code class="bash language-bash">%%bash

for var in lbasin stream ; do 

gdalbuildvrt  -srcnodata 0  -vrtnodata 0 geodata/dem/${var}_all.vrt    geodata/dem/${var}_?.tif
gdal_translate -co COMPRESS=DEFLATE -co ZLEVEL=9 geodata/dem/${var}_all.vrt geodata/dem/${var}_all.tif

pkstat --hist -i geodata/dem/${var}_all.tif | grep -v " 0"  &gt;  geodata/dem/${var}_all.hist

wc=$(  wc -l geodata/dem/${var}_all.hist  | awk '{ print $1 -1 }' )

# create color table
paste -d " " &lt;( awk '{ print $1 }' geodata/dem/${var}_all.hist )  &lt;(echo 0; shuf -i 1-255 -n $wc -r) &lt;(echo 0; shuf -i 1-255 -n $wc -r) &lt;(echo 0 ; shuf -i 1-255 -n $wc -r) | awk '{ if (NR==1) {print $0 , 0 } else { print $0 , 255 }}'    &gt;  geodata/dem/${var}_all_ct.hist
# apply color table to the stream and basins 
gdaldem color-relief -co COMPRESS=DEFLATE -co ZLEVEL=9 -co TILED=YES  -co COPY_SRC_OVERVIEWS=YES -alpha geodata/dem/${var}_all.tif geodata/dem/${var}_all_ct.hist   geodata/dem/${var}_all_ct.tif
done
</code></pre>

<pre><code>0...10...20...30...40...50...60...70...80...90...100 - done.
Input file size is 5616, 8244
0...10...20...30...40...50...60...70...80...90...100 - done.
0...10...20...30...40...50...60...70...80...90...100 - done.
0...10...20...30...40...50...60...70...80...90...100 - done.
Input file size is 5616, 8244
0...10...20...30...40...50...60...70...80...90...100 - done.
0...10...20...30...40...50...60...70...80...90...100 - done.
</code></pre>

<pre><code class="python language-python">basins = rasterio.open("geodata/dem/lbasin_all_ct.tif")
show(basins)
</code></pre>

<p><img src="/images/workflow/output_28_0.png" alt="png" /></p>

<pre><code>&lt;matplotlib.axes._subplots.AxesSubplot at 0x7fd2ffd9fbe0&gt;
</code></pre>

<pre><code class="python language-python">src = rasterio.open("geodata/dem/stream_all_ct.tif")
pyplot.imshow(src.read(1))
pyplot.show()
</code></pre>

<p><img src="/images/workflow/output_29_0.png" alt="png" /></p>

