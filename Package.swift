// swift-tools-version:4.0
import PackageDescription

let package = Package(
	name: "main",
	dependencies: [
		.package(url: "https://github.com/sindresorhus/is-camera-on", from: "2.0.1")
	],
	targets: [
		.target(
			name: "main",
			dependencies: [
				"IsCameraOn"
			]
		)
	]
)
