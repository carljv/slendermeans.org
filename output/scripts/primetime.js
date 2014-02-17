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
  g.attr("class", "plotroot");
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#4C404B")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.18px")
     .attr("class", "guide ylabels");
    g.append("svg:text")
       .attr("x", 19.05)
       .attr("y", 16.27)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1500");
})
;
    g.append("svg:text")
       .attr("x", 19.05)
       .attr("y", 60.92)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("500");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", 172.56)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-2000");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", 150.23)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-1500");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", 127.91)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-1000");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", 105.58)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("-500");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", -50.72)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("3000");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 19.05)
       .attr("y", 38.6)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("1000");
})
;
    g.append("svg:text")
       .attr("x", 19.05)
       .attr("y", 83.25)
       .attr("text-anchor", "end")
       .style("dominant-baseline", "central")
    .call(function(text) {
  text.text("0");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", -73.04)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("3500");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", -28.39)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("2500");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 19.05)
         .attr("y", -6.06)
         .attr("text-anchor", "end")
         .style("dominant-baseline", "central")
      .call(function(text) {
  text.text("2000");
})
;
    }(g.append("g")));
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
         .attr("x", 277.25)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -149.05)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 248.83)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -63.79)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 191.99)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 362.51)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 334.09)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 49.89)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("10");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -35.37)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 390.93)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -6.95)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -120.63)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -177.47)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 220.41)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 78.31)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("20");
})
;
    g.append("svg:text")
       .attr("x", 21.47)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("");
})
;
    g.append("svg:text")
       .attr("x", 163.57)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("50");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", -92.21)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
})
;
    }(g.append("g")));
    g.append("svg:text")
       .attr("x", 135.15)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("40");
})
;
    g.append("svg:text")
       .attr("x", 106.73)
       .attr("y", 90.56)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("30");
})
;
    (function (g) {
      g.attr("visibility", "hidden");
      g.append("svg:text")
         .attr("x", 305.67)
         .attr("y", 90.56)
         .attr("text-anchor", "middle")
      .call(function(text) {
  text.text("");
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
       .attr("x", 106.73)
       .attr("y", 98.82)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Time");
})
;
  }(g.append("g")));
  (function (g) {
    g.attr("stroke", "none")
     .attr("fill", "#362A35")
     .attr("font-family", "'PT Sans','Helvetica Neue','Helvetica',sans-serif")
     .style("font-size", "3.88px");
    g.append("svg:text")
       .attr("x", 106.73)
       .attr("y", 12.26)
       .attr("text-anchor", "middle")
    .call(function(text) {
  text.text("Waiting times until a prime number\nfrom a Poisson(5000) process (N=10,000)");
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
      .attr("d", " M20.05,14.26 L 193.41 14.26 193.41 85.26 20.05 85.26 z");g.attr("clip-path", "url(#" + parent_id + "_clippath0)");
      (function (g) {
        g.attr("class", "guide background")
         .attr("stroke", "#F1F1F5")
         .attr("fill", "#FAFAFA");
        g.append("svg:path")
           .attr("d", "M20.05,14.26 L 193.41 14.26 193.41 85.26 20.05 85.26 z");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0.2)
         .attr("class", "guide ygridlines xfixed");
        g.append("svg:path")
           .attr("d", "M20.05,60.92 L 193.41 60.92");
        g.append("svg:path")
           .attr("d", "M20.05,150.23 L 193.41 150.23");
        g.append("svg:path")
           .attr("d", "M20.05,105.58 L 193.41 105.58");
        g.append("svg:path")
           .attr("d", "M20.05,38.6 L 193.41 38.6");
        g.append("svg:path")
           .attr("d", "M20.05,-73.04 L 193.41 -73.04");
        g.append("svg:path")
           .attr("d", "M20.05,-6.06 L 193.41 -6.06");
        g.append("svg:path")
           .attr("d", "M20.05,-28.39 L 193.41 -28.39");
        g.append("svg:path")
           .attr("d", "M20.05,83.25 L 193.41 83.25");
        g.append("svg:path")
           .attr("d", "M20.05,-50.72 L 193.41 -50.72");
        g.append("svg:path")
           .attr("d", "M20.05,127.91 L 193.41 127.91");
        g.append("svg:path")
           .attr("d", "M20.05,172.56 L 193.41 172.56");
        g.append("svg:path")
           .attr("d", "M20.05,16.27 L 193.41 16.27");
      }(g.append("g")));
      (function (g) {
        g.attr("stroke", "#F0F0F3")
         .attr("stroke-width", 0.2)
         .attr("class", "guide xgridlines yfixed");
        g.append("svg:path")
           .attr("d", "M-149.05,14.26 L -149.05 85.26");
        g.append("svg:path")
           .attr("d", "M-63.79,14.26 L -63.79 85.26");
        g.append("svg:path")
           .attr("d", "M362.51,14.26 L 362.51 85.26");
        g.append("svg:path")
           .attr("d", "M49.89,14.26 L 49.89 85.26");
        g.append("svg:path")
           .attr("d", "M390.93,14.26 L 390.93 85.26");
        g.append("svg:path")
           .attr("d", "M-120.63,14.26 L -120.63 85.26");
        g.append("svg:path")
           .attr("d", "M220.41,14.26 L 220.41 85.26");
        g.append("svg:path")
           .attr("d", "M21.47,14.26 L 21.47 85.26");
        g.append("svg:path")
           .attr("d", "M-92.21,14.26 L -92.21 85.26");
        g.append("svg:path")
           .attr("d", "M106.73,14.26 L 106.73 85.26");
        g.append("svg:path")
           .attr("d", "M305.67,14.26 L 305.67 85.26");
        g.append("svg:path")
           .attr("d", "M135.15,14.26 L 135.15 85.26");
        g.append("svg:path")
           .attr("d", "M163.57,14.26 L 163.57 85.26");
        g.append("svg:path")
           .attr("d", "M78.31,14.26 L 78.31 85.26");
        g.append("svg:path")
           .attr("d", "M-177.47,14.26 L -177.47 85.26");
        g.append("svg:path")
           .attr("d", "M-6.95,14.26 L -6.95 85.26");
        g.append("svg:path")
           .attr("d", "M-35.37,14.26 L -35.37 85.26");
        g.append("svg:path")
           .attr("d", "M334.09,14.26 L 334.09 85.26");
        g.append("svg:path")
           .attr("d", "M191.99,14.26 L 191.99 85.26");
        g.append("svg:path")
           .attr("d", "M248.83,14.26 L 248.83 85.26");
        g.append("svg:path")
           .attr("d", "M277.25,14.26 L 277.25 85.26");
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath1")
    .append("svg:path")
      .attr("d", " M20.05,14.26 L 193.41 14.26 193.41 85.26 20.05 85.26 z");g.attr("clip-path", "url(#" + parent_id + "_clippath1)");
      (function (g) {
        g.attr("class", "plotpanel");
        (function (g) {
          g.attr("shape-rendering", "crispEdges")
           .attr("fill", "#00BFFF")
           .attr("stroke", "none");
          (function (g) {
            g.attr("id", "id173")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M183.51,83.25 L 186.31 83.25 186.31 83.21 183.51 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id171")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M177.93,83.25 L 180.72 83.25 180.72 83.21 177.93 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id169")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M172.34,83.25 L 175.14 83.25 175.14 83.21 172.34 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id167")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M166.76,83.25 L 169.55 83.25 169.55 83.21 166.76 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id165")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M161.17,83.25 L 163.96 83.25 163.96 83.21 161.17 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id163")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M155.58,83.25 L 158.38 83.25 158.38 83.21 155.58 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id161")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M150,83.25 L 152.79 83.25 152.79 83.03 150 83.03 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id159")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M144.41,83.25 L 147.21 83.25 147.21 83.16 144.41 83.16 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id157")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M138.83,83.25 L 141.62 83.25 141.62 82.98 138.83 82.98 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id155")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M133.24,83.25 L 136.03 83.25 136.03 83.12 133.24 83.12 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id153")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M127.65,83.25 L 130.45 83.25 130.45 82.94 127.65 82.94 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id151")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M122.07,83.25 L 124.86 83.25 124.86 82.76 122.07 82.76 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id149")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M116.48,83.25 L 119.28 83.25 119.28 82.67 116.48 82.67 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id147")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M110.9,83.25 L 113.69 83.25 113.69 82.18 110.9 82.18 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id145")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M105.31,83.25 L 108.1 83.25 108.1 82.4 105.31 82.4 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id143")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M99.72,83.25 L 102.52 83.25 102.52 81.02 99.72 81.02 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id141")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M94.14,83.25 L 96.93 83.25 96.93 81.42 94.14 81.42 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id139")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M88.55,83.25 L 91.35 83.25 91.35 80.75 88.55 80.75 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id137")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M82.97,83.25 L 85.76 83.25 85.76 80.57 82.97 80.57 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id135")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M77.38,83.25 L 80.17 83.25 80.17 79.23 77.38 79.23 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id133")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M71.79,83.25 L 74.59 83.25 74.59 76.95 71.79 76.95 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id131")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M66.21,83.25 L 69 83.25 69 75.53 66.21 75.53 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id129")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M60.62,83.25 L 63.42 83.25 63.42 73.16 60.62 73.16 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id127")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M55.04,83.25 L 57.83 83.25 57.83 71.46 55.04 71.46 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id125")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M49.45,83.25 L 52.24 83.25 52.24 65.97 49.45 65.97 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id123")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M43.86,83.25 L 46.66 83.25 46.66 62.31 43.86 62.31 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id121")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M38.28,83.25 L 41.07 83.25 41.07 53.82 38.28 53.82 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id119")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M32.69,83.25 L 35.49 83.25 35.49 45.56 32.69 45.56 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id117")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M27.11,83.25 L 29.9 83.25 29.9 33.91 27.11 33.91 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id116")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M24.31,83.25 L 27.11 83.25 27.11 23.46 24.31 23.46 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id118")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M29.9,83.25 L 32.69 83.25 32.69 39.04 29.9 39.04 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id120")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M35.49,83.25 L 38.28 83.25 38.28 50.83 35.49 50.83 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id122")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M41.07,83.25 L 43.86 83.25 43.86 57.48 41.07 57.48 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id124")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M46.66,83.25 L 49.45 83.25 49.45 65.61 46.66 65.61 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id126")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M52.24,83.25 L 55.04 83.25 55.04 69.36 52.24 69.36 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id128")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M57.83,83.25 L 60.62 83.25 60.62 72.85 57.83 72.85 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id130")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M63.42,83.25 L 66.21 83.25 66.21 74.9 63.42 74.9 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id132")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M69,83.25 L 71.79 83.25 71.79 76.82 69 76.82 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id134")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M74.59,83.25 L 77.38 83.25 77.38 78.56 74.59 78.56 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id136")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M80.17,83.25 L 82.97 83.25 82.97 79.68 80.17 79.68 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id138")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M85.76,83.25 L 88.55 83.25 88.55 80.12 85.76 80.12 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id140")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M91.35,83.25 L 94.14 83.25 94.14 81.38 91.35 81.38 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id142")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M96.93,83.25 L 99.72 83.25 99.72 82.18 96.93 82.18 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id144")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M102.52,83.25 L 105.31 83.25 105.31 82 102.52 82 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id146")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M108.1,83.25 L 110.9 83.25 110.9 82.22 108.1 82.22 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id148")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M113.69,83.25 L 116.48 83.25 116.48 82.8 113.69 82.8 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id150")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M119.28,83.25 L 122.07 83.25 122.07 82.54 119.28 82.54 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id152")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M124.86,83.25 L 127.65 83.25 127.65 82.8 124.86 82.8 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id154")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M130.45,83.25 L 133.24 83.25 133.24 82.98 130.45 82.98 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id156")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M136.03,83.25 L 138.83 83.25 138.83 83.07 136.03 83.07 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id158")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M141.62,83.25 L 144.41 83.25 144.41 82.98 141.62 82.98 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id160")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M147.21,83.25 L 150 83.25 150 83.03 147.21 83.03 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id162")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M152.79,83.25 L 155.58 83.25 155.58 83.21 152.79 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id164")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M158.38,83.25 L 161.17 83.25 161.17 83.16 158.38 83.16 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id166")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M163.96,83.25 L 166.76 83.25 166.76 83.21 163.96 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id168")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M169.55,83.25 L 172.34 83.25 172.34 83.21 169.55 83.21 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id170")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M175.14,83.25 L 177.93 83.25 177.93 83.16 175.14 83.16 z");
          }(g.append("g")));
          (function (g) {
            g.attr("id", "id172")
             .attr("class", "geometry");
            g.append("svg:path")
               .attr("d", "M180.72,83.25 L 183.51 83.25 183.51 83.21 180.72 83.21 z");
          }(g.append("g")));
        }(g.append("g")));
      }(g.append("g")));
    }(g.append("g")));
    (function (g) {
      d3.select("defs")
  .append("svg:clipPath")
    .attr("id", parent_id + "_clippath2")
    .append("svg:path")
      .attr("d", " M20.05,14.26 L 193.41 14.26 193.41 85.26 20.05 85.26 z");g.attr("clip-path", "url(#" + parent_id + "_clippath2)");
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
             .attr("d", "M186.41,17.26 L 190.41 17.26 190.41 21.26 186.41 21.26 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M187.21,18.86 L 188.01 18.86 188.01 18.06 188.81 18.06 188.81 18.86 189.61 18.86 189.61 19.66 188.81 19.66 188.81 20.46 188.01 20.46 188.01 19.66 187.21 19.66 z");
          }(g.append("g")));
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#EAEAEA")
           .on("click", zoomslider_track_behavior(ctx, 160.41, 177.41));
          g.append("svg:path")
             .attr("d", "M166.91,17.26 L 185.91 17.26 185.91 21.26 166.91 21.26 z");
        }(g.append("g")));
        (function (g) {
          g.attr("fill", "#6A6A6A")
           .attr("class", "zoomslider_thumb")
           .call(zoomslider_behavior(ctx, 160.41, 177.41))
.on("mouseover", zoomslider_thumb_mouseover("#cd5c5c"))
.on("mouseout", zoomslider_thumb_mouseover("#6a6a6a"))
;
          g.append("svg:path")
             .attr("d", "M175.41,17.26 L 177.41 17.26 177.41 21.26 175.41 21.26 z");
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
             .attr("d", "M162.41,17.26 L 166.41 17.26 166.41 21.26 162.41 21.26 z");
          (function (g) {
            g.attr("fill", "#6A6A6A")
             .attr("class", "button_logo");
            g.append("svg:path")
               .attr("d", "M163.21,18.86 L 165.61 18.86 165.61 19.66 163.21 19.66 z");
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
