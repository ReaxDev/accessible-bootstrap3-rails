require_relative 'view_helper'

module Accessible
  module Bootstrap3
    module Rails
      class Railtie < ::Rails::Railtie
        initializer "accessible.bootstrap3.rails.view_helpers" do
          ActionView::Base.send :include, ViewHelpers
        end
      end
    end
  end
end