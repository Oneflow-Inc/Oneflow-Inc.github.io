// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import Link from "next/link";

function MainLayout$Navigation(Props) {
  return React.createElement("nav", {
              className: "p-2 h-12 flex border-b border-gray-200 justify-between items-center text-sm"
            }, React.createElement(Link, {
                  href: "/",
                  children: React.createElement("a", {
                        className: "flex items-center w-1/3"
                      }, React.createElement("span", {
                            className: "text-xl ml-2 align-middle font-semibold"
                          }, "OneFlow"))
                }), React.createElement("div", {
                  className: "flex w-2/3 justify-end"
                }, React.createElement("a", {
                      className: "px-3 font-bold",
                      href: "https://oneflow.org/",
                      target: "_blank"
                    }, "About"), React.createElement("a", {
                      className: "px-3 font-bold",
                      href: "https://docs.oneflow.org/",
                      target: "_blank"
                    }, "Docs"), React.createElement("a", {
                      className: "px-3 font-bold",
                      href: "https://github.com/Oneflow-Inc/oneflow",
                      target: "_blank"
                    }, "Github")));
}

function MainLayout(Props) {
  var children = Props.children;
  var minWidth = {
    minWidth: "20rem"
  };
  return React.createElement("div", {
              className: "flex lg:justify-center",
              style: minWidth
            }, React.createElement("div", {
                  className: "max-w-5xl w-full lg:w-3/4 text-gray-900 font-base"
                }, React.createElement(MainLayout$Navigation, {}), React.createElement("main", {
                      className: "mt-4 mx-4"
                    }, children)));
}

var make = MainLayout;

export {
  make ,
  
}
/* react Not a pure module */