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

function Index$Variant$Option(Props) {
  var name = Props.name;
  var hiddenOpt = Props.hidden;
  var hidden = hiddenOpt !== undefined ? hiddenOpt : false;
  return React.createElement(React$1.Tab, {
              className: (function (param) {
                  return [
                            "w-full py-2.5 text-sm leading-5 font-medium rounded-lg",
                            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                            hidden ? "hidden" : "",
                            param.selected ? "bg-white shadow text-blue-700 text-opacity-80" : "text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white"
                          ].join(" ");
                }),
              children: (function (param) {
                  return name;
                }),
              key: name
            });
}

function platformPlusName(p) {
  if (typeof p === "number") {
    return "cpu";
  } else if (p.TAG === /* CUDA */0) {
    return "cu" + p._0.replace(".", "");
  } else {
    return "cu" + p._0.replace(".", "") + "_xla";
  }
}

function Index$Pip$Panel(Props) {
  var cmd = Props.cmd;
  return React.createElement(React$1.Tab.Panel, {
              className: (function (param) {
                  return [
                            "bg-white rounded-xl p-3",
                            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                          ].join(" ");
                }),
              children: (function (param) {
                  return cmd;
                }),
              key: cmd
            });
}

function pipInstallCommnad(selected) {
  var match = selected.build;
  return [
            "python3 -m pip install oneflow -f",
            match ? "https://staging.oneflow.info/branch/master/" + platformPlusName(selected.platform) : "https://release.oneflow.info oneflow==0.4.0+" + platformPlusName(selected.platform),
            ""
          ].join(" ");
}

function reducer(state, action) {
  switch (action.TAG | 0) {
    case /* SelectBuild */0 :
        var build;
        switch (action._0) {
          case "Nightly" :
              build = /* Nightly */1;
              break;
          case "Stable" :
              build = /* Stable */0;
              break;
          default:
            build = /* Stable */0;
        }
        var init = state.selected;
        return {
                selected: {
                  build: build,
                  platform: init.platform
                }
              };
    case /* SelectPlatform */1 :
        var platform;
        switch (action._0) {
          case "CUDA" :
              platform = {
                TAG: /* CUDA */0,
                _0: "10.2"
              };
              break;
          case "CUDA_XLA" :
              platform = {
                TAG: /* CUDA_XLA */1,
                _0: "10.1"
              };
              break;
          default:
            platform = /* CPU */0;
        }
        var init$1 = state.selected;
        return {
                selected: {
                  build: init$1.build,
                  platform: platform
                }
              };
    case /* SelectCudaVersion */2 :
        var v = action._0;
        var match = state.selected.platform;
        if (typeof match === "number") {
          return state;
        }
        if (match.TAG === /* CUDA */0) {
          var init$2 = state.selected;
          return {
                  selected: {
                    build: init$2.build,
                    platform: {
                      TAG: /* CUDA */0,
                      _0: v
                    }
                  }
                };
        }
        var init$3 = state.selected;
        return {
                selected: {
                  build: init$3.build,
                  platform: {
                    TAG: /* CUDA_XLA */1,
                    _0: v
                  }
                }
              };
    
  }
}

function $$default(param) {
  var match = React.useReducer(reducer, {
        selected: {
          build: /* Stable */0,
          platform: {
            TAG: /* CUDA */0,
            _0: "10.2"
          }
        }
      });
  var dispatch = match[1];
  var state = match[0];
  var builds = [
    "Stable",
    "Nightly"
  ];
  var platforms = [
    "CUDA",
    "CUDA_XLA",
    "CPU"
  ];
  var cudaVersions = [
    "10.0",
    "10.1",
    "10.2",
    "11.0",
    "11.1",
    "11.2"
  ];
  var xlaCudaVersions = [
    "10.0",
    "10.1",
    "10.2",
    "11.0",
    "11.1"
  ];
  var defaultIndexOfCudaVersion = function (state) {
    var match = state.selected.platform;
    if (typeof match === "number") {
      return 0;
    } else if (match.TAG === /* CUDA */0) {
      return cudaVersions.indexOf("10.2");
    } else {
      return xlaCudaVersions.indexOf("10.1");
    }
  };
  var availableCudaVersions = function (state) {
    var match = state.selected.platform;
    if (typeof match === "number") {
      return [];
    } else if (match.TAG === /* CUDA */0) {
      return cudaVersions;
    } else {
      return xlaCudaVersions;
    }
  };
  var match$1 = state.selected.platform;
  return React.createElement(Index$Hero, {
              children: React.createElement("div", {
                    className: "rounded-xl overflow-hidden bg-gradient-to-r from-sky-400 to-blue-600 flex flex-col items-center justify-center w-full"
                  }, React.createElement("div", {
                        className: "w-full max-w-md px-2 py-16 sm:px-0"
                      }, React.createElement(React$1.Tab.Group, {
                            children: React.createElement(React$1.Tab.List, {
                                  children: (function (param) {
                                      return builds.map(function (b) {
                                                  return React.createElement(Index$Variant$Option, {
                                                              name: b,
                                                              key: b
                                                            });
                                                });
                                    }),
                                  className: "flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl"
                                }),
                            onChange: (function (index) {
                                return Curry._1(dispatch, {
                                            TAG: /* SelectBuild */0,
                                            _0: Caml_array.get(builds, index)
                                          });
                              })
                          }), React.createElement(React$1.Tab.Group, {
                            children: React.createElement(React$1.Tab.List, {
                                  children: (function (param) {
                                      return platforms.map(function (v) {
                                                  return React.createElement(Index$Variant$Option, {
                                                              name: v,
                                                              key: v
                                                            });
                                                });
                                    }),
                                  className: "my-1 flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl"
                                }),
                            onChange: (function (index) {
                                return Curry._1(dispatch, {
                                            TAG: /* SelectPlatform */1,
                                            _0: Caml_array.get(platforms, index)
                                          });
                              })
                          }), React.createElement(React$1.Tab.Group, {
                            children: null,
                            onChange: (function (index) {
                                return Curry._1(dispatch, {
                                            TAG: /* SelectCudaVersion */2,
                                            _0: Caml_array.get(cudaVersions, index)
                                          });
                              }),
                            defaultIndex: defaultIndexOfCudaVersion(state),
                            key: String(availableCudaVersions(state).length)
                          }, React.createElement(React$1.Tab.List, {
                                children: (function (param) {
                                    return cudaVersions.map(function (v) {
                                                var match = state.selected.platform;
                                                var tmp;
                                                tmp = typeof match === "number" || match.TAG === /* CUDA */0 || v !== "11.2" ? false : true;
                                                return React.createElement(Index$Variant$Option, {
                                                            name: v,
                                                            hidden: tmp,
                                                            key: v
                                                          });
                                              });
                                  }),
                                className: "my-1 flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl" + (
                                  typeof match$1 === "number" ? " hidden" : ""
                                ),
                                key: String(availableCudaVersions(state).length)
                              }), React.createElement(React$1.Tab.Panels, {
                                children: (function (param) {
                                    return cudaVersions.map(function (v, param) {
                                                return React.createElement(Index$Pip$Panel, {
                                                            cmd: pipInstallCommnad(state.selected),
                                                            key: v
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
