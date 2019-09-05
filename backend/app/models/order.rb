class Order < ApplicationRecord
    belongs_to :user
    has_many :selections
    has_many :shoes, through: :selections
end
