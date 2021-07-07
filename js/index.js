allCudaVersions = ['10.0', '10.1', '10.2', '11.0', '11.1', '11.2']
xlaCudaVersions = ['10.0', '10.1', '10.2', '11.0', '11.1']
document.addEventListener("alpine:init", () => {
    Alpine.data("root", () => ({
        builds: ['Stable', 'Nightly'],
        platforms: ['CUDA', 'CPU', 'CUDA-XLA'],
        packages: ['pip', 'source'],
        selected: {
            build: 'Stable',
            platform: 'CUDA',
            package: 'pip',
            cudaVersion: '10.0',
        },
        // TODO: add notice on CUDA driver
        selectedCudaVersion() {
            if (this.cudaVersions().length > 0 && !this.cudaVersions().includes(this.selected.cudaVersion)) {
                this.selected.cudaVersion = this.cudaVersions()[0]
            }
            return this.selected.cudaVersion
        },
        cudaVersions() {
            if (this.selected.platform == 'CUDA') {
                return allCudaVersions
            } else if (this.selected.platform == 'CUDA-XLA') {
                return xlaCudaVersions
            } else {
                return []
            }
        },
        platformStr() {
            if (this.selected.platform == 'CUDA') {
                replaced = this.selectedCudaVersion().replace(".", "")
                return `cu${replaced}`
            } else if (this.selected.platform == 'CUDA-XLA') {
                replaced = this.selectedCudaVersion().replace(".", "")
                return `cu${replaced}_xla`
            } else {
                return "cpu"
            }
        },
        cmd() {
            if (this.selected.build == 'Stable') {
                return `python3 -m pip install -f https://release.oneflow.info oneflow==0.4.0+${this.platformStr()} --user`
            } else if (this.selected.build == 'Nightly') {
                return `python3 -m pip install oneflow --user -f https://staging.oneflow.info/branch/master/${this.platformStr()}`
            } else {
                return "not available"
            }
        },
        buttonClass(isSelected) {
            if (isSelected) {
                return "h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-800 focus:shadow-outline hover:bg-indigo-800"
            } else {
                return "h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-500 focus:shadow-outline hover:bg-indigo-800"
            }
        }
    }));
});
