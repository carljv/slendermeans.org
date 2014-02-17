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
         .attr("y", -38.16)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("2.5");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 82.99)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("-1.5");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 113.28)
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
         .attr("y", -68.45)
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
         .attr("y", 173.85)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-4.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -23.02)
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
         .attr("y", 143.56)
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
         .attr("y", -7.87)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("1.5");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", 158.71)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-4.0");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 22.41)
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
         .attr("y", 98.13)
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
         .attr("y", -53.3)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("3.0");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 52.7)
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
         .attr("y", 128.42)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-3.0");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 16.44)
         .attr("y", -83.59)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("4.0");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 37.56)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0.0");
})
;
    g.append("svg:text")
       .attr("x", 16.44)
       .attr("y", 67.85)
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
           .attr("d", "M17.44,82.99 L 193.41 82.99");
        g.append("svg:path")
           .attr("d", "M17.44,-68.45 L 193.41 -68.45");
        g.append("svg:path")
           .attr("d", "M17.44,173.85 L 193.41 173.85");
        g.append("svg:path")
           .attr("d", "M17.44,143.56 L 193.41 143.56");
        g.append("svg:path")
           .attr("d", "M17.44,158.71 L 193.41 158.71");
        g.append("svg:path")
           .attr("d", "M17.44,98.13 L 193.41 98.13");
        g.append("svg:path")
           .attr("d", "M17.44,52.7 L 193.41 52.7");
        g.append("svg:path")
           .attr("d", "M17.44,-83.59 L 193.41 -83.59");
        g.append("svg:path")
           .attr("d", "M17.44,67.85 L 193.41 67.85");
        g.append("svg:path")
           .attr("d", "M17.44,37.56 L 193.41 37.56");
        g.append("svg:path")
           .attr("d", "M17.44,128.42 L 193.41 128.42");
        g.append("svg:path")
           .attr("d", "M17.44,-53.3 L 193.41 -53.3");
        g.append("svg:path")
           .attr("d", "M17.44,22.41 L 193.41 22.41");
        g.append("svg:path")
           .attr("d", "M17.44,-7.87 L 193.41 -7.87");
        g.append("svg:path")
           .attr("d", "M17.44,-23.02 L 193.41 -23.02");
        g.append("svg:path")
           .attr("d", "M17.44,7.27 L 193.41 7.27");
        g.append("svg:path")
           .attr("d", "M17.44,113.28 L 193.41 113.28");
        g.append("svg:path")
           .attr("d", "M17.44,-38.16 L 193.41 -38.16");
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
             .attr("d", "M23.08,37.37 L 23.75 38.15 24.41 38.41 25.08 40.07 25.74 44.55 26.4 43.07 27.07 50.77 27.73 55.56 28.4 53 29.06 54.82 29.72 48.09 30.39 47.87 31.05 49.99 31.72 47.34 32.38 39.34 33.05 35 33.71 37.7 34.37 51.09 35.04 54.02 35.7 52.21 36.37 55.01 37.03 48.01 37.69 53.82 38.36 50.19 39.02 38.63 39.69 38.41 40.35 43.13 41.01 47.41 41.68 51.45 42.34 47.15 43.01 40.08 43.67 49.21 44.33 47.57 45 45.64 45.66 43.01 46.33 42.78 46.99 48.06 47.65 43.16 48.32 47.2 48.98 53.14 49.65 50.28 50.31 50.33 50.97 42.93 51.64 39.48 52.3 38.94 52.97 40.52 53.63 43.27 54.29 44.83 54.96 41.79 55.62 42.68 56.29 34.33 56.95 33.35 57.61 36.12 58.28 30.41 58.94 30.55 59.61 24.9 60.27 23.21 60.94 24.95 61.6 26.85 62.26 30.74 62.93 30.52 63.59 29.82 64.26 25.15 64.92 26.58 65.58 27.48 66.25 17.98 66.91 21.41 67.58 24.95 68.24 28.46 68.9 25.99 69.57 18.97 70.23 14.9 70.9 9.05 71.56 11.39 72.22 17.12 72.89 24.02 73.55 22.74 74.22 32.18 74.88 30.04 75.54 25.62 76.21 22.49 76.87 24.44 77.54 24.93 78.2 24.97 78.86 26.04 79.53 26.09 80.19 23.76 80.86 29.79 81.52 21.95 82.18 25.89 82.85 23.12 83.51 24.21 84.18 34.48 84.84 33.01 85.5 38.15 86.17 45.62 86.83 41.09 87.5 43.54 88.16 41.7 88.83 38.46 89.49 50.31 90.15 47.82 90.82 48.45 91.48 45.72 92.15 43.18 92.81 41.83 93.47 38.26 94.14 31.22 94.8 27.96 95.47 34.1 96.13 34.66 96.79 31.8 97.46 34.54 98.12 36.32 98.79 30.15 99.45 35.55 100.11 31.35 100.78 28.3 101.44 28.78 102.11 32.27 102.77 28.01 103.43 31.21 104.1 31.45 104.76 25.49 105.43 26.27 106.09 24.62 106.75 28.78 107.42 25.65 108.08 28.98 108.75 28.08 109.41 29.26 110.07 32.24 110.74 31.93 111.4 38.21 112.07 34.49 112.73 32.18 113.39 29.88 114.06 27.42 114.72 32.84 115.39 22.22 116.05 25.47 116.72 23.98 117.38 31.39 118.04 27.56 118.71 36.5 119.37 42.07 120.04 34.39 120.7 33.31 121.36 33.31 122.03 29.9 122.69 31.25 123.36 33.4 124.02 28.74 124.68 29.68 125.35 36.41 126.01 30.9 126.68 36.77 127.34 38.6 128 46.69 128.67 48.16 129.33 36.78 130 35.29 130.66 32.18 131.32 26.8 131.99 31.18 132.65 23.87 133.32 19.88 133.98 12.26 134.64 21.15 135.31 16.03 135.97 19.43 136.64 30.87 137.3 27.07 137.96 29.36 138.63 30.97 139.29 35.89 139.96 37.54 140.62 42.33 141.28 43.52 141.95 48.7 142.61 40.49 143.28 39.65 143.94 35.65 144.61 45.35 145.27 41.46 145.93 45.46 146.6 46.28 147.26 43.97 147.93 45.59 148.59 52.96 149.25 55.85 149.92 57.33 150.58 57.16 151.25 70.54 151.91 60.5 152.57 49.5 153.24 50.89 153.9 52.77 154.57 53.35 155.23 49.82 155.89 39.98 156.56 40.54 157.22 42.29 157.89 37.51 158.55 43.07 159.21 45.12 159.88 45.28 160.54 43.52 161.21 36.64 161.87 39.74 162.53 43.97 163.2 47.7 163.86 34.7 164.53 29.71 165.19 22.64 165.85 29.47 166.52 27.88 167.18 35.69 167.85 29.74 168.51 28.81 169.17 30.76 169.84 27.59 170.5 29.25 171.17 25.74 171.83 29.89 172.5 29 173.16 31.78 173.82 30 174.49 31.42 175.15 26.76 175.82 23.55 176.48 35.53 177.14 42.95 177.81 42.86 178.47 44.29 179.14 54.27 179.8 48.96 180.46 50.9 181.13 47.08 181.79 42.03 182.46 38.53 183.12 33.44 183.78 32.92 184.45 31.4 185.11 31.94 185.78 28.65 186.44 35.15 187.1 33.65 187.77 31.8 188.43 30.58");
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
