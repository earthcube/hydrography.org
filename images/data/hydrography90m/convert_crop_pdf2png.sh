
Pepe example:
convert -density 600    -trim   -quality 500   -crop 640x620+0+0     /home/selv/Dropbox/Apps/Overleaf/Global_hydrographies_at_90m_resolution/figure/Fig11_plot_stream_slope.pdf  test.png


------------------------------------------------------------------------------------------
JDH: 
#pwd /Users/jay/Desktop/Website/hydrography.org/images/data
# -crop   W x H + X + Y
# X + Y = top left corner

Flow accumulation:
convert -density 650 -quality 75 -crop 1150x750+3400+250  Fig6_plot_main_hydrog.pdf  hydrography90m/flow-accumulation.png

Stream Segment and Outlet:
convert -density 650 -quality 75 -crop 1020x750+2300+1120 Fig6_plot_main_hydrog.pdf hydrography90m/str-seg-outlet.png

Sub-catchment:
convert -density 650 -quality 75 -crop 1020x750+3425+1120 Fig6_plot_main_hydrog.pdf hydrography90m/sub-catchment.png

Drainage basin:
convert -density 650 -quality 75 -crop 1000x750+1275+1120 Fig6_plot_main_hydrog.pdf  hydrography90m/drainage-basin.png

Flow Direction:
convert -density 650 -quality 75 -crop 1000x750+1000+1120 Fig6_plot_main_hydrog.pdf  hydrography90m/flow-direction.png

------------------------------------------------------------------------------------------

Sub-catchment:
 convert -density 650 -quality 75 -crop 1020x750+3425+1120 Fig6_plot_main_hydrog.pdf hydrography90m/sub-catchment.png


