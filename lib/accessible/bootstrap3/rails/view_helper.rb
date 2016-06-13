module Accessible
  module Bootstrap3
    module Rails
      module ViewHelpers
        def wrap_abbreviations(string)
          string.enum_for(:scan, /([A-Z]{2,})/).reduce(string) do |acc, _|
            acc.gsub $1, "<abbr title='#{$1.chars.to_a.join(' ')}'>#{$1}</abbr>"
          end.html_safe
        end

        def page_header(header)
          content_for(:page_header) {wrap_abbreviations(header)}
        end
      end
    end
  end
end
