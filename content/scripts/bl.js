function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "198.41mm")
              .attr("height", "132.28mm")
              .attr("viewBox", "0 0 198.41 132.28")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var ctx = {
      "scale": 1.0,
      "tx": 0.0,
      "ty": 0.0
  };
(function (g) {
  g.attr("class", "plotroot yscalable");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide ylabels");
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", 200.9)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-0.4");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 23.7)
       .attr("y", 17.02)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.4");
})
;
    g.append("svg:text")
       .attr("x", 23.7)
       .attr("y", 85.97)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.1");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", -5.97)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("0.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", 177.91)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-0.3");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", -74.92)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("0.8");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", 223.88)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-0.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", -97.91)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("0.9");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", 131.94)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-0.1");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 23.7)
       .attr("y", 62.99)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.2");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", -28.95)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("0.6");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 23.7)
       .attr("y", 108.96)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.0");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", -51.94)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("0.7");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 23.7)
       .attr("y", 40)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.3");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 23.7)
         .attr("y", 154.93)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-0.2");
})
;
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 8.63)
       .attr("y", 62.99)
       .attr("text-anchor", "middle")
       .style("dominant-baseline", "central")
       .attr("transform", "rotate(-90, 8.63, 62.99)")
    .call(function(text) {
  text.text("Digit Frequency");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide xlabels");
    g.append("svg:text")
       .attr("x", 48.06)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("2");
})
;
    g.append("svg:text")
       .attr("x", 157.1)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("9");
})
;
    g.append("svg:text")
       .attr("x", 94.8)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("5");
})
;
    g.append("svg:text")
       .attr("x", 79.22)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("4");
})
;
    g.append("svg:text")
       .attr("x", 141.53)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("8");
})
;
    g.append("svg:text")
       .attr("x", 63.64)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("3");
})
;
    g.append("svg:text")
       .attr("x", 32.49)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("1");
})
;
    g.append("svg:text")
       .attr("x", 125.95)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("7");
})
;
    g.append("svg:text")
       .attr("x", 110.37)
       .attr("y", 117.02)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("6");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 94.8)
       .attr("y", 125.28)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Leading Digit");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px")
     .attr("fill", "#362A35");
    g.append("svg:text")
       .attr("x", 181.15)
       .attr("y", 61.31)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("variable");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px");
    (function (g) {
      g.attr("class", "guide color_expected")
       .on("click", guide_toggle_color("color_expected"));
      (function (g) {
        g.attr("fill", "#00BFFF")
         .attr("stroke", "#0096DD")
         .attr("stroke-width", 0.3);
        g.append("svg:path")
           .attr("d", "M166.89,63.31 L 171.19 63.31 171.19 67.62 166.89 67.62 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "none")
         .attr("fill", "#4C404B");
        g.append("svg:text")
           .attr("x", 172.19)
           .attr("y", 65.46)
           .style("dominant-baseline", "central")
        .call(function(text) {
  text.text("expected");
})
;
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      g.attr("class", "guide color_observed")
       .on("click", guide_toggle_color("color_observed"));
      (function (g) {
        g.attr("fill", "#D4CA3A")
         .attr("stroke", "#A8A200")
         .attr("stroke-width", 0.3);
        g.append("svg:path")
           .attr("d", "M166.89,68.62 L 171.19 68.62 171.19 72.92 166.89 72.92 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "none")
         .attr("fill", "#4C404B");
        g.append("svg:text")
           .attr("x", 172.19)
           .attr("y", 70.77)
           .style("dominant-baseline", "central")
        .call(function(text) {
  text.text("observed");
})
;
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 94.8)
       .attr("y", 12.26)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Benford's Law in 2012 U.S. County Labor Force Data");
})
;
  }(g.append("g")));
  (function (g) {
    g.on("mouseover", guide_background_mouseover("#C6C6C9"))
     .on("mouseout", guide_background_mouseout("#F0F0F3"))
     .call(zoom_behavior(ctx))
;
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath0")
    .append("svg:path")
      .attr("d", " M24.7,14.26 L 164.89 14.26 164.89 111.72 24.7 111.72 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
      (function (g) {
        g.attr("class", "guide background")
         .attr("stroke", "#F1F1F5")
         .attr("fill", "#FAFAFA");
        g.append("svg:path")
           .attr("d", "M24.7,14.26 L 164.89 14.26 164.89 111.72 24.7 111.72 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0.2)
         .attr("class", "guide ygridlines xfixed");
        g.append("svg:path")
           .attr("d", "M24.7,17.02 L 164.89 17.02");
        g.append("svg:path")
           .attr("d", "M24.7,-5.97 L 164.89 -5.97");
        g.append("svg:path")
           .attr("d", "M24.7,-74.92 L 164.89 -74.92");
        g.append("svg:path")
           .attr("d", "M24.7,-97.91 L 164.89 -97.91");
        g.append("svg:path")
           .attr("d", "M24.7,62.99 L 164.89 62.99");
        g.append("svg:path")
           .attr("d", "M24.7,108.96 L 164.89 108.96");
        g.append("svg:path")
           .attr("d", "M24.7,40 L 164.89 40");
        g.append("svg:path")
           .attr("d", "M24.7,154.93 L 164.89 154.93");
        g.append("svg:path")
           .attr("d", "M24.7,-51.94 L 164.89 -51.94");
        g.append("svg:path")
           .attr("d", "M24.7,-28.95 L 164.89 -28.95");
        g.append("svg:path")
           .attr("d", "M24.7,131.94 L 164.89 131.94");
        g.append("svg:path")
           .attr("d", "M24.7,223.88 L 164.89 223.88");
        g.append("svg:path")
           .attr("d", "M24.7,177.91 L 164.89 177.91");
        g.append("svg:path")
           .attr("d", "M24.7,85.97 L 164.89 85.97");
        g.append("svg:path")
           .attr("d", "M24.7,200.9 L 164.89 200.9");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0.2)
         .attr("class", "guide xgridlines yfixed");
        g.append("svg:path")
           .attr("d", "M87.01,14.26 L 87.01 111.72");
        g.append("svg:path")
           .attr("d", "M149.32,14.26 L 149.32 111.72");
        g.append("svg:path")
           .attr("d", "M133.74,14.26 L 133.74 111.72");
        g.append("svg:path")
           .attr("d", "M71.43,14.26 L 71.43 111.72");
        g.append("svg:path")
           .attr("d", "M118.16,14.26 L 118.16 111.72");
        g.append("svg:path")
           .attr("d", "M40.28,14.26 L 40.28 111.72");
        g.append("svg:path")
           .attr("d", "M55.85,14.26 L 55.85 111.72");
        g.append("svg:path")
           .attr("d", "M102.58,14.26 L 102.58 111.72");
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M24.7,14.26 L 164.89 14.26 164.89 111.72 24.7 111.72 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
      (function (g) {
        g.attr("class", "plotpanel");
        (function (g) {
          g.attr("fill", "none")
           .attr("stroke-width", 0.3);
          (function (g) {
            g.attr("stroke", "#D4CA3A")
             .attr("class", "geometry color_observed");
            g.append("svg:path")
               .attr("d", "M32.49,39.79 L 48.06 71.12 63.64 81.33 79.22 86.61 94.8 89.9 110.37 94.47 125.95 95.11 141.53 95.54 157.1 96.89");
          }(g.append("g")));
          (function (g) {
            g.attr("stroke", "#00BFFF")
             .attr("class", "geometry color_expected");
            g.append("svg:path")
               .attr("d", "M32.49,39.76 L 48.06 68.48 63.64 80.24 79.22 86.68 94.8 90.76 110.37 93.57 125.95 95.63 141.53 97.2 157.1 98.44");
          }(g.append("g")));
        }(g.append("g")));
        (function (g) {
          g.attr("stroke-width", 0.3);
          (function (g) {
            g.attr("stroke-width", 0.3);
g.selectAll("form0")
                  .data(d3.zip(data[0],data[1],data[2],data[3],data[4]))
                  .enter()
                  .append("circle")
.attr("cx", function(d) { return d[0]; })
.attr("cy", function(d) { return d[1]; })
.attr("r", 0.6)
.attr("class", function(d) { return d[2]; })
.on("mouseout", geom_point_mouseover(0.30), false)
.on("mouseover", geom_point_mouseover(3.00), false)
.attr("stroke", function(d) { return d[3]; })
.attr("fill", function(d, i) { return d[4]; })
;
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M24.7,14.26 L 164.89 14.26 164.89 111.72 24.7 111.72 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
      (function (g) {
        g.attr("stroke", "none")
         .attr("class", "guide zoomslider")
         .attr("opacity", 0.00);
        (function (g) {
          g.attr("stroke", "#6A6A6A")
           .attr("stroke-opacity", 0.00)
           .attr("stroke-width", 0.3)
           .attr("fill", "#EAEAEA")
           .on("click", zoomin_behavior(ctx))
.on("dblclick", function() { d3.event.stopPropagation(); })
.on("mouseover", zoomslider_button_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_button_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M157.89,17.26 L 161.89 17.26 161.89 21.26 157.89 21.26 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M158.69,18.86 L 159.49 18.86 159.49 18.06 160.29 18.06 160.29 18.86 161.09 18.86 161.09 19.66 160.29 19.66 160.29 20.46 159.49 20.46 159.49 19.66 158.69 19.66 z");
          }(g.append("g")));
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#EAEAEA")
           .on("click", zoomslider_track_behavior(ctx, 131.89, 148.89));
          g.append("svg:path")
             .attr("d", "M138.39,17.26 L 157.39 17.26 157.39 21.26 138.39 21.26 z");
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#6A6A6A")
           .attr("class", "zoomslider_thumb")
           .call(zoomslider_behavior(ctx, 131.89, 148.89))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M146.89,17.26 L 148.89 17.26 148.89 21.26 146.89 21.26 z");
        }(g.append("g")));
        (function (g) {
          g.attr("stroke", "#6A6A6A")
           .attr("stroke-opacity", 0.00)
           .attr("stroke-width", 0.3)
           .attr("fill", "#EAEAEA")
           .on("click", zoomout_behavior(ctx))
.on("dblclick", function() { d3.event.stopPropagation(); })
.on("mouseover", zoomslider_button_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_button_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M133.89,17.26 L 137.89 17.26 137.89 21.26 133.89 21.26 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M134.69,18.86 L 137.09 18.86 137.09 19.66 134.69 19.66 z");
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
  }(g.append("g")));
}(g.append("g")));
    d3.select(parent_id)
      .selectAll("path")
      .each(function() {
          var sw = parseFloat(window.getComputedStyle(this).getPropertyValue("stroke-width"));
          d3.select(this)
            .attr("vector-effect", "non-scaling-stroke")
            .style("stroke-width", sw + "mm");
      });
}

var data = [
  [32.48659435626102,48.063783068783074,63.640971781305126,79.21816049382717,94.79534920634921,110.37253791887127,125.94972663139333,141.52691534391536,157.10410405643742,32.48659435626102,48.063783068783074,63.640971781305126,79.21816049382717,94.79534920634921,110.37253791887127,125.94972663139333,141.52691534391536,157.10410405643742],
  [39.78724585936828,71.12417386591864,81.33187478832569,86.61418155936153,89.89777766027566,94.46625919198235,95.10870190737859,95.53699705097608,96.89326500570151,39.764647148932525,68.48203153554337,80.23952716375354,86.68197769066876,90.756965395239,93.56907633237824,95.62736238173969,97.19941592215422,98.43947331887894],
  ["geometry color_observed","geometry color_observed","geometry color_observed","geometry color_observed","geometry color_observed","geometry color_observed","geometry color_observed","geometry color_observed","geometry color_observed","geometry color_expected","geometry color_expected","geometry color_expected","geometry color_expected","geometry color_expected","geometry color_expected","geometry color_expected","geometry color_expected","geometry color_expected"],
  ["#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#A8A200","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD","#0096DD"],
  ["#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#D4CA3A","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF","#00BFFF"]];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};
