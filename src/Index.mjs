// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Caml_array from "rescript/lib/es6/caml_array.js";
import * as React$1 from "@headlessui/react";

function Index$Hero(Props) {
  var children = Props.children;
  return React.createElement("div", undefined, React.createElement("div", {
                  className: ""
                }, children));
}

var allCudaVersions = [
  "10.0",
  "10.1",
  "10.2",
  "11.0",
  "11.1",
  "11.2"
];

var builds = [
  "Stable",
  "Nightly"
];

var platforms = [
  "CUDA",
  "CPU",
  "CUDA-XLA"
];

function Index$Variant$Option(Props) {
  var name = Props.name;
  return React.createElement(React$1.Tab, {
              className: (function (param) {
                  return [
                            "w-full py-2.5 text-sm leading-5 font-medium rounded-lg",
                            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                            param.selected ? "bg-white shadow text-blue-700 text-opacity-80" : "text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white"
                          ].join(" ");
                }),
              children: (function (param) {
                  return name;
                }),
              key: name
            });
}

function $$default(param) {
  var match = React.useState(function () {
        return {
                build: "Stable",
                platform: "CUDA",
                cudaVersion: "10.2"
              };
      });
  var setState = match[1];
  var state = match[0];
  return React.createElement(Index$Hero, {
              children: React.createElement("div", {
                    className: "rounded-xl overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600 flex flex-col items-center justify-center w-full"
                  }, React.createElement("div", {
                        className: "w-full max-w-md px-2 py-16 sm:px-0"
                      }, React.createElement(React$1.Tab.Group, {
                            children: React.createElement(React$1.Tab.List, {
                                  children: (function (param) {
                                      return builds.map(function (category) {
                                                  return React.createElement(Index$Variant$Option, {
                                                              name: category
                                                            });
                                                });
                                    }),
                                  className: "flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl"
                                }),
                            onChange: (function (index) {
                                return Curry._1(setState, (function (s) {
                                              return {
                                                      build: Caml_array.get(builds, index),
                                                      platform: s.platform,
                                                      cudaVersion: s.cudaVersion
                                                    };
                                            }));
                              })
                          }), React.createElement(React$1.Tab.Group, {
                            children: React.createElement(React$1.Tab.List, {
                                  children: (function (param) {
                                      return platforms.map(function (category) {
                                                  return React.createElement(Index$Variant$Option, {
                                                              name: category
                                                            });
                                                });
                                    }),
                                  className: "my-1 flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl"
                                })
                          }), React.createElement(React$1.Tab.Group, {
                            children: null
                          }, React.createElement(React$1.Tab.List, {
                                children: (function (param) {
                                    return allCudaVersions.map(function (category) {
                                                return React.createElement(Index$Variant$Option, {
                                                            name: category
                                                          });
                                              });
                                  }),
                                className: "flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl"
                              }), React.createElement(React$1.Tab.Panels, {
                                children: (function (param) {
                                    return [
                                              1,
                                              2,
                                              3,
                                              4,
                                              5
                                            ].map(function (posts, idx) {
                                                return React.createElement(React$1.Tab.Panel, {
                                                            className: (function (param) {
                                                                return [
                                                                          "bg-white rounded-xl p-3",
                                                                          "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                                                                        ].join(" ");
                                                              }),
                                                            children: (function (param) {
                                                                var match = state.build;
                                                                var tmp;
                                                                switch (match) {
                                                                  case "Nightly" :
                                                                      tmp = "https://staging.oneflow.info/branch/master/cu101";
                                                                      break;
                                                                  case "Stable" :
                                                                      tmp = "https://release.oneflow.info";
                                                                      break;
                                                                  default:
                                                                    tmp = "[N/A]";
                                                                }
                                                                return [
                                                                          "python3 -m pip install oneflow -f",
                                                                          tmp,
                                                                          ""
                                                                        ].join(" ");
                                                              }),
                                                            key: String(idx)
                                                          });
                                              });
                                  }),
                                className: "mt-2"
                              }))))
            });
}

export {
  $$default ,
  $$default as default,
  
}
/* react Not a pure module */
