open HeadlessUI

module Hero = {
  @react.component
  let make = (~children) => <div> <div className=""> children </div> </div>
}

module Variant = {
  type build = Stable | Nightly
  type platform = CUDA(string) | CPU | CUDA_XLA(string)
  @deriving(accessors)
  type t = {build: build, platform: platform}
  module Option = {
    @react.component
    let make = (~name, ~hidden=false) =>
      <Tab
        key={name}
        className={({selected}) =>
          Js.Array.joinWith(
            " ",
            [
              `w-full py-2.5 text-sm leading-5 font-medium rounded-lg`,
              `focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60`,
              hidden ? "hidden" : "",
              selected
                ? `bg-white shadow text-blue-700 text-opacity-80`
                : `text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white`,
            ],
          )}>
        {_ => React.string(name)}
      </Tab>
  }
}
let platformPkgName = (p: Variant.platform, joiner: string) => {
  switch p {
  | Variant.CUDA(ver) => "cu" ++ Js.String.replace(".", "", ver)
  | Variant.CUDA_XLA(ver) => "cu" ++ Js.String.replace(".", "", ver) ++ joiner ++ "xla"
  | Variant.CPU => "cpu"
  }
}

module Pip = {
  module Panel = {
    @react.component
    let make = (~cmd) =>
      <Tab.Panel
        key=cmd
        className={_ =>
          Js.Array.joinWith(
            " ",
            [
              `bg-white rounded-xl p-3`,
              `focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60`,
            ],
          )}>
        {_ => React.string(cmd)}
      </Tab.Panel>
  }
}

let pipInstallCommnad = (selected: Variant.t) => {
  Js.Array.joinWith(
    " ",
    [
      "python3 -m pip install -f",
      switch selected.build {
      | Variant.Stable =>
        "https://release.oneflow.info oneflow==0.6.0+" ++ platformPkgName(selected.platform, ".")
      | Variant.Nightly =>
        "https://staging.oneflow.info/branch/master/" ++
        platformPkgName(selected.platform, "_") ++ " --pre oneflow"
      },
      "",
    ],
  )
}

type action =
  | SelectBuild(string)
  | SelectPlatform(string)
  | SelectCudaVersion(string)

type state = {selected: Variant.t}

let reducer = (state, action) =>
  switch action {
  | SelectBuild(b) =>
    let build = switch b {
    | "Stable" => Variant.Stable
    | "Nightly" => Variant.Nightly
    | _ => Variant.Stable
    }
    {selected: {...state.selected, build: build}}
  | SelectPlatform(p) =>
    let platform = switch p {
    | "CUDA" => Variant.CUDA("10.2")
    | "CUDA_XLA" => Variant.CUDA_XLA("10.1")
    | _ => Variant.CPU
    }
    {selected: {...state.selected, platform: platform}}
  | SelectCudaVersion(v) =>
    switch state.selected.platform {
    | CUDA(_) => {selected: {...state.selected, platform: CUDA(v)}}
    | CUDA_XLA(_) => {selected: {...state.selected, platform: CUDA_XLA(v)}}
    | _ => state
    }
  }

let default = () => {
  <div />
}
