function draw_with_data(data, parent_id) {
  var g = d3.select(parent_id)
            .append("svg")
              .attr("width", "198.41mm")
              .attr("height", "105.82mm")
              .attr("viewBox", "0 0 198.41 105.82")
              .attr("stroke-width", "0.5")
              .attr("style", "stroke:black;fill:black");
  g.append("defs");
  var ctx = {
      "scale": 1.0,
      "tx": 0.0,
      "ty": 0.0
  };
(function (g) {
  g.attr("class", "plotroot xscalable yscalable");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide ylabels");
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -49.52)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("2.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 101.92)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-1.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 139.78)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-2.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -87.37)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("3.5");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 7.27)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1.0");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -30.59)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("2.0");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 177.63)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-3.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -11.66)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("1.5");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 26.2)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.5");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 120.85)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-2.0");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -68.45)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("3.0");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 64.06)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-0.5");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 158.71)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-3.0");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 45.13)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.0");
})
;
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 82.99)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1.0");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide xlabels");
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 387.65)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("550");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -43.98)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("-100");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 354.44)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("500");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 155.23)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("200");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -143.59)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("-250");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 254.84)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("350");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 288.04)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("400");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 221.63)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("300");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 321.24)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("450");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -10.78)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("-50");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 122.03)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("150");
})
;
    g.append("svg:text")
       .attr("x", 188.43)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("250");
})
;
    g.append("svg:text")
       .attr("x", 22.42)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("0");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -176.79)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("-300");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 55.62)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("50");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -77.19)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("-150");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 88.83)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("100");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -110.39)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("-200");
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
       .attr("x", 105.43)
       .attr("y", 98.82)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Time");
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
      .attr("d", " M17.44,5 L 193.41 5 193.41 85.26 17.44 85.26 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
      (function (g) {
        g.attr("class", "guide background")
         .attr("stroke", "#F1F1F5")
         .attr("fill", "#FAFAFA");
        g.append("svg:path")
           .attr("d", "M17.44,5 L 193.41 5 193.41 85.26 17.44 85.26 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0.2)
         .attr("class", "guide ygridlines xfixed");
        g.append("svg:path")
           .attr("d", "M17.44,101.92 L 193.41 101.92");
        g.append("svg:path")
           .attr("d", "M17.44,-87.37 L 193.41 -87.37");
        g.append("svg:path")
           .attr("d", "M17.44,-30.59 L 193.41 -30.59");
        g.append("svg:path")
           .attr("d", "M17.44,-11.66 L 193.41 -11.66");
        g.append("svg:path")
           .attr("d", "M17.44,120.85 L 193.41 120.85");
        g.append("svg:path")
           .attr("d", "M17.44,64.06 L 193.41 64.06");
        g.append("svg:path")
           .attr("d", "M17.44,45.13 L 193.41 45.13");
        g.append("svg:path")
           .attr("d", "M17.44,82.99 L 193.41 82.99");
        g.append("svg:path")
           .attr("d", "M17.44,158.71 L 193.41 158.71");
        g.append("svg:path")
           .attr("d", "M17.44,-68.45 L 193.41 -68.45");
        g.append("svg:path")
           .attr("d", "M17.44,26.2 L 193.41 26.2");
        g.append("svg:path")
           .attr("d", "M17.44,177.63 L 193.41 177.63");
        g.append("svg:path")
           .attr("d", "M17.44,7.27 L 193.41 7.27");
        g.append("svg:path")
           .attr("d", "M17.44,139.78 L 193.41 139.78");
        g.append("svg:path")
           .attr("d", "M17.44,-49.52 L 193.41 -49.52");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0.2)
         .attr("class", "guide xgridlines yfixed");
        g.append("svg:path")
           .attr("d", "M-43.98,5 L -43.98 85.26");
        g.append("svg:path")
           .attr("d", "M155.23,5 L 155.23 85.26");
        g.append("svg:path")
           .attr("d", "M254.84,5 L 254.84 85.26");
        g.append("svg:path")
           .attr("d", "M221.63,5 L 221.63 85.26");
        g.append("svg:path")
           .attr("d", "M-10.78,5 L -10.78 85.26");
        g.append("svg:path")
           .attr("d", "M188.43,5 L 188.43 85.26");
        g.append("svg:path")
           .attr("d", "M-176.79,5 L -176.79 85.26");
        g.append("svg:path")
           .attr("d", "M-77.19,5 L -77.19 85.26");
        g.append("svg:path")
           .attr("d", "M-110.39,5 L -110.39 85.26");
        g.append("svg:path")
           .attr("d", "M88.83,5 L 88.83 85.26");
        g.append("svg:path")
           .attr("d", "M55.62,5 L 55.62 85.26");
        g.append("svg:path")
           .attr("d", "M22.42,5 L 22.42 85.26");
        g.append("svg:path")
           .attr("d", "M122.03,5 L 122.03 85.26");
        g.append("svg:path")
           .attr("d", "M321.24,5 L 321.24 85.26");
        g.append("svg:path")
           .attr("d", "M288.04,5 L 288.04 85.26");
        g.append("svg:path")
           .attr("d", "M-143.59,5 L -143.59 85.26");
        g.append("svg:path")
           .attr("d", "M354.44,5 L 354.44 85.26");
        g.append("svg:path")
           .attr("d", "M387.65,5 L 387.65 85.26");
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M17.44,5 L 193.41 5 193.41 85.26 17.44 85.26 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
      (function (g) {
        g.attr("class", "plotpanel");
        (function (g) {
          g.attr("stroke", "#00BFFF")
           .attr("class", "geometry")
           .attr("fill", "none")
           .attr("stroke-width", 0.3);
          g.append("svg:path")
             .attr("d", "M23.08,40.57 L 23.75 43.76 24.41 43.69 25.08 45.99 25.74 50.36 26.4 52.12 27.07 56.38 27.73 59.19 28.4 55.22 29.06 45.97 29.72 47.19 30.39 44.88 31.05 34.64 31.72 28.59 32.38 28.41 33.05 32.93 33.71 30.71 34.37 43.87 35.04 39.17 35.7 39.68 36.37 41.93 37.03 44.77 37.69 54.6 38.36 56.92 39.02 58.25 39.69 57.09 40.35 54.69 41.01 39.45 41.68 30.51 42.34 25.95 43.01 16.39 43.67 19.96 44.33 28.9 45 37.62 45.66 40.25 46.33 39.83 46.99 34.98 47.65 45.2 48.32 35.88 48.98 43.08 49.65 37.35 50.31 37.51 50.97 40.39 51.64 30.58 52.3 29.54 52.97 30.12 53.63 40.14 54.29 56.26 54.96 58.32 55.62 51.91 56.29 55.57 56.95 52.46 57.61 53.47 58.28 50.15 58.94 48.21 59.61 32.31 60.27 35.91 60.94 35.41 61.6 34.76 62.26 41.5 62.93 35.7 63.59 30.83 64.26 35.88 64.92 41.3 65.58 46.26 66.25 50.61 66.91 51.93 67.58 50.16 68.24 50.4 68.9 49.72 69.57 42.36 70.23 34.91 70.9 42.36 71.56 35.59 72.22 41.7 72.89 47.07 73.55 49.14 74.22 43.97 74.88 39.37 75.54 33.53 76.21 36.21 76.87 40.31 77.54 38.12 78.2 42.15 78.86 42.42 79.53 45.59 80.19 49.18 80.86 55.49 81.52 60.62 82.18 56.98 82.85 55.05 83.51 55.01 84.18 47.15 84.84 38.88 85.5 38.82 86.17 38.32 86.83 48.34 87.5 49.31 88.16 50.22 88.83 46.14 89.49 46.16 90.15 51.26 90.82 51.61 91.48 46.26 92.15 42.2 92.81 42.02 93.47 41.73 94.14 44.23 94.8 36.5 95.47 36.21 96.13 34.23 96.79 39.06 97.46 42.22 98.12 50.29 98.79 48.93 99.45 43.01 100.11 39.34 100.78 42.45 101.44 38.43 102.11 42.57 102.77 45.02 103.43 50.33 104.1 56.81 104.76 60.07 105.43 51.32 106.09 44.53 106.75 32.66 107.42 29.1 108.08 34.64 108.75 44.06 109.41 60.29 110.07 69.55 110.74 61.42 111.4 49.94 112.07 50.34 112.73 56.4 113.39 61.11 114.06 55.34 114.72 46.21 115.39 36.28 116.05 27.5 116.72 32.65 117.38 38.87 118.04 41.45 118.71 37.18 119.37 42.98 120.04 39.72 120.7 43.82 121.36 41.44 122.03 38.05 122.69 45.31 123.36 40.22 124.02 26.26 124.68 28.92 125.35 28.05 126.01 31.94 126.68 45.04 127.34 52.78 128 68.76 128.67 65.78 129.33 59.48 130 48.92 130.66 43.99 131.32 32.47 131.99 26.1 132.65 32.72 133.32 38.46 133.98 57.83 134.64 50.74 135.31 54.68 135.97 58.59 136.64 46.62 137.3 35.89 137.96 29.31 138.63 35.15 139.29 32.41 139.96 37.55 140.62 45.27 141.28 55.91 141.95 41.26 142.61 42.25 143.28 34.76 143.94 43.53 144.61 59.43 145.27 73.42 145.93 76.99 146.6 73.66 147.26 52.37 147.93 46.78 148.59 35.89 149.25 29.3 149.92 38.6 150.58 38.14 151.25 43.09 151.91 42.41 152.57 36.2 153.24 30.38 153.9 31.93 154.57 39.04 155.23 45.68 155.89 40.86 156.56 44.77 157.22 44.22 157.89 35.05 158.55 34.68 159.21 41.29 159.88 47.11 160.54 57.59 161.21 55.29 161.87 48.03 162.53 48.55 163.2 49.45 163.86 48.77 164.53 57.22 165.19 52.1 165.85 38.72 166.52 35.05 167.18 33.22 167.85 28.83 168.51 32.41 169.17 40.52 169.84 50.49 170.5 51.14 171.17 47.35 171.83 37.3 172.5 40.16 173.16 45.84 173.82 41.46 174.49 44.08 175.15 46.99 175.82 51.74 176.48 56.53 177.14 65.7 177.81 53.1 178.47 53.75 179.14 38.36 179.8 28.88 180.46 28.4 181.13 35.93 181.79 39.31 182.46 49.37 183.12 42.72 183.78 49.43 184.45 49.32 185.11 47.2 185.78 48.61 186.44 57 187.1 53.65 187.77 53.05 188.43 50.86");
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M17.44,5 L 193.41 5 193.41 85.26 17.44 85.26 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
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
             .attr("d", "M186.41,8 L 190.41 8 190.41 12 186.41 12 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M187.21,9.6 L 188.01 9.6 188.01 8.8 188.81 8.8 188.81 9.6 189.61 9.6 189.61 10.4 188.81 10.4 188.81 11.2 188.01 11.2 188.01 10.4 187.21 10.4 z");
          }(g.append("g")));
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#EAEAEA")
           .on("click", zoomslider_track_behavior(ctx, 160.41, 177.41));
          g.append("svg:path")
             .attr("d", "M166.91,8 L 185.91 8 185.91 12 166.91 12 z");
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#6A6A6A")
           .attr("class", "zoomslider_thumb")
           .call(zoomslider_behavior(ctx, 160.41, 177.41))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M175.41,8 L 177.41 8 177.41 12 175.41 12 z");
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
             .attr("d", "M162.41,8 L 166.41 8 166.41 12 162.41 12 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M163.21,9.6 L 165.61 9.6 165.61 10.4 163.21 10.4 z");
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
];

var draw = function(parent_id) {
    draw_with_data(data, parent_id);
};
