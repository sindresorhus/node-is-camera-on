// swift-tools-version:5.5
import PackageDescription

let package = Package(
	name: "IsCameraOnCLI",
	platforms: [
		.macOS(.v10_11)
	],
	products: [
		.executable(
			name: "is-camera-on",
			targets: [
				"IsCameraOnCLI"
			]
		)
	],
	dependencies: [
		.package(
			url: "https://github.com/sindresorhus/is-camera-on",
			from: "2.0.2"
		)
	],
	targets: [
		.executableTarget(
			name: "IsCameraOnCLI",
			dependencies: [
				.product(
					name: "IsCameraOn",
					package: "is-camera-on"
				)
			]
		)
	]
)
