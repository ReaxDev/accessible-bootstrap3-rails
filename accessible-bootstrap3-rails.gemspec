# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'accessible/bootstrap3/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "accessible-bootstrap3-rails"
  spec.version       = Accessible::Bootstrap3::Rails::VERSION
  spec.authors       = ["brayhoward"]
  spec.email         = ["brandon@reax.io"]

  spec.summary       = %q{A gem to bring bootstrap3-accessibility-patches into your rails project.}
  spec.homepage      = "https://github.com/ReaxDev/accessible-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"

  spec.add_dependency "railties", "> 3.1"
end
