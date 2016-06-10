require 'json'

module Accessible
  module Bootstrap3
    module Rails
      package_info = JSON.parse(File.read(File.expand_path('../../../../../accessible-bootstrap3-package.json', __FILE__)))
      VERSION = package_info["version"]
    end
  end
end
