class Shoe < ApplicationRecord
    has_many :selections
    has_many :orders, through: selection 
end
