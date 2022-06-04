
# Pepe example:
# convert -density 600    -trim   -quality 500   -crop 640x620+0+0    */Fig11_plot_stream_slope.pdf  test.png
# ------------------------------------------------------------------------------------------
# JDH: # ICONS SHOULD BE ~0.25 - 0.30 MP
#pwd /Users/jay/Desktop/Website/hydrography.org/images/data/Fig(#)
# -crop   W x H + X + Y
# X + Y = top left corner

# r.watershed images: Fig6

# # DEM:  
## convert -density 600 -quality 75   -crop 975x710+1180+225  Fig6/Fig6_plot_main_hydrog.pdf  Fig6/elevation.png
exit 

# # Flow accumulation:  
# convert -density 600 -quality 75   -crop 970x710+3160+225  Fig6/Fig6_plot_main_hydrog.pdf  Fig6/flow-accumulation.png

# # Flow Direction: #Resized to 0.25MP using GUI
# convert -density 600 -quality 75   -crop 970x705+190+1030 Fig6/Fig6_plot_main_hydrog.pdf   Fig6/flow-direction.png

# # Drainage basin:
# convert -density 600 -quality 75  -crop 970x705+1180+1030 Fig6/Fig6_plot_main_hydrog.pdf     Fig6/drainage-basin.png

# # Stream Segment and Outlet:
# convert -density 600 -quality 75  -crop 970x705+2170+1030  Fig6/Fig6_plot_main_hydrog.pdf     Fig6/str-seg-outlet.png

# # Sub-catchment:
# convert -density 600 -quality 75  -crop 970x705+3160+1030  Fig6/Fig6_plot_main_hydrog.pdf    Fig6/sub-catchment.png

# #########################################

# # slope-curv-max-dw-cel:       
# convert -density 595 -quality 75 -crop  970x705+185+220 Fig11/Fig11_plot_stream_slope.pdf Fig11/slope-curv-max-dw-cel.png

# # slope-curv-min-dw-cel:
# convert -density 595 -quality 75 -crop  970x705+1170+220 Fig11/Fig11_plot_stream_slope.pdf Fig11/slope-curv-min-dw-cel.png

# # slope-elv-dw-cel:
# convert -density 595 -quality 75 -crop  970x705+2150+220 Fig11/Fig11_plot_stream_slope.pdf Fig11/slope-elv-dw-cel.png

# # slope-grad-dw-cel:
# convert -density 595 -quality 75 -crop  970x705+3135+220 Fig11/Fig11_plot_stream_slope.pdf Fig11/slope-grad-dw-cel.png

############################## W x H + X + Y

# # stream_dist_up_near:
# convert -density 595 -quality 75 -crop 985x705+1168+220   Fig12/Fig12_plot_stream_distance.pdf Fig12/stream-dist-up-near.png

# # stream_dist_up_farth:
# convert -density 595 -quality 75 -crop 985x705+2155+220   Fig12/Fig12_plot_stream_distance.pdf Fig12/stream-dist-up-farth.png

# # stream_dist_dw_near:
# convert -density 595 -quality 75 -crop 985x705+3135+220   Fig12/Fig12_plot_stream_distance.pdf Fig12/stream-dist-dw-near.png

# # outlet_dist_dw_basin:
# convert -density 595 -quality 75 -crop 985x705+185+1018   Fig12/Fig12_plot_stream_distance.pdf Fig12/outlet-dist-dw-basin.png

# # outlet-dist-dw-scratch:
# convert -density 595 -quality 75 -crop 985x705+1170+1018  Fig12/Fig12_plot_stream_distance.pdf Fig12/outlet-dist-dw-scratch.png

# # stream-dist-proximity:
# convert -density 595 -quality 75 -crop 985x705+2150+1018  Fig12/Fig12_plot_stream_distance.pdf Fig12/stream-dist-proximity.png

# # stream-diff-up-near:
# convert -density 595 -quality 75 -crop 985x705+3135+1018  Fig12/Fig12_plot_stream_distance.pdf Fig12/stream-diff-up-near.png

# # stream-diff-up-farth:
# convert -density 595 -quality 75 -crop 985x705+185+1820  Fig12/Fig12_plot_stream_distance.pdf Fig12/stream-diff-up-farth.png

# # stream-diff-dw-near:
# convert -density 595 -quality 75 -crop 985x705+1170+1820  Fig12/Fig12_plot_stream_distance.pdf  Fig12/stream-diff-dw-near.png

# # outlet-diff-dw-basin:Fig12/
# convert -density 595 -quality 75 -crop 985x705+2150+1820  Fig12/Fig12_plot_stream_distance.pdf  Fig12/outlet-diff-dw-basin.png

# # outlet-diff-dw-scratch:
# convert -density 595 -quality 75 -crop 985x705+3135+1820  Fig12/Fig12_plot_stream_distance.pdf  Fig12/outlet-diff-dw-scratch.png


# #Figure 13
# # channel-grad-dw-seg: 
# convert -density 595 -quality 75 -crop   985x705+1168+225   Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-grad-dw-seg.png

# # channel-grad-up-seg:
# convert -density 595 -quality 75 -crop   985x705+2150+225   Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-grad-up-seg.png

# # channel-grad-up-cel:
# convert -density 595 -quality 75 -crop   985x705+3130+225  Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-grad-up-cel.png

# # channel-curv-cel:
# convert -density 595 -quality 75 -crop   985x705+190+1020 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-curv-cel.png 

# # channel-elev-dw-seg:
# convert -density 595 -quality 75 -crop   985x705+1168+1020 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-elv-dw-seg.png  

# # channel-elv-up-seg:
# convert -density 595 -quality 75 -crop   985x705+2150+1020 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-elv-up-seg.png

# # channel-elv-up-cel:
# convert -density 595 -quality 75 -crop   985x705+3130+1020 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-elv-up-cel.png

# # channel-elv-dw-cel:
# convert -density 595 -quality 75 -crop   985x705+190+1820  Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-elv-dw-cel.png

# # channel-dist-dw-seg:
# convert -density 595 -quality 75 -crop   985x705+1168+1820 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-dist-dw-seg.png

# # channel-dist-up-seg:
# convert -density 595 -quality 75 -crop   985x705+2150+1820 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-dist-up-seg.png

# # channel-dist-up-cel:
# convert -density 595 -quality 75 -crop   985x705+3130+1820 Fig13/Fig13_plot_stream_channel.pdf Fig13/channel-dist-up-cel.png

#Figure 14: r.stream.order
####  W x H + X + Y ###

# stream-hack:
convert -density 595 -quality 75 -crop 985x705+185+220  Fig14/Fig14_plot_stream_order.pdf  Fig14/stream-hack.png

# stream-horton:
convert -density 595 -quality 75 -crop 985x705+1220+220 Fig14/Fig14_plot_stream_order.pdf Fig14/stream-horton.png

# stream-shreve:
convert -density 595 -quality 75 -crop 985x705+2250+220 Fig14/Fig14_plot_stream_order.pdf Fig14/stream-shreve.png

# stream-strahler:
convert -density 595 -quality 75 -crop 985x705+185+1018 Fig14/Fig14_plot_stream_order.pdf Fig14/stream-strahler.png

# stream-topo:
convert -density 595 -quality 75 -crop 985x705+1220+1018 Fig14/Fig14_plot_stream_order.pdf Fig14/stream-topo.png

# vect:
convert -density 595 -quality 75 -crop 1200x705+2250+1018 Fig14/Fig14_plot_stream_order.pdf Fig14/vect.png  


