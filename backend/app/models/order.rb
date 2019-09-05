class Order < ApplicationRecord
    belongs_to: user
    has_many shoes through: selection
end
