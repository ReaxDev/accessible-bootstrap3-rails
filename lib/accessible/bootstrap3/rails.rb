require "accessible/bootstrap3/rails/version"
require "accessible/bootstrap3/rails/railtie" if defined?(Rails::Railtie)

module Accessible
  module Bootstrap3
    module Rails
      class Engine < ::Rails::Engine
      end
    end
  end
end
