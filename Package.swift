// swift-tools-version:3.1
import PackageDescription

let package = Package(
	name: "main",
	dependencies: [
		.Package(url: "https://github.com/sindresorhus/is-camera-on", majorVersion: 1)
	]
)
